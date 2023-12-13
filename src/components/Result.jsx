function Result(props) {
  return (
    <div className='result'>
        <div className="title" style={props.textStyle}>Final Results</div>
        <div className="score" style={props.textStyle}>{props.score} out of 5 correct - ({(props.score/5)*100}%)</div>
        <div className="highlight-btn" style={props.btnStyle} onClick={props.onSmash}>Restart game</div>
    </div>
  )
}

export default Result