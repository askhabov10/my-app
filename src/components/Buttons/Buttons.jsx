function Buttons({ setCount }) {
    return (
        <div className="buttons">

            <button style={{ backgroundColor: "#0FC50B" }} onClick={() => setCount(c => c + 1)}>+</button>
            <button style={{ backgroundColor: "#E5E5E5" }} onClick={() => setCount(0)}>↺</button>
            <button style={{ backgroundColor: "#F64C4C" }} onClick={() => setCount(c => Math.max( c - 1,0))}>-</button>
        </div>
    );
}
export default Buttons;