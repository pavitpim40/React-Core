// Render
// #2
// function App() {
//     const [isShow, setIsShow] = React.useState(true);

//     const onHide = () => setIsShow(false);
//     return (
//         <div className='container'>
//             <button onClick={onHide}>Click to hide text</button>
//             {isShow && <h4>TEXT</h4>}
//         </div>
//     );
// }

// #3
function App() {
    const [isShow, setIsShow] = React.useState(true);

    const handleToggle = () => setIsShow(!isShow);
    // console.log(isShow);
    // 1st render :  true -> !true == false
    // 2nd render : false => !false == true
    // let text = isShow ? 'Click to hide text' : 'Click to show text';
    let text = `Click to ${isShow ? 'hide' : 'show'} text`;

    return (
        <div className='container'>
            <button onClick={handleToggle}>{text}</button>
            {isShow && <h4>TEXT</h4>}
        </div>
    );
}

const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
