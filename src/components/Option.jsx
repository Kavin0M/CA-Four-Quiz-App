function Option(props) {
  return (
    <div className="option" iscorrect={props.value.toString()} onClick={(e) => props.onSmash(e)} style={props.btnStyle}>
        {props.option}
    </div>
  )
}

export default Option