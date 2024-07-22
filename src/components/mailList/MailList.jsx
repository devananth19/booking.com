import "./mailList.css"

const MailList = () => {
    return(
            <div className="mail">
                <h1 className="mailTitle">Stay in the know! Save Time Save Money!</h1>
                    <span className="mailDesc">
                        Sign up to get marketing emails from Booking.com.
                    </span>
                <div className="mailInputContainer">
                    <input type="text" placeholder="Your Email Address"/>
                    <button>Subscribe</button>
                </div>
            </div>

    )
}

export default MailList