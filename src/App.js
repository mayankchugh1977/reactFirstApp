import React, { Component } from 'react';
// import ReactDOM from 'reactDOM';
import Header from './Header';
import CustomText from './CustomText';
import './App.css';

const buttonStyle = {
  textAlign: 'center',
  padding: 10,
  background: '#7ab97a',
  color: '#fafdfb',
  textTransform: 'uppercase'
};
const textStyle = {
  textAlign: 'center',
  padding: 10,
  color: '	#838588',
  textTransform: 'uppercase'
};

var imageStyle = {
  height: 200,// Line 1
  width: 200, // Line 2
  border: '3px solid #aaa', // Line 3
  borderRadius: '50%' // Line 4
};

// ReactDOM.render(
//   <div>
//      <CustomText text="UpGrad"/>
//   </div> ,
//   document.getElementById("root")
// );

// React.createElement('div', {className: "main-container"}, "h1", "UpGrad", "p", "Building Careers of Tomorrow!");

class App extends Component {

  deletehandler(){
    alert("delete clikced");
  }

  clickHandler(message){
    alert(message);
  }

  render() {

    let subscribers = [
      {
        id: 1,
        name: "Shilpa Bhat",
        phone: "9999999999"
      },
      {
          id: 2,
          name: "Srishti Gupta",
          phone: "8888888888"
      }
    ];
        return (
          <div>
              <Header name="Mayank Chugh" tagline="My Tag"/>
              <CustomText text="UpGrad"/>
              <div className="component-body-container">
                  <button className="custom-btn add-btn">Add</button>
                  <div className="grid-container heading-container">
                    <span className="grid-item name-heading">Name</span>
                    <span className="grid-item phone-heading">Phone</span>
                  </div>
                  {
                    subscribers.map(sub => {
                      return <div key={sub.id} className="grid-container heading-container">
                              <span className="grid-item">{sub.name}</span>
                              <span className="grid-item">{sub.phone}</span>
                              <span className="grid-item">
                                <button className="custom-btn delete-btn" onClick={this.clickHandler.bind(this, "Delete Handler Clicked")}>Delete</button>
                              </span>
                          </div>

                    })
                  }                  
              </div>
          </div>      
      );
    }
}

export default App;
