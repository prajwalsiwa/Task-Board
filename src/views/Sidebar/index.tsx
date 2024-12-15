import SidebarItem from '@Components/Sidebar/SidebarItem';

const sidebarList = [
  {
    id: 1,
    name: 'Dashboard',
    path: '/',
    iconName: 'dashboard',
  },
  {
    id: 2,
    name: 'Task Board',
    path: '/task-board',
    iconName: 'task',
  },
  {
    id: 3,
    name: 'Completed',
    path: '/',
    iconName: 'check_circle',
  },
  {
    id: 4,
    name: 'In Progress',
    path: '/',
    iconName: 'timer',
  },
  {
    id: 5,
    name: 'Todo',
    path: '/',
    iconName: 'assignment',
  },
];

function SideBar() {
  return (
    <div className="flex h-full w-72 flex-col gap-4 bg-slate-100 pt-4 shadow-2xl">
      <div className="flex h-20 w-full items-center gap-2  px-3">
        <div className="flex w-full items-center justify-center gap-2 rounded-lg border py-2 shadow-md">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg border  bg-gray-500 text-xl font-semibold text-white">
            T
          </div>
          <span className="text-xl font-semibold">Task Board</span>
        </div>
      </div>
      <div className="w-full rounded-lg border  px-8 py-4 text-sm font-semibold text-gray-500">
        MY PAGES
      </div>
      <div className="flex h-full w-full  flex-col gap-3 px-8 py-2 ">
        {sidebarList.map(item => (
          <SidebarItem
            key={item.id}
            navId={item.id}
            label={item.name}
            path={item.path}
            iconName={item.iconName}
          />
        ))}
      </div>
    </div>
  );
}

export default SideBar;
