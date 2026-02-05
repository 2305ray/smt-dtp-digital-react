import {
  SimpleButton,
  OutlineButton,
  NoneOutlineButton,
  IconDefaultButton,
  IconOutlineButton,
  IconNoneOutlineButton,
  CircleLabelButton,
  LargeRoundedMediumButton,
  LargeCustomButton,
} from "@/components/ui/button/readyButtuns";
import { HamburgerIcon } from "lucide-react";

export function ButtonsTest() {
  return (
    <div className="text-center flex-col flex items-center gap-4">
      <SimpleButton>
        <HamburgerIcon /> Label
      </SimpleButton>

      <OutlineButton>Label</OutlineButton>

      <NoneOutlineButton>Label</NoneOutlineButton>

      <IconDefaultButton>
        <HamburgerIcon />
      </IconDefaultButton>

      <IconOutlineButton>
        <HamburgerIcon />
      </IconOutlineButton>

      <IconNoneOutlineButton>
        <HamburgerIcon />
      </IconNoneOutlineButton>

      <CircleLabelButton>
        <HamburgerIcon size={24} />
        label
      </CircleLabelButton>

      <LargeRoundedMediumButton>
        <HamburgerIcon size={26} />
        Label
      </LargeRoundedMediumButton>

      <LargeCustomButton>
        <HamburgerIcon size={26} />
        Label
      </LargeCustomButton>
    </div>
  );
}
