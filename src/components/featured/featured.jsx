import "./featured.css";

const Featured = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <img className="featuredImg" src="https://cf.bstatic.com/xdata/images/city/600x600/684716.jpg?k=4c3f55236cffa6597afa0ef11a9f012636f535bf9cc6c0e2ed8142e01fa14766&o=" alt="Featured Item" />
                <div className="featuredTitles">
                    <h1>Dublin</h1>
                    <h2>123 Properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img className="featuredImg" src="https://cf.bstatic.com/xdata/images/city/600x600/971346.jpg?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o=" alt="Featured Item" />
                <div className="featuredTitles">
                    <h1>Austin</h1>
                    <h2>543 Properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img className="featuredImg" src="https://cf.bstatic.com/xdata/images/city/600x600/684730.jpg?k=e37b93d88c1fe12e827f10c9d6909a1def7349be2c68df5de885deaa4bc01ee3&o=" alt="Featured Item" />
                <div className="featuredTitles">
                    <h1>Reno</h1>
                    <h2>986 Properties</h2>
                </div>
            </div>
    </div>
    
    );
}

export default Featured;
