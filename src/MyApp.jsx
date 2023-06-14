import NumberButton from "./NumberButton.jsx";

export default function MyApp() {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const listButton = numbers.map((num, id) => {
        return <NumberButton value={num} key={id} />
    });

    return (
        <>
            <h1>Calculator9000</h1>
            {listButton}
        </>
    );
}