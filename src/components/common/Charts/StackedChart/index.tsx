import { useRef } from 'react';
import { FlexColumn, FlexRow } from '@Components/common/Layouts';
import RoundedContainer from '@Components/common/RoundedContainer';
import formatNumberWithCommas from '@Utils/formatNumberWithCommas';
import NoDataComponent from '../NoDataComponent';
import { StackedChartFills } from '../constants';
import { IChartHeaderProps } from '../ChartHeader';

interface IStackedChartProps
  extends Omit<IChartHeaderProps, 'downloadComponentRef'> {
  hasHeader?: boolean;
  // eslint-disable-next-line no-unused-vars
  header: (props: IChartHeaderProps) => JSX.Element;
  data: Record<string, any>;
  className?: string;
  labelAlignment?: 'vertical' | 'horizontal';
}
type IUpdatedData = {
  name: string;
  color: string;
  width: string;
  value: number;
}[];

export default function StackedChart({
  hasHeader = true,
  header,
  data,
  className,
  labelAlignment,
  chartTitle,
  hasDownloadBtn,
}: IStackedChartProps) {
  const componentRef = useRef(null);
  const total =
    data.reduce(
      (sum: number, item: Record<string, any>) => sum + item.value,
      0,
    ) || 0;

  const updatedData: IUpdatedData = data.map(
    (item: Record<string, any>, index: number) => ({
      ...item,
      width: `${((item.value / total) * 100).toFixed(0)}%`,
      color: StackedChartFills[index],
    }),
  );

  const isDataEmpty = !!data.length;

  return (
    <RoundedContainer
      ref={componentRef}
      className={`flex min-h-full w-full flex-1
      flex-col rounded-xl bg-primary-50 px-5
       py-3 shadow-md ${className}`}
    >
      {hasHeader && header && (
        <div className="head col-span-12 h-fit">
          <div className="cover">
            {header({
              chartTitle,
              hasDownloadBtn,
              downloadComponentRef: componentRef,
              data,
            })}
          </div>
        </div>
      )}
      {isDataEmpty ? (
        <FlexColumn className={`${hasDownloadBtn ? 'gap-5' : ''}`}>
          <FlexRow className=" mt-1 overflow-hidden rounded">
            {updatedData.map(({ name, color, width }) => (
              <div
                key={name}
                className="h-4"
                style={{
                  width,
                  backgroundColor: color,
                }}
              />
            ))}
          </FlexRow>
          <div
            className={`flex pt-1 ${
              labelAlignment === 'vertical'
                ? 'flex-col gap-2'
                : 'mt-1 flex-col md:flex-row md:justify-between'
            }`}
          >
            {updatedData.map(({ name, value, color }) => (
              <FlexRow key={name} className="items-center gap-2">
                <div
                  className={`h-3 w-3 ${
                    labelAlignment === 'vertical' ? 'rounded' : 'rounded-full'
                  } `}
                  style={{
                    backgroundColor: color,
                  }}
                />
                <FlexRow
                  className={` ${
                    labelAlignment === 'vertical' ? ' gap-10' : 'w-full gap-0.5'
                  }`}
                >
                  <FlexRow
                    className={`items-center text-sm capitalize text-grey-800
              ${labelAlignment === 'horizontal' ? 'pt-0.5' : 'w-40'} `}
                  >
                    {name}
                  </FlexRow>
                  <h5
                    className={` ${
                      labelAlignment === 'vertical' ? 'text-sm' : 'ml-auto'
                    }`}
                  >
                    {formatNumberWithCommas(value)}
                  </h5>
                </FlexRow>
              </FlexRow>
            ))}
          </div>
        </FlexColumn>
      ) : (
        <NoDataComponent />
      )}
    </RoundedContainer>
  );
}
