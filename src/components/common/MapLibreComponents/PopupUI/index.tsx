/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react';
import { format } from 'date-fns';
import capitalizeFirstLetter from '@Utils/capitalizeFirstLetter';
// import { popupExceptionKeys } from '@src/constants/map';

const exceptions: string[] = [];

interface IPopupUIProps {
  data: Record<string, any> | null;
}

export default function PopupUI({ data = {} }: IPopupUIProps) {
  const popupData: Record<string, any> = Object.keys(data || {}).reduce(
    (obj, key) => {
      const name = capitalizeFirstLetter(key);
      const exceptionKeys = [...exceptions];
      const value = data?.[key];

      if (key === 'submitted_date') {
        const date = new Date(value);
        return {
          ...obj,
          // [name]: format(date, ['MMM do yyyy, h:mm a'])
        };
      }
      if (exceptionKeys.includes(key)) {
        return { ...obj };
      }
      return { ...obj, [name]: value };
    },
    {},
  );

  return (
    <ul
      className="scrollbar flex h-[12.5rem] flex-col 
    overflow-y-auto border-y-[1px] border-y-grey-500 text-grey-800"
    >
      {popupData &&
        Object.keys(popupData).map(key => (
          <li key={key} className="flex items-center py-1.5 odd:bg-grey-100">
            <p className="w-1/2 text-body-sm">{key}</p>
            <p className=" w-1/2 text-body-sm font-bold">
              {popupData[key]?.toString() || '-'}
            </p>
          </li>
        ))}
    </ul>
  );
}
