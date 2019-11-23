import React from 'react';
import Nav from './Nav';
import Section from "./Section.js";
class App extends React.Component{
    render(){
        return(
            <div>
                <Nav></Nav>
                <Section></Section>
            </div>
        )
    }
}

export default App;