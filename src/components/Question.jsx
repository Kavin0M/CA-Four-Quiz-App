import { useState } from "react"
import Option from "./Option"

function Question({question,option,num,onSmash,btnStyle,numStyle}) {

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
        <div className="number" style={numStyle}>Question: {num} of 5</div>
        <div className="question" style={style}>{question}</div>
        {option.map(item => (
            <Option option={item.text} key={item.id} value={item.isCorrect} onSmash={onSmash} btnStyle={btnStyle}/>
        ))}
        <div className="btn">
            <div className="highlight-btn" onClick={(e) => handleHightlight(e)} style={btnStyle}>Highlight</div>
            <div className="highlight-btn" onClick={(e) => handleHightlight(e)} style={btnStyle}>Remove highlight</div>
        </div>
    </div>
  )
}

export default Question