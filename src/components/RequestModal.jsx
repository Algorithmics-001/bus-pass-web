const RequestModal = ({info}) => {
  return (
    <>
      <dialog id="InfoModal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{info.name}</h3>
          <p className="py-4"><b>Email:</b> {info.email}</p>
          <p className="py-4"><b>Course:</b> {info.course}</p>
          <p className="py-4"><b>Batch:</b> {info.batch}</p>
          <p className="py-4"><b>Semester:</b> {info.semester}</p>
          <p className="py-4"><b>RollNo:</b> {info.rollno}</p>
          <p className="py-4"><b>Department:</b> {info.department}</p>
          <p className="py-4"><b>Phone:</b> {info.phone}</p>
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

