import React, { Component } from 'react';
// import ReactDOM from 'reactDOM';
import Header from './Header.js';
// import CustomText from './CustomText';
import './ShowSubscribers.css';
import { Link } from 'react-router-dom';

// const buttonStyle = {
//   textAlign: 'center',
//   padding: 10,
//   background: '#7ab97a',
//   color: '#fafdfb',
//   textTransform: 'uppercase'
// };
// const textStyle = {
//   textAlign: 'center',
//   padding: 10,
//   color: '	#838588',
//   textTransform: 'uppercase'
// };

// var imageStyle = {
//   height: 200,// Line 1
//   width: 200, // Line 2
//   border: '3px solid #aaa', // Line 3
//   borderRadius: '50%' // Line 4
// };

// ReactDOM.render(
//   <div>
//      <CustomText text="UpGrad"/>
//   </div> ,
//   document.getElementById("root")
// );

// React.createElement('div', {className: "main-container"}, "h1", "UpGrad", "p", "Building Careers of Tomorrow!");

class ShowSubscribers extends Component {

  onDeletedClick = (subscriberId) => {
    this.props.deleteSubscriberHandler(subscriberId); 
  }

  // constructor()
  // {
  //   super();
  //   this.state = {
  //     subscribersListToShow: []
  //   }
  //   console.log("Constructor Called");
  // }

  // componentDidMount(){

  //   let newScubscriber = {
  //     id: 1,
  //     name: "Mayank Chugh",
  //     phone: "8888888888"
  //   }

  //   let subuscribersList = this.state.subscribersListToShow;
  //   subuscribersList.push(newScubscriber);
  //   this.setState({subscribersListToShow: subuscribersList});
  //   console.log("Component Did Mount Called");
  //   console.log("State", this.state);    
  // }

  // deletehandler(){
  //   alert("delete clicked");
  // }

  // clickHandler(message){
  //   alert(message);
  // }

  render() {
    // console.log("Render Constructor Called");
    // let subscribers = [
    //   {
    //     id: 1,
    //     name: "Shilpa Bhat",
    //     phone: "9999999999"
    //   },
    //   {
    //       id: 2,
    //       name: "Srishti Gupta",
    //       phone: "8888888888"
    //   }
    // ];
        return (
          <div className="component-container">
              <Header name="Phone Directory" /*tagline="My Tag"*//>
              {/* <CustomText text="UpGrad"/> */}
              <div className="component-body-container">
                   <Link to="/add">
            <button className="custom-btn add-btn">Add</button>
          </Link>
                  
                  <div className="grid-container heading-container">
                    <span className="grid-item name-heading">Name</span>
                    <span className="grid-item phone-heading">Phone</span>
                  </div>

                  {
                    this.props.subscribersList.map(sub => {
                      return <div key={sub.id} className="grid-container heading-container">
                              <span className="grid-item">{sub.name}</span>
                              <span className="grid-item">{sub.phone}</span>
                              <span className="grid-item action-btn-container">
                                <button className="custom-btn delete-btn" onClick={this.onDeletedClick.bind(this, sub.id)}>Delete</button>
                              </span>
                          </div>

                    })
                  }

              </div>
          </div>      
      );
    }
}

export default ShowSubscribers;
