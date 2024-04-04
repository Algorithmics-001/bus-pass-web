import RequestModal from "./RequestModal.jsx"

const Request = ({info, requestType}) => {

  const modalId = `infoModal_${info.email}`;

  return (
    <>
      <div className="w-full h-20 rounded-md shadow-md m-6 ml-0 p-4">
        <h2 className="text-2xl float-left align-middle ml-4">{info.name}</h2>
        <h2 className="text-2xl float-left align-middle ml-4">{info.email}</h2>
        <h2 className="text-2xl float-left align-middle ml-4">{info.batch}</h2>

        <button className="flex flex-column btn btn-outline btn-primary float-right" onClick={()=>document.getElementById(modalId).showModal()}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
          View
        </button>
      </div> 

      <RequestModal key={info.email} id={modalId} info={info} requestType={requestType}/>
    </>
  )
};

export default Request;

