import React from 'react';
import Card from '../../../../components/Card';
import { ReactComponent as ShoppingCardGreen } from './assets/ShoppingCardGreen.svg';
import { ReactComponent as ShoppingCardRed } from './assets/ShoppingCardRed.svg';

const Bookings = ({ isImprovement }) => (
  <Card
    isImprovement={isImprovement}
    icon={isImprovement ? <ShoppingCardGreen /> : <ShoppingCardRed />}
    title="Searches"
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

export default Bookings;
