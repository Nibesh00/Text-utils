import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpClick= () => {
        //console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase!", "success");
    }
    const handleLoClick= () => {
        //console.log("uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("converted to lowercase!", "success");
    }
    const handleClearClick= () => {
        //console.log("uppercase was clicked" + text);
        let newText = "";
        setText(newText)
        props.showAlert("text has been cleared!", "success");
    }
        const handleOnChange= (event) => {
            //console.log("On Change");
            setText(event.target.value)
        }

    const [text, setText] = useState('');
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
  <div className="input-group">
  
  <textarea className="form-control" id="myBox" style={{backgroundColor:props.mode=== 'dark'? 'grey':'white'}} value={text} onChange={handleOnChange} rows="8" placeholder="Enter your text here..."></textarea>
</div> 
<button className="btn btn-primary mx-1" onClick={handleUpClick}>Change to uppercase</button>
<button className="btn btn-primary mx-1" onClick={handleLoClick}>Change to lowercase</button>
<button className="btn btn-primary mx-1" onClick={handleClearClick}>clear all</button>
    </div>
    <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{text.trim().length > 0
            ? text.trim().split(/\s+/).length
            : 0}{" "} words and {text.replace(/\s/g, "").length} characters</p>
            <p> {Math.max(0.008 * (text.trim().length > 0 ? text.trim().split(/\s+/).length : 0), 0).toFixed(2)} Minutes read
           </p>
           <h2>Preview</h2>
           <p>{text}</p>
    </div>
    </>
  )
}
