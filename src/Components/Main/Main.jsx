import { useState } from "react";
import "./Main.css";
import SurveyType from "./Survey Type/SurveyType";
import CreateSurvey from "./Create Survey/CreateSurvey";
import TakeSurvey from "./Take Survey/TakeSurvey";

const Main = ()=>{
    const [questionsOptions, setQuestionsOptions] = useState([]);
    function addQuestionsOptions(value){
        setQuestionsOptions([...questionsOptions, value]);
    }

    const [survey, setSurvey] = useState("");
    function notTakeSurvey(){
        alert("Survey is empty. First create a survey.");
        setSurvey("");
    }

    return(
        <div className={"main"}>
            {survey == "CreateSurvey" ? <CreateSurvey addQuestionsOptions={addQuestionsOptions} />
            : survey == "TakeSurvey" ? (questionsOptions.length > 0 ? <TakeSurvey /> : notTakeSurvey())
            : <SurveyType survey={setSurvey} />}
            {questionsOptions.length > 0 ?<button onClick={()=>setSurvey("")} className="publish">Publish</button>:""}
        </div>
    );
}
export default Main;