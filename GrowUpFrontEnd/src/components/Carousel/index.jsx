import React, { useRef } from 'react';

import "./style.css"

import rioSlide from "../../assets/rio.jpg"
import spSlide from "../../assets/sp.jpg"
import parisSlide from "../../assets/paris.jpg"
import tokyoSlide from "../../assets/tokyo.jpg"

function Carousel() {

    const count = useRef(1)

    setInterval(function () {
        nextImage();
    }, 10);

    function nextImage() {
        count.current = count.current + 1;
        if (count.current > 4) {
            count.current = 1;
        }
    }

    return (
        <section className='carousel'>
            <div className="title">
                <h2>Viagens de fim de semana econômicas</h2>
                <p>
                    Gaste menos e veja mais: troque os pontos mais populares da cidade
                    por estas alternativas econômicas.
                </p>
            </div>
            <div className="slider">
                <div className="slides">
                    <input type="radio" name="radio-btn" id="radio1"/>
                    <input type="radio" name="radio-btn" id="radio2"/>
                    <input type="radio" name="radio-btn" id="radio3"/>
                    <input type="radio" name="radio-btn" id="radio4"/>

                    <div className="slide first">
                        <img src={rioSlide} alt="Slide 1" />
                    </div>
                    <div className="slide">
                        <img src={spSlide} alt="Slide 2" />
                    </div>
                    <div className="slide">
                        <img src={parisSlide} alt="Slide 3" />
                    </div>
                    <div className="slide">
                        <img src={tokyoSlide} alt="Slide 4" />
                    </div>

                    <div className="navigation-auto">
                        <div className="auto-btn1"></div>
                        <div className="auto-btn2"></div>
                        <div className="auto-btn3"></div>
                        <div className="auto-btn4"></div>
                    </div>
                </div>

                <div className="manual-navigation">
                    <label htmlFor="radio1" className="manual-btn"></label>
                    <label htmlFor="radio2" className="manual-btn"></label>
                    <label htmlFor="radio3" className="manual-btn"></label>
                    <label htmlFor="radio4" className="manual-btn"></label>
                </div>

            </div>
        </section>
    );
}

export default Carousel;