import React from 'react';
import './Style/Navbar.css';

const Search = () => {
    const getData=JSON.parse(localStorage.getItem('searchItems'));
    console.log(getData.photos.results)
    console.log(getData.photos.results.length)
  return (
    <div className='searchContainer'>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        
            {
                getData.photos.results.map((el,i)=>(
                    <div key={i}>
                        <img src={el.links.download} alt="pic" />
<p style={{color:"white", textAlign:"cenetr"}}>{el.alt_description}</p>
                    </div>
                ))
           
           }
    hello
    </div>
  )
}

export default Search;