// Render

function App() {
    // #1 Do Logic

    const handleClick = (event) => {
        console.log('Click');
        console.log(event);
        return 5;
    };

    const handleRemove = (index) => {
        console.log(index);
    };

    const handleChange = (event) => {
        console.log(event.target.value);
    };

    const handleFocus = () => {
        console.log('FOCUS');
    };

    const handleBlur = () => {
        console.log('BLUR');
    };

    // #2 Render
    return (
        <div className='container'>
            <h1>Event Handler</h1>
            <button onClick={(e) => console.log(e)}>Click ME</button>
            <button onClick={(e) => handleRemove(5)}>Remove</button>
            <input onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} />
        </div>
    );
}

const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
