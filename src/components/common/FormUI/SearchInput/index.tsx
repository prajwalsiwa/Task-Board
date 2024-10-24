import { ChangeEventHandler } from 'react';
import Icon from '@Components/common/Icon';
import { FlexRow } from '@Components/common/Layouts';
import Input from '../Input';

interface ISearchInputProps {
  inputValue: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  onClear?: () => void;
  showClearIcon?: boolean;
  className?: string;
}

export default function SearchInput({
  inputValue,
  placeholder,
  onChange,
  onClear,
  showClearIcon = false,
  className,
}: ISearchInputProps) {
  return (
    <FlexRow
      className={`group relative w-full items-center 
        border hover:border-primary-400 ${className}`}
    >
      <Icon
        name="search"
        className="text-grey-500 group-hover:text-primary-400"
      />
      <Input
        type="text"
        className="w-full border-none"
        placeholder={placeholder || 'Search'}
        value={inputValue}
        onChange={onChange}
      />
      {(!!inputValue.length || showClearIcon) && (
        <Icon
          name="clear"
          onClick={onClear}
          className="hover:text-primary-400"
        />
      )}
    </FlexRow>
  );
}
