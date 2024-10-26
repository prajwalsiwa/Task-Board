import { ReactElement } from 'react';
import Icon from '@Components/common/Icon';
import capitalizeFirstLetter from '@Utils/capitalizeFirstLetter';

interface IChipProps {
  label: string | ReactElement;
  onClose: any;
  showIcon?: boolean;
  className?: string;
}

export default function Chip({
  label,
  onClose,
  showIcon = false,
  className,
}: IChipProps) {
  return (
    <div
      className={`flex h-8 cursor-pointer items-center gap-1
      rounded-lg border border-grey-300 bg-grey-100 px-2 text-sm ${className}`}
    >
      <p>{capitalizeFirstLetter(label.toString())}</p>
      {showIcon && (
        <Icon
          onClick={onClose}
          name="close"
          className="!text-icon-sm font-bold "
        />
      )}
    </div>
  );
}
