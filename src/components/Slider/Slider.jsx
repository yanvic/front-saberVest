import React, {useEffect, useState} from "react";
import '././Slider.css'
import '../../styles/hero.css'
import heroDarkImg from '../../images/college-exam.svg'


const Slider = () => {
const images = [heroDarkImg, heroDarkImg];

const [index, setIndex] = useState(0);
const delay = 2500;
const timeoutRef = React.useRef(null);

function resetTimeout() {
    if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
    }
}


useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
        () =>
            setIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            ),
        delay
    );

    return () => {
        resetTimeout();
    };
}, [images.length, index]);

return (
    <div >
        <div className="slideshow">
            <div className="slideshowSlider" style={{transform: `translate3d(${-index * 100}%, 0, 0)`}}>
                {images.map((src, idx) => (
                    <div className="slide" key={idx}>
                        <img src={src} alt={`Slide ${idx + 1}`} className="slideImage"/>
                    </div>
                ))}
            </div>
            <div className="slideshowDots">
                {images.map((_, idx) => (
                    <div key={idx} className={`slideshowDot${index === idx ? " active" : ""}`}
                         onClick={() => setIndex(idx)}>
                    </div>
                ))}
            </div>
        </div>


    </div>
);
};

export default Slider;