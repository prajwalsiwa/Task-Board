import Icon from '@Components/common/Icon';
import { NavLink } from 'react-router-dom';

interface sideBarItemProps {
  path: string;
  iconName: string;
  name: string;
}

function SidebarItem({ path, iconName, name }: sideBarItemProps) {
  return (
    <div className=" h-8 w-40  ">
      <NavLink
        to={path}
        className="flex h-full w-full items-center justify-center"
      >
        <button type="button" className="flex h-full w-full items-center gap-2">
          <Icon name={iconName} className="text-gray-600" />
          <span className="font text-[1rem]  text-gray-600">{name}</span>
        </button>
      </NavLink>
    </div>
  );
}

export default SidebarItem;
