
import Navbar from "../../components/Navbar"
import Stats from "../../components/Stats.jsx"

const ADMIN="college"

const CollegeDashboard = () => {

  const test = [
    {number:100, text:"huehue"},
    {number:100, text:"huehue"},
    {number:100, text:"huehue"},
    {number:100, text:"huehue"},
    {number:100, text:"huehue"}
  ]

  return (
    <>
      <Navbar admin={ADMIN}/>

      <div className="flex flex-row flex-wrap justify-center w-1/2 mt-20 mx-auto">
        {test.map((data, index) => (
          <Stats key={index} info={data} />
        ))}
      </div>
    </>
  )
};

export default CollegeDashboard;

