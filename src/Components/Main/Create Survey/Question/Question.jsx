import "./Question.css";

const Question = (props)=>{
    function valueChange(e){
        props.setState({
            ...props.state,
            question: e.target.value,
        })
    }
    return(
        <div className={"question"}>
            <label htmlFor="question">?</label>
            <input onChange={valueChange} id="question" type={"text"} placeholder="Type question here" autoComplete="off" />
        </div>
    );
}
export default Question;