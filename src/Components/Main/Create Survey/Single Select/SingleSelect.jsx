import "./SingleSelect.css";
import Question from "../Question/Question";
import Option from "../Option/Option";
import { useState } from "react";

const SingleSelect = (props)=>{
    const [state, setState] = useState({
        question:"",
        options: {0: "Yes", 1: "No",},
    });
    function buttonClicked(){
        if(!state.question){
            alert("Question is required.");
            return;
        }
        props.addQuestionsOptions(state);
        setState({
            question:"",
            options: {0: "Yes", 1: "No",},
        });
        props.setQuestionType("");
    }
    return(
        <div className={"single-select"}>
            <Question state={state} setState={setState} />
            <h4>Options</h4>
            <Option questionType={"singleSelect"} />
            <button className="add-question" onClick={buttonClicked}>Add Question</button>
        </div>
    );
}
export default SingleSelect;