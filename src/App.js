import logo from './logo.svg';
import './App.css';
import React,{useEffect,useState} from "react";
import axios from "axios";

function App() {
  const [data,setData] = useState([])
  useEffect(() => {
    axios.get('https://reqres.in/api/users?page=2')
        .then(res => setData(res.data.data))
        .then(err => console.log(err));
  }, []);
  return (
    <div className="App">
      <h1> API integration in react by axios lib </h1>
      {
        data.map((d,i) =>{
          return <p key={i} > {d.email}</p>
        })
      }
    </div>
  );
}

export default App;
