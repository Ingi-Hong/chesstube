import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("videos.json")
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setItems(data)
      setIsLoaded(true);
    }, 
    
    (error) => {
      setError(error)
      setIsLoaded(true);
    }
    )
  });

  if (error){
    return <>ERROR {error.message}</>;
  } else if (!isLoaded) {
    return <>loading...</>;
  } else {

  return (

    <div>
      <h2>Hellow</h2>
      {items.videos.map((item) => (
        <ul>
          <li>
            {item.vid1}
          </li>
        </ul>
      ))}
        
      <h1>Succesfully Loaded JSON</h1>
    </div>
  );
}
}

export default App;
