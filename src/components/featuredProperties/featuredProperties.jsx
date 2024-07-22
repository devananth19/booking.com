import "./featuredProperties.css"

const FeaturedProperties = () =>{
    return(
        <div className="fp">
            <div className="fpItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o=" alt="" className="fpImg" />
                <span className="fpName">ApartHotel Stare Miasto</span>
                <span className="fpCity">Old Town Poland</span>
                <span className="fpPrice">Starting From $150</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/121402222.webp?k=f7f266ab09f90ddea4464309eca14d79429afe4218ced6887cb52f82c42c03dc&o=" alt="" className="fpImg" />
                <span className="fpName">3 Epoquoes Apartment</span>
                <span className="fpCity">CZech Republic States</span>
                <span className="fpPrice">Starting From $350</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=de5db8fe94cbfe08d3bf16d3c86def035fd73b43ee497cffe27b03363764e0e2&o=" alt="" className="fpImg" />
                <span className="fpName">7 Season Apartments</span>
                <span className="fpCity">06 , Hungary Budapset</span>
                <span className="fpPrice">Starting From $160</span>
                <div className="fpRating">
                    <button>8.7</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/85257658.webp?k=e3f110e4ed0978310a028465a3bdd609149ecbded601555c881106255556b52e&o=" alt="" className="fpImg" />
                <span className="fpName">Lemon Locke</span>
                <span className="fpCity">United Kingdom , London</span>
                <span className="fpPrice">Starting From $290</span>
                <div className="fpRating">
                    <button>9.9</button>
                    <span>Excellent</span>
                </div>
            </div>
        </div>
    )
} 
export default FeaturedProperties