import { FlexColumn } from '@Components/common/Layouts';
import NoDataImage from '@Assets/images/no-data.png';

export default function NoDataComponent() {
  return (
    <div className="flex h-[220px] w-full items-center justify-center">
      <FlexColumn className="gap-3">
        <img src={NoDataImage} alt="No Data" height={100} width={100} />
        <h6>No Data Available</h6>
      </FlexColumn>
    </div>
  );
}
