import { useState } from 'react';
import RequestModal from "./RequestModal.jsx";

const RequestTable = ({ data, requestType, admin }) => {
  const [sortConfig, setSortConfig] = useState(null);

  const handleSort = (field) => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.field === field && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ field, direction });
  };

  const handleSortAlpha = (field) => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.field === field && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ field, direction, alpha: true });
  };

  const compareValues = (a, b) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  };

  const compareValuesAlpha = (a, b) => {
    return a.localeCompare(b);
  };

  const sortedData = () => {
    if (sortConfig !== null) {
      const { field, direction } = sortConfig;
      const sorted = [...data].sort((a, b) => {
        if (direction === 'ascending') {
          return compareValues(a[field], b[field]);
        } else {
          return compareValues(b[field], a[field]);
        }
      });
      return sorted;
    }
    return data;
  };

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th onClick={() => handleSortAlpha('name')}>
                Name {sortConfig && sortConfig.field === 'name' && <span>{sortConfig.direction === 'ascending' ? '▲' : '▼'}</span>}
              </th>
              <th onClick={() => handleSortAlpha('college')}>
                College {sortConfig && sortConfig.field === 'college' && <span>{sortConfig.direction === 'ascending' ? '▲' : '▼'}</span>}
              </th>
              <th onClick={() => handleSortAlpha('course')}>
                Course {sortConfig && sortConfig.field === 'course' && <span>{sortConfig.direction === 'ascending' ? '▲' : '▼'}</span>}
              </th>
              <th onClick={() => handleSort('batch')}>
                Batch {sortConfig && sortConfig.field === 'batch' && <span>{sortConfig.direction === 'ascending' ? '▲' : '▼'}</span>}
              </th>
              <th onClick={() => handleSort('semester')}>
                Semester {sortConfig && sortConfig.field === 'semester' && <span>{sortConfig.direction === 'ascending' ? '▲' : '▼'}</span>}
              </th>
              <th onClick={() => handleSort('rollno')}>
                Roll No {sortConfig && sortConfig.field === 'rollno' && <span>{sortConfig.direction === 'ascending' ? '▲' : '▼'}</span>}
              </th>
              <th onClick={() => handleSortAlpha('department')}>
                Department {sortConfig && sortConfig.field === 'department' && <span>{sortConfig.direction === 'ascending' ? '▲' : '▼'}</span>}
              </th>
              <th>
                Address 
              </th>
              <th>
                Phone 
              </th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {sortedData().map((row, index) => (
              <tr key={index}>
                <td>{row.name}</td>
                <td>{row.college}</td>
                <td>{row.course}</td>
                <td>{row.batch}</td>
                <td>{row.semester}</td>
                <td>{row.rollno}</td>
                <td>{row.department}</td>
                <td>{row.address}</td>
                <td>{row.phone}</td>
                <td>
                  <button className="flex flex-column btn btn-outline btn-primary float-right" onClick={()=>document.getElementById(`infoModal_${row.id}`).showModal()}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    View
                  </button>
                  <RequestModal key={index} id={`infoModal_${row.id}`} info={row.name} requestType={requestType} admin={admin}/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
};

export default RequestTable;

