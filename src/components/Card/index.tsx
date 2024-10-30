import CardItem from './CardItem';

interface cardPropsTypes {
  title: string;
  count: number;
  iconName: string;
}

function Card({ title, count, iconName }: cardPropsTypes) {
  return (
    <div className=" flex h-fit w-full animate-fade-up items-center justify-center rounded-lg  border border-gray-200 px-4 py-5 shadow-md transition-transform ">
      <CardItem title={title} count={count} iconName={iconName} />
    </div>
  );
}

export default Card;
