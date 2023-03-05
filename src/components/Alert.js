import React from 'react'
export default function Alert(props) {
  const capitalize=(word)=>{
    const lower=word.toLowerCase();
    return lower.charAt(0).toupperCase() + lower.slice(1);
  }
  return (
    
    props.alert && <div className="alert alert-success alert-dismissible fade show" role="alert">
     {/* props.alert && <div className={`alert alert-${props.mode==='dark'?'success':'danger'} alert-dismissible fade show"}`} role="alert"> */}
    {props.showAlert}
  <strong>{props.alert.type}</strong>{props.alert.msg}
  {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
  
</div>


  )
}
