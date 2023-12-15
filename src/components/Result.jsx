function Result({score,textStyle,btnStyle,onSmash}) {
  return (
    <div className='result'>
        <div className="title" style={textStyle}>Final Results</div>
        <div className="score" style={textStyle}>{score} out of 5 correct - ({(score/5)*100}%)</div>
        <div className="highlight-btn" style={btnStyle} onClick={onSmash}>Restart game</div>
    </div>
  )
}

export default Result