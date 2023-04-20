const App = (
    <div className='main'>
        <div className='main__left'>
            <img src='./banner.png' className='main__left--img' />
        </div>
        <div className='main__right'>
            <div className='main__right--content'>Discover</div>
        </div>
    </div>
);
// Render
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(App);
