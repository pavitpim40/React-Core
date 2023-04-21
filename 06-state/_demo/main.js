// Render

function App() {
    // # Logic
    // const myState = React.useState(0); // [a,b]
    // let currentState = myState[0]; // a
    // let updateFunction = myState[1]; // b

    const [count, setCount] = React.useState(0);
    const [toggle, setToggle] = React.useState(true);
    const [username, setUsername] = React.useState('');

    let num = 0;
    const handleClick = () => {
        // count += 1;
        // console.log(count);
        let newState = count + 1;
        // count += 1;
        setCount(newState);
        setToggle(!toggle);
        // num += 10;
        // console.log(num);
    };

    const handleChange = (e) => {
        // console.log(e.target.value);
        setUsername(e.target.value);
    };

    // console.log(username);

    // #UI
    return (
        <div className='container'>
            State : {toggle && 'Hello'}
            <button onClick={handleClick}>Click me</button>
            <p>{count}</p>
            <input onChange={(e) => setUsername(e.target.value)} value={username} />
        </div>
    );
}

const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
