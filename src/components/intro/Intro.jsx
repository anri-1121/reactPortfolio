import './intro.scss';
import prf from '../images/profilePicture.png';
import { init } from  "ityped";
import { useEffect, useRef } from 'react';

export default function Intro() {
    const textRef = useRef();

    useEffect(()=> {
        init(textRef.current, {
            showCursor: true, 
            strings: ["FrDeveloper", "BckDeveloper"], 
        });
    }, []);

    return (
        <div className='intro' id='intro'>
            <div className="left">
                <div className="imgContainer">
                    <img src={prf} alt="ProfilePicture" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Andria Qadzanaia</h1>
                    <h3>Full Stack <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="https://icons.veryicon.com/png/o/internet--web/prejudice/down-arrow-5.png" alt="downArrowIcon" className='downArrow'/>
                </a>
            </div>
        </div>
    )
}