import './ImageList.css';
import ImageShow from "./ImageShow";

function ImageList({ images }) {
    const renderImages = images.map((image) => {
        return <ImageShow key={image.id} image={image}></ImageShow>;
    });
    return <div className="image-list">
        {renderImages}
    </div>;
}

export default ImageList;