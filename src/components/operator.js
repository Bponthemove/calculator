const Operator = ({ onClick, operator, id, clear }) => {
   
    return (
        <div id={id} className="btn" onClick={id==="clear" ? clear : onClick}>{operator}</div>
    )
}

export {Operator}