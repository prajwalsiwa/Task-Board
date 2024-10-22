/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useEffect, useRef, useState } from 'react';
import Icon from '@Components/common/Icon';
import Input from '../Input';

interface ISelectProps {
  options: Record<string, any>[];
  selectedOption?: string | number | null;
  placeholder?: string;
  onChange?: (selectedOption: any) => void;
  labelKey?: string;
  valueKey?: string;
  direction?: string;
  className?: string;
  withSearch?: boolean;
  inputTagClassname?: string;
}

function getPosition(direction: string) {
  switch (direction) {
    case 'top':
      return 'bottom-[2.4rem]';
    case 'bottom':
      return 'top-[2.8rem]';
    default:
      return 'top-[3rem]';
  }
}

export default function Select({
  options,
  selectedOption,
  onChange,
  placeholder = 'Select',
  labelKey = 'label',
  valueKey = 'value',
  direction = 'bottom',
  className,
  withSearch = false,
  inputTagClassname,
}: ISelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(selectedOption);
  const [position, setPosition] = useState(direction);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    setSelected(selectedOption);
  }, [selectedOption]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      dropdownRef?.current?.focus();
    } else {
      setSearchText('');
    }
  }, [isOpen]);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleOptionClick = (value: string) => {
    setSelected(value);
    // @ts-ignore
    onChange(value);
  };

  // check if selected option value matches with item value key
  const selectedLabel = options.find(item => item[valueKey] === selected)?.[
    labelKey
  ];

  const getPlaceholderText = () => {
    if (selected) {
      return selectedLabel || placeholder;
    }
    return placeholder;
  };

  const filterOptions = options?.filter(opt =>
    opt[labelKey].toLowerCase().includes(searchText.toLowerCase()),
  );

  const showClearIcon = !!searchText.length;

  return (
    <div className="relative">
      <div
        ref={dropdownRef}
        className={`group relative flex h-11 w-full
        cursor-pointer items-center justify-between border-b-2
        hover:border-blue-400
        ${className}`}
        onClick={toggleDropdown}
      >
        {withSearch ? (
          <Input
            type="text"
            placeholder={getPlaceholderText()}
            className={`w-full border-none ${inputTagClassname} ${
              selected ? 'placeholder:text-grey-800' : ''
            } focus:placeholder:text-grey-400 `}
            value={searchText}
            onClick={e => {
              setIsOpen(true);
            }}
            onChange={e => {
              setSearchText(e.target.value);
            }}
          />
        ) : (
          <p
            className={`w-full border-none ${
              selected && selectedLabel ? 'text-grey-800' : ''
            } px-2 text-sm text-grey-400`}
          >
            {getPlaceholderText()}
          </p>
        )}

        {showClearIcon ? (
          <Icon
            name="clear"
            className="absolute right-0 items-center 
              !text-base hover:text-primary-400"
            onClick={() => setSearchText('')}
          />
        ) : (
          <Icon
            name={
              // eslint-disable-next-line no-nested-ternary
              !isOpen ? 'expand_more' : withSearch ? 'search' : 'expand_less'
            }
            className="absolute right-1 items-center group-hover:text-primary-400"
          />
        )}
      </div>

      {isOpen && (
        <ul
          className={`scrollbar absolute  z-20 flex max-h-[150px] w-full
           animate-flip-down flex-col overflow-auto rounded-md border bg-white shadow-lg
             duration-300 ${getPosition(position)} `}
        >
          {options && filterOptions.length > 0 ? (
            filterOptions.map(option => (
              <li
                className="flex cursor-pointer list-none items-start px-4 py-2.5
                text-sm text-grey-800 hover:bg-primary-50"
                key={option[valueKey]}
                onClick={() => handleOptionClick(option[valueKey])}
              >
                <div>{option[labelKey]}</div>
              </li>
            ))
          ) : (
            <li className="cursor-default px-4 py-2.5 text-sm">
              No options available
            </li>
          )}
        </ul>
      )}
    </div>
  );
}
