Ahh! Gotcha — you want to use `useTransform` with a scroll-based `MotionValue` — but `scrollYProgress` from `useScroll` doesn’t work inside a GSAP `pin` because the DOM flow is altered.

**Solution:**  
✅ You can "fake" a `MotionValue` from GSAP’s `ScrollTrigger` and still use `useTransform` by creating a `motionValue` yourself and updating it inside the `onUpdate` callback.

---

### ✅ Full Example: GSAP pinned section progress → Framer Motion `motionValue` → `useTransform`

```tsx
import { useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GsapPinnedWithFramerProgress = () => {
  const scrollProgress = useMotionValue(0); // Create a motion value

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: ".pinned-section",
      start: "top top",
      end: "+=1000", // adjust to your desired pinned length
      pin: true,
      scrub: true,
      onUpdate: (self) => {
        scrollProgress.set(self.progress); // Update motion value directly
      },
    });

    return () => trigger.kill();
  }, [scrollProgress]);

  // Now you can use useTransform just like you would with scrollYProgress
  const scale = useTransform(scrollProgress, [0, 1], [1, 1.5]);
  const opacity = useTransform(scrollProgress, [0, 1], [1, 0]);

  return (
    <div className="h-[200vh]">
      <motion.section
        className="pinned-section h-screen bg-blue-600 flex items-center justify-center"
        style={{ scale, opacity }}
      >
        <motion.h1 className="text-white text-5xl">
          Scroll Progress: {scrollProgress.get().toFixed(2)}
        </motion.h1>
      </motion.section>
    </div>
  );
};

export default GsapPinnedWithFramerProgress;
```

---

### ✅ Why this works:

- `scrollProgress` is a Framer `motionValue` that you control by syncing it with GSAP’s ScrollTrigger progress.
- Then you can do anything you’d normally do with `scrollYProgress`:  
   ➡️ `useTransform(scrollProgress, [0, 1], [startVal, endVal])`  
   ➡️ `scrollProgress.get()` if you need it manually  
   ➡️ Animate scale, opacity, translate, rotation, anything!

---

### ✅ Quick sanity check:

- `useScroll().scrollYProgress` won't reflect progress inside pinned GSAP sections, because that uses document flow.
- GSAP `ScrollTrigger` manages pinned positioning internally.
- So the `onUpdate` callback gives you exactly the 0–1 progress you need to turn into a Framer Motion value.

---

### Want me to show how to combine this with Locomotive Scroll or make a reusable hook for this pattern? 😎
