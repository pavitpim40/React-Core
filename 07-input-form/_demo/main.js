// Render

function App() {
    const [range, setRange] = React.useState(50);
    const [option, setOption] = React.useState();

    const handleChange = (e) => {
        console.log(e.target.value, typeof e.target.value);
        setRange(Number(e.target.value));
    };

    const handleSelect = (e) => {
        console.log(e.target.value);
        setOption(e.target.value);
    };
    return (
        <div className='container'>
            Input, Form
            <div>
                <input type='range' onChange={handleChange} value={range} />
            </div>
            <select onChange={handleSelect} value={option}>
                <option value='op-1'>Option-1</option>
                <option value='op-2'>Option-2</option>
                <option value='op-3'>Option-3</option>
            </select>
        </div>
    );
}

const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
