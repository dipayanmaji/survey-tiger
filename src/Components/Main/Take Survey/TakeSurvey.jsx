import "./TakeSurvey.css";
import DisplayQuestionsOptions from "../Display Questions Options/DisplayQuestionsOptions";
import { useState } from "react";

const TakeSurvey = (props)=>{
    const [classname, setClassname] = useState("display");
    function submitClicked(){
        setClassname("");
    }
    function goToHomeClicked(){
        setClassname("display");
        props.setSurvey("");
    }
    return(
        <div className={"take-survey"}>
            <DisplayQuestionsOptions questionsOptions={props.questionsOptions} />
            <div className="submit-button-div">
                <button className="submit" onClick={submitClicked}>Submit</button>
            </div>
            <div className={`greeting ${classname}`}>
                <h1>Thanks for Take a Survey!
                    <br/>Have a nice day! <i className="fa-solid fa-face-laugh-beam"></i>
                </h1>
                <button className="go-to-home" onClick={goToHomeClicked}>Go To Home</button>
            </div>
        </div>
    );
};
export default TakeSurvey;