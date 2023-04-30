import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("click on button" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearClick = () => {
        let newText = "";
        setText(newText);
    }

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    // const handleBinary = () => {
        

    // }

    const handleSpace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    let myStyle = {
        color: 'white',
        backgroundColor: 'black'
    }
    
    const [text, setText] = useState("");
    return (
        <>

            <div className="container" style={myStyle}>
                <div className="container">
                    <h1>{props.heading}</h1>
                    <div className="mb-3">
                        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="3"></textarea>
                    </div>
                    <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                    <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
                    <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
                    <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
                    {/* <button className="btn btn-primary mx-1" onClick={handleBinary}>Convert to Binary</button> */}
                    <button className="btn btn-primary mx-1" onClick={handleSpace}>Remove Extra Spaces</button>


                </div>
                <div className="container my-3">
                    <h1>Your text summary</h1>
                    <p>{text.split(" ").length} words and {text.length} characters</p>
                    <p>{0.008 * text.split(" ").length} Minutes read</p>
                </div>
            </div>
        </>
    )
}
