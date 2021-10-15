import React from 'react';
import './Home.css';
import Product from './Product';




function Home() {
    return (
        <div className="home">
            <div className="home--container">
            <img className="home--image" src="https://m.media-amazon.com/images/I/71vYYyuty0L._SX3000_.jpg" alt=""/>
            
            <div className="home--row">
                <Product
                id="01"
                
                price={799}
                image="https://m.media-amazon.com/images/I/71ZLwnGLd3L._UL1500_.jpg" 
                title="Adult Cotton Hooded Neck Bellaciao"
                
                />
                <Product
                id="02"
                
                price={999}
                image="https://m.media-amazon.com/images/I/41LpEJk1GlS.jpg" 
                title="MILLIONSTORE Men's Joggers"
                
                />
                 <Product
                id="03"
                
                price={325}
                image="https://m.media-amazon.com/images/I/71mcY2boNVL._UL1500_.jpg" 
                title="ALAMOS Combo Pack of 2 edixo Cap"
                
                />
                 <Product
                id="04"
                
                price={6999}
                image="https://m.media-amazon.com/images/I/51YVqK4FLFL._UL1000_.jpg" 
                title=" Nike Men's Jordan Jumpman 2021 Pf Basketball Shoe"
                
                />
                
              
            </div>
            <div className="home--row">
            
                 <Product
                id="01"
                
                price={499}
                image="https://m.media-amazon.com/images/I/51BjQvMdyjL.jpg" 
                title="EPC Games - N-F-S Carbon"
                
                />
                
                 <Product
                id="02"
                
                price={799}
                image="https://m.media-amazon.com/images/I/51dkyyxHSYL.jpg" 
                title="The Witcher 3 (Extreme-Addition)"
                />
                <Product
                id="01"
                
                price={1999}
                image="https://m.media-amazon.com/images/I/81jlVYgx3lL._SL1500_.jpg" 
                title="Cyberpunk 2077 (Free PS5 Upgrade)"
                
                />
           
            </div>
            <div className="home--row">
            <Product
                id="02"
                
                price={1999}
                image="https://m.media-amazon.com/images/I/71ar2Uq1JvL._UL1500_.jpg" 
                title="THE CLOWNFISH 15.6 Inches Travel Outdoor"
                
                />
     
            </div>

            <div className="home--row">
            <Product
                id="01"
                
                price={4899}
                image="https://m.media-amazon.com/images/I/61GfpiC1mfL._SL1280_.jpg https://m.media-amazon.com/images/I/51Kl7eDCuDL._SL1000_.jpg  " 
               
                title="FPV Drone with 1080P HD 4k Camera"
                
                />
     
            </div>
        
        
            </div>  
        </div>
    )
}

export default Home
