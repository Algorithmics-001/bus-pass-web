import axios from 'axios';

const RequestModal = ({ info, id, requestType }) => {

  const handleRequest = (event) => {
    const decision = event.target.value  
    const status = {
      "id": "testid", // id field is not being fetched in api
      "status": `${requestType}-${decision}`
    } 
    console.log(status)

    axios.post('https://amr.sytes.net/college/requests/individual ', status, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      console.log('Response:', response.data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }

  const handleUndo = () => {
    const newAction = event.target.value
    const arr = requestType.split("-")
    if(newAction == "accepted"){
      arr[arr.length - 1] = "rejected"
    }
    else if(newAction == "rejected"){
      arr[arr.length - 1] = "rejected"
    }
    else if(newAction == ""){
      arr.pop()
    }
    const newStatus = arr.join("-")
    const status = {
      "id": "testid", // id field is not being fetched in api
      "status": {newStatus} 
    } 
    console.log(status)

    axios.post('https://amr.sytes.net/college/requests/individual ', status, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
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

            {(requestType.split("-")[requestType.split("-").length - 1] != "request") ?
              <form method="dialog">
                <button className="btn btn-outline btn-success mr-2" value="accepted" onClick={handleRequest}>Accept</button>
                <button className="btn btn-outline btn-warning mr-2" value="rejected" onClick={handleRequest}>Reject</button>
                <button className="btn">Close</button>
              </form>
              :
              <form method="dialog"> 
                {(requestType.split("-")[requestType.split("-").length - 1] === "rejected") ?
                  <button className="btn btn-outline btn-success mr-2" value="accepted" onClick={handleUndo}>Accept</button>
                  :
                  <button className="btn btn-outline btn-warning mr-2" value="rejected" onClick={handleUndo}>Reject</button>
                }
                <button className="btn btn-outline btn-warning mr-2" value="" onClick={handleUndo}>Restore</button>
                <button className="btn">Close</button>
              </form>
            }
          </div>
        </div>
      </dialog>
    </>
  )
};

export default RequestModal;

