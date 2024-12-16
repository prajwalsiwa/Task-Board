// import SearchInput from '@Components/common/FormUI/SearchInput';
import Icon from '@Components/common/Icon';
import { Button } from '@Components/RadixComponents/Button';
import { useTypedSelector } from '@Store/hooks';
import { useNavigate } from 'react-router-dom';

function NavItem() {
  const { name } = useTypedSelector(state => state.sidebar.activeState);
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem('token');
  return (
    <div className="flex   h-14 w-full">
      <div className="flex w-full justify-between">
        <div className="flex h-full items-center   ">
          <h4 className="text-white">{name}</h4>
        </div>
        {/* <div className="h-full ">
          <SearchInput
            inputValue=""
            className="h-full w-72 rounded-lg bg-white "
          />
        </div> */}
      </div>
      <div className="flex w-full items-center justify-end gap-4">
        <div className="flex">
          <Icon name="notifications" className="text-white" />
        </div>
        {isAuthenticated ? (
          <div className="flex h-10 w-10 items-center justify-center rounded-full border bg-orange-600 text-lg text-white">
            E
          </div>
        ) : (
          <Button
            onClick={() => navigate('/login')}
            className="bg-grey-300 text-lg text-grey-800 hover:border hover:border-grey-800 hover:bg-grey-500 hover:text-white "
          >
            Sign In
          </Button>
        )}
      </div>
    </div>
  );
}

export default NavItem;
