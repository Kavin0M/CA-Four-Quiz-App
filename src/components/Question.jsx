import { useState } from "react"
import Option from "./Option"

function Question(props) {

    const [highlight,setHighlight] = useState(true)

    const handleHightlight = (e) => {
        const action = e.target.textContent

        switch(action){
            case "Highlight": 
                setHighlight(false)
                break;
            case "Remove highlight":
                setHighlight(true)
                break;
        }
    }

    const style = {
        color: highlight? "blue":"red"
    }

  return (
    <div className="content">
        <div className="number" style={props.numStyle}>Question: {props.num} of 5</div>
        <div className="question" style={style}>{props.question}</div>
        {props.option.map(item => (
            <Option option={item.text} key={item.id} value={item.isCorrect} onSmash={props.onSmash} btnStyle={props.btnStyle}/>
        ))}
        <div className="btn">
            <div className="highlight-btn" onClick={(e) => handleHightlight(e)} style={props.btnStyle}>Highlight</div>
            <div className="highlight-btn" onClick={(e) => handleHightlight(e)} style={props.btnStyle}>Remove highlight</div>
        </div>
    </div>
  )
}

export default Question