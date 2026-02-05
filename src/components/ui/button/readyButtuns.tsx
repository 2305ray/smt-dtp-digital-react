import { Button } from "@/components/ui/button/buttons";
import React from "react";

export const SimpleButton = (props: React.ComponentProps<typeof Button>) => (
  <Button className="m-8" {...props} />
);

export const OutlineButton = (props: React.ComponentProps<typeof Button>) => (
  <Button variant="outline" {...props} />
);

export const NoneOutlineButton = (
  props: React.ComponentProps<typeof Button>,
) => <Button variant="noneOutline" {...props} />;

export const IconDefaultButton = (
  props: React.ComponentProps<typeof Button>,
) => <Button icon variant="default" {...props} />;

export const IconOutlineButton = (
  props: React.ComponentProps<typeof Button>,
) => <Button icon variant="outline" {...props} />;

export const IconNoneOutlineButton = (
  props: React.ComponentProps<typeof Button>,
) => <Button icon variant="noneOutline" {...props} />;

export const CircleLabelButton = (
  props: React.ComponentProps<typeof Button>,
) => (
  <Button
    variant="noneOutline"
    shape="circle"
    icon
    className="flex flex-col gap-1 h-18 w-16"
    {...props}
  />
);

export const LargeRoundedMediumButton = (
  props: React.ComponentProps<typeof Button>,
) => (
  <Button
    variant="default"
    shape="roundedMedium"
    size="lg"
    className="justify-baseline gap-2 pl-3"
    {...props}
  />
);

export const LargeCustomButton = (
  props: React.ComponentProps<typeof Button>,
) => (
  <Button
    size="lg"
    shape="roundedLargest"
    className="gap-2 flex-col w-[145px] h-[81px] items-center justify-center bg-neutral-white-3 text-neutral-black-2 border-none shadow-md"
    {...props}
  />
);
