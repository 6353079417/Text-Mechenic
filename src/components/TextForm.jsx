import React, { useState } from 'react'

export default function FormFile(props) {
    const [text, setText] = useState("add any text");

    const NewOnChangedText = (event) => {
        console.log("click text")
        setText(event.target.value);
    }

    const OnUPcoVerter = () => {
        let ThisOnUpper = (text.toLocaleUpperCase());
        setText(ThisOnUpper);
        props.showAlert("Converted to Uppercase","success")
    }

    const OnDowcoVerter = () => {
        let abcd = (text.toLocaleLowerCase());
        setText(abcd);
        props.showAlert("Converted to Lowercase","success")

    }

    const Cleartext = () => {
        let ThisONTextClear = ""
        setText(ThisONTextClear);
        props.showAlert("Clear Text","success")

    }

    const SpeakText = () => {
        let ThisONSpeekBtn = new SpeechSynthesisUtterance();
        ThisONSpeekBtn.text = text;
        window.speechSynthesis.speak(ThisONSpeekBtn);
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text Coppied","success")

    }

    const handleRemoveSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Clear Extra Space","success")

    }
    return (
        <div>

            <div className=" mx-5">
                <label for="exampleFormControlTextarea1" className="form-label"><h1 className='my-2'>{props.heading}</h1></label>
                <textarea  className={` form-control bg-${props.mode === 'light' ? 'light' : 'dark'}
                text-${props.mode === 'light' ? 'dark' : 'light'}

               ` } id="exampleFormControlTextarea1" onChange={NewOnChangedText} value={text} rows="9"></textarea>


                <button className='btn btn-outline-success my-2 mx-3' disabled={text.length === 0}  onClick={OnUPcoVerter}>
                    Upper case    Converter
                </button>
                &nbsp;&nbsp;


                <button className='btn btn-outline-primary my-2 mx-3'  onClick={OnDowcoVerter}>
                    Lower case  Converter
                </button>
                &nbsp;&nbsp;


                <button className='btn btn-outline-info my-2 mx-3'disabled={text.length === 0} onClick={Cleartext}>
                    Clear Text
                </button>

                &nbsp;&nbsp;
                <button className='btn btn-outline-warning my-2 mx-3' disabled={text.length === 0} onClick={SpeakText}>
                    Speak
                </button>


                &nbsp;&nbsp;
                <button className='btn btn-outline-warning my-2 mx-3' disabled={text.length === 0} onClick={handleRemoveSpace}>
                    handle Remove Space
                </button>

                &nbsp;&nbsp;
                <button className='btn btn-outline-warning my-2 mx-3'disabled={text.length === 0} onClick={handleCopy}>
                    Copy Text
                </button>
            </div>

            <div className='container'>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").filter((element)=>{return element.length !==  0}).length}Word</p>
                <p>{text.length}Character</p>
                <p>{0.008 * text.split("").length}Reading Time</p>
                <h2>Preview</h2>
                <p>{text.length>0 ? text : "Nothing to Preview 😎"}</p>
            </div>
        </div>
    )
}