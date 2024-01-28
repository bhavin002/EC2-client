import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('http://localhost:5050');
      const data = await response.json();
      setData(data);
    }
    getData();
  }, []);


  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Description</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {data.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.quantity}</td>
              <td>${product.price.toFixed(2)}</td>
              <td>{product.description}</td>
              <td>{product.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
