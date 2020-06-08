import React from 'react';
import './Hello.css';

const hello=(name)=>"Hello world" + name;

function Hello({firstName}) {

return <p className="myname"> This para is in Hello  Tag name: {firstName}</p>
}

export default Hello;