import RoundedContainer from '@Components/common/RoundedContainer';
import { motion } from 'framer-motion';
import UsersItem from './UsersItem';

const userList = [
  {
    name: 'Prajwal Siwa',
    role: 'Admin',
    status: 'Active',
    duration: '1 day ago',
  },
  {
    name: 'Anita Shrestha',
    role: 'Editor',
    status: 'Inactive',
    duration: '2 days ago',
  },
  {
    name: 'Suman Tamang',
    role: 'Viewer',
    status: 'Pending',
    duration: '3 hours ago',
  },
  {
    name: 'Bibek Rai',
    role: 'Contributor',
    status: 'Active',
    duration: '5 days ago',
  },
  {
    name: 'Manisha Sharma',
    role: 'Manager',
    status: 'Suspend',
    duration: '2 weeks ago',
  },
];

function Users() {
  return (
    <RoundedContainer className="w-full">
      <div className="flex w-full justify-between border-b p-3">
        <h6 className="font-semibold">Full Name</h6>
        <div className="flex gap-8">
          <h5 className="font-medium">Status</h5>
          <h5 className="font-medium">Created at</h5>
        </div>
      </div>
      <div className="scrollbar h-[16.5rem] overflow-y-auto pr-4">
        {userList.map((user, index) => (
          <motion.div
            key={user.name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: index * 0.1 }}
            className="overflow-x-auto  "
          >
            <UsersItem
              key={user.name}
              name={user.name}
              role={user.role}
              status={user.status}
              duration={user.duration}
              className="py-2"
            />
          </motion.div>
        ))}
      </div>
    </RoundedContainer>
  );
}

export default Users;
