// Render

function App() {
    // # Logic
    // const myState = React.useState(0); // [a,b]
    // let currentState = myState[0]; // a
    // let updateFunction = myState[1]; // b

    const [count, setCount] = React.useState(0);

    // let count = 0;
    const handleClick = () => {
        // count += 1;
        // console.log(count);
        let newState = count + 1;
        setCount(newState);
    };

    // #UI
    return (
        <div className='container'>
            State
            <button onClick={handleClick}>Click me</button>
            <p>{count}</p>
        </div>
    );
}

const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
