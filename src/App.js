import React from 'react';
import Nav from './Nav';
import Section from "./Section.js";
import Section2 from "./Section2";
class App extends React.Component{
    render(){
        return(
            <div>
                <Nav></Nav>
                <Section></Section>
                <Section2></Section2>
            </div>
        )
    }
}

export default App;