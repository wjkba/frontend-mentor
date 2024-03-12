function Modal({ isModal, setIsModal }) {
  return (
    <>
      <div className="modal">
        <div className="modal__content">
          <div className="modal__top">
            <img src="./images/icon-complete.svg" alt="" />
            <p>THANK YOU!</p>
            <p>We've added your card details</p>
          </div>
          <button onClick={() => setIsModal(false)} className="button-purple">
            Continue
          </button>
        </div>
      </div>
    </>
  );
}
export default Modal;
