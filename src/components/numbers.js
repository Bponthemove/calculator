
const Numbers = ({ onClickNumbers, onClickDecimal, onClickPlusMinus }) => {
        return(
            <div className="number-container">
                <div className="btn" id="nine" onClick={onClickNumbers}>9</div>
                <div className="btn" id="eight" onClick={onClickNumbers}>8</div>
                <div className="btn" id="seven" onClick={onClickNumbers}>7</div>
                <div className="btn" id="six" onClick={onClickNumbers}>6</div>
                <div className="btn" id="five" onClick={onClickNumbers}>5</div>
                <div className="btn" id="four" onClick={onClickNumbers}>4</div>
                <div className="btn" id="three" onClick={onClickNumbers}>3</div>
                <div className="btn" id="two" onClick={onClickNumbers}>2</div>  
                <div className="btn" id="one" onClick={onClickNumbers}>1</div>
                <div className="btn" id="zero" onClick={onClickNumbers}>0</div>
                <div className="btn" id="decimal" onClick={onClickDecimal}>.</div>
                <div className="btn" id="plusMinus" onClick={onClickPlusMinus}>±</div>    
            </div>       
        )
}

export {Numbers}