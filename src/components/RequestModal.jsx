const RequestModal = ({ info, id }) => {
  return (
    <>
      <dialog id={id} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{info.name}</h3>
          {(info.email) && <p className="py-4"><b>Email:</b> {info.email}</p>}
          {(info.course) && <p className="py-4"><b>Course:</b> {info.course}</p>}
          {(info.batch) && <p className="py-4"><b>Batch:</b> {info.batch}</p>}
          {(info.semester) && <p className="py-4"><b>Semester:</b> {info.semester}</p>}
          {(info.rollno) && <p className="py-4"><b>RollNo:</b> {info.rollno}</p>}
          {(info.department) && <p className="py-4"><b>Department:</b> {info.department}</p>}
          {(info.address) && <p className="py-4"><b>Address:</b> {info.address}</p>}
          {(info.phone) && <p className="py-4"><b>Phone:</b> {info.phone}</p>}
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  )
};

export default RequestModal;

