import axios from 'axios';

const RequestModal = ({ student_id, info, requestType, admin }) => {

  const handleAccount = (status) => {
    switch (status[1]) {
      case '?':
        //
        break;
      case 'a':
        //
        break;
      case 'r':
        //
        break;
    }
  }

  const handlePass = (status) => {
    if(admin == "college"){
      //
    }
    else if(admin == "bus-service"){
      //
    }
    switch (status[3]) {
      case '?':
        //
        break;
      case 'a':
        //
        break;
      case 'r':
        //
        break;
    }
  }

  return (
    <>
      <dialog id={id} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{info}</h3>
            {(requestType[0]=='a') ?(
              <>
                {(requestType[1]!='?') && <button className="btn btn-outline btn-primary" onClick={() => handleAccount('?')}>Restore</button>}               
                {(requestType[1]!='a') && <button className="btn btn-outline btn-primary" onClick={() => handleAccount('a')}>Accept</button>}               
                {(requestType[1]!='r') && <button className="btn btn-outline btn-primary" onClick={() => handleAccount('r')}>Reject</button>}               
              </>
            ): (requestType[0]=='b') ?(
              <>
                {(requestType[4]!='?') && <button className="btn btn-outline btn-primary" onClick={() => handlePass('?')}>Restore</button>}               
                {(requestType[4]!='a') && <button className="btn btn-outline btn-primary" onClick={() => handlePass('a')}>Accept</button>}               
                {(requestType[4]!='r') && <button className="btn btn-outline btn-primary" onClick={() => handlePass('r')}>Reject</button>}               
              </>
            ):(<></>)
            }
          <div className="modal-action">
          </div>
        </div>
      </dialog>
    </>
  )
};

export default RequestModal;

