import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cn } from "@/lib/utils";

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-2", className)}
      {...props}
      ref={ref}
    />
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "peer h-5 w-5 rounded-full border-2 border-neutral-300 bg-white transition-all outline-none ",
        "focus-visible:ring-[3px] focus-visible:ring-green-500 focus-visible:border-none ",
        "grid place-content-center place-items-center flex-shrink-0",
        "data-[state=checked]:outline-[4px] data-[state=checked]:outline-blue-3 data-[state=checked]:outline-offset-[-2px] data-[state=checked]:border-blue-3",
        "active:scale-90",
        className,
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="grid place-content-center place-items-center">
        <div className="size-3 rounded-full bg-blue-3 transition-transform animate-in fade-in zoom-in-75" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
