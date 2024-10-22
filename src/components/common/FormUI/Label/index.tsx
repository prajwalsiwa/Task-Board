import { ReactNode } from 'react';

interface ILabelProps {
  children: ReactNode;
  htmlFor?: string | number;
  required?: boolean;
}

export default function Label({ children, htmlFor, required }: ILabelProps) {
  return (
    <label className="text-sm text-grey-800" htmlFor={htmlFor?.toString()}>
      {children}
      {required && <span className="text-red-500">*</span>}
    </label>
  );
}
