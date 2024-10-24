import Icon from '@Components/common/Icon';

interface cardTypes {
  title: string;
  count: number;
  iconName: string;
}

function CardItem({ title, count, iconName }: cardTypes) {
  return (
    <div className="flex  w-full flex-col gap-1  ">
      <div className="title">
        <h4 className="!font-normal">{title}</h4>
      </div>
      <div className="flex w-full items-center justify-between">
        <div>
          <h4>{count}</h4>
        </div>
        <Icon name={iconName} />
      </div>
    </div>
  );
}

export default CardItem;
