const PreviewRequest = ({ info }) => {
  return (
    <>
      <div className="w-full h-20 rounded-md shadow-md m-6 ml-0 p-4">
        <h2 className="text-2xl float-left align-middle ml-4">{info.NAME}</h2>
        <h2 className="text-2xl float-left align-middle ml-4">{info.EMAIL}</h2>
      </div>
    </>
  )
};

export default PreviewRequest;

