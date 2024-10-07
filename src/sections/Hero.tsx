"use client";

import { Button } from "@/components/Button";
import starsBg from "@/assets/stars.png";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

export const Hero = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );

  return (
    <motion.section
      ref={sectionRef}
      className="h-[492px] md:h-[800px] flex items-center overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
      style={{
        backgroundImage: `url(${starsBg.src})`,
        backgroundPositionY,
      }}
      animate={{
        backgroundPositionX: starsBg.width,
      }}
      transition={{
        repeat: Infinity,
        ease: "linear",
        duration: 120,
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgba(0,131,164,.5)_15%,rgb(14,0,36,.5)_78%,transparent)]" />
      {/* Start Planet */}
      <div className="absolute size-64 md:size-96 bg-[rgba(0,131,164,1)] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgba(0,131,164,.5)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgba(255,255,255,.5),-20px_-20px_80px_rgba(255,255,255,.1),0_0_50px_rgba(0,131,164,1)]" />
      {/* End Planet */}

      {/* Start Ring 1 */}
      <motion.div
        style={{
          translateY: "-50%",
          translateX: "-50%",
        }}
        animate={{
          rotate: "1turn",
        }}
        transition={{
          repeat: Infinity,
          duration: 60,
          ease: "linear",
        }}
        className="absolute size-[344px] md:size-[580px] opacity-20 border border-white rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="absolute size-2 top-1/2 left-0 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute size-2 top-0 left-1/2 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute size-5 top-1/2 left-full border border-white inline-flex items-center justify-center rounded-full -translate-x-1/2 -translate-y-1/2">
          <div className="size-2 bg-white rounded-full" />
        </div>
      </motion.div>
      {/* End Ring 1 */}
      {/* Start Ring 2 */}
      <motion.div
        animate={{
          rotate: "-1turn",
        }}
        transition={{
          repeat: Infinity,
          duration: 60,
          ease: "linear",
        }}
        style={{
          translateY: "-50%",
          translateX: "-50%",
        }}
        className="absolute size-[444px] md:size-[780px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed"
      ></motion.div>
      {/* End Ring 2 */}
      {/* Start Ring 3 */}
      <motion.div
        animate={{
          rotate: "1turn",
        }}
        transition={{
          repeat: Infinity,
          duration: 90,
          ease: "linear",
        }}
        style={{
          translateY: "-50%",
          translateX: "-50%",
        }}
        className="absolute size-[544px] md:size-[980px] rounded-full opacity-20 border border-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="absolute size-2 top-1/2 left-0 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute size-2 top-1/2 left-full bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
      </motion.div>
      {/* End Ring 3 */}
      <div className="container relative mt-16">
        <h1 className="text-8xl md:text-[168px] md:leading-none font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgba(0,131,164,.5))] text-transparent bg-clip-text text-center">
          Alia AI
        </h1>
        <p className="text-lg md:text-xl text-white/70 mt-5 text-center max-w-xl mx-auto">
          Streamline document review, legal research, and more, with cutting-edge AI tailored for law firms.
        </p>
        <div className="flex justify-center mt-5">
          <Button>Get Started</Button>
        </div>
      </div>
    </motion.section>
  );
};
