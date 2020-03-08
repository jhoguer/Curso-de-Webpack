import React, { useState } from 'react';
import data from './data.json';
import Loader from './Loader';

console.log(data)

const App = () => {
  const [loaderList, setLoaderList] = useState([]);
  const handleClick = () => {
    console.log(setLoaderList(data.loaders))
  }
  
  return (
    <div>
      Que linda aplicacion hecha en React.js
      <ul>
        {
          loaderList.map(item => <Loader {...item} key={item.id} /> )
        }
      </ul>
      <button onClick={handleClick}>Mostrar lo aprendido hasta el momento</button>
      
    </div>
  )
}

export default App;