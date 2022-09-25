import './App.css';

import {About,Contact,Experience,Home,NavBar,Works,Footer,Modal,ModalError} from "./Components/index"
import {useState} from "react";

function App() {
    const [showModal,setShowModal] = useState(false)
    const [showError,setShowError] = useState(false)
    return (

        <div className="App">
            <NavBar showModal={showModal} showError={showError}/>
            <Home/>
            <About/>
            <Experience/>
            <Works/>
            <Contact showModal={showModal} setShowModal={setShowModal} setShowError={setShowError}/>
            <Modal showModal={showModal} setShowModal={setShowModal}/>
            <ModalError showError={showError} setShowError={setShowError}/>
            <Footer/>
        </div>
    );
}

export default App;
