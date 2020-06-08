import React from 'react';
import './App.css';
import Hello from './Hello';
import Vakas from './Vakas';



function App({name,age}) {

  return <div>
      Hello from App.js Updated {name} Age = {age-10}
      <br />
      <Hello firstName={name}></Hello>
      <Vakas name="Vakas GN" age={31} isReactDeveloper={true} />
    </div>
}

export default App;
