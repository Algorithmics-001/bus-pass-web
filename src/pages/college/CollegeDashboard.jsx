
import Navbar from "../../components/Navbar"
import Stats from "../../components/Stats.jsx"

const CollegeDashboard = () => {

  return (
    <>
      <Navbar admin="college"/>

      <div className="flex flex-row flex-wrap justify-center w-1/2 mt-20 mx-auto">
      <Stats info={{number:100, text:"huehue"}}/>
      <Stats info={{number:100, text:"huehue"}}/>
      <Stats info={{number:100, text:"huehue"}}/>
      <Stats info={{number:100, text:"huehue"}}/>
      <Stats info={{number:100, text:"huehue"}}/>
      </div>
    </>
  )
};

export default CollegeDashboard;

