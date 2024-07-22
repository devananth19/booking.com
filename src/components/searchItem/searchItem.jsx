import "./searchItem.css";
import { useNavigate } from 'react-router-dom';

const SearchItem = () => {
    const navigate = useNavigate();

    const handleClick = (id) => {
      navigate(`/hotels/${id}`);
    };

    return (
        <div className="searchItem">
            <img className="siImg" src="https://cf.bstatic.com/xdata/images/hotel/square600/101204906.webp?k=5a6b2cac346efae3353a7f1519da8ebda85badb866b70ba1679438f10b21ac5b&o=" alt="" />
            <div className="siDesc">
                <h1 className="siTitle">Tower Street Apartments</h1>
                <span className="siDistance">500m from center</span>
                <span className="siTaxiOp">Free Airport Taxi</span>
                <span className="siSubtitle">
                    Studio Apartment with Air Conditioning
                </span>
                <span className="siFeatures">
                    Entire Studio · 1 Bathroom · 2m Full Bed
                </span>
                <span className="siCancelOp">Free Cancellation</span>
                <span className="siCancelOpSubtitle">
                    You can cancel later, so lock in this great price today!
                </span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className="siDetailsTexts">
                    <span className="siPrice">$123</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                    <button className="siCheckButton" onClick={() => handleClick(1)}>See Availability</button>
                </div>
            </div>
        </div>
    );
};

export default SearchItem;
