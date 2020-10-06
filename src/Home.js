import React from 'react';
import "./Home.css";
import Product from './Product';
function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg" alt="" />

                <div className="home__row">
                    <Product
                        id='49875617'
                        title="The bench Table"
                        price={39.99}
                        image='https://images-eu.ssl-images-amazon.com/images/G/31/IMG19/Furniture/MSO/WFH_379x304._SY304_CB430182042_.jpg'
                        rating={4}
                    />
                    <Product
                        id='49538094'
                        title='Blendtec Total Classic Original Blender - WildSide+ Jar (90 oz) - Professional-Grade Power - 6 Pre-programmed Cycles - 10-speeds - Black' price={275.12}
                        image='https://images-na.ssl-images-amazon.com/images/I/31znGMx%2B9FL._AC_.jpg'
                        rating={4}
                    />

                </div>
                <div className="home__row">
                    <Product
                        id='76489512'
                        title='Garmin Forerunner 235, GPS Running Watch, Black/Gray'
                        price={159.99}
                        image='https://images-na.ssl-images-amazon.com/images/I/819WMWm6NoL._AC_SX425_.jpg'
                        rating={3}
                    />
                    <Product
                        id='24879651'
                        title='Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric'
                        price={98.99}
                        image='https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$'
                        rating={5}
                    />
                    <Product
                        id='31875649'
                        title='New Apple iPad Pro (12.9-inch, Wi-Fi + Cellular, 1TB) - Space Gray'
                        price={1778.00}
                        image='https://images-na.ssl-images-amazon.com/images/I/81FH2j7EnJL._AC_SX342_.jpg'
                        rating={4}
                    />


                </div>
                <div className="home__row">
                    {/* Product */}
                    <Product
                        id='97235814'
                        title='Alienware NEW Curved 34 Inch WQHD 3440 X 1440 120Hz, NVIDIA G-SYNC, IPS LED Edgelight, Monitor - Lunar Light, AW3420DW'
                        price={1029.99}
                        image='https://images-na.ssl-images-amazon.com/images/I/71NJAl4Jz0L._AC_SY450_.jpg'
                        rating={5}
                    />

                </div>

            </div>
        </div>
    )
}

export default Home
