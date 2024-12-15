import Icon from '@Components/common/Icon';
import { setActiveState } from '@Store/actions/sidebar';
import { useTypedSelector } from '@Store/hooks';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

interface sideBarItemProps {
  path: string;
  iconName: string;
  name: string;
  id: number;
}

function SidebarItem({ id, path, iconName, name }: sideBarItemProps) {
  const activeState = useTypedSelector(state => state.sidebar.activeState);
  const isActive = activeState === id;
  const dispatch = useDispatch();

  const handleclick = () => {
    dispatch(setActiveState(id));
  };

  return (
    <div className=" h-8 w-40  ">
      <NavLink
        to={path}
        className="flex h-full w-full items-center justify-center"
        onClick={handleclick}
      >
        <button
          type="button"
          className={`flex h-full w-full items-center gap-2 ${isActive ? 'border-r-4 border-grey-800' : ''}`}
        >
          <Icon name={iconName} className="text-gray-600" />
          <span className="font text-[1rem]  text-gray-600">{name}</span>
        </button>
      </NavLink>
    </div>
  );
}

export default SidebarItem;
