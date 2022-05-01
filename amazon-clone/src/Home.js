import React from 'react';
import './Home.css';
import Product from './Product';





function Home() {
    return (
        <div className="home">
            <div className="home--container">


               {/* homeimageslider */}
                <div className='slider'>
                    <div className="slides">
                    
                   
                         {/* radio button start */}
                        <input type="radio" name="radio-btn" id="radio1"></input>
                        <input type="radio" name="radio-btn" id="radio2"></input>
                        <input type="radio" name="radio-btn" id="radio3"></input>
                        <input type="radio" name="radio-btn" id="radio4"></input>
                        {/* radio button end */}

                        {/* slide image start */}
                        <div className="slide first">
                        <img  src="https://images2.alphacoders.com/112/1128856.jpg" alt="" />
                        </div>
                        <div className="slide">
                        <img  src="https://cdn.mos.cms.futurecdn.net/vgJvyCPYewT95iwEUwd6DT.jpg" alt="" />
                        </div>
                        <div className="slide">
                        <img  src="https://wallpapercave.com/wp/wp6072795.jpg" alt="" />
                        </div>
                        <div className="slide">
                        <img  src="https://wallpapercave.com/wp/wp6072800.jpg" alt="" />
                        </div>
                    </div>
                    {/* slide image end */}

                    {/* automatic navigation start */}
                    <div className='navigation--auto'>
                        <div className='auto-btn1'></div>
                        <div className='auto-btn2'></div>
                        <div className='auto-btn3'></div>
                        <div className='auto-btn4'></div>
                    </div>
                    {/* automatic navigation end */}


                    {/* annual navigation start */}
                    <div className='navigation-manual'>
                        <label for="radio1" className='manual-btn'></label>
                        <label for="radio2" className='manual-btn'></label>
                        <label for="radio3" className='manual-btn'></label>
                        <label for="radio4" className='manual-btn'></label>
                    </div>
                </div>



                <div className="home--row">
                    <Product
                        id="01"

                        price={2378}
                        image="https://m.media-amazon.com/images/I/81qV5dlKUBL._SL1500_.jpg"
                        title="Marvel's Guardians of the Galaxy (PC)"

                    />
                    <Product
                        id="02"

                        price={1999}
                        image="https://images-na.ssl-images-amazon.com/images/I/91grctgwzFL.jpg"
                        title="The Art of Uncharted 4"

                    />
                    <Product
                        id="03"

                        price={2000}
                        image="https://m.media-amazon.com/images/I/61fSnVA2FGL._SL1000_.jpg"
                        title="Square Enix Just Cause 4 (PC)"

                    />
                    <Product
                        id="04"

                        price={999}
                        image="https://m.media-amazon.com/images/I/71ff9vFiskL._SL1097_.jpg"
                        title=" Mad Max (PC)"
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
                        id="03"

                        price={1999}
                        image="https://m.media-amazon.com/images/I/81jlVYgx3lL._SL1500_.jpg"
                        title="Cyberpunk 2077 (Free PS5 Upgrade)"

                    />

                </div>
                <div className="home--row">
                    <Product
                        id="01"

                        price={999}
                        image="https://m.media-amazon.com/images/I/71S9QD541VL._SL1500_.jpg"
                        title="The Bureau Xcom Declassified (PC)"

                    />
                    <Product
                        id="02"

                        price={1999}
                        image="https://m.media-amazon.com/images/I/81zx-5y0YyL._SL1500_.jpg"
                        title="
                        NBA 2K21"

                    />
                    <Product
                        id="03"

                        price={1999}
                        image="https://m.media-amazon.com/images/I/81Y37RvvNWL._SL1500_.jpg"
                        title="Far Cry 4 (PS4)"

                    />
                    <Product
                        id="04"

                        price={4899}
                        image="https://m.media-amazon.com/images/I/812E6hdG+VL._SL1500_.jpg "

                        title="
                        Watch Dogs 2 (PS4)"

                    />


                </div>

                <div className="home--row">
                    <Product
                        id="01"

                        price={1899}
                        image="https://m.media-amazon.com/images/I/61wsdxrym8L._SL1024_.jpg "

                        title="
                        Division 2 (PS4)"

                    />
                    <Product
                        id="02"

                        price={4899}
                        image="https://m.media-amazon.com/images/I/71ueeBvSFhL._SL1500_.jpg  "

                        title="
                        Dishonored 2 (PS4)"

                    />
                

                </div>


            </div>
        </div>
    )
}

export default Home
