Thought for 2 secondsLet me recreate the solution using styled-components to match your original code style:

```typescriptreact project="double_images_fix"
...
```

## Detailed Explanation of the Fix

I've recreated your component using styled-components while fixing the jerking issue. Here's what was causing the problem and how I fixed it:

### The Problem

1. **Inconsistent Initial State**:
   In your original code, there was a mismatch between the CSS and JavaScript states:

```javascriptreact
// CSS set these initial widths
&:nth-of-type(1) {
  width: 66.66%;
}
&:nth-of-type(2) {
  width: 33.33%;
}

// But JavaScript expected different values for reversed cases
let x_percent = !reversed ? 100 : 0;
let current_x_percent = !reversed ? 100 : 0;
```

When `reversed` was true, the JavaScript expected the widths to be swapped, but the CSS still had the original values. This caused the jerking motion on first hover.

2. **Animation Frame Management**:
   The animation frame wasn't properly managed:

```javascriptreact
// This was commented out in your original code
// if (Math.round(current_x_percent) == Math.round(x_percent)) {
//   cancelAnimationFrame(request_animation_frame_id);
//   request_animation_frame_id = null;
// } else {
//   requestAnimationFrame(animate);
// }
requestAnimationFrame(animate);
```

This could lead to multiple animations running simultaneously and cause performance issues.

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

```javascriptreact
const animationState = useRef({
  xPercent: initialXPercent,
  currentXPercent: initialXPercent,
  speed: 0.2
});
```

Using a ref to store animation state prevents unnecessary re-renders and centralizes the animation state.

3. **Added Mouse Leave Handler**:

```javascriptreact
function handleMouseLeave() {
  // Reset to initial state when mouse leaves
  animationState.current.xPercent = initialXPercent;
}
```

This ensures the component returns to its initial state when the mouse leaves.

4. **CSS Transition as Fallback**:

```css
.image_and_text_container {
  /* Add a subtle transition for smoother initial state */
  transition: width 0.1s ease-out;
}
```

A subtle CSS transition helps smooth out any remaining abrupt changes.

5. **Tech Stack Display**:

```javascriptreact
<div className="tech_stack">
  {second.tech_stack.map((tech, index) => (
    <span key={index} className="tech_item">{tech}</span>
  ))}
</div>
```

I've added proper styling for the tech stack items as requested in your original code.

### How It Works Now

1. When the component mounts, it immediately sets the correct initial widths based on the `reversed` prop
2. As the mouse moves, the animation smoothly transitions between states
3. When the mouse leaves, it resets to the initial state
4. The subtle CSS transition helps smooth out any remaining abrupt changes

This solution maintains your original styling and functionality while fixing the jerking issue when hovering over reversed images for the first time.
