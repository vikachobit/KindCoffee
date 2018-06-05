import React from 'react';
import './sidebar.css';
import Logo from './icons/Group 3.png';

export default class TopBar extends React.Component{
    render(){
        return(
          <div className='top-bar'>

              <div className= 'logo'>
                  <img src = {Logo} alt = 'KindCoffee'/>
              </div>
              <div className= 'icons-right'>

                  <i className="fa fa-search">
                  </i>
                  <i className="fa fa-bell">
                  </i>
                  <i className="fa fa-user-circle-o">
                  </i>

              </div>
          </div>

        );
    }

};
