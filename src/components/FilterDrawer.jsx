import React, {useState} from "react";

export const FilterDrawer = ({admin, setRequests, data}) => {

  const empty={
    "name": "",
    "email": "",
    "course": "",
    "batch": "",
    "semester": "",
    "rollno": "",
    "department": "",
    "address": "",
    "phone": "" 
  }
  const [student, setStudent] = useState(empty)

  const handleInput = (event) => {
    const { name, value } = event.target; 
    setStudent({ ...student, [name]: value });
  }

  const calculateSimilarity = (obj1, obj2) => {
    let score = 0;
    for (const key in obj1) {
        if (obj1.hasOwnProperty(key) && obj2.hasOwnProperty(key)) {
            if (obj1[key] === obj2[key]) {
                score++;
            }
        }
    }
    return score;
  }

  const filterObjectsBySimilarity = (array, queryObject) => {
      const filteredArray = [...array].sort((a, b) => {
          const similarityA = calculateSimilarity(a, queryObject);
          const similarityB = calculateSimilarity(b, queryObject);
          return similarityB - similarityA; 
      });
      return filteredArray;
  }

  const applyFilter = () => {
    const filteredArray = filterObjectsBySimilarity(data, student)
    console.log(filteredArray)
    setRequests(filteredArray)
  }

  const removeFilter = () => {
    setRequests(data)
    setStudent(empty)
  }

  return (
    <>
      <div className="drawer drawer-end">
        <input id="college-filter-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
        </div> 
        <div className="drawer-side">
          <label htmlFor="college-filter-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu flex flex-column p-4 w-80 min-h-full bg-base-200 text-base-content">
            <h1 className="text-2xl"><center>Sort by similarity</center></h1>
            <ul className="p-2">
              <input type="text" placeholder="name" className="input input-bordered input-info w-full max-w-xs m-2" name="name" onChange={handleInput}/>
              <input type="text" placeholder="email" className="input input-bordered input-info w-full max-w-xs m-2" name="email" onChange={handleInput}/>
              {(admin=="college") && <input type="text" placeholder="course" className="input input-bordered input-info w-full max-w-xs m-2" name="course" onChange={handleInput}/>}
              {(admin=="college") && <input type="text" placeholder="batch" className="input input-bordered input-info w-full max-w-xs m-2" name="batch" onChange={handleInput}/>}
              {(admin=="college") && <input type="text" placeholder="semester" className="input input-bordered input-info w-full max-w-xs m-2" name="semester" onChange={handleInput}/>}
              <input type="text" placeholder="rollno" className="input input-bordered input-info w-full max-w-xs m-2" name="rollno" onChange={handleInput}/>
              <input type="text" placeholder="department" className="input input-bordered input-info w-full max-w-xs m-2" name="department" onChange={handleInput}/>
              {(admin=="college") && <input type="text" placeholder="address" className="input input-bordered input-info w-full max-w-xs m-2" name="address" onChange={handleInput}/>}
              <input type="text" placeholder="phone" className="input input-bordered input-info w-full max-w-xs m-2" name="phone" onChange={handleInput}/>
              <button className="btn btn-primary w-full max-w-xs m-2" onClick={applyFilter}>Apply</button>
              <button className="btn btn-primary w-full max-w-xs m-2" onClick={removeFilter}>Remove</button>
            </ul>
          </ul>
        </div>
      </div>
    </>
  )
};

export default FilterDrawer;
