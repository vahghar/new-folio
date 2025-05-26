'use client';
 
import { VedAnalytics } from 'ved-analytics';
 
const VedWrapper: React.FC = () => {
  return (
    <VedAnalytics
      project='portfolio'
      apiKey='OmasPbBbzMhbjrmFwxXlDdh2oDXt8jZJ8eaRjnhUwmwnOHO+esaOgV17D4DKl80+pYaCk34nNU2wDiWrwD2jNwT2HDjA8SWCrfYxNbxnPoXkPh2Ru7kSQsBilHImCN19C9diwSsmpZfkTDgLYtE3Datun8p2sg4T0H0WlDiYiZQ='
    />
  );
};
 
export default VedWrapper;