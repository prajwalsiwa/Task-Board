import { useCallback } from 'react';
import Papa from 'papaparse';
import useOutsideClick from '@Hooks/useOutsideClick';
import ToolTip from '@Components/RadixComponents/ToolTip';
import FileSaver from 'file-saver';
import { FlexColumn } from '@Components/common/Layouts';
import CaptureComponent from '../CaptureComponent';

export interface IChartHeaderProps {
  chartTitle: string;
  hasDownloadBtn?: boolean;
  downloadComponentRef: React.RefObject<any>;
  data?: any;
}

export default function ChartHeader({
  chartTitle,
  hasDownloadBtn,
  downloadComponentRef,
  data,
}: IChartHeaderProps) {
  const [toggleRef, toggle, handleToggle] = useOutsideClick();

  const handleDownloadPng = () => {
    CaptureComponent({
      componentRef: downloadComponentRef,
      captureName: chartTitle,
    });
  };
  const handleDownloadCsv = useCallback(async () => {
    if (!data) return;
    const csv = Papa.unparse(data);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });

    FileSaver.saveAs(blob, `${chartTitle}.csv`);
  }, [data, chartTitle]);

  return (
    <div className="relative flex items-start justify-between">
      <h3 className="relative pr-5 text-lg font-bold text-grey-800">
        {chartTitle}
      </h3>

      <div className="flex items-center justify-end gap-3">
        {hasDownloadBtn && (
          <div
            ref={toggleRef as React.RefObject<HTMLDivElement>}
            onClick={handleToggle}
            tabIndex={0}
            role="button"
            onKeyDown={() => {}}
            className="actions w-40px flex cursor-pointer
           rounded-lg p-1 hover:bg-primary-50"
          >
            <ToolTip
              name="download"
              message="Download chart"
              className="!text-2xl"
            />
          </div>
        )}
      </div>
      {toggle && (
        <FlexColumn
          className=" absolute right-2 top-8 z-[100] w-[8.3rem]
         rounded border bg-white text-center text-sm shadow-sm"
          data-html2canvas-ignore
        >
          <div
            role="button"
            tabIndex={0}
            onKeyDown={() => {}}
            onClick={handleDownloadPng}
            className="py-3 hover:bg-primary-50"
          >
            Export as PNG
          </div>
          <div
            role="button"
            tabIndex={0}
            onKeyDown={() => {}}
            onClick={handleDownloadCsv}
            className="py-3 hover:bg-primary-50"
          >
            Export as CSV
          </div>
        </FlexColumn>
      )}
    </div>
  );
}
