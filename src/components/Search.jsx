const Search = ({data, setRequests}) => {

  const filterDataByString = (array, searchString) => {
      const searchLower = searchString.toLowerCase();

      return array.filter(obj => {
          return Object.values(obj).some(value => {
              const valueLower = String(value).toLowerCase();
              return valueLower.includes(searchLower);
          });
      });
  }

  const handleSearch = (event) => {
    const query = event.target.value
    const filteredData = filterDataByString(data, query);
    setRequests(filteredData)
  }

  return (
    <>
      <label className="input input-bordered w-150 flex float-right mr-4">
        <input type="text" className="grow" placeholder="Search" onChange={handleSearch}/>
      </label>
    </>
  )
}

export default Search;
