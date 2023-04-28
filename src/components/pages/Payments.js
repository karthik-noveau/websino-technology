
function Payments(props) {
    var amount=props.amount;
            var options = {
                key: "rzp_live_xxDTbbEYUCIKe9",
                key_secret: "O281iyZhSQ26i2eektLJU6Uz",
                amount: amount * 100,
                currency: "INR",
                name: "Skynoveau Technology",
                description: "payment",
                handler: function (response) {
                    alert(response.razorpay_payment_id);
                },
                // prefill: {
                //     name: "karthik",
                //     email: "karthik5112001@gmail.com",
                //     contact: "9360375911"
                // },
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

export default Payments;