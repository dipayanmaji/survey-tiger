import "./Option.css";

const Option = (props)=>{
    if(props.questionType == "multiSelect"){
        function buttonClicked(e){
            let value = e.target.value;
            let id = e.target.id;
            props.changeOptions(value, id);
        }
        return(
            <div id={props.id} className={"option"}>
                <input id={props.id} placeholder="Type answer here" onChange={(e)=>props.setStateOption(e.target.id, e.target.value)} type={"text"} autoComplete="off" />
                <section>
                    <button onClick={buttonClicked} value="+" id={props.id} className={"option-button"}>+</button>
                    <button onClick={buttonClicked} value="-" id={props.id} className={"option-button"}>-</button>
                </section>
            </div>
        );
    }
    else if(props.questionType == "singleSelect"){
        return(
            <>
                <div id={props.id} className={"option"}>
                    <input id={props.id} value="Yes" readOnly />
                    <section>
                        <button value="+" id={props.id} className={"option-button"} disabled>+</button>
                        <button value="-" id={props.id} className={"option-button"} disabled>-</button>
                    </section>
                </div>
                <div id={props.id} className={"option"}>
                    <input id={props.id} value="No" readOnly />
                    <section>
                        <button value="+" id={props.id} className={"option-button"} disabled>+</button>
                        <button value="-" id={props.id} className={"option-button"} disabled>-</button>
                    </section>
                </div>
            </>
        );
    }
}
export default Option;