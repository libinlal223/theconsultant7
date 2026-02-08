
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

/**
 * Hook to optimize animations based on visibility.
 * Returns a ref to attach to the element and a boolean indicating if animations should run.
 * @param {Object} options - IntersectionObserver options
 * @returns {Array} [ref, shouldAnimate, isInView]
 */
export const useOptimizedAnimation = (options = { margin: "50px" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: false,
        amount: 0.1,
        ...options
    });

    // Additional logic for page visibility (tab switching)
    const [isPageVisible, setIsPageVisible] = useState(true);

    useEffect(() => {
        const handleVisibilityChange = () => {
            setIsPageVisible(document.visibilityState === 'visible');
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);
        return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
    }, []);

    const shouldAnimate = isInView && isPageVisible;

    return [ref, shouldAnimate, isInView];
};
