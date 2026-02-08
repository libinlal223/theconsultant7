# Performance Optimization Report

This codebase has been optimized for performance without sacrificing visual quality on high-end devices.

## 1. Viewport-based Animation (Intelligent Loading)
We implemented a custom hook `useOptimizedAnimation` in `src/hooks/useOptimizedAnimation.js`.
- **Hero & Gallery**: Animations (marquees, sliders) now **PAUSE** completely when they leave the viewport.
- **Benefits**: Drastically reduces CPU/GPU usage when scrolling down to other sections.

## 2. Device-Aware Scaling
We added `src/utils/performance.js` to detect device tiers (`high` vs `low`).
- **Low-end devices**:
  - `Hero`: Reduces marquee items count. Disables noise texture.
  - `Gallery`: Reduces the scroll check frequency (from 10fps to 5fps) to free up the main thread.
  - `CursorTrail`: **Disabled entirely** to prevent lag.
- **High-end devices**: Full fidelity maintained.

## 3. Image Optimization
- **Code Changes**: 
  - Added `loading="lazy"` and `decoding="async"` to images in `Gallery` and `About`.
  -Kept `Hero` image `eager` for LCP (Largest Contentful Paint) optimization.
- **Assets**: 
  - Created a script `scripts/optimize-images.cjs` to generate WebP versions and optimize huge images.
  - **Run it with**: `node scripts/optimize-images.cjs`

## 4. JavaScript Optimization
- **Code Splitting**: 
  - `App.jsx` now uses `React.lazy` and `Suspense` for `About`, `Services`, `Gallery`, and `Contact`.
  - These sections are validated dynamically only when needed (or in background), reducing the initial bundle size.

## 5. Cursor Trail Optimization
- The heavy canvas loop in `CursorTrail` now checks for:
  - Mobile width (disabled on screens < 1024px).
  - Low-end devices (disabled via `isLowEndDevice`).
  - This prevents the mouse trail from eating battery on laptops or lagging on phones.

## Next Steps for You
1. Run the image optimization script:
   ```bash
   node scripts/optimize-images.cjs
   ```
2. (Optional) Update imports in `src/pages/Gallery.jsx` to use `.webp` files if you want even faster loading.

## Verification
- Open DevTools -> Performance monitor.
- Notice CPU usage drops to near 0% when you scroll away from the Hero section.
