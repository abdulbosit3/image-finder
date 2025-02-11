const ImageGalleryItem = ({ image, handleLargeImg }) => {
  return (
    <li
      onClick={() => handleLargeImg(image.largeImageURL)}
      className="ImageGalleryItem"
    >
      <a href="image.webformatURL" download={image.webformatURL}></a>
      <img
        className="ImageGalleryItem-image"
        src={image.webformatURL}
        alt="{image.tags}"
      />
    </li>
  );
};

export default ImageGalleryItem;
