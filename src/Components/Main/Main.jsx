import { useState } from "react";
import "./Main.css";
import SurveyType from "./Survey Type/SurveyType";
import CreateSurvey from "./Create Survey/CreateSurvey";
import TakeSurvey from "./Take Survey/TakeSurvey";
import ConfirmPage from "./Confirm Page/ConfirmPage";

const Main = ()=>{
    const [display, setDisplay] = useState("questionsOptionsPage");
    const [questionsOptions, setQuestionsOptions] = useState([]);
    function addQuestionsOptions(value){
        setQuestionsOptions([...questionsOptions, value]);
    }

    const [survey, setSurvey] = useState("");
    function notTakeSurvey(){
        alert("Survey is empty. First create a survey.");
        setSurvey("");
    }

    function publishClicked(){
        setDisplay("confirmPage");
    }

    return(
        <>
        {display == "questionsOptionsPage" ?
            <div className={"main"}>
                {survey == "CreateSurvey" ? <CreateSurvey addQuestionsOptions={addQuestionsOptions} />
                : survey == "TakeSurvey" ? (questionsOptions.length > 0 ? <TakeSurvey setSurvey={setSurvey} questionsOptions={questionsOptions} /> : notTakeSurvey())
                : <SurveyType survey={setSurvey} />}
                <div className="publish-button-div">
                    {questionsOptions.length > 0 && survey == "CreateSurvey" ?<button onClick={publishClicked} className="publish">Publish</button>:""}
                </div>
            </div>
        :
            <div className={"main"}>
                <ConfirmPage questionsOptions={questionsOptions} setSurvey={setSurvey} setDisplay={setDisplay} />
            </div>
        }
        </>
    );
}
export default Main;