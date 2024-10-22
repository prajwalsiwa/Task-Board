/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { HtmlHTMLAttributes, useRef } from 'react';
import { cn } from '@Utils/index';
import RoundedContainer from '@Components/common/RoundedContainer';
import getChartOfType from '../utils/getChartOfType';
import getChartFillOfType from '../utils/getChartFillOfType';
import { IChartHeaderProps } from '../ChartHeader';
import { ChartTypes, ILegendProps } from '../types';
import { ChartFills } from '../constants';

interface ICustomChartContainerProps<T>
  extends HtmlHTMLAttributes<HTMLDivElement>,
    Omit<IChartHeaderProps, 'downloadComponentRef'> {
  header: (props: IChartHeaderProps) => JSX.Element;
  type: ChartTypes;
  data: T[];
  legend?: (props: ILegendProps<T>) => JSX.Element;
  xLabel?: string;
  yLabel?: string;
  scrollable?: boolean;
  fillWithType?: boolean;
  fill?: string[];
  hasHeader?: boolean;
}

export default function ChartContainer<T>({
  header,
  legend,
  xLabel,
  yLabel,
  className,
  data,
  type,
  chartTitle,
  hasDownloadBtn,
  scrollable = false,
  fillWithType = false,
  fill,
  hasHeader = true,
}: ICustomChartContainerProps<T>) {
  const componentRef = useRef(null);
  const chart = getChartOfType(type);

  const fills = fill || (fillWithType ? getChartFillOfType(type) : ChartFills);

  return (
    <RoundedContainer
      ref={componentRef}
      className={cn(
        'relative grid h-full w-full grid-cols-12 gap-7 bg-grey-50 px-4 py-2',
        className,
      )}
    >
      {hasHeader && header && (
        <div className="head col-span-12 h-fit">
          <div className="cover">
            {header({
              chartTitle,
              hasDownloadBtn,
              downloadComponentRef: componentRef,
            })}
          </div>
        </div>
      )}

      {yLabel && !(type === 'donut') ? (
        <div className="y-label absolute left-0 top-0 col-span-1 flex h-full w-12 items-center justify-end">
          <p className="origin-center -rotate-90 whitespace-nowrap text-xs">
            {yLabel}
          </p>
        </div>
      ) : null}

      <div
        className={`card ${
          // eslint-disable-next-line no-nested-ternary
          type === 'donut'
            ? 'col-span-12 flex  h-full items-center sm:col-span-6 md:col-span-12 lg:col-span-6 '
            : yLabel
              ? 'col-span-12'
              : 'col-span-12  h-full overflow-y-hidden'
        } ${scrollable ? 'scrollbar overflow-auto' : ''}`}
      >
        {chart && chart({ data, fills, scrollable })}
      </div>
      {xLabel && !(type === 'donut') ? (
        <div className="x-label col-span-12 flex h-[2rem] items-center justify-center">
          <p className="mr-2">{xLabel}</p>
        </div>
      ) : null}
      {legend && (
        <div
          className={`legend ${
            type === 'donut'
              ? 'col-span-12 flex items-center justify-start  sm:col-span-6 md:col-span-12 lg:col-span-6'
              : 'col-span-11 col-start-1 col-end-13'
          } `}
        >
          {legend({
            data,
            type,
            fills,
          })}
        </div>
      )}
    </RoundedContainer>
  );
}
