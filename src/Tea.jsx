import { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";

export function Tea({ tea, setTea, coffee, setCoffee }) {
    return (
        <div>
            <div className="fruits-container">
                <p>Tea & Coffee</p>
            </div>
            <TeaPack tea={tea} setTea={setTea} />
            <Coffee coffee={coffee} setCoffee={setCoffee} />
        </div>
    );
}

function TeaPack({ tea, setTea }) {
    // const tea = [
    //     {
    //         "id": "1",
    //         "img": "https://images-eu.ssl-images-amazon.com/images/I/51QF8woKr5S.AC_SL240_.jpg",
    //         "title": "Tata Tea Premium | Desh Ki Chai | Unique Blend Crafted For Chai Lovers Across India | Black Tea | 1.5kg",
    //         "rate": "₹559.00",
    //         "strike": "₹704.00",
    //         "off": "22% Off",
    //         "brought": "2k+ bought in past week",
    //         "soldby": "Aripl_Yeshwanthpur IA ",
    //         "ingredientType": "Vegetarian",
    //         "infoOne": "Tata Tea Premium, India Ke Liye Anokha Swad",
    //         "infoTwo": " Tata Tea Premium has a unique taste that chai lovers across India will enjoy",
    //         "infoThree": "READY-TO-SERVE FRUIT DRINK: It is a ready-to-serve fruit drink, so relish it anytime, anywhere",
    //         "speciality": "Suitable for Vegetarian",
    //         "weight": "1500 Grams",
    //         "brand": "Tata Tea Premium",
    //         "packageInfo": "Bag",
    //         "manufacturer": "Tata Consumers Private Limited",
    //         "netQuantity": "1500.00 Grams",
    //         "dimension": "59 x 45.5 x 34.5 cm; 1.5 Kilograms",
    //         "asin": "B08H654828",
    //         "review": "4.4",
    //         "date": "22 August 2016"
    //     },
    //     {
    //         "id": "2",
    //         "img": "https://images-eu.ssl-images-amazon.com/images/I/61bAXpy0-rS.AC_SL240_.jpg",
    //         "title": "Tata Tea Gold Care | Rich in Taste | Goodness of Elaichi, Ginger, Tulsi, Brahmi & Mulethi | Black Tea | 1 kg",
    //         "rate": "₹507.00 ",
    //         "strike": "₹580.00",
    //         "off": "11% Off",
    //         "brought": "400+ bought in past week",
    //         "soldby": "Aripl_Yeshwanthpur IA ",
    //         "ingredientType": "Vegetarian",
    //         "infoOne": "Brahmi is known to help improve memory;Cardamom is known to help with digestion; Tea with the goodness of mulethi and ginger that are known to be good for sore throat and common cold and cough respectively",
    //         "infoTwo": " Savor Every Moment: Perfect cup of tea to delight you & your loved ones at any time of the day",
    //         "infoThree": "Enjoy an exquisite tea blend with rich taste and natural ingredients of Tata Tea Gold Care;Tulsi is known to improve the bodyâ€s immunity",
    //         "speciality": "Suitable for Vegetarian",
    //         "weight": "600 Grams",
    //         "brand": "Tata Tea Gold Care",
    //         "packageInfo": "Bag",
    //         "manufacturer": "Tata Consumers Private Limited",
    //         "netQuantity": "1000.00 Grams",
    //         "dimension": "5.8 x 3.5 x 2.7 cm; 600 Grams",
    //         "asin": "B0966R9MRK",
    //         "review": "4.3",
    //         "date": "3 May 2021"
    //     },
    //     {
    //         "id": "3",
    //         "img": "https://images-eu.ssl-images-amazon.com/images/I/51+iVkS0ZVL.AC_SL240_.jpg",
    //         "title": "Brooke Bond, Red Label, 100g",
    //         "rate": "₹46.00",
    //         "strike": "₹50.00",
    //         "off": "8% Off",
    //         "brought": "900+ bought in past week",
    //         "soldby": "Aripl_Yeshwanthpur IA ",
    //         "ingredientType": "Vegetarian",
    //         "infoOne": "High quality blend of tea rich in taste and rich in healthy flavanoids",
    //         "infoTwo": "A tasty way to stay healthy",
    //         "infoThree": "Country of Origin: India",
    //         "speciality": "Flavanoids",
    //         "weight": "120 Grams",
    //         "brand": "Brooke Bond",
    //         "packageInfo": "Box",
    //         "manufacturer": "HUL",
    //         "netQuantity": "100.00 Grams",
    //         "dimension": "9.4 x 6.9 x 4.3 cm; 120 Grams",
    //         "asin": "B00T7GG6X8",
    //         "review": "4.3",
    //         "date": "5 February 2015"
    //     },
    //     {
    //         "id": "4",
    //         "img": "https://images-eu.ssl-images-amazon.com/images/I/6191HroVddL.AC_SL240_.jpg",
    //         "title": "3 Roses Dust Tea, 500g Carton",
    //         "rate": "₹333.00",
    //         "strike": "₹390.00",
    //         "off": "15% Off",
    //         "brought": "400+ bought in past week",
    //         "soldby": "Aripl_Yeshwanthpur IA ",
    //         "ingredientType": "Vegetarian",
    //         "infoOne": "A sip of Brooke Bond 3 Roses tea spreads warmth, care and mischievous behavior in you;High quality blends of tea rich in color taste and strength and rich in healthy flavonoids",
    //         "infoTwo": "Processed in the unique Brooke Bond tea excellence centerA tasty way to stay healthy",
    //         "infoThree": "Country of Origin: India",
    //         "speciality": "Suitable for Vegetarian",
    //         "weight": "400 Grams",
    //         "brand": "Brooke Bond",
    //         "packageInfo": "Box",
    //         "manufacturer": "HUL",
    //         "netQuantity": "500.00 Grams",
    //         "dimension": "10 x 6.7 x 16.3 cm; 400 Grams",
    //         "asin": "B0055I9012",
    //         "review": "4.4",
    //         "date": "5 February 2015"
    //     },
    //     {
    //         "id": "5",
    //         "img": "https://images-eu.ssl-images-amazon.com/images/I/51-7wYSu-FL.AC_SL240_.jpg",
    //         "title": "Tata Tea Gold | Assam teas with Gently Rolled Aromatic Long Leaves | Black Tea | 100g",
    //         "rate": "₹45.00",
    //         "strike": "₹60.00",
    //         "off": "25% Off",
    //         "brought": "400+ bought in past week",
    //         "soldby": "Aripl_Yeshwanthpur IA ",
    //         "ingredientType": "Vegetarian",
    //         "infoOne": "For discerning tea Drinking consumers: Enjoy the superior balance of rich taste and irresistible aroma with Tata Tea Gold",
    //         "infoTwo": "Exquisite Tea Leaves: Made by blending 15% gently rolled aromatic long leaves with 85% Assam CTC tea leaves",
    //         "infoThree": "Quality Standards: Premium quality tea, selected and blended by Tata Tea experts",
    //         "speciality": "Suitable for Vegetarian",
    //         "weight": "100 Grams",
    //         "brand": "Tata Tea Gold",
    //         "packageInfo": "Bag",
    //         "manufacturer": "Tata Global Beverages",
    //         "netQuantity": "100.00 Grams",
    //         "dimension": "9.9 x 6.9 x 4.3 cm; 100 Grams",
    //         "asin": "B00XW5HQMU",
    //         "review": "4.4",
    //         "date": "19 May 2015"
    //     }]
    const getProducts = () => {
        fetch("https://amazon-backend-orcin.vercel.app/tea",
            { method: "GET" })
            .then((data) => data.json())
            .then((dts) => setTea(dts))
    }
    useEffect(() => getProducts(), [])
    return (
        <div className="mangoes">
            <p className="mangoes-ptag">Tea</p>
            <div className="mango-flex">
                {tea.map((tea, index, id) => <TeaList tea={tea} key={index} id={id} />)}
            </div>
        </div>
    )
}

function TeaList({ tea, id }) {
    const navigate = useNavigate()
    return (
        <div className="mangolist" >
            <img src={tea.img} alt={tea.title} />
            <p className="mango-title" onClick={() => navigate(`/tea/${tea.id}`)}>{tea.title} </p>
            <span className="mango-rate">₹ {tea.rate}</span>
            <span className="strike">{tea.strike}</span>
            <p className="offer">{tea.off}</p>
        </div>
    )
}

export function TeaCont() {
    const { id } = useParams()
    const [tea, setTea] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        fetch(`https://amazon-backend-orcin.vercel.app/tea/${id}`)
            .then((data) => data.json())
            .then((dts) => setTea(dts));
    }, [id]);
    const amount = parseInt(tea.rate)
    const handleClick = (e) => {
        e.preventDefault()
        if (amount === '') {
            alert("please enter amount")
        }
        else {
            var option = {
                key: "rzp_test_teSKDfmwTCTFu0",
                key_secret: "2TZaVrFSXYnzzu3QeH6N3t3w",
                amount: amount * 100,
                currency: "INR",
                name: "Amazon Groceries",
                description: "For Booking Ticket",
                handler: function (response) {
                    alert(response.razorpay_payment_id)
                    // navigate("/thank-you")
                    setTimeout(() => {
                        navigate("/dashboard")
                    }, 3000)
                },
                // prefill: {
                //     name: name,
                //     email: email,
                //     contact: phone,
                // },
                notes: {
                    address: "Razor pay corporate office"
                },
                theme: {
                    color: "#3399cc"
                }

            }
            var pay = new window.Razorpay(option)
            pay.open()

        }


    }
    return (
        <div className="info">
            <div className="features">
                <img className="features-image" src={tea.img} alt={tea.title} />
                <div>
                    <div className="features-content">
                        <p className="features-content-title">{tea.title}</p>
                        <div className="features-height">

                            <p className="features-fresh">{tea.manufacturer}</p>
                            <p className="features-rating">Rating : {tea.review}</p>
                            <p>{tea.brought}</p>
                        </div>

                    </div>
                    <div className="price-container">
                        <p>MRP :<span className="price-strike" > {tea.strike}</span></p>
                        <p >Price : <span className="price">₹ {tea.rate}</span></p>
                        <p >Offer : <span className="price">{tea.off}</span></p>
                        <p>Inclusive all taxes</p>
                    </div>
                    <div className="delivery">
                        <div className="delivery-cont">
                            <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarmV3/free-shipping._CB592228481_.jpg" />
                            <p>Free Delivery</p>
                        </div>
                        <div className="delivery-cont">
                            <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarmV3/returns._CB592228481_.jpg" />
                            <p>Non Returnable</p>
                        </div>
                        <div className="delivery-cont">
                            <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarmV3/top-brand._CB592228481_.jpg" />
                            <p>Top Placed</p>
                        </div>
                        <div className="delivery-cont">
                            <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarmV3/amazon-delivered._CB592228481_.jpg" />
                            <p>Amazon Delivered</p>
                        </div>
                    </div>
                    <div className="soldby">

                        <p>Sold by <span className="soldby-bold">{tea.soldby}</span> and fulfilled by Amazon</p>
                        <div className="veg-container">
                            <div className="veg">
                                <div className="veg-circle"></div>
                            </div>
                            <p>This is a <span className="soldby-product">{tea.ingredientType}</span> Product</p>
                            <button className="buy"
                                onClick={handleClick}
                            >Buy</button>
                        </div>
                    </div>
                    <div className="about">
                        <p className="about-title">About this item</p>
                        <ul>
                            <li>{tea.infoOne}</li>
                            <li>{tea.infoTwo}</li>
                            <li>{tea.infoThree}</li>
                        </ul>
                    </div>
                </div>


            </div>
            <div className="product">
                <p className="product-name">Product Information</p>
                <div className="product-info">
                    <div className="tech-info">
                        <p>Technical Details</p>
                        <table>
                            <tr>
                                <td className="row-head">Speciality</td>
                                <td className="row-data">{tea.speciality}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Weight</td>
                                <td className="row-data">{tea.weight}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Ingredient Type</td>
                                <td className="row-data">{tea.ingredientType}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Brand</td>
                                <td className="row-data">{tea.brand}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Package Information</td>
                                <td className="row-data">{tea.packageInfo}</td>
                            </tr>

                            <tr>
                                <td className="row-head">Manufacturer</td>
                                <td className="row-data">{tea.manufacturer}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Net Quantity</td>
                                <td className="row-data">{tea.netQuantity}</td>
                            </tr>

                            <tr>
                                <td className="row-head">Package Dimensions</td>
                                <td className="row-data">{tea.dimension}</td>
                            </tr>
                        </table>
                    </div>
                    <div className="additional-info">
                        <p>Additional Information</p>
                        <table>
                            <tr>
                                <td className="row-head">ASIN</td>
                                <td className="row-data">{tea.asin}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Customer Reviews</td>
                                <td className="row-data">{tea.review}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Date First Available</td>
                                <td className="row-data">{tea.date}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Manufacturer</td>
                                <td className="row-data">{tea.manufacturer}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Item Weight</td>
                                <td className="row-data">{tea.weight}</td>
                            </tr>

                        </table>

                    </div>
                </div>
            </div>
        </div>

    )
}
function Coffee({ coffee, setCoffee }) {
    // const coffee = [
    //     {
    //         "id": "1",
    //         "img": "https://images-eu.ssl-images-amazon.com/images/I/612gMtYy6aL.AC_SL240_.jpg",
    //         "title": "Bru Instant | Aromatic Coffee From South Indian Plantations | 200g",
    //         "rate": "₹346.00",
    //         "strike": "₹460.00",
    //         "off": "19% Off",
    //         "brought": "2k+ bought in past week",
    //         "soldby": "Aripl_Yeshwanthpur IA ",
    //         "ingredientType": "Vegetarian",
    //         "infoOne": "Real Taste of South Indian Coffee : Bru Instant is made with choicest coffee beans from South Indian plantations",
    //         "infoTwo": " Select Beans : Bru Instant is crafted with the right blend of Robusta & Arabica beans which are carefully handpicked from South Indian plantations.",
    //         "infoThree": "Fine Blend : Bru Instant is made with a blend of 70% Coffee & 30% Chicory",
    //         "speciality": "Suitable for Vegetarian",
    //         "weight": "0.2 KiloGrams",
    //         "brand": "Bru",
    //         "packageInfo": "Bag",
    //         "manufacturer": "HUL",
    //         "netQuantity": "0.2 KiloGrams",
    //         "dimension": "4.3 x 9.4 x 21.1 cm; 200 Grams",
    //         "ingredient": "Instant Coffee Chicory Mixture, Coffee 70% Chicory 30%",
    //         "asin": "B00649B4EM",
    //         "review": "4.4",
    //         "date": "11 July 2014"
    //     },
    //     {
    //         "id": "2",
    //         "img": "https://images-eu.ssl-images-amazon.com/images/I/71z9qM84SKL.AC_SL240_.jpg",
    //         "title": "NESCAFE Classic Instant Coffee Powder, 90 g Jar",
    //         "rate": "₹306.00 ",
    //         "strike": "₹340.00",
    //         "off": "10% Off",
    //         "brought": "700+ bought in past week",
    //         "soldby": "Aripl_Yeshwanthpur IA ",
    //         "ingredientType": "Vegetarian",
    //         "infoOne": "GIVE A FRESH START TO YOUR DAY with a sip of NESCAFE Classic Instant Coffee and let the bold taste with rich aroma of the instant coffee awaken your senses to new opportunities",
    //         "infoTwo": "100% PURE COFFEE: NESCAFE Classic Instant Coffee is made from handpicked Robusta beans from South India that are slow-roasted to achieve the signature NESCAFE aroma. The perfect coffee flavour is extracted & locked in every coffee bean for the perfect cup at any time.",
    //         "infoThree": "EASY & CONVENIENT: NESCAFE offers a delightful coffee experience in a totally convenient way! You can be your own coffee artist and get great tasting coffee at home with the easy-to-prepare instant coffee powder.",
    //         "speciality": "Suitable for Vegetarian",
    //         "weight": "90 Grams",
    //         "brand": "Nescafe",
    //         "packageInfo": "Jar",
    //         "manufacturer": "Nestle",
    //         "netQuantity": "90 oGrams",
    //         "dimension": "9.1 x 11.2 x 16.8 cm; 90 Grams",
    //         "ingredient": "Coffee beans",
    //         "asin": "B00VK0FTP0",
    //         "review": "4.5",
    //         "date": "1 January 2017"
    //     },
    //     {
    //         "id": "3",
    //         "img": "https://images-eu.ssl-images-amazon.com/images/I/61FlCfSqpzS.AC_SL240_.jpg",
    //         "title": "BRU Green Label Filter Coffee Powder 500 g Pouch",
    //         "rate": "₹224.00",
    //         "strike": "₹240.00",
    //         "off": "7% Off",
    //         "brought": "1k+ bought in past week",
    //         "soldby": "Aripl_Yeshwanthpur IA ",
    //         "ingredientType": "Vegetarian",
    //         "infoOne": "Filter coffee",
    //         "infoTwo": " Rich and thick aromatic cup of coffee",
    //         "infoThree": "Nitro flush packing for best freshness",
    //         "speciality": "Suitable for Vegetarian",
    //         "weight": "500 Grams",
    //         "brand": "Bru",
    //         "packageInfo": "Bag",
    //         "manufacturer": "HUL",
    //         "netQuantity": "500.00 Grams",
    //         "dimension": "17.8 x 8.9 x 5.8 cm; 500 Grams",
    //         "ingredient": "Instant Coffee Chicory Mixture, Coffee 70% Chicory 30%",
    //         "asin": "B0186Y4KFC",
    //         "review": "4.2",
    //         "date": "19 November 2015"
    //     },
    //     {
    //         "id": "4",
    //         "img": "https://m.media-amazon.com/images/I/81iO3MinybL._SX679_.jpg",
    //         "title": "Bru Instant | Aromatic Coffee From South Indian Plantations | 50g",
    //         "rate": "₹385.00",
    //         "strike": "₹425.00",
    //         "off": "8% Off",
    //         "brought": "500+ bought in past week",
    //         "soldby": "Aripl_Yeshwanthpur IA ",
    //         "ingredientType": "Vegetarian",
    //         "infoOne": "Nescafe Sunrise instant coffee-chicory mixture is made from blends of 70% coffee and 30% chicory",
    //         "infoTwo": "Our coffee journey begins with handpicking the best beans fom the coffee farms in south India",
    //         "infoThree": "Blends of Arabica and Robusta coffee beans are slow roasted for the perfect aroma",
    //         "speciality": "Natural",
    //         "weight": "200 Grams",
    //         "brand": "Sunrise",
    //         "packageInfo": "Jar",
    //         "manufacturer": "Nestle",
    //         "netQuantity": "200.00 Grams",
    //         "dimension": "10 x 15 x 10 cm; 200 Grams",
    //         "ingredient": "Coffee Beans (70%) and Chicory",
    //         "asin": "B08BPVJ5XJ",
    //         "review": "4.5",
    //         "date": "22 March 2022"
    //     },
    //     {
    //         "id": "5",
    //         "img": "https://m.media-amazon.com/images/I/71j2Npq+HAL._SL1500_.jpg",
    //         "title": "Nescafé NESCAFE SUNRISE, Instant Ground Coffee-Chicory Mix, 200g Bag",
    //         "rate": "₹396.00",
    //         "strike": "₹440.00",
    //         "off": "10% Off",
    //         "brought": "1k+ bought in past week",
    //         "soldby": "Aripl_Yeshwanthpur IA ",
    //         "ingredientType": "Vegetarian",
    //         "infoOne": "Nescafe Sunrise instant coffee-chicory mixture is made from blends of 70% coffee and 30% chicory",
    //         "infoTwo": "Our coffee journey begins with handpicking the best beans fom the coffee farms in south India",
    //         "infoThree": "Blends of Arabica and Robusta coffee beans are slow roasted for the perfect aroma",
    //         "speciality": "Natural",
    //         "weight": "200 Grams",
    //         "brand": "Nescafe",
    //         "packageInfo": "Bag",
    //         "manufacturer": "Nestle",
    //         "netQuantity": "200.00 Grams",
    //         "dimension": "10 x 15 x 10 cm; 200 Grams",
    //         "ingredient": "Coffee Beans (70%) and Chicory",
    //         "asin": "B00VJYYJ80",
    //         "review": "4.5",
    //         "date": "2 Apirl 2015"
    //     }]
    const getProducts = () => {
        fetch("https://amazon-backend-orcin.vercel.app/coffee",
            { method: "GET" })
            .then((data) => data.json())
            .then((dts) => setCoffee(dts))
    }
    useEffect(() => getProducts(), [])
    return (
        <div className="mangoes">
            <p className="mangoes-ptag">Coffee </p>
            <div className="mango-flex">
                {coffee.map((coffee, index, id) => <CoffeeList coffee={coffee} key={index} id={id} />)}
            </div>
        </div>
    )
}



function CoffeeList({ coffee, id }) {
    const navigate = useNavigate()
    return (
        <div className="mangolist" >
            <img src={coffee.img} alt={coffee.title} />
            <p className="mango-title" onClick={() => navigate(`/tea/${coffee.id}`)}>{coffee.title} </p>
            <span className="mango-rate">₹ {coffee.rate}</span>
            <span className="strike">{coffee.strike}</span>
            <p className="offer">{coffee.off}</p>
        </div>
    )
}

export function CoffeeCont() {
    const { id } = useParams()
    const [coffee, setCoffee] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        fetch(`https://amazon-backend-orcin.vercel.app/coffee/${id}`)
            .then((data) => data.json())
            .then((dts) => setCoffee(dts));
    }, [id]);
    const amount = parseInt(coffee.rate)
    const handleClick = (e) => {
        e.preventDefault()
        if (amount === '') {
            alert("please enter amount")
        }
        else {
            var option = {
                key: "rzp_test_teSKDfmwTCTFu0",
                key_secret: "2TZaVrFSXYnzzu3QeH6N3t3w",
                amount: amount * 100,
                currency: "INR",
                name: "Amazon Groceries",
                description: "For Booking Ticket",
                handler: function (response) {
                    alert(response.razorpay_payment_id)
                    // navigate("/thank-you")
                    setTimeout(() => {
                        navigate("/dashboard")
                    }, 3000)
                },
                // prefill: {
                //     name: name,
                //     email: email,
                //     contact: phone,
                // },
                notes: {
                    address: "Razor pay corporate office"
                },
                theme: {
                    color: "#3399cc"
                }

            }
            var pay = new window.Razorpay(option)
            pay.open()

        }


    }
    return (
        <div className="info">
            <div className="features">
                <img className="features-image" src={coffee.img} alt={coffee.title} />
                <div>
                    <div className="features-content">
                        <p className="features-content-title">{coffee.title}</p>
                        <div className="features-height">

                            <p className="features-fresh">{coffee.manufacturer}</p>
                            <p className="features-rating">Rating : {coffee.review}</p>
                            <p>{coffee.brought}</p>
                        </div>

                    </div>
                    <div className="price-container">
                        <p>MRP :<span className="price-strike" > {tea.strike}</span></p>
                        <p >Price : <span className="price">₹ {coffee.rate}</span></p>
                        <p >Offer : <span className="price">{coffee.off}</span></p>
                        <p>Inclusive all taxes</p>
                    </div>
                    <div className="delivery">
                        <div className="delivery-cont">
                            <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarmV3/free-shipping._CB592228481_.jpg" />
                            <p>Free Delivery</p>
                        </div>
                        <div className="delivery-cont">
                            <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarmV3/returns._CB592228481_.jpg" />
                            <p>Non Returnable</p>
                        </div>
                        <div className="delivery-cont">
                            <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarmV3/top-brand._CB592228481_.jpg" />
                            <p>Top Placed</p>
                        </div>
                        <div className="delivery-cont">
                            <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarmV3/amazon-delivered._CB592228481_.jpg" />
                            <p>Amazon Delivered</p>
                        </div>
                    </div>
                    <div className="soldby">

                        <p>Sold by <span className="soldby-bold">{coffee.soldby}</span> and fulfilled by Amazon</p>
                        <div className="veg-container">
                            <div className="veg">
                                <div className="veg-circle"></div>
                            </div>
                            <p>This is a <span className="soldby-product">{coffee.ingredientType}</span> Product</p>
                            <button className="buy"
                                onClick={handleClick}
                            >Buy</button>
                        </div>
                    </div>
                    <div className="about">
                        <p className="about-title">About this item</p>
                        <ul>
                            <li>{coffee.infoOne}</li>
                            <li>{coffee.infoTwo}</li>
                            <li>{coffee.infoThree}</li>
                        </ul>
                    </div>
                </div>


            </div>
            <div className="product">
                <p className="product-name">Product Information</p>
                <div className="product-info">
                    <div className="tech-info">
                        <p>Technical Details</p>
                        <table>
                            <tr>
                                <td className="row-head">Speciality</td>
                                <td className="row-data">{coffee.speciality}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Weight</td>
                                <td className="row-data">{coffee.weight}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Ingredient Type</td>
                                <td className="row-data">{coffee.ingredientType}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Brand</td>
                                <td className="row-data">{coffee.brand}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Package Information</td>
                                <td className="row-data">{coffee.packageInfo}</td>
                            </tr>

                            <tr>
                                <td className="row-head">Manufacturer</td>
                                <td className="row-data">{coffee.manufacturer}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Net Quantity</td>
                                <td className="row-data">{coffee.netQuantity}</td>
                            </tr>

                            <tr>
                                <td className="row-head">Ingredient</td>
                                <td className="row-data">{coffee.ingredient}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Package Dimensions</td>
                                <td className="row-data">{coffee.dimension}</td>
                            </tr>
                        </table>
                    </div>
                    <div className="additional-info">
                        <p>Additional Information</p>
                        <table>
                            <tr>
                                <td className="row-head">ASIN</td>
                                <td className="row-data">{coffee.asin}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Customer Reviews</td>
                                <td className="row-data">{coffee.review}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Date First Available</td>
                                <td className="row-data">{coffee.date}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Manufacturer</td>
                                <td className="row-data">{coffee.manufacturer}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Item Weight</td>
                                <td className="row-data">{coffee.weight}</td>
                            </tr>

                        </table>

                    </div>
                </div>
            </div>
        </div>

    )
}