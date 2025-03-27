Thought for 9 seconds### Fixing the Image Hover Animation Issue

I've identified the issue with your DoubleImages component. When hovering over reversed images for the first time, there's a jerking motion because the initial state doesn't match the intended starting position. Let's fix this and explain the solution in detail.

```typescriptreact project="double_images_fix"
...
```

## What Was Causing the Issue

The main problems in the original code were:

1. **Inconsistent Initial State**: The CSS in `DoubleWrapper` set initial widths (66.66% for first, 33.33% for second), but when `reversed` was true, the JavaScript variables tried to swap them without actually setting the initial DOM element widths.
2. **Animation Frame Management**: The animation frame was never properly canceled, which could lead to multiple animations running simultaneously.
3. **No Initial Width Setting**: The component didn't set the initial widths of the images via JavaScript on mount, only on mouse move.

## Key Fixes Implemented

1. **Added useEffect for Initialization**:

1. Now the component sets the correct initial widths based on the `reversed` prop when it mounts
1. This prevents the jerking motion on first hover

1. **Better Animation State Management**:

1. Using a ref to store animation state prevents unnecessary re-renders
1. Properly cleaning up animation frames on component unmount

1. **Added Mouse Leave Handler**:

1. Resets to the initial state when the mouse leaves the component
1. Ensures consistent behavior for subsequent interactions

1. **Added CSS Transition as Fallback**:

1. A subtle CSS transition helps smooth out any remaining abrupt changes
1. This provides a better user experience during the initial render

1. **Improved Tech Stack Display**:

1. Added proper styling for the tech stack items
1. Implemented as a flex container with individual styled tags

## How the Animation Works

1. **Initial Setup**:

1. When the component mounts, it sets the initial widths based on the `reversed` prop
1. For normal mode: first image is 66.66%, second is 33.33%
1. For reversed mode: first image is 33.33%, second is 66.66%

1. **Mouse Movement**:

1. As the mouse moves, we calculate its position as a percentage of the window width
1. This percentage is used to determine how much to adjust the widths

1. **Animation Loop**:

1. The `animate` function uses easing to smoothly transition between states
1. It calculates a new percentage based on the difference between the target and current positions
1. The widths are updated based on this percentage

1. **Reset on Mouse Leave**:

1. When the mouse leaves, we reset to the initial state
1. This ensures consistent behavior for subsequent interactions

This solution maintains the same visual effect and functionality while fixing the jerking issue when hovering over reversed images for the first time.
