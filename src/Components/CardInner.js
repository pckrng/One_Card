import React, {useRef, useEffect}  from 'react';
import '../Card.css';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";

import {TweenMax, Power3} from 'gsap'

function CardInner(){
    let introText = useRef(null);
    
    useEffect(() => {
        console.log(introText);
        TweenMax.to(
            introText,
            2,
            {
                opacity: 1,
                y: -30,
                ease: Power3.easeOut
            }
        )
    }, [])


    return(
        
        <div ref={el => {introText = el}}
        className="Tilt-inner">  
            <h1>OneCard</h1>
            <p>A Theme created with react.js and tilt.js </p>
            <Link to="/OpeningInfo" className="nextPage">CLICK ME!</Link>
        </div>
        
    );
}


export default CardInner;