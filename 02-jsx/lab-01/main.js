let fullName = 'Pavit Pimchanagul';
let birthYear = 2020 - 30;
let CURRENT_YEAR = 2023;
let imgSrc =
    'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';

const App = (
    <>
        {/* <img src={imgSrc} /> */}
        <div>
            <img src='./pavit.avif' />
        </div>
        <h1>{fullName}</h1>
        <p>{CURRENT_YEAR - birthYear}</p>
    </>
);

// Render
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(App);
