import "./DisplayQuestionsOptions.css";

const DisplayQuestionsOptions= (props)=>{
    return(
        <ol className="display-questions-options">
            {props.questionsOptions.map((element, index)=>(
                <li key={index}>
                    <ul>
                    <li className="display-question">{element.question}</li>
                    {Object.keys(element.options).length == 2 ?
                        <li className={"radioOptions"}>
                            {Object.values(element.options).map((value, index)=>(
                                <p key={index}>
                                    <input name={`${element.question}`} id={`radio${index}-${value}`} type={"radio"} />
                                    <label htmlFor={`radio${index}-${value}`}>{value}</label>
                                </p>
                            ))}
                        </li>
                    :
                        <li className={"checkboxOptions"}>
                            {Object.values(element.options).map((value, index)=>(
                                <p key={index}>
                                    <input id={`checkbox${index}-${value}`} type={"checkbox"} />
                                    <label htmlFor={`checkbox${index}-${value}`}>{value}</label>
                                </p>
                            ))}
                        </li>
                    }
                    </ul>
                </li>
            ))}
        </ol>
    );
}
export default DisplayQuestionsOptions;