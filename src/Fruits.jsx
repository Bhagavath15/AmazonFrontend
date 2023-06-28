import { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";

export function Fruits({ mango, setMango, vegetable, setVegetable }) {
    return (
        <div>
            <div className="fruits-container">
                <p>Fruits & Vegetables</p>
            </div>
            <Mangoes mango={mango} setMango={setMango} />
            <Vegetables vegetable={vegetable} setVegetable={setVegetable} />
        </div>
    );
}

function Mangoes({ mango, setMango }) {
    // const [mango, setMango] = useState[{
    //     "id": "1",
    //     "img": "https://m.media-amazon.com/images/I/31StKTObHJL._AC_SY250_.jpg",
    //     "title": "Fresh mango, Safeda/Banganapalli,1 KG",
    //     "rate": "₹73.00",
    //     "strike": "₹125.00",
    //     "off": "20% Off",
    //      "soldby":"Aripl_Yeshwanthpur IA ",
    //      "ingredient-type":"Vegetarian",
    //      "about":{
    //                  "1st":"100% Carbide Free & Naturally Ripened",
    //                  "2nd":"Rich in Vitamin A, C, iron, folate and magnesium",
    //                  "3rd":"100% Natural, Great in taste"
    //      }
    //      "Specialty":"rich_in_vitamins",
    //      "Weight":"1000grams",
    //      "Brand":"Fresh",
    //      "form":"Whole",
    //      "manufacturer":"Fresh",
    //      "netQuantity":"1000.0 gram",
    //      "dimension":"26.8 x 20 x 7.6 cm; 1 Kilograms",
    //      "asin":"B07B8SQ3SG",
    //      "review":"3.7",
    //      "date":"5 March 2018"
    // }, {
    //     "id": "2",
    //     "img": "https://images-eu.ssl-images-amazon.com/images/I/611a1wD9ZGL.AC_SL240_.jpg",
    //     "title": "Fresh Pomegranate, 4 Pieces",
    //     "rate": "₹194.00 ",
    //     "strike": "₹220.00",
    //     "off": "20% Off",
    //     "brought":"3K+ bought in past week",
    //      "soldby":"Aripl_Yeshwanthpur IA ",
    //      "ingredientType":"Vegetarian",
    //      "infoOne":"Has sweet-tart taste with tangy, fruity",
    //      "infoTwo":"Good Quality specifications (180gm/pc)",
    //      "infoThree":"Rich supplier of soluble and insoluble dietary fibers, vitamin K, C, minerals and B-complex vitamins such as B5, B6"
    //      "speciality":"natural",
    //      "weight":"620 grams",
    //      "brand":"Fresh",
    //      "form":"Whole",
    //      "manufacturer":"Fresh",
    //      "netQuantity":"4 counts",
    //      "dimension":"15.24 x 20.32 x 10.16 cm; 620 Grams",
    //      "asin":"B07BG6Q18N",
    //      "review":"4.1",
    //      "date":"13 March 2018"
    // },
    // {
    //     "id": "3",
    //     "img": "https://m.media-amazon.com/images/I/81XA2GQIPOL._SY741_.jpg",
    //     "title": "Fresh Pineapple, 1 pc (Approx. 800g-1000g)",
    //     "rate": "₹47.20",
    //     "strike": "₹59.00",
    //     "off": "20% Off",
    //      "brought":"1K+ bought in past week",
    //      "soldby":"Aripl_Yeshwanthpur IA ",
    //      "ingredientType":"Vegetarian",
    //      "infoOne":"Loosely fibrous and juicy with white to yellowish flesh",
    //      "infoTwo":"Good Quality specifications (750gm)",
    //      "infoThree":"Great source of vitamin C, vitamin B, and manganese",
    //      "speciality":"natural",
    //      "weight":"800 grams",
    //      "brand":"Fresh",
    //      "form":"Whole",
    //      "manufacturer":"Fresh",
    //      "netQuantity":"1 counts",
    //      "dimension":"25.4 x 12.7 x 25.4 cm; 800 Grams",
    //      "asin":"B07BG65QTG",
    //      "review":"3.8",
    //      "date":"13 March 2018"
    // },
    // {
    //     "id": "4",
    //     "img": "https://m.media-amazon.com/images/I/61nHWMMpylL._SX679_.jpg",
    //     "title": "Fresh Grapes - Bangalore Blue, 500 g",
    //     "rate": "₹48.00",
    //     "strike": "₹60.00",
    //     "off": "20% Off",
    //        "brought":"200+ bought in past week",
    //      "soldby":"Aripl_Yeshwanthpur IA ",
    //      "ingredientType":"Vegetarian",
    //      "infoOne":"Fresh Grapes",
    //      "infoTwo":"Graded, sorted and premium quality fruits and vegetables",
    //      "infoThree":"Fresh, hygienic and natural",
    //      "speciality":"natural",
    //      "weight":"500 grams",
    //      "brand":"Fresh",
    //      "form":"Whole",
    //      "manufacturer":"Fresh",
    //      "netQuantity":"500.00 grams",
    //      "dimension":"19.05 x 11.43 x 8.89 cm; 500 Grams",
    //      "asin":"B07KKH5JQ6",
    //      "review":"3.7",
    //      "date":"14 November 2018"
    // },
    // {
    //     "id": "5",
    //     "img": "https://m.media-amazon.com/images/I/41tRTl-dSjL.jpg",
    //     "title": "Fresh Orange, Valencia, 4 Pcs",
    //     "rate": "₹65.00",
    //     "strike": "₹92.00",
    //     "off": "29% Off",
    //        "brought":"500+ bought in past week",
    //      "soldby":"Aripl_Yeshwanthpur IA ",
    //      "ingredientType":"Vegetarian",
    //      "infoOne":"Fresh Oranges",
    //      "infoTwo":"Graded, sorted and premium quality fruits and vegetables",
    //      "infoThree":"Fresh, hygienic and natural",
    //      "speciality":"natural",
    //      "weight":"1000 grams",
    //      "brand":"Fresh",
    //      "form":"Whole",
    //      "manufacturer":"Fresh",
    //      "netQuantity":"4 counts",
    //      "dimension":"20 x 13 x 7 cm; 1000 Grams",
    //      "asin":"B07BG7Q43B",
    //      "review":"4.0",
    //      "date":"14 March 2018"
    // }]
    const getProducts = () => {
        fetch("https://amazon-backend-orcin.vercel.app/fruits",
            { method: "GET" })
            .then((data) => data.json())
            .then((dts) => setMango(dts))
    }
    useEffect(() => getProducts(), [])
    return (
        <div className="mangoes">
            <p className="mangoes-ptag">Fruits</p>
            <div className="mango-flex">
                {mango.map((mgo, index, id) => <MangoList mango={mgo} key={index} id={id} />)}
            </div>
        </div>
    )
}

function MangoList({ mango, id }) {
    const navigate = useNavigate()
    return (
        <div className="mangolist" >
            <img src={mango.img} alt={mango.title} />
            <p className="mango-title" onClick={() => navigate(`/fruits/${mango.id}`)}>{mango.title} </p>
            <span className="mango-rate">{mango.rate}</span>
            <span className="strike">{mango.strike}</span>
            <p className="offer">{mango.off}</p>
        </div>
    )
}

export function Fruit() {
    const { id } = useParams()
    const [mango, setMango] = useState([])
    const navigate = useNavigate()
    const amount = parseInt(mango.rate)

    useEffect(() => {
        fetch(`https://amazon-backend-orcin.vercel.app/fruits/${id}`)
            .then((data) => data.json())
            .then((dts) => setMango(dts))


    }, [id]);
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
                <img className="features-image" src={mango.img} alt={mango.title} />
                <div>
                    <div className="features-content">
                        <p className="features-content-title">{mango.title}</p>
                        <p className="features-fresh">{mango.manufacturer}</p>
                        <p className="features-rating">Rating : {mango.review}</p>
                        <p>{mango.brought}</p>
                    </div>
                    <div className="price-container">
                        <p>MRP :<span className="price-strike" > {mango.strike}</span></p>
                        <p >Price : <span className="price">₹ {mango.rate}</span></p>
                        <p >Offer : <span className="price">{mango.off}</span></p>
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

                        <p>Sold by <span className="soldby-bold">{mango.soldby}</span> and fulfilled by Amazon</p>
                        <div className="veg-container">
                            <div className="veg">
                                <div className="veg-circle"></div>
                            </div>
                            <p>This is a <span className="soldby-product">{mango.ingredientType}</span> Product</p>
                            <button className="buy"
                                onClick={handleClick}
                            >Buy</button>
                        </div>


                    </div>
                    <div className="about">
                        <p className="about-title">About this item</p>
                        <ul>
                            <li>{mango.infoOne}</li>
                            <li>{mango.infoTwo}</li>
                            <li>{mango.infoThree}</li>
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
                                <td className="row-data">{mango.speciality}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Weight</td>
                                <td className="row-data">{mango.weight}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Ingredient Type</td>
                                <td className="row-data">{mango.ingredientType}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Brand</td>
                                <td className="row-data">{mango.brand}</td>
                            </tr>

                            <tr>
                                <td className="row-head">Manufacturer</td>
                                <td className="row-data">{mango.manufacturer}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Net Quantity</td>
                                <td className="row-data">{mango.netQuantity}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Package Dimensions</td>
                                <td className="row-data">{mango.dimension}</td>
                            </tr>

                        </table>
                    </div>
                    <div className="additional-info">
                        <p>Additional Information</p>
                        <table>
                            <tr>
                                <td className="row-head">ASIN</td>
                                <td className="row-data">{mango.asin}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Customer Reviews</td>
                                <td className="row-data">{mango.review}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Date First Available</td>
                                <td className="row-data">{mango.date}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Manufacturer</td>
                                <td className="row-data">{mango.manufacturer}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Item Weight</td>
                                <td className="row-data">{mango.weight}</td>
                            </tr>

                        </table>

                    </div>
                </div>
            </div>
        </div >

    )
}
function Vegetables({ vegetable, setVegetable }) {
    // const vegetable = [{
    //     "id": "1",
    //     "img": "https://images-eu.ssl-images-amazon.com/images/I/619D1OTIYnL.AC_SL240_.jpg",
    //     "title": "Fresh Onion, 1kg",
    //     "rate": "₹24.00",
    //     "strike": "₹36.00",
    //     "off": "33% Off",
    //        "brought":"30K+ bought in past week",
    //      "soldby":"Aripl_Yeshwanthpur IA ",
    //      "ingredientType":"Vegetarian",
    //      "infoOne":"Rich in antioxidants",
    //      "infoTwo":"Good source of manganese, copper, Vitamin B6, Vitamin C and Dietary Fibers ",
    //      "infoThree":"Can be used in curries, snacks and salads",
    //      "speciality":"high_in_protein",
    //      "weight":"1 Kilograms",
    //      "brand":"Fresh",
    //      "form":"Whole",
    //      "manufacturer":"Fresh",
    //      "netQuantity":"1000.00 grams",
    //      "dimension":"5.1 x 5.1 Centimeters",
    //      "asin":"B07BG62MBV",
    //      "review":"4.2",
    //      "date":"13 March 2018"
    // }, {
    //     "id": "2",
    //     "img": "https://images-eu.ssl-images-amazon.com/images/I/41L46kSwk7L.AC_SL240_.jpg",
    //     "title": "Fresh Tomato - Local, 1kg",
    //     "rate": "₹38.00 ",
    //     "strike": "₹67.00",
    //     "off": "43% Off",
    //        "brought":"10K+ bought in past week",
    //      "soldby":"Aripl_Yeshwanthpur IA ",
    //      "ingredientType":"Vegetarian",
    //      "infoOne":"100% Natural",
    //      "infoTwo":"Good source of Vitamin A, C, K, Iron, Folate and Potassium ",
    //      "infoThree":"Help to reduce Cholesterols",
    //      "speciality":"natural",
    //      "weight":"1 Kilograms",
    //      "brand":"Fresh",
    //      "form":"Whole",
    //      "manufacturer":"Fresh",
    //      "netQuantity":"1.00 Kilograms",
    //      "dimension":"38 x 38 Millimeters",
    //      "asin":"B07BG62MBV",
    //      "review":"4.2",
    //      "date":"13 March 2018"
    // },
    // {
    //     "id": "3",
    //     "img": "https://images-eu.ssl-images-amazon.com/images/I/313dtY-LOEL.AC_SL240_.jpg",
    //     "title": "Fresh Potato, 1kg",
    //     "rate": "₹32.00",
    //     "strike": "₹83.00",
    //     "off": "67% Off",
    //        "brought":"20K+ bought in past week",
    //      "soldby":"Aripl_Yeshwanthpur IA ",
    //      "ingredientType":"Vegetarian",
    //      "infoOne":"High source of fibre",
    //      "infoTwo":"Good source of Vitamin B6, C, Potassium, and Magnesium ",
    //      "infoThree":"Can be used in multiple dishes and snacks",
    //      "speciality":"natural",
    //      "weight":"1 Kilograms",
    //      "brand":"Fresh",
    //      "form":"Whole",
    //      "manufacturer":"Fresh",
    //      "netQuantity":"1000.00 grams",
    //      "dimension":"5.08 x 7.62 x 6.35 cm; 1 Kilograms",
    //      "asin":"B07BG5GZP2",
    //      "review":"4.2",
    //      "date":"13 March 2018"
    // },
    // {
    //     "id": "4",
    //     "img": "https://m.media-amazon.com/images/I/51vl9RzME3L._SX679_.jpg",
    //     "title": "Fresh Cabbage, 1 Piece Pack (500gm-800gm)",
    //     "rate": "₹28.98",
    //     "strike": "₹33.00",
    //     "off": "12% Off",
    //        "brought":"1K+ bought in past week",
    //      "soldby":"Aripl_Yeshwanthpur IA ",
    //      "ingredientType":"Vegetarian",
    //      "infoOne":"1 pc pack",
    //      "infoTwo":"It is a good source of Vitamin K, Dietary Fiber, Calicum, Potassium and Phosphorus",
    //      "infoThree":"It is also used in the preparation of dry curries, soups, manchurian or salads",
    //      "speciality":"high_in_protein",
    //      "weight":"500 Ggrams",
    //      "brand":"Fresh",
    //      "form":"Whole",
    //      "manufacturer":"Fresh",
    //      "netQuantity":"650.00 grams",
    //      "dimension":"10.16 x 7.62 x 10.16 cm; 500 Grams",
    //      "asin":"B07BG521JL",
    //      "review":"4.1",
    //      "date":"13 March 2018"
    // },
    // {
    //     "id": "5",
    //     "img": "https://images-eu.ssl-images-amazon.com/images/I/710TY8GGGqL.AC_SL240_.jpg",
    //     "title": "Fresh Beet Root, 250g",
    //     "rate": "₹10.00",
    //     "strike": "₹32.00",
    //     "off": "69% Off",
    //        "brought":"10K+ bought in past week",
    //      "soldby":"Aripl_Yeshwanthpur IA ",
    //      "ingredientType":"Vegetarian",
    //      "infoOne":"Natural",
    //      "infoTwo":"Good Source of Vitamin C, Iron, Potassium, Folate and Dietary Fiber",
    //      "infoThree":"Can be consumed as juice, salad, chutney, soup, dry vegetable, fries or in boiled or steamed forms",
    //      "speciality":"high_in_protein",
    //      "weight":"250 Grams",
    //      "brand":"Fresh",
    //      "form":"Whole",
    //      "manufacturer":"Fresh",
    //      "netQuantity":"250.00 grams",
    //      "dimension":"16.99 x 13 x 5 cm; 250 Grams",
    //      "asin":"B07BG52HD1",
    //      "review":"4.1",
    //      "date":"13 March 2018"
    // }]
    const getProducts = () => {
        fetch("https://amazon-backend-orcin.vercel.app/vegetables",
            { method: "GET" })
            .then((data) => data.json())
            .then((dts) => setVegetable(dts))
    }
    useEffect(() => getProducts(), [])
    return (
        <div className="mangoes">
            <p className="mangoes-ptag">Vegetables </p>
            <div className="mango-flex">
                {vegetable.map((veg, index, id) => <VegetableList vegetable={veg} key={index} id={id} />)}
            </div>
        </div>
    )
}



function VegetableList({ vegetable, id }) {
    const navigate = useNavigate()
    return (
        <div className="mangolist" >
            <img src={vegetable.img} alt={vegetable.title} />
            <p className="mango-title" onClick={() => navigate(`/vegetables/${vegetable.id}`)}>{vegetable.title} </p>
            <span className="mango-rate">{vegetable.rate}</span>
            <span className="strike">{vegetable.strike}</span>
            <p className="offer">{vegetable.off}</p>
        </div>
    )
}

export function Vegetable() {
    const { id } = useParams()
    const [mango, setMango] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        fetch(`https://amazon-backend-orcin.vercel.app/vegetables/${id}`)
            .then((data) => data.json())
            .then((dts) => setMango(dts));
    }, [id]);
    const vegetableAmount = parseInt(mango.rate)
    const handleClick = (e) => {
        e.preventDefault()
        if (vegetableAmount === '') {
            alert("please enter amount")
        }
        else {
            var option = {
                key: "rzp_test_teSKDfmwTCTFu0",
                key_secret: "2TZaVrFSXYnzzu3QeH6N3t3w",
                amount: vegetableAmount * 100,
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
                <img className="features-image" src={mango.img} alt={mango.title} />
                <div>
                    <div className="features-content">
                        <p className="features-content-title">{mango.title}</p>
                        <p className="features-fresh">{mango.manufacturer}</p>
                        <p className="features-rating">Rating : {mango.review}</p>
                        <p>{mango.brought}</p>
                    </div>
                    <div className="price-container">
                        <p>MRP :<span className="price-strike" > {mango.strike}</span></p>
                        <p >Price : <span className="price">₹ {mango.rate}</span></p>
                        <p >Offer : <span className="price">{mango.off}</span></p>
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

                        <p>Sold by <span className="soldby-bold">{mango.soldby}</span> and fulfilled by Amazon</p>
                        <div className="veg-container">
                            <div className="veg">
                                <div className="veg-circle"></div>
                            </div>
                            <p>This is a <span className="soldby-product">{mango.ingredientType}</span> Product</p>
                            <button className="buy"
                                onClick={handleClick}
                            >Buy</button>
                        </div>
                    </div>
                    <div className="about">
                        <p className="about-title">About this item</p>
                        <ul>
                            <li>{mango.infoOne}</li>
                            <li>{mango.infoTwo}</li>
                            <li>{mango.infoThree}</li>
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
                                <td className="row-data">{mango.speciality}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Weight</td>
                                <td className="row-data">{mango.weight}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Ingredient Type</td>
                                <td className="row-data">{mango.ingredientType}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Brand</td>
                                <td className="row-data">{mango.brand}</td>
                            </tr>

                            <tr>
                                <td className="row-head">Manufacturer</td>
                                <td className="row-data">{mango.manufacturer}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Net Quantity</td>
                                <td className="row-data">{mango.netQuantity}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Package Dimensions</td>
                                <td className="row-data">{mango.dimension}</td>
                            </tr>

                        </table>
                    </div>
                    <div className="additional-info">
                        <p>Additional Information</p>
                        <table>
                            <tr>
                                <td className="row-head">ASIN</td>
                                <td className="row-data">{mango.asin}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Customer Reviews</td>
                                <td className="row-data">{mango.review}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Date First Available</td>
                                <td className="row-data">{mango.date}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Manufacturer</td>
                                <td className="row-data">{mango.manufacturer}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Item Weight</td>
                                <td className="row-data">{mango.weight}</td>
                            </tr>

                        </table>

                    </div>
                </div>
            </div>
        </div>

    )
}