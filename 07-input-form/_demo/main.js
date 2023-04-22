// Render

function App() {
    const [range, setRange] = React.useState(50);
    const [option, setOption] = React.useState();
    const [isChecked, setIsChecked] = React.useState(true);

    const handleChange = (e) => {
        console.log(e.target.value, typeof e.target.value);
        setRange(Number(e.target.value));
    };

    const handleSelect = (e) => {
        console.log(e.target.value);
        setOption(e.target.value);
    };

    const handleCheckBox = (e) => {
        // console.log(e.target.checked);
        setIsChecked(e.target.checked);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit form');
        setRange(50);
        setIsChecked(true);
    };
    return (
        <div className='container'>
            Input, Form
            <form onSubmit={handleSubmit}>
                <div>
                    <input type='range' onChange={handleChange} value={range} />
                </div>
                <div>
                    <label htmlFor='sugar'>sugar ?</label>
                    <input
                        type='checkbox'
                        id='sugar'
                        onChange={handleCheckBox}
                        checked={isChecked}
                    />
                </div>
                <select onChange={handleSelect} value={option}>
                    <option value='op-1'>Option-1</option>
                    <option value='op-2'>Option-2</option>
                    <option value='op-3'>Option-3</option>
                </select>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}

const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
