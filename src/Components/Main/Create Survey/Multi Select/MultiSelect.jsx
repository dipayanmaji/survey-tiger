import "./MultiSelect.css";
import Question from "../Question/Question";
import Option from "../Option/Option";
import { useState } from "react";

const MultiSelect = (props)=>{
    const [state, setState] = useState({
        question:"",
        options: {},
    });
    function setStateOption(key, value){
        state.options[key] = value;
    }
    const [options, setOptions] = useState([<Option questionType={"multiSelect"} id={0} changeOptions={changeOptions} key={0} setStateOption={setStateOption} />]);

    function changeOptions(value, id){
        if(value == "+"){
            let prevOptionId = Number(options[options.length-1].props.id);
            options.push(<Option questionType={"multiSelect"} id={prevOptionId+1} changeOptions={changeOptions} key={prevOptionId+1} setStateOption={setStateOption} />)
            setOptions([...options]);
        }else{
            if(id == 0){
                alert("You can't remove the first option.");
                return;
            }
            options.map((element, index)=>{
                if(element.props.id == id){
                    options.splice(index, 1);
                }
            })
            setOptions([...options]);

            delete state.options[id];
        }
        // console.log(options);
    }

    function buttonClicked(){
        if(!state.question){
            alert("Question is required.");
            return;
        }
        props.addQuestionsOptions(state);
        setState({ question:"", options: {}, });
        setOptions([<Option questionType={"multiSelect"} id={0} changeOptions={changeOptions} key={0} setStateOption={setStateOption} />]);
        props.setQuestionType("");
    }
    return(
        <div className={"multi-select"}>
            <Question state={state} setState={setState} />
            <h4>Options</h4>
            {options.map((option)=>(
                option
            ))}
            <div className="add-question-button-div">
                {options.length >= 4 ?<button className="add-question" onClick={buttonClicked}>Add Question</button>: ""}
            </div>
        </div>
    );
}
export default MultiSelect;