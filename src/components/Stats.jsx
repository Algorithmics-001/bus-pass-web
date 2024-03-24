
const Stats = ({info}) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center border shadow-md p-4 rounded-lg w-40 m-2">
        <h2 className="text-4xl text-center">{info.number}</h2>
        <h2 className="text-md text-center">{info.text}</h2>
      </div>
    </>
  )
};

export default Stats;

