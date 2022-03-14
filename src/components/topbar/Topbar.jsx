import './topbar.scss';
import {Person, Mail} from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={ "topbar " + (menuOpen && "active")} >
            <div className="wrapper">
                <div className="left">
                    <a href='#intro' className='logo' >Portfolio</a>
                    <div className="itemContainer">
                        <Person className='icons'/>
                        <a href="tel:123-456-7890">
                            <span>+995 599 303 545</span>
                        </a>
                    </div>
                    <div className="itemContainer">
                        <Mail className='icons'/>
                        <span className='email'>
                            <a href="#contact">anriqadzanaia922@gmail.com</a>
                        </span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
