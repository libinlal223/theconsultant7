import React, { useEffect, useRef } from 'react';
import { isLowEndDevice } from '../utils/performance';

const CursorTrail = () => {
    // Optimization: Disable entirely on low-end devices
    if (isLowEndDevice()) return null;

    const canvasRef = useRef(null);
    const pointsRef = useRef([]);
    const cursorRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        // Double check for mobile width to avoid running JS loop unnecessary
        if (window.innerWidth < 1024) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const handleMouseMove = (e) => {
            cursorRef.current = { x: e.clientX, y: e.clientY };
        };

        const handleTouchMove = (e) => {
            if (e.touches.length > 0) {
                const touch = e.touches[0];
                cursorRef.current = { x: touch.clientX, y: touch.clientY };
            }
        };

        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('mousemove', handleMouseMove);
        resizeCanvas();

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Add new point
            pointsRef.current.push({
                x: cursorRef.current.x,
                y: cursorRef.current.y,
                age: 0
            });

            // Limit history
            if (pointsRef.current.length > 30) {
                pointsRef.current.shift();
            }

            // Draw trail
            ctx.beginPath();
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';

            for (let i = 0; i < pointsRef.current.length - 1; i++) {
                const pt = pointsRef.current[i];
                const nextPt = pointsRef.current[i + 1];

                // Increase age
                pt.age++;

                // Calculate opacity based on age (newer = opaque, older = width/opacity fade)
                const ratio = i / pointsRef.current.length;

                ctx.beginPath();
                ctx.moveTo(pt.x, pt.y);
                ctx.lineTo(nextPt.x, nextPt.y);

                // Gold color with fading opacity
                ctx.strokeStyle = `rgba(212, 175, 55, ${ratio})`;
                ctx.lineWidth = ratio * 8; // Tapering width
                ctx.stroke();
            }

            // Draw head glow
            const lastPt = pointsRef.current[pointsRef.current.length - 1];
            if (lastPt) {
                ctx.beginPath();
                ctx.arc(lastPt.x, lastPt.y, 4, 0, Math.PI * 2);
                ctx.fillStyle = '#D4AF37';
                ctx.fill();

                // Outer glow
                ctx.shadowBlur = 15;
                ctx.shadowColor = '#D4AF37';
            } else {
                ctx.shadowBlur = 0;
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchmove', handleTouchMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="hidden lg:block fixed inset-0 pointer-events-none z-[9999]"
        />
    );
};

export default CursorTrail;
