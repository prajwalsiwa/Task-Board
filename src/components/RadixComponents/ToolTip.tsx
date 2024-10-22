import {
  Arrow,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@radix-ui/react-tooltip';
import { FlexColumn } from '@Components/common/Layouts';
import Icon from '../common/Icon';

interface ToolTipProps {
  name: string;
  message?: string;
  side?: 'top' | 'right' | 'bottom' | 'left' | undefined;
  className?: string;
  iconClassName?: string;
  onClick?: () => void;
}

export default function ToolTip({
  name,
  message,
  side = 'left',
  onClick,
  className,
  iconClassName,
}: ToolTipProps) {
  return (
    <FlexColumn
      className={`cursor-pointer select-none items-center justify-center ${className}`}
      tabIndex={0}
    >
      <TooltipProvider delayDuration={80} skipDelayDuration={50}>
        <Tooltip>
          <TooltipTrigger onClick={onClick}>
            <Icon
              name={name}
              className={`text-grey-500 hover:animate-pulse hover:text-primary-400 ${iconClassName}`}
            />
          </TooltipTrigger>
          {message && (
            <TooltipContent
              className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade 
                data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade 
                data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade 
                data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade 
                max-w-xs select-none rounded bg-grey-900 px-[15px] py-[10px] 
                text-sm leading-none text-white
                shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px]
                will-change-[transform,opacity]"
              side={side}
              sideOffset={10}
            >
              {message}
              <Arrow className="fill-white" />
            </TooltipContent>
          )}
        </Tooltip>
      </TooltipProvider>
    </FlexColumn>
  );
}
