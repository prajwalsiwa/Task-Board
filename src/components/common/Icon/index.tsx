interface IIconProps extends React.HTMLAttributes<HTMLElement> {
  name: string;
  className?: string;
  iconSymbolType?: string;
  onClick?: () => void;
}

export default function Icon({
  name,
  className,
  iconSymbolType = 'material-symbols-outlined',
  onClick,
}: IIconProps): JSX.Element {
  return (
    <i
      role="button"
      tabIndex={0}
      onKeyUp={() => {}}
      onClick={onClick}
      className={`text-icon-sm lg:text-2xl ${className} ${iconSymbolType}`}
    >
      {name}
    </i>
  );
}
