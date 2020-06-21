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
            <h1>{props.name}</h1>
	        <h3>{props.tagline}</h3>
        </div>
    )
}

// class Header extends Component {
//     render(){
//         return (
//             <div className="header">
//                 Phone Directory
//             </div>
//         )
//     }
// }

export default Header;