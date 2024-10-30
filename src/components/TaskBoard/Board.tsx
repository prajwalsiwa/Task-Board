import TaskHeader from './TaskHeader';
import TaskItem from './TaskItem';

function Board() {
  return (
    <div className="flex h-full !w-[25%] flex-col gap-4 ">
      <TaskHeader />
      <div className="flex  w-full flex-col gap-4 ">
        <TaskItem />
        <TaskItem />
        <TaskItem />
      </div>
    </div>
  );
}

export default Board;
