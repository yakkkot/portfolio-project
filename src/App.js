import './App.css';

import {About,Contact,Experience,Home,NavBar,Works,Footer} from "./Components/index"

function App() {
    return (
        <div className="App">
            <NavBar/>
            <Home/>
            <About/>
            <Experience/>
            <Works/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
