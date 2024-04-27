import axios from 'axios';
const _ = require('lodash');

const RequestModal = ({ admin, info, id, requestType }) => {

  const handleAccount = (response) => {
    var newState = {'account': null}
    switch (response) {
      case 'a':
        newState.account = "applied"; 
        break;
      case 'o':
        newState.account = "student"; 
        break;
      case 'r':
        newState.account = "rejected"; 
        break;
    }

    axios.post('https://amr.sytes.net/api/college/requests', newState, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then(response => {
      console.log('Response:', response.data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }

  const handleApplication= (response) => {
    var newState = {'account': 'student'}
    if(admin == "college"){
      switch (response) {
        case 'a':
          newState.form='applied'
          newState.forwarded=0
          break;
        case 'o':
          newState.form='accepted'
          newState.forwarded=0
          break;
        case 'f':
          newState.form='applied'
          newState.forwarded=1
          break;
        case 'r':
          newState.form='rejected'
          newState.forwarded=0
          break;
      }
    }
    else if(admin == "bus-service"){
      switch (response) {
        case 'a':
          newState.form='applied'
          newState.forwarded=1
          break;
        case 'o':
          newState.form='accepted'
          newState.forwarded=1
          break;
        case 'r':
          newState.form='rejected'
          newState.forwarded=1
          break;
      }
    }

    axios.post('https://amr.sytes.net/api/college/requests', newState, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then(response => {
      console.log('Response:', response.data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }

  return (
    <>
      <dialog id={id} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{info.name}</h3>
          {(info.email) && <p className="py-4"><b>Email:</b> {info.email}</p>}
          {(info.college) && <p className="py-4"><b>College:</b> {info.college}</p>}
          {(info.course) && <p className="py-4"><b>Course:</b> {info.course}</p>}
          {(info.batch) && <p className="py-4"><b>Batch:</b> {info.batch}</p>}
          {(info.semester) && <p className="py-4"><b>Semester:</b> {info.semester}</p>}
          {(info.rollno) && <p className="py-4"><b>RollNo:</b> {info.rollno}</p>}
          {(info.department) && <p className="py-4"><b>Department:</b> {info.department}</p>}
          {(info.address) && <p className="py-4"><b>Address:</b> {info.address}</p>}
          {(info.phone) && <p className="py-4"><b>Phone:</b> {info.phone}</p>}

          <div className="modal-action">

            {(requestType.renew == null && requestType.forwarded == null && requestType.form == null) ?
              {(requestType.account != 'applied') && <button className="btn btn-outline" onClick={() => handleAccount('a')}>Restore</button>}
              {(requestType.account != 'student') && <button className="btn btn-outline" onClick={() => handleAccount('o')}>Accept</button>}
              {(requestType.account != 'rejected') && <button className="btn btn-outline" onClick={() => handleAccount('r')}>Reject</button>}
            :
              {(requestType.form != 'applied') && <button className="btn btn-outline" onClick={() => handleApplication('a')}>Restore</button>}
              {(requestType.form != 'accepted') && <button className="btn btn-outline" onClick={() => handleApplication('o')}>Accept</button>}
              {(requestType.form != 'accepted') && (admin=='college')) && <button className="btn btn-outline" onClick={() => handleApplication('f')}>Forward</button>}
              {(requestType.form != 'accepted') && (admin=='college') && (requestType.forwarded == 1)) && <button className="btn btn-outline" onClick={() => handleApplication('o')}>Withdraw</button>}
              {(requestType.form != 'rejected') && <button className="btn btn-outline" onClick={() => handleApplication('r')}>Reject</button>}
              }
            }

            <button className="btn">Close</button>
          </div>
        </div>
      </dialog>
    </>
  )
};

export default RequestModal;

