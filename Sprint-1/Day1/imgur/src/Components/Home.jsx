import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './Style/Navbar.css';
import axios from 'axios';

const Home = () => {

  const [pictures,setPictures]=useState([]);
  const [show,setShow]=useState(true);

  useEffect(()=>{
getPictures();
  },[]);

  const getPictures=()=>{
      axios.get('https://api.unsplash.com/photos/random?count=100&client_id=CiUHdv8t1CZ0RdkGWvepkPXZAFaWvFZNgM7IyR5o0ME').then(res=>{
          // console.log(res.data);
          setPictures(res.data);
      })
  }


  const hideShowHandle=()=>{
    setShow(!show);
    // console.log(show)
}

const displayOriginal=()=>{
  console.log('hello')
}
  return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <div>
        <h1>The stuff you’ll see everywhere else tomorrow.</h1>
        <div className='collapase'>
            <div>EXPLORE TAG</div>
            <button onClick={hideShowHandle}>MORE TAG +</button>
        </div>
        <div className='gridContainer'>
            <div><img src="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="pic1"/></div>
            <div><img src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="pic2"/></div>
            <div><img src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="pic3"/></div>
            <div><img src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="pic4"/></div>
            <div><img src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="pic5"/></div>
            <div><img src="https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="pic7"/></div>
            <div><img src="https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="pic8"/></div>
            <div><img src="https://images.unsplash.com/photo-1431794062232-2a99a5431c6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="pic9"/></div>
            <div><img src="https://images.unsplash.com/photo-1444464666168-49d633b86797?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="pic10"/></div>
            <div><img src="https://images.unsplash.com/photo-1565118531796-763e5082d113?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="pic6"/></div>
        </div>
        <div className={`${show?'hide':'show'}`}>
            
            {pictures.map((el)=>(
                <div key={el.id}>
                    <img src={el.links.download} alt="" />
                </div>
            ))}
        

        </div>
        </div>
        <div>
        <div className='collapase'>
            <div>MOST VIRAL ▼</div>
            <div style={{display:"flex",gap:"20px"}}>
              <div>
                BEST ▼
              </div>
            <button onClick={displayOriginal}><img src="https://th.bing.com/th/id/OIP.0PKlaBRYoFHDraKmUzxhmAHaHa?pid=ImgDet&w=221&h=221&c=7&dpr=1.25" alt="grid" /></button>
            </div>
            
        </div>
        <div>

        </div>
       <div className="showImages">
            
            {pictures.map((el)=>(
                <div key={el.id}>
                    <img src={el.links.download} alt="" />
                </div>
            ))}
        

        </div>
          
        </div>
        
    </div>
  
  )
}

export default Home;