"use client";

import { cva, type VariantProps } from "class-variance-authority";
import {
  motion,
  MotionProps,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import React, { PropsWithChildren, useRef } from "react";

import { cn } from "@/lib/utils";

export interface DockProps extends VariantProps<typeof dockVariants> {
  className?: string;
  iconSize?: number;
  iconMagnification?: number;
  iconDistance?: number;
  direction?: "top" | "middle" | "bottom";
  children: React.ReactNode;
}

const DEFAULT_SIZE = 48;
const DEFAULT_MAGNIFICATION = 72;
const DEFAULT_DISTANCE = 120;

const dockVariants = cva(
  "mx-auto flex w-max items-end justify-center gap-1 rounded-2xl p-2",
);

const Dock = React.forwardRef<HTMLDivElement, DockProps>(
  (
    {
      className,
      children,
      iconSize = DEFAULT_SIZE,
      iconMagnification = DEFAULT_MAGNIFICATION,
      iconDistance = DEFAULT_DISTANCE,
      direction = "middle",
      ...props
    },
    ref,
  ) => {
    const mouseX = useMotionValue(Infinity);

    const renderChildren = () => {
      return React.Children.map(children, (child) => {
        if (
          React.isValidElement<DockIconProps>(child) &&
          child.type === DockIcon
        ) {
          return React.cloneElement(child, {
            ...child.props,
            mouseX: mouseX,
            size: iconSize,
            magnification: iconMagnification,
            distance: iconDistance,
          });
        }
        return child;
      });
    };

    return (
      <div className="relative">
        {/* Dock reflection */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/5 to-transparent rounded-2xl blur-sm transform scale-y-50 origin-bottom opacity-30" />
        
        {/* Main dock container */}
        <motion.div
          ref={ref}
          onMouseMove={(e: React.MouseEvent) => mouseX.set(e.pageX)}
          onMouseLeave={() => mouseX.set(Infinity)}
          {...props}
          className={cn(
            dockVariants({ className }),
            "relative bg-white/15 backdrop-blur-2xl border border-white/20 shadow-2xl",
            "before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-t before:from-white/10 before:to-white/5 before:pointer-events-none",
            "after:absolute after:inset-0 after:rounded-2xl after:shadow-inner after:shadow-white/10 after:pointer-events-none",
            {
              "items-start": direction === "top",
              "items-center": direction === "middle", 
              "items-end": direction === "bottom",
            }
          )}
          style={{
            height: iconMagnification + 16,
            minHeight: iconSize + 16,
          }}
        >
          {renderChildren()}
        </motion.div>
      </div>
    );
  },
);

Dock.displayName = "Dock";

export interface DockIconProps
  extends Omit<MotionProps & React.HTMLAttributes<HTMLDivElement>, "children"> {
  size?: number;
  magnification?: number;
  distance?: number;
  mouseX?: MotionValue<number>;
  className?: string;
  children?: React.ReactNode;
  props?: PropsWithChildren;
  isActive?: boolean;
}

const DockIcon = ({
  size = DEFAULT_SIZE,
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  mouseX,
  className,
  children,
  isActive = false,
  ...props
}: DockIconProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const defaultMouseX = useMotionValue(Infinity);

  const distanceCalc = useTransform(mouseX ?? defaultMouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const sizeTransform = useTransform(
    distanceCalc,
    [-distance, 0, distance],
    [size, magnification, size],
  );

  const yTransform = useTransform(
    distanceCalc,
    [-distance, 0, distance],
    [0, -8, 0],
  );

  const scaleSize = useSpring(sizeTransform, {
    mass: 0.1,
    stiffness: 200,
    damping: 15,
  });

  const yPosition = useSpring(yTransform, {
    mass: 0.1,
    stiffness: 200,
    damping: 15,
  });

  return (
    <div className="relative flex flex-col items-center">
      {/* Active indicator dot */}
      {isActive && (
        <div className="absolute -bottom-1 w-1 h-1 bg-white/80 rounded-full shadow-lg" />
      )}
      
      <motion.div
        ref={ref}
        style={{ 
          width: scaleSize, 
          height: scaleSize,
          y: yPosition,
        }}
        className={cn(
          "flex cursor-pointer items-center justify-center rounded-2xl relative",
          "transition-all duration-200 ease-out",
          "hover:shadow-2xl hover:shadow-black/30",
          "before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-t before:from-black/20 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity",
          className,
        )}
        whileHover={{ 
          scale: 1.05,
          transition: { duration: 0.2 }
        }}
        whileTap={{ 
          scale: 0.95,
          transition: { duration: 0.1 }
        }}
        {...props}
      >
        {children}
      </motion.div>
    </div>
  );
};

DockIcon.displayName = "DockIcon";

export { Dock, DockIcon, dockVariants }; 