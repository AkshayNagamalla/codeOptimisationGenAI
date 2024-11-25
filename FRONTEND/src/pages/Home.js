// import React from 'react'
// import { useState,useEffect } from "react";

// import BannerImage from '../assests/back.png'
// import '../styles/Home.css'
// function Home() {
//   const [data,setData]=useState([{}])

//   useEffect(()=>{
//     fetch("/members").then(
//       res=>res.json()
//     ).then(
//       data =>{
//         setData(data)
//         console.log(data)
//       }
//     )
//   },[]);
//   return (
    
//     <div className="home">
//       <div className="headerContainer">
//         <h1>Code Optimizer</h1>
//         <p> Solution to all coding queries</p>
//       </div>
//       <form>
//       <input name="query" placeholder="Enter your query" type="text" />
//       <button type="submit"> Enter</button>
//       </form>
//     </div>
//   )
// }

// export default Home





import React, { useState, useEffect } from "react";
import BannerImage from "../assests/back.png";
import "../styles/Home.css";

function Home() {
  const [data, setData] = useState({});
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    fetch("/members")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const response = `You asked: "${query}". Here is a response!`;
    setAnswer(response);
    setQuery("");
  };

  return (
    <div className="home-container">
      <div className="home">
        <div className="headerContainer">
          <h1>Code Optimizer</h1>
          <p>Solution to all coding queries</p>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            name="query"
            placeholder="Enter your query"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">Enter</button>
        </form>
      </div>
      <div className="answer-container">
        <h1>Answer</h1>
        <p>{answer || "Your output will appear here after you submit a query."}</p>
      </div>
    </div>
  );
}

export default Home;