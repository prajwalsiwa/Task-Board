import React, { ReactElement } from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';

import { cn } from '@Utils/index';

interface IPopoverProps {
  triggerContent?: ReactElement;
  popoverContent?: ReactElement;
  show: boolean;
}

const PopoverRoot = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = 'end', sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        `z-50 w-64 rounded-md border bg-white p-4 text-grey-800
        shadow-lg outline-none data-[state=open]:animate-in data-[state=closed]:animate-out
        data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95
        data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2
        data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2`,
        className,
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export default function Popover({
  triggerContent,
  popoverContent,
  show,
}: IPopoverProps) {
  return (
    <PopoverRoot open={show}>
      <PopoverTrigger>{triggerContent}</PopoverTrigger>
      <PopoverContent className="flex flex-col gap-4">
        {popoverContent}
      </PopoverContent>
    </PopoverRoot>
  );
}
