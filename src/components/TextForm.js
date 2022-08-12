import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = ()=> {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase", "success")
    }
    const handleLowerClick = () => {
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to LowerCase", "success")
    }
    const HandleOnChange = (event) => {
        setText(event.target.value)
    }
    const ClearText = () => {
      let newText = ""
      setText(newText)
      props.showAlert("Text is cleared", "success")
    }
  const [text, setText] = useState('Enter text here');
//   setText('New Text')
  return (
    <>
    <div className="container" style={{color:props.mode==='light'? 'black' : 'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={HandleOnChange} style={{backgroundColor:props.mode==='light'? 'white' : 'grey', color:props.mode==='light'?'black':'white' }} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick} style={{backgroundColor:props.mode==='light'? 'blue' : '#05245ab8'}}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowerClick} style={{backgroundColor:props.mode==='light'? 'blue' : '#05245ab8'}}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={ClearText} style={{backgroundColor:props.mode==='light'? 'blue' : '#05245ab8'}} >Clear Text</button>
    </div>
    <div className="my-3" style={{color:props.mode==='light'? 'black' : 'white'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").filter(item => item).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} minutes to read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
