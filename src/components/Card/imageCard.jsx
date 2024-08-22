import '../../components/Card/ImageCard.css';
const ImageCard = ({children, imgSrc, props}) => {
    return (
        <div {...props} className="card">
            <img src={imgSrc} alt="" className="image"/>
            <div className="overlay">
                <div className="text-content">{children}</div>
            </div>
        </div>
)
    ;
};
export default ImageCard;