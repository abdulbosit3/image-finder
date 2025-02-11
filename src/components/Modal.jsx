const Modal = ({ largeImg, handleDelete }) => {
  return (
    <div className="Overlay">
      <div className="Modal">
        <button className="modal_close" onClick={handleDelete}>
          x
        </button>
        <img src={largeImg} alt="" />
      </div>
    </div>
  );
};

export default Modal;
