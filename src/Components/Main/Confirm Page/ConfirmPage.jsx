import "./ConfirmPage.css";
import DisplayQuestionsOptions from "../Display Questions Options/DisplayQuestionsOptions";

const ConfirmPage =(props)=>{
    function confirmClicked(){
        props.setSurvey("");
        props.setDisplay("questionsOptionsPage");
    }
    return(
        <div className="confirm-page">
            <DisplayQuestionsOptions questionsOptions={props.questionsOptions} />
            <div className="confirm-button-div">
                <button className="confirm" onClick={confirmClicked}>Confirm</button>
            </div>
        </div>
    );
}
export default ConfirmPage;