"use client";
import React, { useRef } from "react";
import { cn } from "../../utils/cn";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "motion/react";

interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  borderRadius?: string;
  children: React.ReactNode;
  as?: "button" | "a" | "div" | "span" | "section";
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
}

export function Button({
  borderRadius = "1.75rem",
  children,
  as: Component = "button",
  containerClassName,
  borderClassName,
  duration,
  className,
  ...otherProps
}: ButtonProps) {
  return (
    <Component
      className={cn(
        "relative md:col-span-2 w-[60vw] lg:ml-56 overflow-hidden h-[25vw] bg-transparent p-[1px] text-xl mx-auto",
        containerClassName,
      )}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <MovingBorder duration={duration} rx="30%" ry="30%">
          <div
            className={cn(
              "h-20 w-20 bg-[radial-gradient(#0ea5e9_40%,transparent_60%)] opacity-[0.8]",
              borderClassName,
            )}
          />
        </MovingBorder>
      </div>

      <div
        className={cn(
          "relative flex h-full w-full items-center justify-center border border-slate-800 bg-slate-900/[0.8] text-sm text-white antialiased backdrop-blur-xl",
          className,
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        {children}
      </div>
    </Component>
  );
}

export const MovingBorder = ({
  children,
  duration = 3000,
  rx,
  ry,
  ...otherProps
}: {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
  [key: string]: unknown;
}) => {
  const pathRef = useRef<SVGPathElement | null>(null);
  const progress = useMotionValue<number>(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    }
  });

  const x = useTransform(progress, (val) =>
    pathRef.current?.getPointAtLength(val).x ?? 0
  );

  const y = useTransform(progress, (val) =>
    pathRef.current?.getPointAtLength(val).y ?? 0
  );

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  // Rectangle path (100x100 box, supports rounded corners)
  const getPath = () => {
    const rX = rx ? parseFloat(rx) : 0;
    const rY = ry ? parseFloat(ry) : 0;

    return `
      M ${rX},0
      H ${100 - rX}
      A ${rX},${rY} 0 0 1 100,${rY}
      V ${100 - rY}
      A ${rX},${rY} 0 0 1 ${100 - rX},100
      H ${rX}
      A ${rX},${rY} 0 0 1 0,${100 - rY}
      V ${rY}
      A ${rX},${rY} 0 0 1 ${rX},0
      Z
    `;
  };

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        viewBox="0 0 100 100"
        width="100%"
        height="100%"
        {...otherProps}
      >
        <path ref={pathRef} fill="none" d={getPath()} />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};