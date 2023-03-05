import React ,{useState} from 'react'
// rfc start
// import PropTypes from 'prop-types';
import "../App.js"
import "./dark.css"
import "./Navbar.js"




export default function TextForm(props) {
  const handleUpClick=()=>{
    // alert("this is clicked");
    console.log("uppercase was clicked"+para)
    // setText(event.target.value);
    let newText=para.toUpperCase();
    settitle("The text change In Uppercase is in the given Text Box")
    props.showAlert("your text is converted to uppercase");
    
    setPara(newText);
  }
  const handleDownClick=()=>{
    // console.log("THe lower case Characters are"+para)
    settitle("Your Text Is converted into lowercase Check Below")
    props.showAlert("your text is converted to lowercase")
    let text=para.toLowerCase();
    setPara(text);

  }
 
  const ClearText=()=>{
    
    setPara('');

  }
  const handleOnChange=(event)=>{
    setPara(event.target.value); 
    console.log("this is on change");
  }
    const [text,setText]=useState('enter the text here');
    // text="abhishek lande" this is an wrong way to change the state
    // setText("this is changed");
    const[para,setPara]=useState('');
    // setPara("hello world");

    const[title,settitle]=useState("Welcome to the text utils");
  return (
    <>
    <div className={`container`} style={{color:props.mode==='dark'?'white':'black',backgroundColor:props.mode==='dark'?'grey':'white'}}>
<div className="mb-3">
     
    <h1>{props.heading} - {text}</h1>
    <div className="mb-3">
  <label htmlFor="mybox" className="form-label" >{title}</label>
  </div>
  <textarea className={`form-control`} style={{backgroundColor:props.mode==='dark'?'grey':'white'}} onChange={handleOnChange} id="mybox" rows="8" value={para} ></textarea>
  {/* <button className='btn btn-primary mt-3' value={para} onClick={handleUpClick}>Convert To Upper Case</button> */}
 
  <button className='btn btn-primary mt-3 mx-1'  style={{backgroundColor:props.mode==='dark'?'black':'#0D6EFD'}} onClick={handleUpClick}>Convert To Upper Case</button>
  <button className="btn btn-primary mt-3  mx-1" style={{backgroundColor:props.mode==='dark'?'black':'#0D6EFD'}} onClick={handleDownClick}>Convert to Lowercase</button>
  <button className='btn btn-primary mt-3 mx-1'  style={{backgroundColor:props.mode==='dark'?'black':'#0D6EFD'}} onClick={ClearText}>Clear Text</button>
 
</div>
</div>
<div className={`container my-2 text `} mode={props.mode}   style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}>
  <h1>Your Text Summary</h1>
  <p>{para.split(" ").length} words,{para.length}  Characters</p>
  <p>{0.008*para.split(" ").length} Sec requires to read words</p>
  <h2>Preview</h2>
  <p>{para}</p>

</div>
   </>
  )
}

