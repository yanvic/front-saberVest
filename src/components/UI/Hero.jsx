import React, {useEffect, useRef, useState} from "react";
import '../../styles/hero.css'
// import heroDarkImg from '../../images/college-exam.svg'
// import heroLightImg from '../../images/paper-pana.svg'
import Slider from "../Slider/Slider";
import {Link} from "react-router-dom";




const Hero = ({theme}) => {
    const colors = ["#0088FE", "#00C49F", "#FFBB28"];
// eslint-disable-next-line react-hooks/rules-of-hooks
    const [index, setIndex] = useState(0);
    const delay = 2500;
    const timeoutRef = useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

// eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === colors.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [colors.length, index]);

    return (
        <section className="hero__section" id="home">
            <div className="container">
                <div className="hero__wrapper">
                    <div className="hero__content">
                        <div>
                            <h2>Desvende o caminho ideal</h2>
                            <h2>para a aprovação</h2>
                            <h2 className="highlight">no Sabervest</h2>
                        </div>
                        <p className="description">
                            Explore nosso banco de questões, para um estudo direcionado e estratégico rumo à aprovação.
                        </p>

                        <div className="hero__btns">
                            <Link to="/university">
                            <button className="primary__btn">Explore</button>
                            </Link>
                            {/*<button className="secondary__btn">Saiba mais</button>*/}
                        </div>
                    </div>


                    <div className="hero__img">
                        {/*<div className="slideshow">*/}
                        {/*    <div className="slideshowSlider"    style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>*/}
                        {/*        {colors.map((backgroundColor, index) => (*/}
                        {/*            <div className="slide" key={index} style={{backgroundColor}}/>*/}
                        {/*        ))}*/}
                        {/*    </div>*/}
                        {/*</div>*/}


                        {/*<div className="slideshowDots">*/}
                        {/*    {colors.map((_, idx) => (*/}
                        {/*        <div key={idx} className={`slideshowDot${index === idx ? " active" : ""}`}*/}
                        {/*             onClick={() => {*/}
                        {/*                 setIndex(idx);*/}
                        {/*             }}>*/}
                        {/*        </div>*/}
                        {/*    ))}*/}
                        {/*</div>*/}

                    <Slider />

                    {/*<img src={theme === 'light-theme' ? heroLightImg : heroDarkImg} alt="Uno"/>*/}
                </div>
            </div>
        </div>
</section>
)
    ;
};

export default Hero;