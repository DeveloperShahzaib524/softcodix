import React from "react";
import logo from "../../Assets/logos/Logo.png";
import { NavLink } from "react-router-dom";
import '../../Styles/navbar.css'
import arrow from "../../Assets/logos/Expand Arrow.png";
import email from '../../Assets/logos/Email.png'
import phone from '../../Assets/logos/Phone.png'
import help from '../../Assets/logos/Help.png'
import { Link } from "react-router-dom";

const Navbar = () => {
  
  return (
    <>
    <div className='container1'>
      <div className='logocontainer'>
        <img src={logo} alt="" />
      </div>
      <div className='nav-items'>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink id='service' to="/services"  >
              Services <img src={arrow} alt="" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/pricing">Pricing</NavLink>
          </li>
          <li>
            <NavLink to="/portfolio">Portfolio</NavLink>
          </li>
          <li>
            <NavLink id='service'  to="/aboutus" >
              AboutUs <img src={arrow} alt="" />
            </NavLink>
          </li>
        </ul>
      </div>
      <div className='button'>
        
        <button>Get in touch</button>
      </div>
      
     
    </div>
    <div className="info">
        <div className='info_content'>
          <img src={email} alt="" />
          <Link to='mailto:support@softcodix.com'>support@softcodix.com</Link>
          
          
        </div>
        <div className='info_content'>
          <img src={help} alt="" />
          <Link to='/customersupport'>customer support</Link>
        </div>
        <div className='info_content'>
          <img src={phone} alt="" />
          <Link to='tel:+923151179953'>+92 (315)-117-9953</Link>
        </div>
      </div></>
    
  );
};

export default Navbar;


