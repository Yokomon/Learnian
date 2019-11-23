import React from 'react';
import Nav from './Nav';
import Section from "./Section.js";
import Footer from "./Footer";
class App extends React.Component{
    render(){
        return(
            <div>
                <Nav></Nav>
                <Section></Section>
                <Footer></Footer>
            </div>
        )
    }
}

export default App;