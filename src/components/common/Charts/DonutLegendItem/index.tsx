import { IDonutLegendItemProps } from '../types';

export default function DonutLegendItem({
  color,
  name,
  percentage,
}: IDonutLegendItemProps) {
  return (
    <div className="flex items-center justify-between text-sm text-grey-800">
      <div className="legend-box-name justify-items flex flex-grow items-center gap-2 ">
        <div
          className="min-h-[14px] min-w-[14px] rounded"
          style={{
            backgroundColor: color,
          }}
        />
        <div className="name button text-start font-normal ">{name}</div>
      </div>
      <div className="value-percentage flex min-w-[2rem] items-center justify-end gap-2 font-bold">
        <div className="button min-w-[60px] max-w-[60px] whitespace-nowrap text-start ">
          {Number(percentage)?.toFixed(1)} %
        </div>
      </div>
    </div>
  );
}
