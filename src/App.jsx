import BeautifulScreen from "./BeautifulScreen.jsx";
import EqualButton from "./EqualButton.jsx";
import NumberButton from "./NumberButton.jsx";
import OperatorButton from "./OperatorButton.jsx";

export default function App() {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const listButton = numbers.map((num, id) => {
        return <NumberButton value={num} key={'num'+id} />
    });

    const operators = ['+', '-', '*', '/'];
    const listButtonOp = operators.map((op, idOp) => {
        return <OperatorButton value={op} key={'op'+idOp} />
    });

    return (
        <>
            <h1>Calculator9000</h1>
            <BeautifulScreen />
            {listButton}
            {listButtonOp}
            <EqualButton />
        </>
    );
}