import React from "react";

function CountDisplay({clicks, buttonLabel}) {
    return <p>{`You clicked button ${buttonLabel} ${clicks} times`}</p>
}

export default CountDisplay;