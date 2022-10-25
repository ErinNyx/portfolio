import './index.scss';
import Sidebar from '../Sidebar';
import { Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Avatar from '../../assets/images/me.png';


const Layout = () => {
    return (
        <div className='App'>
            <Sidebar />
            <div className='page'>
                <h1>Hi.</h1>
                <h3>My name is Erin,</h3>
                <h3>I'm your next <a><ch>Full Stack Developer</ch></a> <span className='hov-wrap'><FontAwesomeIcon icon={faArrowLeft} color='#cdcdcd'></FontAwesomeIcon> Hover over me!</span></h3>

                <a class='contact-me' to='/portfolio/contact'>Contact Me</a>

                <span className='long orange left'></span>
                <span className='long orange right'></span>

                <span className='big-avatar'>
                    <img src={Avatar}></img>
                </span>
                <span className='title-wrapper'>
                    <p className='porty'>Portfolio</p>
                    <span className='long white'></span>
                    <span className='short white top'></span>
                    <span className='short white middle'></span>
                    <span className='short white bottom'></span>
                </span>

                <span className='temp'>This picture is only temporary! <FontAwesomeIcon icon={faArrowRight} color='#cdcdcd'></FontAwesomeIcon></span>
            </div>
        </div>
    )
}

export default Layout;