import { useEffect, useState } from 'react';
import './App.css';
import VideoBlock from './components';

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
      <h1>Chesstube</h1>
      <h2>Videos</h2>
      <ul>
      {items.map(item => (
        <li><VideoBlock title={item.title}/></li>
      ))}
      </ul>
      
    </div>
  );
}
}

export default App;
