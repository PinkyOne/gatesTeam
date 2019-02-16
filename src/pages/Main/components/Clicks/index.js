import React from 'react';
import Card from '../../../../components/Card';
import { ReactComponent as ClickGreen } from './assets/ClickGreen.svg';
import { ReactComponent as ClickRed } from './assets/ClickRed.svg';

const Clicks = ({ isImprovement }) => (
  <Card
    isImprovement={isImprovement}
    icon={isImprovement ? <ClickGreen /> : <ClickRed />}
    title="Clicks"
    titleDiff="+5%"
    currentInfoValue="Test"
    previousInfoValue="Test"
    currentInfoLabel="Test"
    previousInfoLabel="Test"
    primaryInfo="Test primary"
    secondaryInfo="Test secondary"
    helpLinks={[
      { link: '/test1', label: 'Test1' },
      { link: '/test2', label: 'Test2' },
      { link: '/test3', label: 'Test3' },
    ]}
  />
);

export default Clicks;
