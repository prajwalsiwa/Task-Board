import SearchInput from '@Components/common/FormUI/SearchInput';
import Icon from '@Components/common/Icon';

function NavItem() {
  return (
    <div className="flex   h-10 w-full">
      <div className="flex w-full justify-between">
        <div className="flex h-full items-center   ">
          <h4 className="text-white">Main Dashboard</h4>
        </div>
        <div className="h-full ">
          <SearchInput
            inputValue=""
            className="h-full w-72 rounded-lg bg-white "
          />
        </div>
      </div>
      <div className="flex w-full items-center justify-end gap-4">
        <div className="flex">
          <Icon name="notifications" className="text-white" />
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-full border bg-orange-600 text-lg text-white">
          PS
        </div>
      </div>
    </div>
  );
}

export default NavItem;
