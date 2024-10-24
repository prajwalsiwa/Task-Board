/* eslint-disable react/no-unstable-nested-components */
import Card from '@Components/Card';
import ChartContainer from '@Components/common/Charts/ChartContainer';
import ChartHeader from '@Components/common/Charts/ChartHeader';

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

export default function Dashboard() {
  return (
    <div className="flex h-full w-full flex-col gap-12 p-6">
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
      <div className="flex w-full gap-4">
        <div className="w-full">
          <ChartContainer
            className="h-96"
            header={props => (
              <ChartHeader
                {...props}
                data={priorityList}
                chartTitle="Tasks By Priority"
                hasDownloadBtn
              />
            )}
            type="bar"
            data={priorityList}
            xLabel="Priority"
            yLabel=" Tasks"
            scrollable={false} // Set to true if scrolling is needed
            fillWithType // Use specific fills for the chart type
            chartTitle="helo"
          />
        </div>
        <div className="w-full">
          <ChartContainer
            className="h-96"
            header={props => (
              <ChartHeader
                {...props}
                data={priorityList}
                chartTitle="Tasks By Priority"
                hasDownloadBtn
              />
            )}
            type="bar"
            data={priorityList}
            xLabel="Priority"
            yLabel=" Tasks"
            scrollable={false} // Set to true if scrolling is needed
            fillWithType // Use specific fills for the chart type
            chartTitle="helo"
          />
        </div>
      </div>
    </div>
  );
}
