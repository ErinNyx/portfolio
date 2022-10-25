import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faHackerrank, faInstagram, faSpotify } from '@fortawesome/free-brands-svg-icons';
import LogoE from '../../assets/images/e.png';
import LogoErin from '../../assets/images/erin.png';

const Sidebar = () => (
    <div class='nav-bar'>
        <Link class='logo' to='/'>
            <img src={LogoE} alt='logo' />
            <img class='sub-logo' src={LogoErin} alt='erin' />
        </Link>

        <nav>
            <NavLink exact='true' activeclassname='active' to='/'>
                <FontAwesomeIcon icon={faHome} color='#4d4d4e'></FontAwesomeIcon>
            </NavLink>
            <NavLink exact='true' activeclassname='active' to='/about' className='about-link'>
                <FontAwesomeIcon icon={faUser} color='#4d4d4e'></FontAwesomeIcon>
            </NavLink>
            <NavLink exact='true' activeclassname='active' to='/contact' className='contact-link'>
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'></FontAwesomeIcon>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/david-argo-4165b6211/'>
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"></FontAwesomeIcon>
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href='https://github.com/ErinNyx'>
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e"></FontAwesomeIcon>
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href='https://www.hackerrank.com/d_argo'>
                    <FontAwesomeIcon icon={faHackerrank} color="#4d4d4e"></FontAwesomeIcon>
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href='https://www.instagram.com/erinnyx/'>
                    <FontAwesomeIcon icon={faInstagram} color="#4d4d4e"></FontAwesomeIcon>
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href='https://open.spotify.com/playlist/543DWdsXOxWNA8b63jw1xK?si=15aa9b792f444a37'>
                    <FontAwesomeIcon icon={faSpotify} color="#4d4d4e"></FontAwesomeIcon>
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar;