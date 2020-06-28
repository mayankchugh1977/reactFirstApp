import React from 'react';
import './Header.css';

const headerStyle = {
    textAlign: 'center',
    padding: 20,
    background: '#000',
    color: '#fff',
    textTransform: 'uppercase'
 };

const Header = function(props){
    return (
        // <div style={headerStyle}>
        <div className="header">        
            <h1>{props.heading}</h1>
            <h1>{props.name}</h1>
	        <h3>{props.tagline}</h3>
        </div>
    )
}

// class Header extends Component {
//     render(){
//         return (
//             <div className="header">
//                  <h1>{this.props.name}</h1>
//                  <h3>{this.props.tagline}</h3>
//             </div>
//         )
//     }
// }

export default Header;