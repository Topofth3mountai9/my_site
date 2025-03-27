import { useGSAP } from "@gsap/react";
import { useMotionValue } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export const useGsapPPinnedSectionProgress = (
  trigger_selector,
  start,
  end = "+=1000",
  scrub = true
) => {
  const progress = useMotionValue(0);

  useGSAP(() => {
    const trigger = ScrollTrigger.create({
      trigger: trigger_selector,
      start,
      end,
      pin: true,
      scrub,
      onUpdate: (self) => {
        progress.set(self.progress);
      },
    });
  }, [trigger_selector, start, end, scrub, progress]);

  return progress;
};
