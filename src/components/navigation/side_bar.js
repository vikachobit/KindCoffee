import React from 'react';
import './sidebar.css';
import dashboard from './icons/dashboard.png';
import files from './icons/files.png';
import help from './icons/help.png';
import bookmark from './icons/bookmark.png';
import statistic from './icons/statistic.png';
import home from './icons/home.png';

import { Link} from "react-router-dom";


export default class SideBar extends React.Component{
    render(){
        return(

            <div className='side-bar'>
                <div className= 'corner'>

                </div>

                <div className='home'>
                    <Link to = '/'><img src= {home} alt = 'home'/></Link>
                </div>

                <div className='dashboard'>
                    <img src= {dashboard} alt = 'dashboard'/>
                </div>

                <div className='statistic'>
                    <img src= {statistic} alt = 'statistic'/>
                </div>

                <div className='bookmark'>
                    <img src= {bookmark} alt = 'bookmark'/>
                </div>

                <div className='files'>
                    <img src= {files} alt = 'files'/>
                </div>

                <div className='help'>
                    <img src= {help} alt = 'help'/>
                </div>

            </div>




    );
    }

};

