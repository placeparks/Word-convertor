import React, {useState} from "react"

export default function TextForm(props){
    const[text, setText]= useState('')
    const handleUpCase= ()=>{
        setText(text.toUpperCase())
    }
    const handleLowerCase= ()=>{
        setText(text.toLowerCase())
    }
    const handleClear= ()=>{
        setText('')
    }
    const handleCopy= ()=>{
    let text= document.getElementById("myarea");
    text.select();
    navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces= ()=>{
       let newText= text.split(/[ ]+/);
       setText(newText.join(" "));
    }

return(
<>
<div>
<h1>{props.heading}</h1>
<div class="mb-3">
<textarea className="form-control" value={text} id="myarea" rows="3" onChange={(e) => setText(e.target.value)}> </textarea>
</div>
<button className="btn btn-primary mb-3 mx-3" onClick={handleUpCase}>Convert UpperCase</button>
<button className="btn btn-warning mb-3 mx-3" onClick={handleLowerCase}>Convert LowerCase</button>
<button className="btn btn-primary mb-3 mx-3" onClick={handleClear}>Clear</button>
<button className="btn btn-primary mb-3 mx-3" onClick={handleCopy}>Copy Text</button>
<button className="btn btn-primary mb-3 mx-3" onClick={handleExtraSpaces}>Remove Spaces</button>
</div>
<h3>Your Text Summary</h3>
<p>{text.split(" ").filter((element) => {return element.length!==0}).length} words and {text.length} characters</p>
<p>{0.008 *text.split(" ").filter((element) => {return element.length!==0}).length} Minutes Read</p>
<h2>Preview</h2>
<p>{text.length>0?text:"Enter Something to Preview"}</p>
</>
    )
}
