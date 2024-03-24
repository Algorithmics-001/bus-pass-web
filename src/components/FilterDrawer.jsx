export const FilterDrawer = ({admin}) => {
  return (
    <>
      <div className="drawer drawer-end">
        <input id="college-filter-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
        </div> 
        <div className="drawer-side">
          <label htmlFor="college-filter-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu flex flex-column p-4 w-80 min-h-full bg-base-200 text-base-content">
            <h1 className="text-2xl"><center>Filters</center></h1>
            <ul className="p-2">
              {(admin == "college") ?
              <>
                <li><button className="btn btn-active btn-primary m-1">F1</button></li>
                <li><button className="btn btn-active btn-primary m-1">F1</button></li>
                <li><button className="btn btn-active btn-primary m-1">F1</button></li>
                <li><button className="btn btn-active btn-primary m-1">F1</button></li>
              </>
              :
              <>
                <li><button className="btn btn-active btn-primary m-1">FB1</button></li>
                <li><button className="btn btn-active btn-primary m-1">FB1</button></li>
                <li><button className="btn btn-active btn-primary m-1">FB1</button></li>
                <li><button className="btn btn-active btn-primary m-1">FB1</button></li>
              </>
              }
            </ul>
          </ul>
        </div>
      </div>
    </>
  )
};

export default FilterDrawer;
