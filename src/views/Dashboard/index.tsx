/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-unstable-nested-components */
import Card from '@Components/Card';
import PriorityChart from '@Components/Dashboard/PriorityChart';
import TasksTable from '@Components/Dashboard/TasksTable';
import UserChart from '@Components/Dashboard/UserChart';
import Users from '@Components/Dashboard/Users/Users';

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
    iconName: 'check_circle',
  },
  {
    id: 1,
    title: 'Total In Progress',
    count: 2,
    iconName: 'timer',
  },
  {
    id: 1,
    title: 'Todos',
    count: 5,
    iconName: 'assignment',
  },
];

export default function Dashboard() {
  return (
    <div className="flex h-full w-full flex-col gap-6 p-6">
      <div className="flex w-full justify-between gap-6">
        {cardList.map(card => (
          <div
            key={card.id}
            className="w-full cursor-pointer duration-500 hover:scale-105 "
          >
            <Card
              key={card.id}
              title={card.title}
              count={card.count}
              iconName={card.iconName}
            />
          </div>
        ))}
      </div>
      <div className="flex w-full  gap-4">
        <UserChart />
        <PriorityChart />
      </div>
      <div className="grid h-80 w-full grid-cols-[60%_39%] gap-4 overflow-hidden pb-10">
        <TasksTable />
        <Users />
      </div>
    </div>
  );
}
