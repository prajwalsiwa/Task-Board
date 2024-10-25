/* eslint-disable react/no-unstable-nested-components */
import ChartContainer from '@Components/common/Charts/ChartContainer';
import ChartHeader from '@Components/common/Charts/ChartHeader';
import React from 'react';

const userTasksList = [
  {
    name: 'Prajwal',
    value: 4,
  },
  {
    name: 'Ram',
    value: 2,
  },
  {
    name: 'Shyam',
    value: 3,
  },
  {
    name: 'Anjelina',
    value: 1,
  },
];

function UserChart() {
  return (
    <div className="w-full">
      <ChartContainer
        className="h-80"
        header={props => (
          <ChartHeader
            {...props}
            data={userTasksList}
            chartTitle="Tasks of Users"
            hasDownloadBtn
          />
        )}
        type="bar"
        data={userTasksList}
        // xLabel="Priority"
        yLabel=" Tasks"
        scrollable={false}
        fillWithType
        chartTitle="helo"
      />
    </div>
  );
}

export default UserChart;