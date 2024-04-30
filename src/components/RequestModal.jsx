import axios from 'axios';

const RequestModal = ({ student_id, user_id, info, requestType, admin, setTrigger }) => {

  const hideModal = (modalId) => {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('open'); 
    }
  };

  const handleAccount = (status) => {
    let endpoint = `https://amr.sytes.net/api/college/account/${user_id}`
    switch (status) {
      case '?':
        endpoint = endpoint + "/applied" 
        break;
      case 'a':
        endpoint = endpoint + "/accepted" 
        break;
      case 'r':
        endpoint = endpoint + "/rejected" 
        break;
    }
    console.log(endpoint)
    axios.post(endpoint, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then(response => {
      console.log('Response:', response.data);
      hideModal(student_id)
      setTrigger(prevState => !prevState)
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }

  const handlePass = (status) => {
    let endpoint = "https://amr.sytes.net/api"
    if(admin == "college"){
      endpoint = endpoint + `/college/pass/${user_id}` 
    }
    else if(admin == "bus-service"){
      endpoint = endpoint + `/service/pass/${user_id}` 
    }
    switch (status) {
      case '?':
        endpoint = endpoint + "/applied"
        break;
      case 'a':
        endpoint = endpoint + ((requestType[0]=='a')?"/accepted":"/forwarded")
        break;
      case 'r':
        endpoint = endpoint + "/rejected"
        break;
    }
    console.log(endpoint)
    axios.post(endpoint, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then(response => {
      console.log('Response:', response.data);
      hideModal(student_id)
      setTrigger(prevState => !prevState)
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }

  return (
    <>
      <dialog id={student_id} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{info}</h3>
            {(requestType[0] === 'a') && (
              <>
                {(requestType[1] !== '?') && <button className="btn btn-outline btn-primary m-2" onClick={() => handleAccount('?')}>Restore</button>}
                {(requestType[1] !== 'a') && <button className="btn btn-outline btn-primary m-2" onClick={() => handleAccount('a')}>Accept</button>}
                {(requestType[1] !== 'r') && <button className="btn btn-outline btn-primary m-2" onClick={() => handleAccount('r')}>Reject</button>}
              </>
            )}

            {(requestType[0] === 'b') && (
              <>
                {(requestType[4] !== '?') && <button className="btn btn-outline btn-primary m-2" onClick={() => handlePass('?')}>Restore</button>}
                {(requestType[4] !== 'a') && <button className="btn btn-outline btn-primary m-2" onClick={() => handlePass('a')}>Accept</button>}
                {(requestType[4] !== 'r') && <button className="btn btn-outline btn-primary m-2" onClick={() => handlePass('r')}>Reject</button>}
              </>
            )}
          <div className="modal-action">
          </div>
        </div>
      </dialog>
    </>
  )
};

export default RequestModal;

