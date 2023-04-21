const App = (
    <div className='container'>
        <label htmlFor='user-name'> username</label>
        <input className='username' id='user-name' name='user-name' />
    </div>
);

// Render
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(App);
