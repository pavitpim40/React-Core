// Render

// https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80
let link =
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';
function Avatar({ name }) {
    return (
        <div className='avatar'>
            <div className='avatar__image--container'>
                <img src={link} className='avatar__image' />
            </div>
            <p className='avatar__name'>{name}</p>
        </div>
    );
}

function App() {
    return (
        <div className='container'>
            <Avatar name='Jai' />
            <Avatar name='Man' />
            <Avatar name='Tan' />
            <Avatar name='Job' />
        </div>
    );
}

const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
