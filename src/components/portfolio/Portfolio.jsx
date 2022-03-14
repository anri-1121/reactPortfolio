import './portfolio.scss';
import ProjectList from '../projectList/ProjectList';
import { useEffect, useState } from 'react';
import { webAppPortfolio, 
        desktopAppPortfolio, 
        backAppPortflio } from "../../data.js";

export default function Portfolio() {
    const [selected, setSelected] = useState('Web');
    const [data, setData] = useState([]);

    const list = [
        {
            id: "Web",
            title: "Web App",
        },
        {
            id: "Desktop",
            title: "Desktop App",
        },
        {
            id: "feature",
            title: "Feature App",
        },
    ];

    useEffect(()=> {
        switch(selected) {
            case "Web":
                setData(webAppPortfolio);
                break;
            case "Desktop":
                setData(desktopAppPortfolio);
                break;
            case "feature": 
                setData(backAppPortflio);
                break;
            default:
                setData(webAppPortfolio);
                break;
        }
    }, [selected])

    return(
        <div className='portfolio' id='portfolio'>
            <h1>Projects</h1>
            <ul>
                {list.map(item => (
                    <ProjectList id={item.id} title={item.title} active={selected === item.id} setSelected={setSelected} key={item.id}/>
                ))}
            </ul>
            <div className="container">
                {data.map(d => (
                    <div className="item" key={d.id} >
                        <img src={d.img} alt="" />
                        <h3>{d.title}</h3>    
                    </div>    
                ))}
            </div>
            <a href="#works">
                <img src="https://icons.veryicon.com/png/o/internet--web/prejudice/down-arrow-5.png" alt="downArrowIcon" className='downArrow'/>
            </a>
        </div>
    );
};