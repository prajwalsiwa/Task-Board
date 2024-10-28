import Icon from '@Components/common/Icon';

function TaskHeader({
  boardTitle = 'To-do',
  color = 'bg-blue-50',
  taskCount = 1,
}) {
  return (
    <div
      className={`flex h-fit w-72 justify-between rounded-lg border border-gray-200 ${color} px-4 py-3`}
    >
      <div className="flex w-full items-center gap-2">
        <div className="h-4 w-4 rounded-full border-[0.2rem] border-gray-600" />
        <span className="text-lg font-bold"> {boardTitle}</span>
        <span
          className={`flex  h-3 w-3 items-center justify-center rounded-md bg-blue-200 p-2  text-xs font-bold text-blue-700 `}
        >
          {taskCount}
        </span>
      </div>
      <Icon name="add" />
    </div>
  );
}

export default TaskHeader;
