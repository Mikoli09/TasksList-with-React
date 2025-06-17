
// const reportWebVitals = (onPerfEntry?: (metric: any) => void): void => {
//   if (onPerfEntry && onPerfEntry instanceof Function) {
//     import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
//       getCLS(onPerfEntry);
//       getFID(onPerfEntry);
//       getFCP(onPerfEntry);
//       getLCP(onPerfEntry);
//       getTTFB(onPerfEntry);
//     });
//   }
// };

// export default reportWebVitals;

// import { onCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

// const reportWebVitals = (onPerfEntry?: (metric: any) => void): void => {
//   if (!onPerfEntry) return;

//   onCLS(onPerfEntry);
//   getFID(onPerfEntry);
//   getFCP(onPerfEntry);
//   getLCP(onPerfEntry);
//   getTTFB(onPerfEntry);
// };

// export default reportWebVitals;

import { onCLS, onFCP, onLCP, onTTFB, Metric } from 'web-vitals';

const reportWebVitals = (onPerfEntry?: (metric: Metric) => void): void => {
  if (!onPerfEntry) return;

  onCLS(onPerfEntry);
  onFCP(onPerfEntry);
  onLCP(onPerfEntry);
  onTTFB(onPerfEntry);
};

export default reportWebVitals;
