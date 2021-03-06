import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
//import ShowSubuscribers from './ShowSubuscribers';
import * as serviceWorker from './serviceWorker';
//import AddSubscriber from './AddSubscriber'
import './common/common.css';
import PhoneDirectory from './PhoneDirectory';

ReactDOM.render(<PhoneDirectory />, document.getElementById('root'));
// ReactDOM.render(
//  {/* <React.StrictMode> */}
//    <PhoneDirectory/>
//    {/* <ShowSubuscribers/> */}
//    {/* <AddSubscriber/> */}
//      
//  {/* </React.StrictMode> */},
//  document.getElementById('root')
//);
registerServiceWorker();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
