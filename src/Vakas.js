import React from 'react';

function isReactDeveloper_fun(isReactDeveloper){
    if(isReactDeveloper===true){
        return "React Developer";
    }
    else{
        return "Not a React Developer";
    }
}

function Vakas(props){
    return (
        <div>
        <h1>Hi my Name is {props.name} and my Age is {props.age} I want to be an expert in AI and I am a {isReactDeveloper_fun(props.isReactDeveloper)}</h1>
        </div>
    );
}

export default Vakas;