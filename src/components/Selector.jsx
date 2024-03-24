const Selector = ({ admin }) => {
  return (
    <>
      {(admin == "college") ? 
        (<select className="select w-full max-w-xs">
          <option disabled selected className="text-md">Choose request type</option>
          <option>New Account Request</option>
          <option>Bus Pass Request</option>
          <option>Viewed Requests</option>
        </select>)
        :
        (<select className="select w-full max-w-xs">
          <option disabled selected className="text-md">Choose request type</option>
          <option>New Account Request</option>
          <option>Bus Pass Request</option>
          <option>Viewed Requests</option>
        </select>)
      }
    </>
  )
}

export default Selector; 
