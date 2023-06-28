import { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";

export function Rice({ dal, setDal, rice, setRice, atta, setAtta }) {
    return (
        <div>
            <div className="fruits-container">
                <p>Rice,Atta & Dal</p>
            </div>
            <Dal dal={dal} setDal={setDal} />
            <RicePack rice={rice} setRice={setRice} />
            <Atta atta={atta} setAtta={setAtta} />
        </div>
    );
}

function Dal({ dal, setDal }) {
    // const dal = [{
    //     "id": "1",
    //     "img": "https://images-eu.ssl-images-amazon.com/images/I/61d+WbpFCiL.AC_SL240_.jpg",
    //     "title": "Tata Sampann Unpolished Toor Dal (Arhar Dal), 1 kg",
    //     "rate": "₹167.00",
    //     "strike": "₹209.00",
    //     "off": "20% Off",
    //     "brought": "10K+ bought in past week",
    //     "soldby": "Aripl_Yeshwanthpur IA ",
    //     "ingredientType": "Vegetarian",
    //     "infoOne": "Protein rich",
    //     "infoTwo": "No cholesterol, additives or impurities",
    //     "infoThree": "Unpolished grains",
    //     "speciality": "suitable for vegetarians",
    //     "weight": "1000 Grams",
    //     "brand": "Tata Sampann",
    //     "form": "Whole",
    //     "manufacturer": "Tata Sampann",
    //     "netQuantity": "1000.00 grams",
    //     "dimension": "0.1 x 0.1 x 0.1 cm; 1 Kilograms",
    //     "asin": "B074N7VHV4",
    //     "review": "4.5",
    //     "date": "1 Janury 2017"
    // }, {
    //     "id": "2",
    //     "img": "https://images-eu.ssl-images-amazon.com/images/I/61AdBfnafWL.AC_SL240_.jpg",
    //     "title": "Tata Sampann Unpolished Moong Dal (Split), 1 kg",
    //     "rate": "₹160.00 ",
    //     "strike": "₹199.00",
    //     "off": "20% Off",
    //     "brought": "10K+ bought in past week",
    //     "soldby": "Aripl_Yeshwanthpur IA ",
    //     "ingredientType": "Vegetarian",
    //     "infoOne": "RICH TASTE: Tata Sampann Moong Dal (Split) is delicious in taste",
    //     "infoTwo": "5-STEP PROCESS FOR STRINGENT QUALITY CHECKS: Ensures that the grains of dal are uniform and of premium quality",
    //     "infoThree": " Used in a variety of salads, soups, and many more",
    //     "speciality": "high_in_protein",
    //     "weight": "1 KiloGrams",
    //     "brand": "Tata",
    //     "form": "Whole",
    //     "manufacturer": "Tata Sampann",
    //     "netQuantity": "1000.00 grams",
    //     "dimension": "20 x 20 x 20 cm; 1 Kilograms",
    //     "asin": "B075335G7N",
    //     "review": "4.5",
    //     "date": "1 January 2017"
    // },
    // {
    //     "id": "3",
    //     "img": "https://images-eu.ssl-images-amazon.com/images/I/618lHyWqdML.AC_SL240_.jpg",
    //     "title": "Tata Sampann Unpolished Green Moong Dal (Whole), 500 g",
    //     "rate": "₹71.00",
    //     "strike": "₹94.00",
    //     "off": "24% Off",
    //     "brought": "10K+ bought in past week",
    //     "soldby": "Aripl_Yeshwanthpur IA ",
    //       "ingredientType": "Vegetarian",
    //     "infoOne": "Tata Sampann Dals are delicious in taste",
    //     "infoTwo": "Rich in Nutrients: Green Moong Dal is naturally rich in protein",
    //     "infoThree": " Prepare the fluffiest idlis and vadas",
    //     "speciality": "suitable for vegeterians",
    //     "weight": "500 Grams",
    //     "brand": "Tata",
    //     "form": "Whole",
    //     "manufacturer": "Tata Sampann",
    //     "netQuantity": "500.00 grams",
    //     "dimension": "0.1 x 0.1 x 0.1 cm; 500 Grams",
    //     "asin": "B077X8MD39",
    //     "review": "4.5",
    //     "date": "7 August 2016"
    // },
    // {
    //     "id": "4",
    //     "img": "https://images-eu.ssl-images-amazon.com/images/I/61rUibXYkTL.AC_SL240_.jpg",
    //     "title": "Tata Sampann Unpolished Moong Dal (Chilka), 500 g",
    //     "rate": "₹78.00",
    //     "strike": "₹99.00",
    //     "off": "21% Off",
    //     "brought": "10K+ bought in past week",
    //     "soldby": "Aripl_Yeshwanthpur IA ",
    //     "ingredientType": "Vegetarian",
    //     "infoOne": "RICH TASTE: Tata Sampann Moong Dal (Chilka) is delicious in taste",
    //      "infoTwo": "5-STEP PROCESS FOR STRINGENT QUALITY CHECKS: Ensures that the grains of dal are uniform and of premium quality",
    //     "infoThree": " Used in a variety of salads, soups, and many more",
    //     "speciality": "suitable for vegetarians",
    //     "weight": "500 Grams",
    //     "brand": "Tata",
    //     "form": "Whole",
    //     "manufacturer": "Tata Sampann",
    //     "netQuantity": "500.00 grams",
    //     "dimension": "18.2 x 15.6 x 4.2 cm; 500 Grams",
    //     "asin": "B075335N6P",
    //     "review": "4.5",
    //     "date": "1 January 2017"
    // },
    // {
    //     "id": "5",
    //     "img": "https://images-eu.ssl-images-amazon.com/images/I/71IVAHd7FIL.AC_SL240_.jpg",
    //     "title": "Tata Sampann Unpolished Chana Dal, 1 kg",
    //     "rate": "₹100.00",
    //     "strike": "₹15.00",
    //     "off": "20% Off",
    //     "brought": "10K+ bought in past week",
    //     "soldby": "Aripl_Yeshwanthpur IA ",
    //     "ingredientType": "Vegetarian",
    //     "infoOne": "RICH TASTE: Tata Sampann Moong Dal (Chilka) is delicious in taste",
    //      "infoTwo": "5-STEP PROCESS FOR STRINGENT QUALITY CHECKS: Ensures that the grains of dal are uniform and of premium quality",
    //     "infoThree": " Used in a variety of salads, soups, and many more",
    //     "speciality": "suitable for vegetarians",
    //     "weight": "1000 Grams",
    //     "brand": "Tata",
    //     "form": "Whole",
    //     "manufacturer": "Tata Sampann",
    //     "netQuantity": "1000.00 grams",
    //     "dimension": "18.2 x 15.6 x 4.2 cm; 500 Grams",
    //     "asin": "B07532J31B",
    //     "review": "4.5",
    //     "date": "7 August 2016"
    // }]
    const getProducts = () => {
        fetch("https://amazon-backend-orcin.vercel.app/dal",
            { method: "GET" })
            .then((data) => data.json())
            .then((dts) => setDal(dts))
    }
    useEffect(() => getProducts(), [])
    return (
        <div className="mangoes">
            <p className="mangoes-ptag">Dal & Other grains</p>
            <div className="mango-flex">
                {dal.map((dal, index, id) => <DalList dal={dal} key={index} id={id} />)}
            </div>
        </div>
    )
}

function DalList({ dal, id }) {
    const navigate = useNavigate()
    return (
        <div className="mangolist" >
            <img src={dal.img} alt={dal.title} />
            <p className="mango-title" onClick={() => navigate(`/dal/${dal.id}`)}>{dal.title} </p>
            <span className="mango-rate">{dal.rate}</span>
            <span className="strike">{dal.strike}</span>
            <p className="offer">{dal.off}</p>
        </div>
    )
}


export function DalCont() {
    const { id } = useParams()
    const [dal, setDal] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        fetch(`https://amazon-backend-orcin.vercel.app/dal/${id}`)
            .then((data) => data.json())
            .then((dts) => setDal(dts));
    }, [id]);
    const amount = parseInt(dal.rate)
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
                <img className="features-image" src={dal.img} alt={dal.title} />
                <div>
                    <div className="features-content">
                        <p className="features-content-title">{dal.title}</p>
                        <div className="features-height">
                            <p className="features-fresh">{dal.manufacturer}</p>
                            <p className="features-rating">Rating : {dal.review}</p>
                            <p>{dal.brought}</p>
                        </div>
                    </div>
                    <div className="price-container">
                        <p>MRP :<span className="price-strike" > {dal.strike}</span></p>
                        <p >Price : <span className="price">₹ {dal.rate}</span></p>
                        <p >Offer : <span className="price">{dal.off}</span></p>
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

                        <p>Sold by <span className="soldby-bold">{dal.soldby}</span> and fulfilled by Amazon</p>
                        <div className="veg-container">
                            <div className="veg">
                                <div className="veg-circle"></div>
                            </div>
                            <p>This is a <span className="soldby-product">{dal.ingredientType}</span> Product</p>

                            <button className="buy"
                                onClick={handleClick}
                            >Buy</button>
                        </div>
                    </div>
                    <div className="about">
                        <p className="about-title">About this item</p>
                        <ul>
                            <li>{dal.infoOne}</li>
                            <li>{dal.infoTwo}</li>
                            <li>{dal.infoThree}</li>
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
                                <td className="row-data">{dal.speciality}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Weight</td>
                                <td className="row-data">{dal.weight}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Ingredient Type</td>
                                <td className="row-data">{dal.ingredientType}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Brand</td>
                                <td className="row-data">{dal.brand}</td>
                            </tr>

                            <tr>
                                <td className="row-head">Manufacturer</td>
                                <td className="row-data">{dal.manufacturer}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Net Quantity</td>
                                <td className="row-data">{dal.netQuantity}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Package Dimensions</td>
                                <td className="row-data">{dal.dimension}</td>
                            </tr>

                        </table>
                    </div>
                    <div className="additional-info">
                        <p>Additional Information</p>
                        <table>
                            <tr>
                                <td className="row-head">ASIN</td>
                                <td className="row-data">{dal.asin}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Customer Reviews</td>
                                <td className="row-data">{dal.review}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Date First Available</td>
                                <td className="row-data">{dal.date}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Manufacturer</td>
                                <td className="row-data">{dal.manufacturer}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Item Weight</td>
                                <td className="row-data">{dal.weight}</td>
                            </tr>

                        </table>

                    </div>
                </div>
            </div>
        </div>

    )
}
function RicePack({ rice, setRice }) {
    // const rice = [{
    //     "id": "1",
    //     "img": "https://images-eu.ssl-images-amazon.com/images/I/810jp1zceeL.AC_SL240_.jpg",
    //     "title": "Daawat Rozana Super, Naturally Aged, Rich Aroma,Perfect Fit for Everyday Consumption Basmati Rice, 5 Kg",
    //     "rate": "₹356.00",
    //     "strike": "₹486.00",
    //     "off": "27% Off",
    //     "brought": "3K+ bought in past week",
    //     "soldby": "Aripl_Yeshwanthpur IA ",
    //     "ingredientType": "Vegetarian",
    //     "infoOne": "Rozana is above medium length product",
    //      "infoTwo": "Original basmati nourished by snow fed rivers of great Himalayas",
    //     "infoThree": " Material Features: Vegetarian; Item Form: Grain",
    //     "speciality": "suitable for vegetarians",
    //     "weight": "5000 Grams",
    //     "brand": "DAAWAT",
    //     "form": "Whole",
    // "packageInfo":"Bag",
    //     "manufacturer": "LT foods Ltd",
    //     "netQuantity": "1 package",
    //     "dimension": "7.1 x 24.9 x 35.3 cm; 5 Kilograms",
    // "energy":"361.00 Kilocalories",
    // "protein":"6 grams",
    // "fat":"1.3 grams",
    // "carbohydrate":"81.4 grams",
    //     "asin": "B075754F89",
    //     "review": "4.5",
    //     "date": "5 June 2016"
    // }, {
    //     "id": "2",
    //     "img": "https://images-eu.ssl-images-amazon.com/images/I/81ra4bn7YJL.AC_SL240_.jpg",
    //     "title": "Daawat Basmati Rice, Rozana (Super), 1kg",
    //     "rate": "₹75.00 ",
    //     "strike": "₹98.00",
    //     "off": "23% Off",
    //     "brought": "10K+ bought in past week",
    //     "soldby": "Aripl_Yeshwanthpur IA ",
    //     "ingredientType": "Vegetarian",
    //     "infoOne": "Daawat",
    //      "infoTwo": "untouched by human hands",
    //     "infoThree": " Material Features: Vegetarian; Item Form: Grain",
    //     "speciality": "suitable for vegetarians",
    //     "weight": "1000 Grams",
    //     "brand": "DAAWAT",
    //     "form": "Whole",
    // "packageInfo":"Packet",
    //     "manufacturer": "LT foods Ltd",
    //     "netQuantity": "1 package",
    //     "dimension": "B0756Y49DS",
    // "energy":"348.00 Kilocalories",
    // "protein":"8.2 grams",
    // "fat":"0.5 grams",
    // "carbohydrate":"78 grams",
    //     "asin": "B0756Y49DS",
    //     "review": "3.9",
    //     "date": "5 June 2016"
    // },
    // {
    //     "id": "3",
    //     "img": "https://images-eu.ssl-images-amazon.com/images/I/61tpC8yAbUL.AC_SL240_.jpg",
    //     "title": "Fortune Hamesha Basmati Rice, suitable for daily cooking, 5 Kg",
    //     "rate": "₹357.00",
    //     "strike": "₹425.00",
    //     "off": "16% Off",
    //     "brought": "900+ bought in past week",
    //     "soldby": "Aripl_Yeshwanthpur IA ",
    //     "ingredientType": "Vegetarian",
    //     "infoOne": "Ideal for daily cooking",
    //      "infoTwo": "Long grained rice.",
    //     "infoThree": " Pristine white grain that do not stick to each other or break when cooked.",
    //     "speciality": "suitable for vegetarians",
    //     "weight": "5 KiloGrams",
    //     "brand": "Fortune",
    //     "form": "Whole",
    // "packageInfo":"Bag",
    //     "manufacturer": "Fortune",
    //     "netQuantity": "1 package",
    //     "dimension": "B0756Y49DS",
    // "energy":"345.00 Kilocalories",
    // "protein":"6.5 grams",
    // "fat":"0.5 grams",
    // "carbohydrate":"78 grams",
    //     "asin": "B07G3LGCK7",
    //     "review": "4.0",
    //     "date": "31 December 2017"

    // },
    // {
    //     "id": "4",
    //     "img": "https://images-eu.ssl-images-amazon.com/images/I/71CNSvSCTHL.AC_SL240_.jpg",
    //     "title": "India Gate Basmati Rice Super, 1kg (with Free 500g)",
    //     "rate": "₹220.00",
    //     "strike": "₹190.00",
    //     "off": "16% Off",
    //     "brought": "900+ bought in past week",
    //     "soldby": "Aripl_Yeshwanthpur IA ",
    //     "ingredientType": "Vegetarian",
    //     "infoOne": "Long grain",
    //      "infoTwo": "Aged rice",
    //     "infoThree": " Super quality",
    //     "speciality": "suitable for vegetarians",
    //     "weight": "1000 Grams",
    //     "brand": "India Gate",
    //     "form": "Whole",
    // "packageInfo":"Bag",
    //     "manufacturer": "KRBL",
    //     "netQuantity": "1500.0 gram",
    //     "dimension": "25.4 x 14.2 x 7.6 cm; 1 Kilograms",
    // "energy":"344.44 Kilocalories",
    // "protein":"6.7 grams",
    // "fat":"0.5 grams",
    // "carbohydrate":"77 grams",
    //     "asin": "B079GZVZS8",
    //     "review": "4.5",
    //     "date": "5 June 2016"
    // },
    // {
    //     "id": "5",
    //     "img": "https://images-eu.ssl-images-amazon.com/images/I/81S8g0UVs4L.AC_SL240_.jpg",
    //     "title": "India Gate Basmati Rice Bag, Mogra, 5kg (Broken Rice)",
    //     "rate": "₹330.00",
    //     "strike": "₹400.00",
    //     "off": "22% Off",
    //     "brought": "1K+ bought in past week",
    //     "soldby": "Aripl_Yeshwanthpur IA ",
    //     "ingredientType": "Vegetarian",
    //     "infoOne": "Used finest quality basmati",
    //      "infoTwo": "Aged rice",
    //     "infoThree": " Super quality",
    //     "speciality": "suitable for vegetarians",
    //     "weight": "5000 Grams",
    //     "brand": "India Gate",
    //     "form": "Whole",
    // "packageInfo":"Bag",
    //     "manufacturer": "KRBL",
    //     "netQuantity": "5000.0 gram",
    //     "dimension": "25.4 x 22.9 x 10.2 cm; 5 Kilograms",
    // "energy":"344.44 Kilocalories",
    // "protein":"6.7 grams",
    // "fat":"0.5 grams",
    // "carbohydrate":"77 grams",
    //     "asin": "B007GZM230",
    //     "review": "4.5",
    //     "date": "29 July 2016"
    // }]
    const getProducts = () => {
        fetch("https://amazon-backend-orcin.vercel.app/rice",
            { method: "GET" })
            .then((data) => data.json())
            .then((dts) => setRice(dts))
    }
    useEffect(() => getProducts(), [])
    return (
        <div className="mangoes">
            <p className="mangoes-ptag">Rices</p>
            <div className="mango-flex">
                {rice.map((rice, index, id) => <RiceList rice={rice} key={index} id={id} />)}
            </div>
        </div>
    )
}



function RiceList({ rice, id }) {
    const navigate = useNavigate()
    return (
        <div className="mangolist" >
            <img src={rice.img} alt={rice.title} />
            <p className="mango-title" onClick={() => navigate(`/rice/${rice.id}`)}>{rice.title} </p>
            <span className="mango-rate">{rice.rate}</span>
            <span className="strike">{rice.strike}</span>
            <p className="offer">{rice.off}</p>
        </div>
    )
}


export function RiceCont() {
    const { id } = useParams()
    const [rice, setRice] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        fetch(`https://amazon-backend-orcin.vercel.app/rice/${id}`)
            .then((data) => data.json())
            .then((dts) => setRice(dts));
    }, [id]);
    const amount = parseInt(rice.rate)
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
                <img className="features-image" src={rice.img} alt={rice.title} />
                <div>
                    <div className="features-content">
                        <p className="features-content-title">{rice.title}</p>
                        <div className="features-height">

                            <p className="features-fresh">{rice.manufacturer}</p>
                            <p className="features-rating">Rating : {rice.review}</p>
                            <p>{rice.brought}</p>
                        </div>

                    </div>
                    <div className="price-container">
                        <p>MRP :<span className="price-strike" > {rice.strike}</span></p>
                        <p >Price : <span className="price">₹ {rice.rate}</span></p>
                        <p >Offer : <span className="price">{rice.off}</span></p>
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

                        <p>Sold by <span className="soldby-bold">{rice.soldby}</span> and fulfilled by Amazon</p>
                        <div className="veg-container">
                            <div className="veg">
                                <div className="veg-circle"></div>
                            </div>
                            <p>This is a <span className="soldby-product">{rice.ingredientType}</span> Product</p>
                            <button className="buy"
                                onClick={handleClick}
                            >Buy</button>
                        </div>
                    </div>
                    <div className="about">
                        <p className="about-title">About this item</p>
                        <ul>
                            <li>{rice.infoOne}</li>
                            <li>{rice.infoTwo}</li>
                            <li>{rice.infoThree}</li>
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
                                <td className="row-data">{rice.speciality}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Weight</td>
                                <td className="row-data">{rice.weight}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Ingredient Type</td>
                                <td className="row-data">{rice.ingredientType}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Brand</td>
                                <td className="row-data">{rice.brand}</td>
                            </tr>

                            <tr>
                                <td className="row-head">Manufacturer</td>
                                <td className="row-data">{rice.manufacturer}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Net Quantity</td>
                                <td className="row-data">{rice.netQuantity}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Package Information</td>
                                <td className="row-data">{rice.packageInfo}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Package Dimensions</td>
                                <td className="row-data">{rice.dimension}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Energy(kcal)</td>
                                <td className="row-data">{rice.energy}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Protein</td>
                                <td className="row-data">{rice.protein}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Fat</td>
                                <td className="row-data">{rice.fat}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Carbohydrate</td>
                                <td className="row-data">{rice.carbohydrate}</td>
                            </tr>
                        </table>
                    </div>
                    <div className="additional-info">
                        <p>Additional Information</p>
                        <table>
                            <tr>
                                <td className="row-head">ASIN</td>
                                <td className="row-data">{rice.asin}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Customer Reviews</td>
                                <td className="row-data">{rice.review}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Date First Available</td>
                                <td className="row-data">{rice.date}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Manufacturer</td>
                                <td className="row-data">{rice.manufacturer}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Item Weight</td>
                                <td className="row-data">{rice.weight}</td>
                            </tr>

                        </table>

                    </div>
                </div>
            </div>
        </div>

    )
}

function Atta({ atta, setAtta }) {
    // const atta = [{
    //     "id": "1",
    //     "img": "https://images-eu.ssl-images-amazon.com/images/I/81xbneM30QL.AC_SL240_.jpg",
    //     "title": "Amazon Brand - Vedaka Sooji, 500g",
    //     "rate": "₹39.00",
    //     "strike": "₹52.00",
    //     "off": "44% Off",
    //     "brought": "4K+ bought in past week",
    //     "soldby": "Aripl_Yeshwanthpur IA ",
    //     "ingredientType": "Vegetarian",
    //     "infoOne": "Made with 100 percent roasted, granulated wheat",
    //      "infoTwo": "No artificial colours or preservatives added",
    //     "infoThree": "Haccp certified hygienic packaging to retain quality",
    //     "speciality": "No Artificial Colours",
    //     "weight": "500 Grams",
    //     "brand": "Amazon Brand - Vedaka",
    //     "form": "Whole",
    // "packageInfo":"Packet",
    //     "manufacturer": "Vedaka",
    //     "netQuantity": "500.0 gram",
    //     "dimension": "21.1 x 17 x 5.2 cm; 500 Grams",
    //     "asin": "B07HTWBYVS",
    //     "review": "4.3",
    //     "date": "20 September 2018"
    // }, {
    //     "id": "2",
    //     "img": "https://images-eu.ssl-images-amazon.com/images/I/61AOiVfvtBL.AC_SL240_.jpg",
    //     "title": "Fortune Chakki Fresh Atta, 5kg",
    //     "rate": "₹225.00 ",
    //     "strike": "₹328.00",
    //     "off": "29% Off",
    //     "brought": "4K+ bought in past week",
    //     "soldby": "Aripl_Yeshwanthpur IA ",
    //     "ingredientType": "Vegetarian",
    //     "infoOne": "Made with superior wheat blend",
    //      "infoTwo": "Traditional Chakki Process",
    //     "infoThree": "Absorbs water more efficiently to make your rotis soft and fluffy",
    //     "speciality": "vegetarians",
    //     "weight": "5000 Grams",
    //     "brand": "Fortune",
    //     "form": "Whole",
    // "packageInfo":"Bag",
    //     "manufacturer": "Adani Wilmar Atta",
    //     "netQuantity": "5000.0 gram",
    //     "dimension": "45 x 27.5 x 4 cm; 5000 Grams",
    //     "asin": "B07CBKR1L7",
    //     "review": "4.3",
    //     "date": "23 November 2017"
    // },
    // {
    //     "id": "3",
    //     "img": "https://images-eu.ssl-images-amazon.com/images/I/91SWDnldaaL.AC_SL240_.jpg",
    //     "title": "Aashirvaad Atta with Multigrains, 5kg pack, The High Fibre Atta",
    //     "rate": "₹298.00",
    //     "strike": "₹364.00",
    //     "off": "19% Off",
    //     "brought": "3K+ bought in past week",
    //     "soldby": "Aripl_Yeshwanthpur IA ",
    //     "ingredientType": "Vegetarian",
    //     "infoOne": "Aashirvaad Atta with Multigrains is high in fibre which aids in digestion",
    //      "infoTwo": "3 rotis made from Multigrain Atta fulfill 35% of your daily fibre requirement",
    //     "infoThree": " Rotis made from Aashirvaad Atta with Multigrains taste just like your regular atta",
    //     "speciality": "Vegetarians",
    //     "weight": "5 KiloGrams",
    //     "brand": "	Aashirvaad",
    //     "form": "Whole",
    // "packageInfo":"Bag",
    //     "manufacturer": "ITC Atta",
    //     "netQuantity": "5000.0 gram",
    //     "dimension": "38.1 x 10.16 x 50.8 cm; 5 Kilograms",
    //     "asin": "B009BA7S8M",
    //     "review": "4.4",
    //     "date": "1 Juanuary 2017"
    // },
    // {
    //     "id": "4",
    //     "img": "https://images-eu.ssl-images-amazon.com/images/I/618GH1zvSRL.AC_SL240_.jpg",
    //     "title": "Fortune Chakki Fresh Atta, 10 kg",
    //     "rate": "₹425.00",
    //     "strike": "₹575.00",
    //     "off": "22% Off",
    //     "brought": "2K+ bought in past week",
    //     "soldby": "Aripl_Yeshwanthpur IA ",
    //     "ingredientType": "Vegetarian",
    //     "infoOne": "Made with superior wheat blend",
    //      "infoTwo": "Traditional Chakki Process",
    //     "infoThree": "Absorbs water more efficiently to make your rotis soft and fluffy",
    //     "speciality": "vegetarians",
    //     "weight": "10 KiloGrams",
    //     "brand": "Fortune",
    //     "form": "Whole",
    // "packageInfo":"Bag",
    //     "manufacturer": "Adani Wilmar Atta",
    //     "netQuantity": "10000.0 gram",
    //     "dimension": "5 x 34.5 x 56 cm; 10 Kilograms",
    //     "asin": "B07DCPKZHZ",
    //     "review": "4.3",
    //     "date": "23 November 2017"
    // },
    // {
    //     "id": "5",
    //     "img": "https://images-eu.ssl-images-amazon.com/images/I/61ZN167KRRL.AC_SL240_.jpg",
    //     "title": "Tata Sampann 100% Chana Dal Fine Besan, 1kg",
    //     "rate": "₹95.00",
    //     "strike": "₹125.00",
    //     "off": "24% Off",
    //     "brought": "900+ bought in past week",
    //     "soldby": "Aripl_Yeshwanthpur IA ",
    //     "ingredientType": "Vegetarian",
    //     "infoOne": "100% Natural: Made from 100% unpolished chana dal for an all-natural, authentic taste",
    //      "infoTwo": "Prepare your favourite Recipes such as besan Ladoo, Dhokla, Kadhi, Fafda, Sev and other namkeens",
    //     "infoThree": "Tata Sampann Fine Besan is rich in protein",
    //     "speciality": "Vegetarians",
    //     "weight": "500 Grams",
    //     "brand": "Tata Sampann",
    //     "form": "Whole",
    // "packageInfo":"Packet",
    //     "manufacturer": "Tata Sampann",
    //     "netQuantity": "500.0 gram",
    //     "dimension": "23.6 x 14.4 x 4.8 cm; 500 Grams",
    //     "asin": "	B0752S522F",
    //     "review": "4.5",
    //     "date": "13 July 2019"
    // }]
    const getProducts = () => {
        fetch("https://amazon-backend-orcin.vercel.app/atta",
            { method: "GET" })
            .then((data) => data.json())
            .then((dts) => setAtta(dts))
    }
    useEffect(() => getProducts(), [])
    return (
        <div className="mangoes">
            <p className="mangoes-ptag">Atta & Flours</p>
            <div className="mango-flex">
                {atta.map((atta, index, id) => <AttaList atta={atta} key={index} id={id} />)}
            </div>
        </div>
    )
}



function AttaList({ atta, id }) {
    const navigate = useNavigate()
    return (
        <div className="mangolist" >
            <img src={atta.img} alt={atta.title} />
            <p className="mango-title" onClick={() => navigate(`/atta/${atta.id}`)}>{atta.title} </p>
            <span className="mango-rate">{atta.rate}</span>
            <span className="strike">{atta.strike}</span>
            <p className="offer">{atta.off}</p>
        </div>
    )
}


export function AttaCont() {
    const { id } = useParams()
    const [atta, setAtta] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        fetch(`https://amazon-backend-orcin.vercel.app/atta/${id}`)
            .then((data) => data.json())
            .then((dts) => setAtta(dts));
    }, [id]);
    const amount = parseInt(atta.rate)
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
                <img className="features-image" src={atta.img} alt={atta.title} />
                <div>
                    <div className="features-content">
                        <p className="features-content-title">{atta.title}</p>
                        <div className="features-height">
                            <p className="features-fresh">{atta.manufacturer}</p>
                            <p className="features-rating">Rating : {atta.review}</p>
                        </div>
                    </div>
                    <div className="price-container">
                        <p>MRP :<span className="price-strike" > {atta.strike}</span></p>
                        <p >Price : <span className="price">₹ {atta.rate}</span></p>
                        <p >Offer : <span className="price">{atta.off}</span></p>
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

                        <p>Sold by <span className="soldby-bold">{atta.soldby}</span> and fulfilled by Amazon</p>
                        <div className="veg-container">
                            <div className="veg">
                                <div className="veg-circle"></div>
                            </div>
                            <p>This is a <span className="soldby-product">{atta.ingredientType}</span> Product</p>
                            <button className="buy"
                                onClick={handleClick}
                            >Buy</button>
                        </div>
                    </div>
                    <div className="about">
                        <p className="about-title">About this item</p>
                        <ul>
                            <li>{atta.infoOne}</li>
                            <li>{atta.infoTwo}</li>
                            <li>{atta.infoThree}</li>
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
                                <td className="row-data">{atta.speciality}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Weight</td>
                                <td className="row-data">{atta.weight}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Ingredient Type</td>
                                <td className="row-data">{atta.ingredientType}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Brand</td>
                                <td className="row-data">{atta.brand}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Package Information</td>
                                <td className="row-data">{atta.packageInfo}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Manufacturer</td>
                                <td className="row-data">{atta.manufacturer}</td>
                            </tr>

                            <tr>
                                <td className="row-head">Net Quantity</td>
                                <td className="row-data">{atta.netQuantity}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Package Dimensions</td>
                                <td className="row-data">{atta.dimension}</td>
                            </tr>

                        </table>
                    </div>
                    <div className="additional-info">
                        <p>Additional Information</p>
                        <table>
                            <tr>
                                <td className="row-head">ASIN</td>
                                <td className="row-data">{atta.asin}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Customer Reviews</td>
                                <td className="row-data">{atta.review}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Date First Available</td>
                                <td className="row-data">{atta.date}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Manufacturer</td>
                                <td className="row-data">{atta.manufacturer}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Item Weight</td>
                                <td className="row-data">{atta.weight}</td>
                            </tr>

                        </table>

                    </div>
                </div>
            </div>
        </div>

    )
}