import axios from 'axios';

const RequestModal = ({ id, info }) => {

  return (
    <>
      <dialog id={id} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Head</h3>
            {info}
          <div className="modal-action">
          </div>
        </div>
      </dialog>
    </>
  )
};

export default RequestModal;

