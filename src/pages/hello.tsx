import { useState, useEffect } from "react";

interface IPlace {
  id: string;
  name: string;
}

// make a new react component in typescript
const Hello = () => {
  // set state
  const [data, setData] = useState<IPlace[]>([]);
  const [loaded, setLoaded] = useState(false);
  // call mongodb in useEffect
  useEffect(() => {
    // fetch data from mongodb
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => {
        // set data to state
        setData(data);
        setLoaded(true);
      });
  }, []);

  return (
    <div>
      <h1>Hello</h1>
      {loaded ? (
        data.map((place) => <p key={place.id}>name: {place.name}</p>)
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Hello;
