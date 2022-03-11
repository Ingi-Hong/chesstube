import { useEffect, useState } from 'react';
import './App.css';
import './videos.json';

function App() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('videos.json')
    .then((res) => res.json())
    .then(
      (result) => {
        setIsLoaded(true);
        setItems(result);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    );
  }, []);

  if (error){
    return <>{error.message}</>;
  } else if (!isLoaded) {
    return <>loading...</>;
  } else {

  return (
    <div className="wrapper">
      <h1>Hello</h1>

    </div>
  );
}
}

export default App;
