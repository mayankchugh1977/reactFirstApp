import React from 'react';

const CustomText = function(properties) {
    return (
       <p>{properties.text}</p>
    );
 }
  
// import ReactDOM from 'reactDOM';


// const CustomText = function(properties) {
//     return (
//        <p>{properties.text}</p>
//     );
//  }
  
//  ReactDOM.render(
//     <div>
//        <CustomText text="UpGrad"/>
//     </div> ,
//     document.getElementById("root")
//  );

//  const CustomText = function(properties){
//     return (
//         <div>
//             <p>{properties.text}</p>	        
//         </div>
//     )
// }

// const CustomText = function(props){
//     return (
//         // <div style={headerStyle}>
//         <div className="header">
//             <h1>{props.name}</h1>
// 	        <h3>{props.tagline}</h3>
//         </div>
//     )
// }

export default CustomText;