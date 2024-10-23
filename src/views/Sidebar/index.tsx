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
    path: '/tasks',
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
    <div className="h-full w-64 shadow-2xl">
      <div className="flex h-28 items-center px-8">
        <h3>Task Board</h3>
      </div>
      <div className="w-full px-4">
        <hr className="w-full " />
      </div>
      <div className="flex h-full w-full  flex-col gap-4 px-8 py-8 ">
        {sidebarList.map(item => (
          <SidebarItem
            key={item.id}
            name={item.name}
            path={item.path}
            iconName={item.iconName}
          />
        ))}
      </div>
    </div>
  );
}

export default SideBar;
