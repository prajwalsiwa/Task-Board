import formatNumberWithCommas from '@Utils/formatNumberWithCommas';
import Icon from '@Components/common/Icon';
import { FlexColumn, FlexRow } from '@Components/common/Layouts';
import { cn } from '@Utils/index';
import RoundedContainer from '../RoundedContainer';

interface DataCardProps {
  title: string;
  count: number;
  iconName: string;
  className?: string;
}

export default function DataCard({
  title,
  count,
  iconName,
  className,
}: DataCardProps) {
  return (
    <RoundedContainer
      className={cn(`${className} w-full min-w-[180px] bg-primary-50 px-5 py-4
      shadow-md md:!h-28`)}
    >
      <FlexColumn>
        <h5>{title}</h5>
        <FlexRow className="items-center justify-between text-[38px] font-bold text-primary-400 ">
          <FlexRow>
            <div>{formatNumberWithCommas(count)}</div>
          </FlexRow>
          <Icon name={iconName} className="!text-[38px] text-primary-200 " />
        </FlexRow>
      </FlexColumn>
    </RoundedContainer>
  );
}
