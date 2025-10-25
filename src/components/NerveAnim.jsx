import React, { forwardRef, useRef, useEffect, useId, useState } from "react";
import { motion } from "framer-motion";
import RotatingText from "./RotatingText";

// Utility function for class names
const cn = (...classes) => classes.filter(Boolean).join(" ");

// AnimatedBeam component
const AnimatedBeam = ({
  className,
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false,
  duration = Math.random() * 3 + 4,
  delay = 0,
  pathColor = "gray",
  pathWidth = 2,
  pathOpacity = 0.2,
  gradientStartColor = "white",
  gradientStopColor = "white",
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
  dotted = false,
  dotSpacing = 6,
}) => {
  const id = useId();
  const [pathD, setPathD] = useState("");
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });
  const strokeDasharray = dotted ? `${dotSpacing} ${dotSpacing}` : "none";
  const gradientCoordinates = reverse
    ? {
        x1: ["90%", "-10%", "90%"],
        x2: ["100%", "0%", "100%"],
        y1: ["0%", "0%", "0%"],
        y2: ["0%", "0%", "0%"],
      }
    : {
        x1: ["10%", "110%", "10%"],
        x2: ["0%", "100%", "0%"],
        y1: ["0%", "0%", "0%"],
        y2: ["0%", "0%", "0%"],
      };

  useEffect(() => {
    const updatePath = () => {
      if (containerRef.current && fromRef.current && toRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const rectA = fromRef.current.getBoundingClientRect();
        const rectB = toRef.current.getBoundingClientRect();

        const svgWidth = containerRect.width;
        const svgHeight = containerRect.height;
        setSvgDimensions({ width: svgWidth, height: svgHeight });

        const startX = rectA.left - containerRect.left + rectA.width / 2 + startXOffset;
        const startY = rectA.top - containerRect.top + rectA.height / 2 + startYOffset;
        const endX = rectB.left - containerRect.left + rectB.width / 2 + endXOffset;
        const endY = rectB.top - containerRect.top + rectB.height / 2 + endYOffset;

        const controlY = startY - curvature;
        const d = `M ${startX},${startY} Q ${(startX + endX) / 2},${controlY} ${endX},${endY}`;
        setPathD(d);
      }
    };

    const resizeObserver = new ResizeObserver(() => {
      updatePath();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    updatePath();

    return () => {
      resizeObserver.disconnect();
    };
  }, [containerRef, fromRef, toRef, curvature, startXOffset, startYOffset, endXOffset, endYOffset]);

  return (
    <svg
      fill="none"
      width={svgDimensions.width}
      height={svgDimensions.height}
      xmlns="http://www.w3.org/2000/svg"
      className={cn("pointer-events-none absolute left-0 top-0 transform-gpu stroke-1", className)}
      viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
    >
      <path
        d={pathD}
        stroke={pathColor}
        strokeWidth={pathWidth}
        strokeOpacity={pathOpacity}
        strokeLinecap="round"
        strokeDasharray={strokeDasharray}
      />
      <motion.path
        d={pathD}
        stroke={`url(#${id})`}
        strokeLinecap="round"
        strokeDasharray={strokeDasharray}
        initial={{
          strokeWidth: pathWidth,
          strokeOpacity: 0,
        }}
        animate={{
          strokeWidth: pathWidth * 0.5,
          strokeOpacity: 1,
        }}
        transition={{
          duration: 2,
          delay: delay,
        }}
      />
      <defs>
        <motion.linearGradient
          className="transform-gpu"
          id={id}
          gradientUnits={"userSpaceOnUse"}
          initial={{
            x1: "0%",
            x2: "0%",
            y1: "0%",
            y2: "0%",
          }}
          animate={{
            x1: gradientCoordinates.x1,
            x2: gradientCoordinates.x2,
            y1: gradientCoordinates.y1,
            y2: gradientCoordinates.y2,
          }}
          transition={{
            delay,
            duration,
            repeat: Infinity,
            repeatDelay: 1,
            // repeatType: "reverse",
          }}
        >
          <stop stopColor={gradientStartColor} stopOpacity="0"></stop>
          <stop stopColor={gradientStartColor}></stop>
          <stop offset="10.5%" stopColor={gradientStopColor}></stop>
          <stop offset="100%" stopColor={gradientStopColor} stopOpacity="0"></stop>
        </motion.linearGradient>
      </defs>
    </svg>
  );
};

// Circle component with responsive sizing
const Circle = forwardRef(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex items-center justify-center rounded-full  bg-black border-t border-gray-500 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        "size-10 p-2", // Responsive sizes
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

// Main BeamAnim component with responsive layout
export const BeamAnim = ({ className, icons, beamColor = "white", beamSpeed = 2 }) => {
  const containerRef = useRef(null);
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);
  const div4Ref = useRef(null);
  const div5Ref = useRef(null);
  const div6Ref = useRef(null);
  const div7Ref = useRef(null);

  return (
    <div
      className={cn(
        "absolute top-0 flex w-full mx-auto px-4 md:px-32 h-full bg-black items-center justify-center overflow-hidden rounded-lg border",
        className
      )}
      ref={containerRef}
    >
      <div className="flex h-full w-full flex-row items-stretch justify-between gap-3 sm:gap-6 md:gap-10">
        <div className="flex flex-col justify-center">
          <Circle ref={div7Ref} className="text-white py-8 !w-32">
            <RotatingText
              texts={["Chatbot", "Assistant", "App", "Api", "Agent"]}
              mainClassName=""
              staggerFrom={"last"}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={3000}
            />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle
            ref={div6Ref}
            className="w-10 h-10 scale-125 sm:w-12 sm:h-12 md:w-14 md:h-14" // Larger circle with responsive sizing
          >
            {icons.image2()}
          </Circle>
        </div>
        <div className="flex flex-col justify-center gap-1 sm:gap-1.5 md:gap-2">
          <Circle ref={div1Ref}>{icons.image3()}</Circle>
          <Circle ref={div2Ref}>{icons.image4()}</Circle>
          <Circle ref={div3Ref}>{icons.image5()}</Circle>
          <Circle ref={div4Ref}>{icons.image6()}</Circle>
          <Circle ref={div5Ref}>{icons.image7()}</Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        delay={0}
        toRef={div7Ref}
        duration={beamSpeed}
        gradientStartColor={beamColor}
        gradientStopColor={beamColor}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        delay={0.1}
        toRef={div6Ref}
        duration={beamSpeed}
        gradientStartColor={beamColor}
        gradientStopColor={beamColor}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        delay={0.2}
        toRef={div6Ref}
        duration={beamSpeed}
        gradientStartColor={beamColor}
        gradientStopColor={beamColor}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        delay={0.3}
        toRef={div6Ref}
        duration={beamSpeed}
        gradientStartColor={beamColor}
        gradientStopColor={beamColor}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        delay={0.4}
        toRef={div6Ref}
        duration={beamSpeed}
        gradientStartColor={beamColor}
        gradientStopColor={beamColor}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        delay={0.5}
        toRef={div6Ref}
        duration={beamSpeed}
        gradientStartColor={beamColor}
        gradientStopColor={beamColor}
      />
    </div>
  );
};
