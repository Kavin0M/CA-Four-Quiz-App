function Option({option,value,onSmash,btnStyle}) {
  return (
    <div className="option" iscorrect={value.toString()} onClick={(e) => onSmash(e)} style={btnStyle}>
        {option}
    </div>
  )
}

export default Option