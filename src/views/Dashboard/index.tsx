/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-unstable-nested-components */
import Card from '@Components/Card';
import PriorityChart from '@Components/Dashboard/PriorityChart';
import UserChart from '@Components/Dashboard/UserChart';

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

export default function Dashboard() {
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
        <UserChart />
        <PriorityChart />
      </div>
    </div>
  );
}
