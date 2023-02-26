import "./CreateSurvey.css";
import { useState } from "react";
import MultiSelect from "./Multi Select/MultiSelect";
import SingleSelect from "./Single Select/SingleSelect";

const CreateSurvey = (props)=>{
    const [questionType, setQuestionType] = useState("");
    const selectChange = (e)=>{
        setQuestionType(e.target.value);
    }
    return(
        <div className={"create-survey"}>
            <select id="create-survey-select" value={questionType} onChange={selectChange}>
                <option value={""}>Select Question Type</option>
                <option value={"multi-select"}>Multi Select</option>
                <option value={"single-select"}>Single Select</option>
            </select>

            {questionType == "multi-select" ? <MultiSelect addQuestionsOptions={props.addQuestionsOptions} setQuestionType={setQuestionType} />
            : questionType == "single-select" ? <SingleSelect addQuestionsOptions={props.addQuestionsOptions} setQuestionType={setQuestionType} />
            : ""}
        </div>
    );
};
export default CreateSurvey;