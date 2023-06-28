import { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";

export function Drinks({ drink, setDrink, juice, setJuice }) {
    return (
        <div>
            <div className="fruits-container">
                <p>Drinks & Juices</p>
            </div>
            <Juice juice={juice} setJuice={setJuice} />
            <Drink drink={drink} setDrink={setDrink} />
        </div>
    );
}


function Juice({ juice, setJuice }) {
    // const juice = [
    //     {
    //         "id": "1",
    //         "img": "https://images-eu.ssl-images-amazon.com/images/I/61aix3vMv5L.AC_SL240_.jpg",
    //         "title": "Minute Made Pulpy Orange Juice drink | 1l",
    //         "rate": "₹72.00",
    //         "strike": "₹90.00",
    //         "off": "20% Off",
    //         "brought": "1k+ bought in past week",
    //         "soldby": "Aripl_Yeshwanthpur IA ",
    //         "ingredientType": "Vegetarian",
    //         "infoOne": "COMMONLY SEARCHED TOPICS: minute maid pulpy orange juice, minute maid juice, minute maid orage juice, minute maid orange, minute maid pulpy, juices, fruit juice",
    //         "infoTwo": "PERFECT REFRESHMENT: Refresh yourself with the goodness of pulpy orange juice",
    //         "infoThree": "READY-TO-SERVE FRUIT DRINK: It is a ready-to-serve fruit drink, so relish it anytime, anywhere",
    //         "speciality": "Suitable for Vegetarian",
    //         "weight": "1000 grams",
    //         "brand": "Minute Maid",
    //         "packageInfo": "Plastic Bottle",
    //         "manufacturer": "Coca-Cola",
    //         "netQuantity": "1 Litre",
    //         "dimension": "6.8 x 8.2 x 26 cm; 1 Kilograms",
    //         "asin": "B01LXTFLNQ",
    //         "review": "4.4",
    //         "date": "1 January 2017"
    //     },
    //     {
    //         "id": "2",
    //         "img": "https://images-eu.ssl-images-amazon.com/images/I/718s5Hnzt-L.AC_SL240_.jpg",
    //         "title": "DABUR Real Fruit Power Mixed Fruit Juice 1L|",
    //         "rate": "₹103.00 ",
    //         "strike": "₹128.00",
    //         "off": "20% Off",
    //         "brought": "1.5k+ bought in past week",
    //         "soldby": " RK WORLD_fresh_ubl6",
    //         "ingredientType": "Vegetarian",
    //         "infoOne": "Every Réal fruit beverage is made from the juice of best quality fruits only",
    //         "infoTwo": "Réal undergoes 108 quality tests at various checkpoints for quality, fruit goodness, taste, nutrition and food safety",
    //         "infoThree": "Réal beverages have no added preservatives or artificial colours or artificial flavors",
    //         "speciality": "Suitable for Vegetarian",
    //         "weight": "1000 grams",
    //         "brand": "DABUR",
    //         "packageInfo": "Box",
    //         "manufacturer": "Dabur India Limited",
    //         "netQuantity": "1 Litre",
    //         "dimension": "19.6 x 7.9 x 8.4 cm; 1 Kilograms",
    //         "asin": "B013P5X7XI",
    //         "review": "4.3",
    //         "date": "10 August 2015"
    //     },
    //     {
    //         "id": "3",
    //         "img": "https://images-eu.ssl-images-amazon.com/images/I/81AQIJQOH1L.AC_SL240_.jpg",
    //         "title": "B Natural Guava Juice, Goodness of Fiber, 1 Litre",
    //         "rate": "₹66.00",
    //         "strike": "₹130.00",
    //         "off": "49% Off",
    //         "brought": "400+ bought in past week",
    //         "soldby": " Aripl_Yeshwanthpur IA",
    //         "ingredientType": "Vegetarian",
    //         "infoOne": "Relish the goodness of fruit and fiber with B Natural",
    //         "infoTwo": "Relish the goodness of real fruit that has been sourced from local Indian farmers like Jameel Mohammad from Yelahanka, Karnataka",
    //         "infoThree": "Enjoy an authentic fruit experience as B Natural Guava is made with orange pulp; it has 100% Indian fruit and 0% concentrate",
    //         "speciality": "No Added Sugar",
    //         "weight": "1 Kilograms",
    //         "brand": "B Natural",
    //         "packageInfo": "Box",
    //         "manufacturer": "ITC",
    //         "netQuantity": "1 Litre",
    //         "dimension": "6.6 x 9.7 x 20.6 cm; 1 Kilograms",
    //         "asin": "B01M6C1HEJ",
    //         "review": "4.3",
    //         "date": "2 November 2016"
    //     },
    //     {
    //         "id": "4",
    //         "img": "https://images-eu.ssl-images-amazon.com/images/I/71TrYuZLU6L.AC_SL240_.jpg",
    //         "title": "DABUR Real Fruit Power Cranberry, 1L",
    //         "rate": "₹106.00",
    //         "strike": "₹130.00",
    //         "off": "18% Off",
    //         "brought": "1.2k+ bought in past week",
    //         "soldby": " RK WORLD_fresh_ubl6",
    //         "ingredientType": "Vegetarian",
    //         "infoOne": "Every Réal fruit beverage is made from the juice of best quality fruits only",
    //         "infoTwo": "Réal undergoes 108 quality tests at various checkpoints for quality, fruit goodness, taste, nutrition and food safety",
    //         "infoThree": "Réal beverages have no added preservatives or artificial colours or artificial flavors",
    //         "speciality": "Suitable for Vegetarian",
    //         "weight": "1000 grams",
    //         "brand": "DABUR",
    //         "packageInfo": "Box",
    //         "manufacturer": "Dabur Lanka Pvt.Ltd",
    //         "netQuantity": "1 Litre",
    //         "dimension": "19.6 x 7.9 x 8.4 cm; 1 Kilograms",
    //         "asin": "B013P5X7XI",
    //         "review": "4.3",
    //         "date": "10 August 2015"
    //     },
    //     {
    //         "id": "5",
    //         "img": "https://images-eu.ssl-images-amazon.com/images/I/71ec0r+5WKL.AC_SL240_.jpg",
    //         "title": "Real Activ 100% Apple Fruit Juice - 1L |",
    //         "rate": "₹104.00",
    //         "strike": "₹155.00",
    //         "off": "33% Off",
    //         "brought": "1.5k+ bought in past week",
    //         "soldby": " RK WORLD_fresh_ubl6",
    //         "ingredientType": "Vegetarian",
    //         "infoOne": "No Added Sugar - The juices are not added with any sweeteners (artificial or nutritive) to keep it pure and natural.",
    //         "infoTwo": "No Added Colours - Be assured of no harmful chemical in your juice, so that all you get is health and taste. The colour of the juice is as natural as the fruit itself.",
    //         "infoThree": "No Added Preservatives - Réal Activ's Tetra Pak technology keeps the juices fresh for 6 months. Hence there is no need to add any harmful ingredient, keeping your juice natural.",
    //         "speciality": "No added Flavour,Sugar",
    //         "weight": "1000 grams",
    //         "brand": "DABUR",
    //         "packageInfo": "Box",
    //         "manufacturer": "Dabur India Limited",
    //         "netQuantity": "1 Litre",
    //         "dimension": "21.8 x 9.7 x 6.4 cm; 1 Kilograms",
    //         "asin": "B013P5V00K",
    //         "review": "4.5",
    //         "date": "10 August 2015"
    //     }]
    const getProducts = () => {
        fetch("https://amazon-backend-orcin.vercel.app/juice",
            { method: "GET" })
            .then((data) => data.json())
            .then((dts) => setJuice(dts))
    }
    useEffect(() => getProducts(), [])
    return (
        <div className="mangoes">
            <p className="mangoes-ptag">Juices</p>
            <div className="mango-flex">
                {juice.map((juice, index, id) => <JuiceList juice={juice} key={index} id={id} />)}
            </div>
        </div>
    )
}


function JuiceList({ juice, id }) {
    const navigate = useNavigate()
    return (
        <div className="mangolist" >
            <img src={juice.img} alt={juice.title} />
            <p className="mango-title" onClick={() => navigate(`/juice/${juice.id}`)}>{juice.title} </p>
            <span className="mango-rate">₹ {juice.rate}</span>
            <span className="strike">{juice.strike}</span>
            <p className="offer">{juice.off}</p>
        </div>
    )
}
export function JuiceCont() {
    const { id } = useParams()
    const [juice, setJuice] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        fetch(`https://amazon-backend-orcin.vercel.app/juice/${id}`)
            .then((data) => data.json())
            .then((dts) => setJuice(dts));
    }, [id]);
    const amount = parseInt(juice.rate)
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
                <img className="features-image" src={juice.img} alt={juice.title} />
                <div>
                    <div className="features-content">
                        <p className="features-content-title">{juice.title}</p>
                        <div className="features-height">

                            <p className="features-fresh">{juice.manufacturer}</p>
                            <p className="features-rating">Rating : {juice.review}</p>
                            <p>{juice.brought}</p>
                        </div>

                    </div>
                    <div className="price-container">
                        <p>MRP :<span className="price-strike" > {juice.strike}</span></p>
                        <p >Price : <span className="price">₹ {juice.rate}</span></p>
                        <p >Offer : <span className="price">{juice.off}</span></p>
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

                        <p>Sold by <span className="soldby-bold">{juice.soldby}</span> and fulfilled by Amazon</p>
                        <div className="veg-container">
                            <div className="veg">
                                <div className="veg-circle"></div>
                            </div>
                            <p>This is a <span className="soldby-product">{juice.ingredientType}</span> Product</p>
                            <button className="buy"
                                onClick={handleClick}
                            >Buy</button>
                        </div>
                    </div>
                    <div className="about">
                        <p className="about-title">About this item</p>
                        <ul>
                            <li>{juice.infoOne}</li>
                            <li>{juice.infoTwo}</li>
                            <li>{juice.infoThree}</li>
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
                                <td className="row-data">{juice.speciality}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Weight</td>
                                <td className="row-data">{juice.weight}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Ingredient Type</td>
                                <td className="row-data">{juice.ingredientType}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Brand</td>
                                <td className="row-data">{juice.brand}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Package Information</td>
                                <td className="row-data">{juice.packageInfo}</td>
                            </tr>

                            <tr>
                                <td className="row-head">Manufacturer</td>
                                <td className="row-data">{juice.manufacturer}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Net Quantity</td>
                                <td className="row-data">{juice.netQuantity}</td>
                            </tr>

                            <tr>
                                <td className="row-head">Package Dimensions</td>
                                <td className="row-data">{juice.dimension}</td>
                            </tr>
                        </table>
                    </div>
                    <div className="additional-info">
                        <p>Additional Information</p>
                        <table>
                            <tr>
                                <td className="row-head">ASIN</td>
                                <td className="row-data">{juice.asin}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Customer Reviews</td>
                                <td className="row-data">{juice.review}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Date First Available</td>
                                <td className="row-data">{juice.date}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Manufacturer</td>
                                <td className="row-data">{juice.manufacturer}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Item Weight</td>
                                <td className="row-data">{juice.weight}</td>
                            </tr>

                        </table>

                    </div>
                </div>
            </div>
        </div>

    )
}
function Drink({ drink, setDrink }) {
    // const drink = [{
    //     "id": "1",
    //     "img": "https://images-eu.ssl-images-amazon.com/images/I/61Ks4rgOAeL.AC_SL240_.jpg",
    //     "title": "Thums Up Soft Drink PET Bottle, 750 ml",
    //     "rate": "₹36.00",
    //     "strike": "₹40.00",
    //     "off": "10% Off",
    //     "brought": "3k+ bought in past week",
    //     "soldby": "Aripl_Yeshwanthpur IA ",
    //     "ingredientType": "Vegetarian",
    //     "infoOne": "STRONG TASTE: Refresh yourself with the strong taste of Thums Up",
    //     "infoTwo": "SPICY & FIZZY: This strong, spicy and fizzy cold drink is designed to suit your palate",
    //     "infoThree": "TASTE THE THUNDER: Bring out the adventurous side of you with the thunderous taste of Thums Up drink",
    //     "speciality": "sweetened",
    //     "weight": "750 grams",
    //     "brand": "Thums Up",
    //     "packageInfo": "Plastic Bottle",
    //     "manufacturer": "Coca-Cola",
    //     "netQuantity": "750.0 millilitre",
    //     "dimension": "24.4 x 6.9 x 6.9 cm; 750 Grams",
    //     "asin": "B07BFNG2XM",
    //     "review": "4.4",
    //     "date": "11 March 2018"
    // }, {
    //     "id": "2",
    //     "img": "https://images-eu.ssl-images-amazon.com/images/I/61DD7FiE82L.AC_SL240_.jpg",
    //     "title": "Kinley Club Soda, 750 ml",
    //     "rate": "₹20.00 ",
    //     "strike": "₹25.00",
    //     "off": "6% Off",
    //     "brought": "2k+ bought in past week",
    //     "soldby": "Aripl_Yeshwanthpur IA ",
    //     "ingredientType": "Vegetarian",
    //     "infoOne": "Gives extra punch",
    //     "infoTwo": "It gives a degree of 'fizz'",
    //     "infoThree": "Essential ingredient in cocktails",
    //     "speciality": "suitable for vegeterians",
    //     "weight": "750 grams",
    //     "brand": "Kinley",
    //     "packageInfo": "Plastic Bottle",
    //     "manufacturer": "Coca-Cola",
    //     "netQuantity": "750.0 millilitre",
    //     "dimension": "26.7 x 5.6 x 5.6 cm; 750 Grams",
    //     "asin": "B079GX9DDF",
    //     "review": "4.4",
    //     "date": "31 January 2018"
    // },
    // {
    //     "id": "3",
    //     "img": "https://images-eu.ssl-images-amazon.com/images/I/71YBmiSj-cL.AC_SL240_.jpg",
    //     "title": "Coca-Cola Original Taste Soft Drink PET Bottle, 750 ml",
    //     "rate": "₹38.20",
    //     "strike": "₹40.00",
    //     "off": "5% Off",
    //     "brought": "3k+ bought in past week",
    //     "soldby": "Aripl_Yeshwanthpur IA ",
    //     "ingredientType": "Vegetarian",
    //     "infoOne": "ORIGINAL COLA FLAVOUR: Savor the refreshing cola flavor that is deliciously uplifting",
    //     "infoTwo": "TURN UP THE ENERGY: Turn up the energy with the delicious and refreshing taste of Coca-Cola Original",
    //     "infoThree": "MAKE MEALS TASTIER: Meals become tastier with Coca-Cola Original",
    //     "speciality": "suitable for vegeterians",
    //     "weight": "750 grams",
    //     "brand": "Coca-Cola",
    //     "packageInfo": "Plastic Bottle",
    //     "manufacturer": "Coca-Cola",
    //     "netQuantity": "750.0 millilitre",
    //     "dimension": "7.4 x 7.4 x 26.3 cm; 750 Grams",
    //     "asin": "B004ZXK6FC",
    //     "review": "4.4",
    //     "date": "20 September 2016"
    // },
    // {
    //     "id": "4",
    //     "img": "https://images-eu.ssl-images-amazon.com/images/I/51TeFnx6GRL.AC_SL240_.jpg",
    //     "title": "Sprite Soft Drink PET Bottle, 750 ml",
    //     "rate": "₹37.00",
    //     "strike": "₹40.00",
    //     "off": "8% Off",
    //     "brought": "3k+ bought in past week",
    //     "soldby": "Aripl_Yeshwanthpur IA ",
    //     "ingredientType": "Vegetarian",
    //     "infoOne": "Clear out all the pressure of the week with Sprite's clear, crisp lemon-lime flavour",
    //     "infoTwo": "Sprite cold drink tastes best when chilled",
    //     "infoThree": "It is a caffeine-free soft drink with no added color",
    //     "speciality": "suitable for vegeterians",
    //     "weight": "750 grams",
    //     "brand": "Sprite",
    //     "packageInfo": "Plastic Bottle",
    //     "manufacturer": "Coca-Cola",
    //     "netQuantity": "750.0 millilitre",
    //     "dimension": "7.5 x 7.5 x 26.5 cm; 758.72 Grams",
    //     "asin": "B07533TMV9",
    //     "review": "4.4",
    //     "date": "1 January 2017"
    // },
    // {
    //     "id": "5",
    //     "img": "https://images-eu.ssl-images-amazon.com/images/I/51JEkuKPiSL.AC_SL240_.jpg",
    //     "title": "Coca-Cola Zero Sugar, No Calories Soft Drink Can, 300 ml",
    //     "rate": "₹34.00",
    //     "strike": "₹40.00",
    //     "off": "15% Off",
    //     "brought": "300+ bought in past week",
    //     "soldby": "Aripl_Yeshwanthpur IA ",
    //     "ingredientType": "Vegetarian",
    //     "infoOne": "ZERO SUGAR: Coca-Cola Zero comes in a new and real Coca-Cola taste without the sugar and calories; form_factor:liquid",
    //     "infoTwo": "CRISP TASTE: Enjoy the same crisp and great taste of Coca-Cola but with zero sugar; material_features:vegetarian",
    //     "infoThree": "IDEAL FOR: This zero sugar drink is ideal for calorie-conscious people;",
    //     "speciality": "suitable for vegeterians",
    //     "weight": "300 grams",
    //     "brand": "Coca-Cola",
    //     "packageInfo": "Plastic Bottle",
    //     "manufacturer": "Coca-Cola",
    //     "netQuantity": "300.0 millilitre",
    //     "dimension": "13.5 x 5.8 x 5.8 cm; 300 Grams",
    //     "asin": "B07G1CKCDH",
    //     "review": "4.3",
    //     "date": "23 July 2018"
    // }]
    const getProducts = () => {
        fetch("https://amazon-backend-orcin.vercel.app/drinks",
            { method: "GET" })
            .then((data) => data.json())
            .then((dts) => setDrink(dts))
    }
    useEffect(() => getProducts(), [])
    return (
        <div className="mangoes">
            <p className="mangoes-ptag">Soft Drinks</p>
            <div className="mango-flex">
                {drink.map((drink, index, id) => <DrinkList drink={drink} key={index} id={id} />)}
            </div>
        </div>
    )
}

function DrinkList({ drink, id }) {
    const navigate = useNavigate()
    return (
        <div className="mangolist" >
            <img src={drink.img} alt={drink.title} />
            <p className="mango-title" onClick={() => navigate(`/drinks/${drink.id}`)}>{drink.title} </p>
            <span className="mango-rate">₹ {drink.rate}</span>
            <span className="strike">{drink.strike}</span>
            <p className="offer">{drink.off}</p>
        </div>
    )
}

export function DrinksCont() {
    const { id } = useParams()
    const [drink, setDrink] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        fetch(`https://amazon-backend-orcin.vercel.app/drinks/${id}`)
            .then((data) => data.json())
            .then((dts) => setDrink(dts));
    }, [id]);
    const amount = parseInt(drink.rate)
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
                <img className="features-image" src={drink.img} alt={drink.title} />
                <div>
                    <div className="features-content">
                        <p className="features-content-title">{drink.title}</p>
                        <div className="features-height">

                            <p className="features-fresh">{drink.manufacturer}</p>
                            <p className="features-rating">Rating : {drink.review}</p>
                            <p>{drink.brought}</p>
                        </div>

                    </div>
                    <div className="price-container">
                        <p>MRP :<span className="price-strike" > {drink.strike}</span></p>
                        <p >Price : <span className="price">₹ {drink.rate}</span></p>
                        <p >Offer : <span className="price">{drink.off}</span></p>
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

                        <p>Sold by <span className="soldby-bold">{drink.soldby}</span> and fulfilled by Amazon</p>
                        <div className="veg-container">
                            <div className="veg">
                                <div className="veg-circle"></div>
                            </div>
                            <p>This is a <span className="soldby-product">{drink.ingredientType}</span> Product</p>
                            <button className="buy"
                                onClick={handleClick}
                            >Buy</button>
                        </div>
                    </div>
                    <div className="about">
                        <p className="about-title">About this item</p>
                        <ul>
                            <li>{drink.infoOne}</li>
                            <li>{drink.infoTwo}</li>
                            <li>{drink.infoThree}</li>
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
                                <td className="row-data">{drink.speciality}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Weight</td>
                                <td className="row-data">{drink.weight}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Ingredient Type</td>
                                <td className="row-data">{drink.ingredientType}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Brand</td>
                                <td className="row-data">{drink.brand}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Package Information</td>
                                <td className="row-data">{drink.packageInfo}</td>
                            </tr>

                            <tr>
                                <td className="row-head">Manufacturer</td>
                                <td className="row-data">{drink.manufacturer}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Net Quantity</td>
                                <td className="row-data">{drink.netQuantity}</td>
                            </tr>

                            <tr>
                                <td className="row-head">Package Dimensions</td>
                                <td className="row-data">{drink.dimension}</td>
                            </tr>
                        </table>
                    </div>
                    <div className="additional-info">
                        <p>Additional Information</p>
                        <table>
                            <tr>
                                <td className="row-head">ASIN</td>
                                <td className="row-data">{drink.asin}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Customer Reviews</td>
                                <td className="row-data">{drink.review}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Date First Available</td>
                                <td className="row-data">{drink.date}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Manufacturer</td>
                                <td className="row-data">{drink.manufacturer}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Item Weight</td>
                                <td className="row-data">{drink.weight}</td>
                            </tr>

                        </table>

                    </div>
                </div>
            </div>
        </div>

    )
}