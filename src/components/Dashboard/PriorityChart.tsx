/* eslint-disable no-nested-ternary */
import ChartHeader from '@Components/common/Charts/ChartHeader';
import CustomDonutChart from '@Components/common/Charts/DonutChart';
import DonutLegendItem from '@Components/common/Charts/DonutLegendItem';
import { useRef } from 'react';

const priorityList = [
  {
    name: 'High',
    value: 7,
  },
  {
    name: 'Medium',
    value: 2,
  },
  {
    name: 'Low',
    value: 1,
  },
];

function PriorityChart() {
  const downloadComponentRef = useRef();

  return (
    <div className="relative  h-full w-[65%] rounded-xl  border bg-grey-50 px-4 py-2">
      <ChartHeader
        chartTitle="Tasks By Priority"
        downloadComponentRef={downloadComponentRef}
      />
      <div className="flex h-full">
        <CustomDonutChart
          data={priorityList}
          fills={['#4b5563', '#6b7280', '#9ca3af']}
        />
        <div className="flex  w-[20rem] flex-col justify-center ">
          {priorityList.map((priority, index) => (
            <DonutLegendItem
              key={priority.name}
              color={
                index === 0 ? '#475569' : index === 1 ? '#6b7280' : '#9ca3af'
              }
              name={priority.name}
              value={priority.value}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PriorityChart;
