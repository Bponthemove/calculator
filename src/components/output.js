const Output = ({ result, operator, input, resultToggle, outputString }) => {
    if(!resultToggle) {
        return (
            <div id="display-container">
                <div id="display">{input}</div>
                <div id="sec-display">{result} {operator}</div>
            </div>
        )
    } else {
        return (
            <div id="display-container">
                <div placeholder='0' id="display"> {result}</div>
                <div id="sec-display"> {outputString} </div>
            </div>
        )
    }
}

export {Output}