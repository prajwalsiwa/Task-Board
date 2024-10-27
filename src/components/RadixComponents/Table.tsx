/* eslint-disable react/jsx-props-no-spreading */
// import *, { forwardRef, useEffect, useRef, useState }  as React from 'react';
import React, { forwardRef, useEffect, useRef, useState } from 'react';

import { cn } from '@Utils/index';

interface ITableProps extends React.HTMLAttributes<HTMLTableElement> {
  containerClassName?: string;
}
const Table = React.forwardRef<HTMLTableElement, ITableProps>(
  ({ className, containerClassName, ...props }, ref) => (
    <div
      className={cn(
        'scrollbar h-fit max-h-[calc(100vh-10rem)] w-full overflow-x-auto rounded-xl border border-gray-300',
        containerClassName,
      )}
    >
      <table
        ref={ref}
        className={cn('relative w-full caption-bottom text-sm', className)}
        {...props}
      />
    </div>
  ),
);
Table.displayName = 'Table';

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead
    ref={ref}
    className={cn(
      'sticky left-0 top-[-.4px] z-10 h-[2rem]  bg-white',
      className,
    )}
    {...props}
  />
));
TableHeader.displayName = 'TableHeader';

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody ref={ref} className={cn('', className)} {...props} />
));
TableBody.displayName = 'TableBody';

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn('max-h-16  border-t font-medium', className)}
    {...props}
  />
));
TableFooter.displayName = 'TableFooter';

// const TableRow = React.forwardRef<HTMLTableRowElement, React.HTMLAttributes<HTMLTableRowElement>>(
//   ({ className, ...props }, ref) => (
//     <tr
//       ref={ref}
//       className={cn(
//         'data-[state=selected]:bg-muted border-b transition-colors h-[2.5rem]',
//         className,
//       )}
//       {...props}
//     />
//   ),
// );
// TableRow.displayName = 'TableRow';

const TableRow = forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => {
  const [dynamicHeight, setDynamicHeight] = useState(false);
  const rowRef = useRef<HTMLTableRowElement | null>(null);

  useEffect(() => {
    if (rowRef.current) {
      const minHeight = 2.5 * 16; // Convert 2.5rem to pixels (assuming 1rem = 16px)
      const contentHeight = rowRef.current.scrollHeight;

      setDynamicHeight(contentHeight > minHeight);
    }
  }, [rowRef]);

  return (
    <tr
      ref={el => {
        rowRef.current = el;
        if (typeof ref === 'function') {
          ref(el);
        } else if (ref) {
          // eslint-disable-next-line no-param-reassign
          ref.current = el;
        }
      }}
      className={cn(
        ' group border-b transition-colors hover:bg-gray-100',
        dynamicHeight ? 'max-h-auto' : 'h-[2.5rem]',

        className,
      )}
      {...props}
    />
  );
});

TableRow.displayName = 'TableRow';

export default TableRow;

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      'gap-1 border-r-[1px] border-white bg-white px-3 py-1 font-bold text-white [&:has([role=checkbox])]:pr-0',
      className,
    )}
    {...props}
  />
));
TableHead.displayName = 'TableHead';

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn(
      'cursor-pointer bg-transparent px-3  py-2.5 text-gray-800 transition-colors [&:has([role=checkbox])]:pr-0',
      className,
    )}
    {...props}
  />
));
TableCell.displayName = 'TableCell';

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption ref={ref} className={cn('mt-4 ', className)} {...props} />
));
TableCaption.displayName = 'TableCaption';

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
};
