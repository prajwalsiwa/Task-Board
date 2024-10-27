import Chip from '@Components/common/Chip';

interface useritemsProps {
  name: string;
  role: string;
  status: string;
  duration: string;
  className?: string;
}

function UsersItem({
  name,
  role,
  status,
  duration,
  className,
}: useritemsProps) {
  return (
    <div
      className={`flex h-14 w-full items-center  justify-center gap-2 border-b p-2 ${className}`}
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 text-gray-800">
        {name
          ?.split(' ')
          .map((item: string) => {
            return item.charAt(0).toUpperCase();
          })
          .join('')}
      </div>
      <div className="flex h-full w-full justify-between">
        <div className="flex flex-col  gap-1">
          <span>{name}</span>
          <span>{role}</span>
        </div>
        <div className="flex h-full items-start justify-start gap-8 ">
          <Chip
            label={status}
            onClose={undefined}
            className="!flex !w-16 !items-center !justify-center !rounded-3xl !bg-gray-500 !text-white"
          />
          <span>{duration}</span>
        </div>
      </div>
    </div>
  );
}

export default UsersItem;
