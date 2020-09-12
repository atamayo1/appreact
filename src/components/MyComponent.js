import React,{Component} from 'react';

class MyComponent extends Component {
    render() {
        let thing = {
          title1: "Hola soy el component llamado MyComponent",
          title2: "Soy segundo titulo"
        };
        return(
            <div className={"component"}>
                <h1>{thing.title1}</h1>
                <h2>{thing.title2}</h2>
            </div>
        );
    }
}

export default MyComponent;