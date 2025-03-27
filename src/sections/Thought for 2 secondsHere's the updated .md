Thought for 2 secondsHere's the updated testimonials section with all 12 testimonials from your data:

```typescriptreact project="testimonials-section"
...
```

## Enhancements for All 12 Testimonials

I've updated the component to use all 12 testimonials from your data and made several enhancements to ensure the parallax effect is more noticeable:

### 1. Improved Parallax Effect

- **More Pronounced Speed Differences**:

```javascriptreact
const y1 = useTransform(scrollYProgress, [0, 1], [0, height * 0.6]);  // Increased from 0.5
const y2 = useTransform(scrollYProgress, [0, 1], [0, height * -0.4]); // Increased from -0.3
const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 0.3]);  // Increased from 0.2
const y4 = useTransform(scrollYProgress, [0, 1], [0, height * -0.5]); // Increased from -0.4
```

- The larger multipliers create more noticeable movement differences between columns



- **Increased Container Height**:

```javascriptreact
const ContentWrapper = styled.div`
  position: relative;
  min-height: 200vh; /* Increased from 150vh */
  // ...
`;
```

- This gives more room for the parallax effect to be visible





### 2. Handling Long Content

Since some of your testimonials are quite long, I've added:

- **Card Height Limits**:

```javascriptreact
const CardWrapper = styled.div`
  // ...
  max-height: 400px;
  overflow-y: auto;
`;
```

- Prevents very tall cards from dominating the view



- **Custom Scrollbars**:

```javascriptreact
&::-webkit-scrollbar {
  width: 6px;
}

&::-webkit-scrollbar-track {
  background: #f1f1f1;
}
// ...
```

- Makes scrolling within cards more elegant



- **Text Truncation with Expand on Hover**:

```javascriptreact
const TestimonyText = styled.p`
  // ...
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  
  &:hover {
    -webkit-line-clamp: unset;
  }
`;
```

- Shows a preview of long testimonials with option to see full text on hover





### 3. Column Organization

- Each column contains exactly 3 testimonials (12 total divided into 4 columns)
- The columns are evenly distributed with proper spacing
- Each column has a different starting position and movement speed


### How the Parallax Works

The parallax effect is now more pronounced with these changes:

1. **Column 1**: Moves DOWN at 60% of viewport height (fastest downward)
2. **Column 2**: Moves UP at 40% of viewport height (medium upward)
3. **Column 3**: Moves DOWN at 30% of viewport height (slower downward)
4. **Column 4**: Moves UP at 50% of viewport height (fastest upward)


This creates a dynamic "wave" effect as you scroll, with columns moving in opposite directions at different speeds. The staggered starting positions (set with `top: -20%`, `top: -40%`, etc.) enhance this effect by ensuring the columns are offset from each other even before scrolling begins.

The result is a visually engaging testimonial section where each column moves independently, creating depth and visual interest that draws attention to your client testimonials.