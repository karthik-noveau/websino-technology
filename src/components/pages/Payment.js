
import '../css/Payment.css'
import gpay_icon from '../Assets/gpay_icon.png'
import razorpay from '../Assets/razorpay.png'
import { useEffect } from 'react'


function Payment() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });


    const handleSubmit = (e) => {
        e.preventDefault();
        let amount=2;
            var options = {
                key: "rzp_live_xxDTbbEYUCIKe9",
                key_secret: "O281iyZhSQ26i2eektLJU6Uz",
                amount: amount * 100,
                currency: "INR",
                name: "Skynoveau Technology",
                description: "Payment Portal",
                handler: function () {
                    alert("Payment Successful");
                },
                prefill: {
                    name: "karthik",
                    email: "Enter your mail id",
                    contact: ""
                },
                notes: {
                    address: "Razorpay Corporate office"
                },
                theme: {
                    color: "rgb(0, 82, 0)"
                }
            };
            var pay = new window.Razorpay(options);
            pay.open();
        
    }
    return (
        <div className="payment_google_payment" id="payment">
            <p className="pay_title" data-aos="flip-right">Continue your payment</p>
            <div className='inpt'>
                <button onClick={handleSubmit}>Proceed to pay </button>
            </div>

            <div className='or'>
                <p>( or )</p>
            </div>

            {/* <div className="gpay_icon">
                <div className="gpay_icon_container" data-aos="flip-left">
                    <img src={gpay_icon} />
                    <p>+91 9360375911</p>
                </div>
            </div>
            <p className="upi" data-aos="flip-right">UPI ID : karthik51120001@okaxis</p> */}

            <div className="pay_container">
                <img src={razorpay} />
            </div>
        </div>
    )
}

export default Payment; 