import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-[18px] transition-all font-semibold cursor-pointer\
   active:scale-95 active:translate-y-[1px] active:brightness-95 \
   active:outline-4 active:outline-green-500 active:outline-offset-[-2px]\
   focus-visible:outline-4 focus-visible:outline-green-500  focus-visible:outline-offset-[-2px]\
   disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-2 border border-blue-4 bg-blue-3 hover:opacity-90 text-white",
        outline:
          "border border-2 border-blue-4 hover:bg-neutral-white-3  text-blue-3 ",
        noneOutline:
          " text-blue-3",
      },
      shape: {
        roundedMedium: "rounded-md",
        roundedLargest: "rounded-2xl",
        pill: "rounded-full",
        roundedSmall: "rounded-none",
        circle: "rounded-full aspect-square p-0",
      },
      size: {
        default: "w-[124px] h-[39px]",
        lg: "w-[150px] h-[45px]",
      },
        icon: {
          true: "flex items-center justify-center h-12 w-12 rounded-full aspect-square p-0",
          false: "",
      },
    },
    defaultVariants: {
      shape: "pill",
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, shape, icon, asChild = false, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, shape, icon, className }),
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
