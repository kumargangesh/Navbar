import React from 'react';
import "../Style.css";

function Home(props) {
  return (
    <div className='data'>
        <h1>{props.heading}</h1>
        <div className="line" />
        <p>{props.data}</p>
    </div>
  )
}

export default Home;
