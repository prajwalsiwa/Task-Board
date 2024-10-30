import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@Components/RadixComponents/Table';

import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const tasksList = [
  {
    id: 1,
    name: 'Website Redesign',
    priority: 'High',
    team: 'Design',
    createdAt: '2024-09-12',
  },
  {
    id: 2,
    name: 'Mobile App Development',
    priority: 'Medium',
    team: 'Development',
    createdAt: '2024-09-10',
  },
  {
    id: 3,
    name: 'Marketing Campaign',
    priority: 'Low',
    team: 'Marketing',
    createdAt: '2024-09-15',
  },
  {
    id: 4,
    name: 'Database Optimization',
    priority: 'High',
    team: 'Database',
    createdAt: '2024-08-20',
  },
  {
    id: 5,
    name: 'Customer Survey Analysis',
    priority: 'Low',
    team: 'Research',
    createdAt: '2024-09-05',
  },
  {
    id: 6,
    name: 'Server Maintenance',
    priority: 'High',
    team: 'IT Support',
    createdAt: '2024-09-02',
  },
  {
    id: 7,
    name: 'Content Creation',
    priority: 'Medium',
    team: 'Content',
    createdAt: '2024-08-25',
  },
  {
    id: 8,
    name: 'SEO Optimization',
    priority: 'Low',
    team: 'SEO',
    createdAt: '2024-08-30',
  },
  {
    id: 9,
    name: 'QA Testing',
    priority: 'High',
    team: 'Quality Assurance',
    createdAt: '2024-08-15',
  },
  {
    id: 10,
    name: 'User Feedback Collection',
    priority: 'Medium',
    team: 'Support',
    createdAt: '2024-09-08',
  },
];

const TasksTable = () => {
  const { pathname } = useLocation();

  const isAddtasks = pathname === '/add-tasksship';

  return (
    <div
      className={`  !h-[100%]  !w-full overflow-hidden sm:w-[20rem] ${isAddtasks ? 'py-[4.8rem]' : ''}`}
    >
      <Table className="!h-full" containerClassName="!h-full !overflow-hidden">
        <div className="prajwal  scrollbar !h-full  overflow-auto pb-1">
          <TableHeader className=" w-full">
            <TableRow className="!h-8 ">
              <TableHead className="w-[5%] text-center !text-xs font-bold text-gray-500">
                S.N.
              </TableHead>
              <TableHead className="w-[30%] text-center !text-xs font-bold text-gray-500">
                Name
              </TableHead>
              <TableHead className="w-[10%] text-center !text-xs font-bold text-gray-500">
                Priority
              </TableHead>
              <TableHead className="w-[20%] text-center !text-xs font-bold text-gray-500">
                Team
              </TableHead>
              <TableHead className="w-[15%] text-center !text-xs font-bold text-gray-500">
                Created at
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="scrollable  !w-full overflow-y-auto">
            {tasksList.map((tasks, index) => (
              <motion.tr
                key={tasks.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: index * 0.1 }}
                className="!max-h-6 overflow-x-auto  "
              >
                <TableCell className="w-[5%] text-center">
                  {index + 1}
                </TableCell>
                <TableCell className="w-[25%] text-center ">
                  {tasks.name}
                </TableCell>
                <TableCell className="w-[10%] text-center">
                  {tasks.priority}
                </TableCell>
                <TableCell className="w-[20%] text-center">
                  {tasks.team}
                </TableCell>
                <TableCell className="w-[15%] text-center">
                  {tasks.createdAt}
                </TableCell>
              </motion.tr>
            ))}
          </TableBody>
        </div>
      </Table>
    </div>
  );
};

export default TasksTable;
