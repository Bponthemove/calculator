const Operator = ({ onClick, operator, id, clear, backspace }) => {
    if (id==="clear") {
        return(
            <div id={id} className="btn" onClick={clear}>{operator}</div>
        )
    }
    if (id==="backspace"){
        return(
            <div id={id} className="btn" onClick={backspace}>{operator}</div>
        )
    } else {    
        return(
            <div id={id} className="btn" onClick={onClick}>{operator}</div>        
        )
    }
}

export {Operator}