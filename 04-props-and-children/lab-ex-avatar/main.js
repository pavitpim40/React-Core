// Render

function Avatar({ name, src }) {
    return (
        <div className='avatar'>
            <div className='avatar__image--container'>
                <img src={src} className='avatar__image' />
            </div>
            {/* <p className='avatar__name'>{name}</p> */}
        </div>
    );
}

function App() {
    let link1 =
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';
    let link2 =
        'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';
    let link3 =
        'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';

    let link4 =
        'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80';
    return (
        <div className='container'>
            <Avatar name='Jai' src={link1} />
            <Avatar name='Man' src={link2} />
            <Avatar name='Tan' src={link3} />
            <Avatar name='Job' src={link4} />
        </div>
    );
}

const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
