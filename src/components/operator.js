const Operator = ({ onClick, operator, id, clear }) => {
    if (id==="clear") {
        return(
            <div id={id} className="btn" onClick={clear}>{operator}</div>
        )
    } else {    
        return(
            <div id={id} className="btn" onClick={onClick}>{operator}</div>        
        )
    }
}

export {Operator}