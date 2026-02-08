
/**
 * Utility to detect device capabilities for performance tuning.
 */

// Simple heuristic for low-end devices
export const isLowEndDevice = () => {
    // Check for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return true;
    }

    // Check device memory (if available) - < 4GB is considered low end for heavy animations
    if (navigator.deviceMemory && navigator.deviceMemory < 4) {
        return true;
    }

    // Check logical cores - <= 4 often implies older/mobile device
    if (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4) {
        return true;
    }

    // Check for mobile user agent (rough check for mobile throttling)
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    return isMobile;
};

// Hook to get performance tier
import { useState, useEffect } from 'react';

export const usePerformanceTier = () => {
    const [tier, setTier] = useState('high'); // 'high', 'low'

    useEffect(() => {
        const checkPerformance = () => {
            if (isLowEndDevice()) {
                setTier('low');
            } else {
                setTier('high');
            }
        };

        checkPerformance();
    }, []);

    return tier;
};
