// Render
const BAHT_PER_DOLLAR = 30;

function App() {
    const [num, setNum] = React.useState(0);

    const handleChangeDollar = (e) => {
        setNum(Number(e.target.value));
    };
    return (
        <div className='container'>
            <div className='dollar'>
                <label>Enter Dollar</label>
                <input onChange={handleChangeDollar} value={num} />
            </div>
            <div className='baht'>
                <p>
                    Convert to Baht <span>{num * BAHT_PER_DOLLAR}</span>
                </p>
            </div>
        </div>
    );
}

const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
