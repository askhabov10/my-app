import { useState } from "react";
import Number from "../Number/Number";
import Buttons from "../Buttons/Buttons";

function MainContant() {
    const [count, setCount] = useState(0);

    const rest = () => {
        if (count > 0) {
            setCount(count -1)
        }
    }

    return (
        <div className="Main">
            <Number count={count} /> 
            <Buttons setCount={setCount} />
        </div>
    );
}

export default MainContant;