import React from 'react';
import {useState,useEffect} from 'react';


function Github() {
    const [data, setData] = useState([]);

   useEffect(function(){
    fetch('https://api.github.com/users/umarorakzai')
    .then(response => response.json())
    .then(data => {
        setData(data);
    })
   }, [])
  return (
    <div className='flex flex-col items-center justify-center mt-10 w-1/2 mx-auto gap-5'>
        <img src={data.avatar_url} alt="GitHub Avatar" />
        <h1>GitHub Name : {data.name}</h1>   
      <h1>GitHub Followers : {data.followers}</h1>
    </div>
  );
}
export default Github;


