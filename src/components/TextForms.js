import React, {useState} from "react"

export default function TextForm(props){
    const[text, setText]= useState("Enter Text Here")
    const handleUpCase= ()=>{
        setText(text.toUpperCase())
    }
    const handleLowerCase= ()=>{
        setText(text.toLowerCase())
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
</div>
<h3>Your Text Summary</h3>
<p>{text.split(" ").length} words and {text.length} characters</p>
<p>{0.008 *text.split(" ").length } Minutes Read</p>
<h2>Preview</h2>
</>
    )
}