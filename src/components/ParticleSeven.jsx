import React, { useEffect, useRef } from 'react';

const ParticleSeven = ({ className, shiftX = 0, shiftY = 0, fontSize: customFontSize, hoverRadius = 300, enableScrollBehavior = false }) => {
    const canvasRef = useRef(null);
    const inViewRef = useRef(false);
    // We use a ref for hover interaction to avoid closure staleness in animation loop
    const isHoveringRef = useRef(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        let animationFrameId;
        let particles = [];
        let resizeTimeout;
        let pollingInterval;

        // Formatting configuration
        const font = 'bold 400px "Anton", sans-serif';
        const particleDensity = 7;
        const particleSize = 1.6;
        const colors = ['#D4AF37', '#F9DF74', '#B4941F'];

        let targetPoints = [];
        let canvasRect = null;

        const checkHover = (e) => {
            // Use offsetX/Y for robust coordinate tracking independent of scroll
            const mouseX = e.offsetX;
            const mouseY = e.offsetY;

            // Simple hit detection optimization
            if (!inViewRef.current && enableScrollBehavior) return; // If hidden by scroll, don't calculate hover

            let hit = false;
            const threshold = 50;
            const thresholdSq = threshold * threshold;

            // Optimization: check fewer points
            const step = 5;
            for (let i = 0; i < targetPoints.length; i += step) {
                const pt = targetPoints[i];
                const dx = mouseX - pt.x;
                const dy = mouseY - pt.y;
                if (dx * dx + dy * dy < thresholdSq) {
                    hit = true;
                    break;
                }
            }
            isHoveringRef.current = hit;
        };

        const handleMouseLeave = () => { isHoveringRef.current = false; };

        canvas.addEventListener('mousemove', checkHover);
        canvas.addEventListener('mouseleave', handleMouseLeave);

        // Visibility
        let observer;
        if (enableScrollBehavior) {
            observer = new IntersectionObserver(([entry]) => {
                inViewRef.current = entry.isIntersecting;
            }, { threshold: 0 });
            observer.observe(canvas);
        } else {
            inViewRef.current = true;
        }

        // Particle Class remains same
        class Particle {
            constructor(x, y, tx, ty) {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.tx = tx;
                this.ty = ty;
                this.vx = (Math.random() - 0.5) * 15;
                this.vy = (Math.random() - 0.5) * 15;
                this.color = colors[Math.floor(Math.random() * colors.length)];
                this.size = Math.random() * particleSize + 0.5;
                this.ease = Math.random() * 0.02 + 0.02;
            }

            update() {
                // Scatter if:
                // 1. Scroll behavior is enabled AND it's not in view (waiting to form)
                // 2. OR User is hovering over it (interaction)
                let shouldScatter = (enableScrollBehavior && !inViewRef.current) || isHoveringRef.current;

                if (shouldScatter) {
                    this.x += this.vx;
                    this.y += this.vy;
                    if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                    if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
                } else {
                    const dx = this.tx - this.x;
                    const dy = this.ty - this.y;
                    this.x += dx * this.ease;
                    this.y += dy * this.ease;
                    if (Math.abs(dx) < 1 && Math.abs(dy) < 1) {
                        this.x += (Math.random() - 0.5) * 0.5;
                        this.y += (Math.random() - 0.5) * 0.5;
                    }
                }
            }

            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const sampleTextPoints = () => {
            if (canvas.width === 0 || canvas.height === 0) return [];
            const virtCanvas = document.createElement('canvas');
            const virtCtx = virtCanvas.getContext('2d');
            virtCanvas.width = canvas.width;
            virtCanvas.height = canvas.height;
            virtCtx.fillStyle = 'white';
            virtCtx.textAlign = 'center';
            virtCtx.textBaseline = 'middle';
            const fontSize = customFontSize || Math.min(canvas.width * 0.8, canvas.height * 0.9);
            // Fallback font stack
            virtCtx.font = `bold ${fontSize}px "Anton", "Arial", sans-serif`;
            virtCtx.fillText('7', (virtCanvas.width / 2) + shiftX, (virtCanvas.height / 2) + shiftY);

            const imageData = virtCtx.getImageData(0, 0, virtCanvas.width, virtCanvas.height);
            const { width, height, data } = imageData;
            const points = [];
            for (let y = 0; y < height; y += particleDensity) {
                for (let x = 0; x < width; x += particleDensity) {
                    if (data[(y * width + x) * 4 + 3] > 128) points.push({ x, y });
                }
            }
            return points;
        };

        const init = () => {
            if (canvas.width === 0 || canvas.height === 0) return false;
            const points = sampleTextPoints();
            if (points.length === 0) return false;

            targetPoints = points;
            particles = [];
            targetPoints.forEach(pt => {
                if (Math.random() > 0.3) particles.push(new Particle(0, 0, pt.x, pt.y));
            });
            return true;
        };

        const animate = () => {
            if (canvas.width > 0 && canvas.height > 0) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                particles.forEach(p => { p.update(); p.draw(); });
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        // AGGRESSIVE RESIZE & INIT LOGIC
        const attemptInit = () => {
            const parent = canvas.parentElement;
            let w = parent ? parent.clientWidth : window.innerWidth;
            let h = parent ? parent.clientHeight : window.innerHeight;

            // Failsafe: if parent is 0, try window
            if (w === 0) w = window.innerWidth;
            if (h === 0) h = window.innerHeight;

            if (w > 0 && h > 0) {
                // Only re-init if size changed or not initialized
                if (canvas.width !== w || canvas.height !== h || particles.length === 0) {
                    canvas.width = w;
                    canvas.height = h;
                    canvasRect = canvas.getBoundingClientRect();

                    init();
                }
            }
        };

        // 1. Immediate try
        attemptInit();
        animate();

        // 2. Poll every 200ms for 5 seconds to catch delayed layout/font loads
        // This is the "hammer" to fix the "requires reload" bug
        let attempts = 0;
        pollingInterval = setInterval(() => {
            attempts++;
            attemptInit();
            if (attempts > 25 && particles.length > 0) clearInterval(pollingInterval); // Stop after 5s if successful
        }, 200);

        // 3. Resize Observer (Standard)
        const resizeObserver = new ResizeObserver(() => {
            attemptInit();
        });
        if (canvas.parentElement) resizeObserver.observe(canvas.parentElement);

        return () => {
            resizeObserver.disconnect();
            clearInterval(pollingInterval);
            canvas.removeEventListener('mousemove', checkHover);
            canvas.removeEventListener('mouseleave', handleMouseLeave);
            if (observer) observer.disconnect();
            cancelAnimationFrame(animationFrameId);
        };
    }, [shiftX, shiftY, customFontSize, enableScrollBehavior]);

    return (
        <canvas
            ref={canvasRef}
            className={`w-full h-full block ${className}`}
        />
    );
};

export default ParticleSeven;