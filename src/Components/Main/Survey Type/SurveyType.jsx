import "./SurveyType.css";

const SurveyType = (props)=>{
    function buttonClicked(e){
        props.survey(e.target.name);
    }
    return(
        <div className={"survey-type"}>
            <button className={"survey-type-button"} onClick={buttonClicked} name="CreateSurvey" id="create-survey">Create Survey</button>
            <button className={"survey-type-button"} onClick={buttonClicked} name="TakeSurvey" id="take-survey">Take Survey</button>
        </div>
    );
}
export default SurveyType;