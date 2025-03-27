Let me provide a more compatible version of the solution that will work with the preview.

```typescriptreact project="double_images_fix"
...
```

## Explanation of the Fix

The issue with the original component was that when hovering over reversed images for the first time, there was a jerking motion as the images grew to fill their intended width. Here's what was causing the problem and how I fixed it:

### The Problem

1. **Inconsistent Initial State**:

1. In the original code, the CSS set initial widths (66.66% for first, 33.33% for second)
1. For reversed images, the JavaScript variables tried to swap them, but didn't actually set the DOM element widths on mount
1. This created a mismatch between what the CSS said and what the JavaScript expected

1. **Animation Frame Management**:

1. The animation frame wasn't properly canceled, potentially causing multiple animations to run simultaneously
1. This could lead to performance issues and jerky animations

### The Solution

1. **Initialize Properly with useEffect**:

```javascriptreact
useEffect(() => {
  if (firstImageRef.current && secondImageRef.current) {
    const { currentXPercent } = animationState.current;

    // Apply initial widths based on reversed prop
    firstImageRef.current.style.width = `${66.66 - currentXPercent * 0.33}%`;
    secondImageRef.current.style.width = `${33.33 + currentXPercent * 0.33}%`;
  }

  // Clean up animation frame on unmount
  return () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  };
}, [reversed]);
```

This ensures the DOM elements have the correct initial widths as soon as the component mounts, preventing the jerking motion.

2. **Better Animation State Management**:

1. Using a ref to store animation state prevents unnecessary re-renders
1. The animation state is now centralized in one place:

```javascriptreact
const animationState = useRef({
  xPercent: initialXPercent,
  currentXPercent: initialXPercent,
  speed: 0.2
});
```

3. **Added Mouse Leave Handler**:

```javascriptreact
function handleMouseLeave() {
  // Reset to initial state when mouse leaves
  animationState.current.xPercent = initialXPercent;
}
```

This ensures the component returns to its initial state when the mouse leaves.

4. **CSS Transition as Fallback**:

```javascriptreact
<div ref={firstImageRef} className="transition-width duration-100 ease-out">
```

A subtle CSS transition helps smooth out any remaining abrupt changes.

The key insight is that we need to ensure the DOM elements have the correct initial widths as soon as the component mounts, and we need to properly manage the animation state to prevent jerky movements. By addressing these issues, we've created a smooth, responsive hover effect that works correctly for both normal and reversed layouts.
