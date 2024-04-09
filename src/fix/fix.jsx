export default function process_request(request){
  var arr = request.split("-")
  if(arr[0] === "account"){
    if(arr[2] == undefined){
      return {"account": "applied"}
    }
    else if(arr[2] == "accepted"){
      return {"account": "accepted"}
    }
    else if(arr[2] == "rejected"){
      return {"account": "rejected"}
    }
  }
  var result = {"forwarded": null, "renew": null, "request": null}

  if(arr.includes("renew")){
    result.renew=true
  }
  else{result.renew=false}

  if(arr[0] === "college"){
    result.forwarded=false
  }
  else if(arr[0] == "bus"){
    result.forwarded=true
  }

  if(arr[arr.length - 1] === "request"){
    result.form="applied"
  }
  else if(arr[arr.length - 1] == "accepted"){
    result.form="accepted"
  }
  else if(arr[arr.length - 1] == "rejected"){
    result.form="rejected"
  }

  return result
}
