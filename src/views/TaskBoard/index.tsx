import Board from '@Components/TaskBoard/Board';

function TaskBoard() {
  return (
    <div className="flex h-full w-full gap-4 overflow-x-auto   p-4">
      <Board />
      <Board />
      <Board />
      <Board />
    </div>
  );
}

export default TaskBoard;
