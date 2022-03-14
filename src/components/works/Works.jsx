import './works.scss';
import leftSliderArrow from '../images/leftArrow.png';
import rightSliderArrow from '../images/rightArrow.png';
import prj1Web from "../images/prj1.png";
import prj2Web from "../images/prj2.png";
import prjDesk from "../images/prj3.png";
import prjBack from "../images/prj4.png";
import iconSlider from '../images/smartphone.png';
import { useState } from 'react';

export default function Works() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const Data = [
        {
            id: "1", 
            icon: iconSlider,
            title: "SpaceX Clone",
            desc: "This website is spaceX clone. There awasome navbar, burger menu, and appear switch menu. Some section to describe the space and their rocket.",
            img: prj1Web, 
        }, 
        {
            id: "2", 
            icon: iconSlider,
            title: "Serivces App",
            desc: "This website is service app. There are registration form, search in navbar, lots of section to some information of this servition.",
            img: prj2Web, 
        },
        {
            id: "3",
            icon: iconSlider,
            title: "ValuteGen App",
            desc: "This app should calculate to your validate value of money, to three differents valute: ₾GEL, $USD, €EU.",
            img: prjDesk, 
        },
        {
            id: "4", 
            icon: iconSlider,
            title: "Calculator App",
            desc: "This calculator is builtin in website to html, css and javascript. It can do some math operation with any number.",
            img: prjBack, 
        }
    ]

    const handleClick = (way) => {
        if(way === "left") {
            setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : Data.length - 1);
        }else {
            setCurrentSlide(currentSlide < Data.length - 1 ? currentSlide + 1 : 0);
        }
    }

    return (
        <div className='works' id="works">
            <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
            { Data.map((d) => (
               <div className="container" key={parseInt(d.id)}>
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={d.icon} alt="" />
                                </div>
                                <h2>{d.title}</h2>
                                <p>{d.desc}</p>
                                <a href="#intro">
                                    <span>Projects</span>
                                </a>
                            </div>
                        </div>
                        <div className="right">
                            <img src={d.img} alt="" />    
                        </div>
                    </div>
                </div>    
            ))}
            </div>
            <img src={leftSliderArrow} alt="" className='arrow left'  onClick={() => handleClick("left")}/>
            <img src={rightSliderArrow} alt="" className='arrow right' onClick={() => handleClick()}/>
        </div>
    )
}