import { useState } from "react";

function TextForm(props) {
    const [text, setext] = useState('');
    const [alert, setAlert] = useState(false);
    const upperCase = () => {
        setext(text.toUpperCase());
    }
    const handleOnChange = (event) => {
        setext(event.target.value);
    }
    const lowerCase = () => {
        setext(text.toLowerCase());
    }
    const clearText = () => {
        setext('');
    }
    const copyText = () => {
        navigator.clipboard.writeText(text).then(() => {
            setAlert(true);
            setTimeout(() => {
                setAlert(false)
            }, 1000);
        })
    }
    return (
    <>
    {alert && (
    <div 
        className="alert alert-info position-fixed top-0 start-50 translate-middle-x"
        role="alert"
        style={{ zIndex: 9999, width: "300px", textAlign: "center" }}
    >
        Text Copied Succesfully
    </div>
    )}
    <div className="mb-3" style={{color : props.mode == 'light' ? 'black' : 'white'}}>
        <h1>{props.heading}</h1>
        <textarea className="form-control" id="myBox" onChange={handleOnChange} rows={8} value={text} style={{backgroundColor : props.mode == 'light' ? 'white' : '#c3c3c7', 
            color : props.mode == 'light' ? 'black' : '0b022c'}}></textarea>
        <div className="d-flex flex-column flex-sm-row justify-content-between gap-2 my-3">
            <button type="button" className="btn btn-primary flex-fill" onClick={upperCase}>Convert To UpperCase</button>
            <button type="button" className="btn btn-primary flex-fill" onClick={lowerCase}>Convert To LowerCase</button>
            <button type="button" className="btn btn-primary flex-fill" onClick={copyText}>Copy Text</button>
            <button type="button" className="btn btn-primary flex-fill" onClick={clearText}>Clear Text</button>
        </div>
    </div>
    <div className="container" style={{color : props.mode == 'light' ? 'black' : 'white'}}>
        <h1>Text Summary</h1>
        <p>
            {text.split(/\s+/).filter(Boolean).length} words,{" "}
            {text.replace(/\r?\n/g, "").length} characters
        </p>
    </div>
    <div className="container" style={{color : props.mode == 'light' ? 'black' : 'white'}}>
        <h2>Preview</h2>
        <p>{text == '' ? 'Enter your text to preview' : text}</p>
    </div>
    </>
    );
}

export default TextForm;