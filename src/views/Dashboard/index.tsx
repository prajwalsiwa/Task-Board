/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-unstable-nested-components */
import Card from '@Components/Card';
import ChartContainer from '@Components/common/Charts/ChartContainer';
import ChartHeader from '@Components/common/Charts/ChartHeader';
import CustomDonutChart from '@Components/common/Charts/DonutChart';
import DonutLegendItem from '@Components/common/Charts/DonutLegendItem';
import { useRef } from 'react';

const cardList = [
  {
    id: 1,
    title: 'Total Tasks',
    count: 10,
    iconName: 'task',
  },
  {
    id: 1,
    title: 'Completed Tasks',
    count: 3,
    iconName: 'task',
  },
  {
    id: 1,
    title: 'Total In Progress',
    count: 2,
    iconName: 'task',
  },
  {
    id: 1,
    title: 'Todos',
    count: 5,
    iconName: 'task',
  },
];

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
const userTasksList = [
  {
    name: 'Prajwal',
    value: 4,
  },
  {
    name: 'Ram',
    value: 2,
  },
  {
    name: 'Shyam',
    value: 3,
  },
  {
    name: 'Anjelina',
    value: 1,
  },
];

export default function Dashboard() {
  const downloadComponentRef = useRef();
  return (
    <div className="flex h-full w-full flex-col gap-6 p-6">
      <div className="flex w-full justify-between gap-6">
        {cardList.map(card => (
          <Card
            key={card.id}
            title={card.title}
            count={card.count}
            iconName={card.iconName}
          />
        ))}
      </div>
      <div className="flex w-full  gap-4">
        <div className="w-full">
          <ChartContainer
            className="h-80"
            header={props => (
              <ChartHeader
                {...props}
                data={priorityList}
                chartTitle="Tasks of Users"
                hasDownloadBtn
              />
            )}
            type="bar"
            data={userTasksList}
            // xLabel="Priority"
            yLabel=" Tasks"
            scrollable={false} // Set to true if scrolling is needed
            fillWithType // Use specific fills for the chart type
            chartTitle="helo"
          />
        </div>
        <div className="relative  h-full w-full rounded-xl  border bg-grey-50 px-4 py-2">
          <ChartHeader
            chartTitle="Tasks By Priority"
            downloadComponentRef={downloadComponentRef}
          />
          <div className="flex h-full items-center justify-center gap-2">
            <CustomDonutChart
              data={priorityList}
              fills={['#4b5563', '#6b7280', '#9ca3af']}
            />
            <div className="flex h-full w-[25rem] flex-col justify-center ">
              {priorityList.map((priority, index) => (
                <DonutLegendItem
                  key={priority.name}
                  color={
                    index === 0
                      ? '#475569'
                      : index === 1
                        ? '#6b7280'
                        : '#9ca3af'
                  }
                  name={priority.name}
                  value={priority.value}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
