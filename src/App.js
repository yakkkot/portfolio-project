import './App.css';

import {About,Contact,Experience,Home,NavBar,Skills,Works} from "./Components/index"

function App() {
    return (
        <div className="App">
            <NavBar/>
            <Home/>
            <About/>
            <Skills/>
            <Works/>
            <Contact/>
        </div>
    );
}

export default App;
