import React from 'react';
import ReactDOM from 'react-dom';

function NameLength(props){
    return <h1>The name {props.name} contains {props.name.length} characters!</h1>;
}

function App(){
    return(
        <div>
            <NameLength name = "Erika"/>
            <NameLength name = "Usama"/>
            <NameLength name = "Gill"/>
        </div>
    );
}

ReactDOM.render(
  <App/>,
    document.getElementById('root')
);

