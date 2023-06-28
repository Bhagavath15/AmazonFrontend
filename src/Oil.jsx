import { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";

export function Oil({ oil, setOil, masala, setMasala, sauce, setSauce }) {
    return (
        <div>
            <div className="fruits-container">
                <p>Oil,Masala & Sauces</p>
            </div>
            <Oils oil={oil} setOil={setOil} />
            <Masala masala={masala} setMasala={setMasala} />
            <Sauce sauce={sauce} setSauce={setSauce} />
        </div>
    );
}

function Oils({ oil, setOil }) {
    // const oil = [{
    //     "id": "1",
    //     "img": "https://images-eu.ssl-images-amazon.com/images/I/51TH5xE+2sL.AC_SL240_.jpg",
    //     "title": "Fortune Sunlite Refined Sunflower Oil, 1L",
    //     "rate": "₹116.00",
    //     "strike": "₹140.00",
    //     "off": "17% Off",
    //     "brought": "9k+ bought in past week",
    //     "soldby": "Aripl_Yeshwanthpur IA ",
    //     "ingredientType": "Vegetarian",
    //     "infoOne": "Fortified",
    //     "infoTwo": "Light and healthy that is easy to digest",
    //     "infoThree": "Rich in vitamins, which keeps skin healthy",
    //     "speciality": "	high_in_vitamin",
    //     "weight": "1 Litres",
    //     "brand": "FORTUNE",
    //     "ingredient": "Sunflower Oil",
    //     "manufacturer": "Adani Wilmar",
    //     "netQuantity": "500.0 gram",
    //     "dimension": "4.7 x 15.4 x 23.7 cm; 910 Grams",
    //     "energy": "900.00 Kilocalories",
    //     "protein": "0 Grams",
    //     "fat": "100 Grams",
    //     "carbohydrate": "0 Grams",
    //     "asin": "B00NYZTGEO",
    //     "review": "4.4",
    //     "date": "1 January 2017"
    // }, {
    //     "id": "2",
    //     "img": "https://images-eu.ssl-images-amazon.com/images/I/412TbDp8+mL.AC_SL240_.jpg",
    //     "title": "Fortune Sunlite Refined Sunflower Oil, 5L Can",
    //     "rate": "₹599.00 ",
    //     "strike": "₹720.00",
    //     "off": "17% Off",
    //     "brought": "2k+ bought in past week",
    //     "soldby": "Aripl_Yeshwanthpur IA ",
    //     "ingredientType": "Vegetarian",
    //     "infoOne": "Fortified",
    //     "infoTwo": "Light and healthy that is easy to digest",
    //     "infoThree": "Rich in vitamins, which keeps skin healthy",
    //     "speciality": "high_in_vitamin",
    //     "weight": "4.550 Litres",
    //     "brand": "FORTUNE",
    //     "ingredient": "Sunflower Oil",
    //     "manufacturer": "Adani Wilmar",
    //     "netQuantity": "5000.0 gram",
    //     "dimension": "25.4 x 19.3 x 10.2 cm; 4.55 Kilograms",
    //     "energy": "900.00 Kilocalories",
    //     "protein": "0 Grams",
    //     "fat": "100 Grams",
    //     "carbohydrate": "0 Grams",
    //     "asin": "B075757RF2",
    //     "review": "4.4",
    //     "date": "29 June 2016"
    // },
    // {
    //     "id": "3",
    //     "img": "https://m.media-amazon.com/images/I/51LDVnzFHcL._SX300_SY300_QL70_FMwebp_.jpg",
    //     "title": "Sunrich Sunflower Oil Pouch, 899g",
    //     "rate": "₹115.00",
    //     "strike": "₹144.00",
    //     "off": "20% Off",
    //     "brought": "1k+ bought in past week",
    //     "soldby": "Aripl_Yeshwanthpur IA ",
    //     "ingredientType": "Vegetarian",
    //     "infoOne": "PUFA known to aid heart health",
    //     "infoTwo": "transparent and light",
    //     "infoThree": "Contains Vit A & D",
    //     "speciality": "Vegetarian",
    //     "weight": "900 Grams",
    //     "brand": "Sunrich",
    //     "ingredient": "Refined Sunflower Seed Oil, Antioxidant (INS 319), Vitamin A (25 IU PER GRAM), Antifoaming Agent (INS 900a) & Vitamin D (4.5 IU PER GRAM)",
    //     "manufacturer": "Ruchi Soya",
    //     "netQuantity": "899.0 grams",
    //     "dimension": "17.3 x 15.2 x 3 cm; 900 Grams",
    //     "energy": "900.00 Kilocalories",
    //     "protein": "0 Grams",
    //     "fat": "100 Grams",
    //     "carbohydrate": "0 Grams",
    //     "asin": "B019RJOB2C",
    //     "review": "4.3",
    //     "date": "1 January 2017"
    // },
    // {
    //     "id": "4",
    //     "img": "https://images-eu.ssl-images-amazon.com/images/I/71u-UfyEy3L.AC_SL240_.jpg",
    //     "title": "Aashirvaad Svasti Pure Cow Ghee - Desi Ghee with Rich Aroma - 1L",
    //     "rate": "₹706.00",
    //     "strike": "₹760.00",
    //     "off": "10% Off",
    //     "brought": "2k+ bought in past week",
    //     "soldby": "Aripl_Yeshwanthpur IA ",
    //     "ingredientType": "Vegetarian",
    //     "infoOne": "Aashirvaad Svasti Pure Cow Ghee is a premium ghee made with a special SloCook process",
    //     "infoTwo": "This desi ghee is prepared by slow cooking it for about 3.5 hours over gradually increased temperatures",
    //     "infoThree": "The SloCook process gives the ghee its rich aroma, golden granular texture and consistent quality",
    //     "speciality": "Suitable for Vegetarian",
    //     "weight": "900 Grams",
    //     "brand": "Aashirvaad",
    //     "ingredient": "Milk Fat",
    //     "manufacturer": "ITC Limited",
    //     "netQuantity": "500.0 gram",
    //     "dimension": "7.6 x 11.2 x 17.4 cm; 900 Grams",
    //     "energy": "897.00 Kilocalories",
    //     "protein": "0 Grams",
    //     "fat": "99.7 Grams",
    //     "carbohydrate": "0 Grams",
    //     "asin": "B07D3CXH7H",
    //     "review": "4.3",
    //     "date": "31 December 2017"
    // },
    // {
    //     "id": "5",
    //     "img": "https://m.media-amazon.com/images/I/51jw-+MzO0L._SY300_SX300_.jpg",
    //     "title": "Amul Pure Ghee Pouch, 1L",
    //     "rate": "₹630.00",
    //     "strike": "₹635.00",
    //     "off": "1% Off",
    //     "brought": "200+ bought in past week",
    //     "soldby": "Aripl_Yeshwanthpur IA ",
    //     "ingredientType": "Vegetarian",
    //     "infoOne": "1 Spoon a day of ghee keeps you fit and strong in this fast life where we need to be active and energetic always",
    //     "infoTwo": "Ghee can be consumed for better digestion",
    //     "infoThree": "Ghee stimulates muscle movements, strengthen the sense organ, nourish the skin and improves complexion",
    //     "speciality": "Suitable for Vegetarian",
    //     "weight": "899 Grams",
    //     "brand": "Amul",
    //     "ingredient": "Milk Fat",
    //     "manufacturer": "Amul",
    //     "netQuantity": "1000.0 grams",
    //     "dimension": "12.7 x 15.2 x 10.7 cm; 899 Grams,
    //     "energy": "900.00 Kilocalories",
    //     "protein": "0 Grams",
    //     "fat": "100 Grams",
    //     "carbohydrate": "0 Grams",
    //     "asin": "B07H3V7LNR",
    //     "review": "4.4",
    //     "date": "30 August 2016"
    // }]
    const getProducts = () => {
        fetch("https://amazon-backend-orcin.vercel.app/oil",
            { method: "GET" })
            .then((data) => data.json())
            .then((dts) => setOil(dts))
    }
    useEffect(() => getProducts(), [])
    return (
        <div className="mangoes">
            <p className="mangoes-ptag">Oils & Ghee</p>
            <div className="mango-flex">
                {oil.map((oil, index, id) => <OilList oil={oil} key={index} id={id} />)}
            </div>
        </div>
    )
}

function OilList({ oil, id }) {
    const navigate = useNavigate()
    return (
        <div className="mangolist" >
            <img src={oil.img} alt={oil.title} />
            <p className="mango-title" onClick={() => navigate(`/oil/${oil.id}`)}>{oil.title} </p>
            <span className="mango-rate">₹ {oil.rate}</span>
            <span className="strike">{oil.strike}</span>
            <p className="offer">{oil.off}</p>
        </div>
    )
}
export function OilCont() {
    const { id } = useParams()
    const [oil, setOil] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        fetch(`https://amazon-backend-orcin.vercel.app/oil/${id}`)
            .then((data) => data.json())
            .then((dts) => setOil(dts));
    }, [id]);
    const amount = parseInt(oil.rate)
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
                <img className="features-image" src={oil.img} alt={oil.title} />
                <div>
                    <div className="features-content">
                        <p className="features-content-title">{oil.title}</p>
                        <div className="features-height">

                            <p className="features-fresh">{oil.manufacturer}</p>
                            <p className="features-rating">Rating : {oil.review}</p>
                            <p>{oil.brought}</p>
                        </div>

                    </div>
                    <div className="price-container">
                        <p>MRP :<span className="price-strike" > {oil.strike}</span></p>
                        <p >Price : <span className="price">₹ {oil.rate}</span></p>
                        <p >Offer : <span className="price">{oil.off}</span></p>
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

                        <p>Sold by <span className="soldby-bold">{oil.soldby}</span> and fulfilled by Amazon</p>
                        <div className="veg-container">
                            <div className="veg">
                                <div className="veg-circle"></div>
                            </div>
                            <p>This is a <span className="soldby-product">{oil.ingredientType}</span> Product</p>
                            <button className="buy"
                                onClick={handleClick}
                            >Buy</button>
                        </div>
                    </div>
                    <div className="about">
                        <p className="about-title">About this item</p>
                        <ul>
                            <li>{oil.infoOne}</li>
                            <li>{oil.infoTwo}</li>
                            <li>{oil.infoThree}</li>
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
                                <td className="row-data">{oil.speciality}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Weight</td>
                                <td className="row-data">{oil.weight}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Ingredient Type</td>
                                <td className="row-data">{oil.ingredientType}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Brand</td>
                                <td className="row-data">{oil.brand}</td>
                            </tr>

                            <tr>
                                <td className="row-head">Manufacturer</td>
                                <td className="row-data">{oil.manufacturer}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Net Quantity</td>
                                <td className="row-data">{oil.netQuantity}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Ingredient</td>
                                <td className="row-data">{oil.ingredient}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Package Dimensions</td>
                                <td className="row-data">{oil.dimension}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Energy(kcal)</td>
                                <td className="row-data">{oil.energy}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Protein</td>
                                <td className="row-data">{oil.protein}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Fat</td>
                                <td className="row-data">{oil.fat}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Carbohydrate</td>
                                <td className="row-data">{oil.carbohydrate}</td>
                            </tr>
                        </table>
                    </div>
                    <div className="additional-info">
                        <p>Additional Information</p>
                        <table>
                            <tr>
                                <td className="row-head">ASIN</td>
                                <td className="row-data">{oil.asin}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Customer Reviews</td>
                                <td className="row-data">{oil.review}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Date First Available</td>
                                <td className="row-data">{oil.date}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Manufacturer</td>
                                <td className="row-data">{oil.manufacturer}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Item Weight</td>
                                <td className="row-data">{oil.weight}</td>
                            </tr>

                        </table>

                    </div>
                </div>
            </div>
        </div>

    )
}

function Masala({ masala, setMasala }) {
    // const masala = [{
    //     "id": "1",
    //     "img": "https://m.media-amazon.com/images/I/6146nzgejrL._SX679_.jpg",
    //     "title": "Tata Sampann Turmeric Powder With Natural Oils, 200g",
    //     "rate": "₹57.00",
    //     "strike": "₹72.00",
    //     "off": "21% Off",
    //     "brought": "3k+ bought in past week",
    //     "soldby": "Aripl_Yeshwanthpur IA ",
    //     "ingredientType": "Vegetarian",
    //     "infoOne": "Highly Aromatic Turmeric: Enjoy the rich taste of Tata Sampann Turmeric Powder in all your favourite dishes",
    //     "infoTwo": "Minimum 3% Curcumin: Every pack carries the promise of an active ingredient called curcumin",
    //     "infoThree": "Sampann Goodness: These spices have the natural oils in the spices intact thus offering you sampann goodness",
    //     "speciality": "Naturl",
    //     "weight": "200 grams",
    //     "brand": "Tata Sampann",
    //     "manufacturer": "Tata Sampann",
    //     "netQuantity": "200.0 gram",
    //     "dimension": "12 x 8 x 4 cm; 200 Grams",
    //     "packageInfo": "Packet",
    //     "asin": "B079H8D8M6",
    //     "review": "4.5",
    //     "date": "31 January 2018"
    // }, {
    //     "id": "2",
    //     "img": "https://m.media-amazon.com/images/I/51MMjOevUbL._SX300_SY300_QL70_FMwebp_.jpg",
    //     "title": "Tata Sampann Coriander Powder With Natural Oils, 200g",
    //     "rate": "₹72.00 ",
    //     "strike": "₹90.00",
    //     "off": "20% Off",
    //     "brought": "1.5k+ bought in past week",
    //     "soldby": "Aripl_Yeshwanthpur IA ",
    //     "ingredientType": "Vegetarian",
    //     "infoOne": "Top Quality Coriander: Enjoy the rich taste of Tata Sampann Coriander Powder in all your favourite dishes",
    //     "infoTwo": "Healthy Choice: Coriander gets its properties and taste from its naturally occuring volatile oils",
    //     "infoThree": "Sampann Goodness: These spices have the natural oils in the spices intact thus offering you sampann goodness",
    //     "speciality": "Natural",
    //     "weight": "200 grams",
    //     "brand": "Tata Sampann",
    //     "manufacturer": "Tata Sampann",
    //     "netQuantity": "200.0 gram",
    //     "dimension": "4 x 13.5 x 19.6 cm; 200 Grams",
    //     "packageInfo": "Packet",
    //     "asin": "B079H9K321",
    //     "review": "4.5",
    //     "date": "31 January 2018"
    // },
    // {
    //     "id": "3",
    //     "img": "https://m.media-amazon.com/images/I/51Wquoy7aCL._SX300_SY300_QL70_FMwebp_.jpg",
    //     "title": "Catch Super Garam Masala Powder, 200g",
    //     "rate": "₹64.00",
    //     "strike": "₹85.00",
    //     "off": "25% Off",
    //     "brought": "400+ bought in past week",
    //     "soldby": "Aripl_Yeshwanthpur IA ",
    //     "ingredientType": "Vegetarian",
    //     "infoOne": "ADD TASTE TO FOOD: Catch Super Garam Masala is a perfect blend of Indian spices for all the food lovers with knack for spicy and zesty dishes.",
    //     "infoTwo": "TANGY IN TASTE: Super Garam Masala can be used for preparing curries, gravies and marination.",
    //     "infoThree": "This Indian masala is extensively used across multiple cuisines to add flavours, colour, aroma and an impeccable restaurant-touch any vegetable or meat dish.",
    //     "speciality": "Natural",
    //     "weight": "200 grams",
    //     "brand": "Catch",
    //     "manufacturer": "Dharampal Satyapal",
    //     "netQuantity": "200.0 gram",
    //     "dimension": "18.5 x 3 x 10.6 cm; 200 Grams",
    //     "packageInfo": "Packet",
    //     "asin": "B01B7DZJ3Q",
    //     "review": "4.3",
    //     "date": "1 January 2017"
    // },
    // {
    //     "id": "4",
    //     "img": "https://images-eu.ssl-images-amazon.com/images/I/71iEPQR5QxL.AC_SL240_.jpg",
    //     "title": "Dabur Hommade Ginger Garlic Paste, 200g",
    //     "rate": "₹34.00",
    //     "strike": "₹50.00",
    //     "off": "32% Off",
    //  "brought": "800+ bought in past week",
    //     "soldby": "Aripl_Yeshwanthpur IA ",
    //     "ingredientType": "Vegetarian",
    //     "infoOne": "Prepared from carefully selected best quality ginger and garlic",
    //     "infoTwo": "Strong Distinctive Aroma of freshly ground ginger and garlic",
    //     "infoThree": "Blends perfectly with dishes and enhances the taste",
    //     "speciality": "No Artificial",
    //     "weight": "200 grams",
    //     "brand": "Dabur",
    //     "manufacturer": "Dabur",
    //     "netQuantity": "200.0 gram",
    //     "dimension": "1 x 10.5 x 15 cm; 200 Grams",
    //     "packageInfo": "Packet",
    //     "asin": "B015QZI2J4",
    //     "review": "4.3",
    //     "date": "1 January 2017"
    // },

    // {
    //     "id": "5",
    //     "img": "https://m.media-amazon.com/images/I/619HVthKnSL._SX569_.jpg",
    //     "title": "Tata Sampann Chilli Powder With Natural Oils, 100g",
    //     "rate": "₹58.00",
    //     "strike": "₹65.00",
    //     "off": "11% Off",
    //  "brought": "500+ bought in past week",
    //     "soldby": "Aripl_Yeshwanthpur IA ",
    //     "ingredientType": "Vegetarian",
    //     "infoOne": "Chilli Powder",
    //     "infoTwo": "Adds to the richness of the dishes and also adds mild pungency to it",
    //     "infoThree": "Catch Spices are packed hygienically ensuring minimal human contact",
    //     "speciality": "Vegetarian",
    //     "weight": "200 grams",
    //     "brand": "Catch",
    //     "manufacturer": "Dharampal Satyapal",
    //     "netQuantity": "200.0 gram",
    //     "dimension": "13.8 x 0.6 x 19 cm; 200 Grams",
    //     "packageInfo": "Packet",
    //     "asin": "B0154J838W",
    //     "review": "4.4",
    //     "date": "1 January 2017"
    // }]
    const getProducts = () => {
        fetch("https://amazon-backend-orcin.vercel.app/masala",
            { method: "GET" })
            .then((data) => data.json())
            .then((dts) => setMasala(dts))
    }
    useEffect(() => getProducts(), [])
    return (
        <div className="mangoes">
            <p className="mangoes-ptag">Powdered Masalas</p>
            <div className="mango-flex">
                {masala.map((masala, index, id) => <MasalaList masala={masala} key={index} id={id} />)}
            </div>
        </div>
    )
}

function MasalaList({ masala, id }) {
    const navigate = useNavigate()
    return (
        <div className="mangolist" >
            <img src={masala.img} alt={masala.title} />
            <p className="mango-title" onClick={() => navigate(`/masala/${masala.id}`)}>{masala.title} </p>
            <span className="mango-rate">₹ {masala.rate}</span>
            <span className="strike">{masala.strike}</span>
            <p className="offer">{masala.off}</p>
        </div>
    )
}

export function MasalaCont() {
    const { id } = useParams()
    const [masala, setMasala] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        fetch(`https://amazon-backend-orcin.vercel.app/masala/${id}`)
            .then((data) => data.json())
            .then((dts) => setMasala(dts));
    }, [id]);
    const amount = parseInt(masala.rate)
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
                <img className="features-image" src={masala.img} alt={masala.title} />
                <div>
                    <div className="features-content">
                        <p className="features-content-title">{masala.title}</p>
                        <div className="features-height">

                            <p className="features-fresh">{masala.manufacturer}</p>
                            <p className="features-rating">Rating : {masala.review}</p>
                            <p>{masala.brought}</p>
                        </div>

                    </div>
                    <div className="price-container">
                        <p>MRP :<span className="price-strike" > {masala.strike}</span></p>
                        <p >Price : <span className="price">₹ {masala.rate}</span></p>
                        <p >Offer : <span className="price">{masala.off}</span></p>
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

                        <p>Sold by <span className="soldby-bold">{masala.soldby}</span> and fulfilled by Amazon</p>
                        <div className="veg-container">
                            <div className="veg">
                                <div className="veg-circle"></div>
                            </div>
                            <p>This is a <span className="soldby-product">{masala.ingredientType}</span> Product</p>
                            <button className="buy"
                                onClick={handleClick}
                            >Buy</button>
                        </div>
                    </div>
                    <div className="about">
                        <p className="about-title">About this item</p>
                        <ul>
                            <li>{masala.infoOne}</li>
                            <li>{masala.infoTwo}</li>
                            <li>{masala.infoThree}</li>
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
                                <td className="row-data">{masala.speciality}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Weight</td>
                                <td className="row-data">{masala.weight}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Ingredient Type</td>
                                <td className="row-data">{masala.ingredientType}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Brand</td>
                                <td className="row-data">{masala.brand}</td>
                            </tr>

                            <tr>
                                <td className="row-head">Manufacturer</td>
                                <td className="row-data">{masala.manufacturer}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Net Quantity</td>
                                <td className="row-data">{masala.netQuantity}</td>
                            </tr>

                            <tr>
                                <td className="row-head">Package Dimensions</td>
                                <td className="row-data">{masala.dimension}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Package Information</td>
                                <td className="row-data">{masala.packageInfo}</td>
                            </tr>

                        </table>
                    </div>
                    <div className="additional-info">
                        <p>Additional Information</p>
                        <table>
                            <tr>
                                <td className="row-head">ASIN</td>
                                <td className="row-data">{masala.asin}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Customer Reviews</td>
                                <td className="row-data">{masala.review}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Date First Available</td>
                                <td className="row-data">{masala.date}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Manufacturer</td>
                                <td className="row-data">{masala.manufacturer}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Item Weight</td>
                                <td className="row-data">{masala.weight}</td>
                            </tr>

                        </table>

                    </div>
                </div>
            </div>
        </div>

    )
}

function Sauce({ sauce, setSauce }) {
    // const sauce = [{
    //     "id": "1",
    //     "img": "https://images-eu.ssl-images-amazon.com/images/I/41I-7qQXBzL.AC_SL240_.jpg",
    //     "title": "Ching's Secret Green Chilli Sauce 190gm",
    //     "rate": "₹58.00",
    //     "strike": "₹60.00",
    //     "off": "2% Off",
    //     "brought": "400+ bought in past week",
    //     "soldby": "Aripl_Yeshwanthpur IA ",
    //     "ingredientType": "Vegetarian",
    //     "infoOne": "Prepared hygienically with the latest technology",
    //     "infoTwo": "Made using traditional recipes and fine ingredients",
    //     "infoThree": "Very versatile - can be used as marinades, dips or in stir-fries",
    //     "speciality": "Vegetarian",
    //     "weight": "182 grams",
    //     "brand": "Ching's Secret",
    //     "manufacturer": "Capital Foods pvt Ltd",
    //     "netQuantity": "200.0 gram",
    //     "dimension": "6.5 x 6.5 x 20 cm; 182 Grams",
    //     "packageInfo": "Bottle",
    //     "asin": "B09CWL1QJK",
    //     "review": "4.3",
    //     "date": "17 August 2021"
    // }, {
    //     "id": "2",
    //     "img": "https://images-eu.ssl-images-amazon.com/images/I/41EBoBcuJuL.AC_SL240_.jpg",
    //     "title": "Ching's Secret RED CHILLI SAUCE, 200gm",
    //     "rate": "₹58.00 ",
    //     "strike": "₹60.00",
    //     "off": "2% Off",
    //     "brought": "300+ bought in past week",
    //     "soldby": "Aripl_Yeshwanthpur IA ",
    //     "ingredientType": "Vegetarian",
    //     "infoOne": "Prepared hygienically with the latest technology",
    //     "infoTwo": "Made using traditional recipes and fine ingredients",
    //     "infoThree": "Very versatile - can be used as marinades, dips or in stir-fries",
    //     "speciality": "Vegetarian",
    //     "weight": "1000 grams",
    //     "brand": "Ching's Secret",
    //     "manufacturer": "Capital Foods pvt Ltd",
    //     "netQuantity": "1000.0 gram",
    //     "dimension": "6.5 x 6.5 x 20 cm; 1 Kilograms",
    //     "packageInfo": "Bottle",
    //     "asin": "B09H6KZYJ9",
    //     "review": "4.3",
    //     "date": "25 September 2021"
    // },
    // {
    //     "id": "3",
    //     "img": "https://images-eu.ssl-images-amazon.com/images/I/71eY2jA-pHL.AC_SL240_.jpg",
    //     "title": "veeba pasta pizza sauce 280g",
    //     "rate": "₹89.00",
    //     "strike": "₹82.00",
    //     "off": "8% Off",
    //     "brought": "420+ bought in past week",
    //     "soldby": "Aripl_Yeshwanthpur IA ",
    //     "ingredientType": "Vegetarian",
    //     "infoOne": "Delicious and Tasty",
    //     "infoTwo": "Material Features: Vegetarian ; Flavor Name: Pasta,Pizza",
    //     "infoThree": "Country of Origin: India",
    //     "speciality": "No Artificial Flavours",
    //     "weight": "280 grams",
    //     "brand": "VEEBA",
    //     "manufacturer": "Veeba Food Services Private Ltd",
    //     "netQuantity": "500.0 gram",
    //     "dimension": "11.4 x 6.6 x 5.6 cm; 280 Grams",
    //     "packageInfo": "Bottle",
    //     "asin": "B06WVM9CSH",
    //     "review": "4.3",
    //     "date": "21 February 2017"
    // },
    // {
    //     "id": "4",
    //     "img": "https://images-eu.ssl-images-amazon.com/images/I/611DoUq6jkL.AC_SL240_.jpg",
    //     "title": "Del Monte Tomato Ketchup Sweet and Spicy Pouch, 950 g",
    //     "rate": "₹109.00",
    //     "strike": "₹135.00",
    //     "off": "19% Off",
    //     "brought": "7000+ bought in past week",
    //     "soldby": "RK WORLD_fresh_ubl6  ",
    //     "ingredientType": "Vegetarian",
    //     "infoOne": "Made with premium ingredients which gives it a rich and superior taste",
    //     "infoTwo": "Blended with ripe vine bright red tomatoes giving it a smooth and thick texture",
    //     "infoThree": "Contains no MSG or added colour; 100% Vegetarian",
    //     "speciality": "Preservative Free, No Artificial Flavours, No Artificial Colours",
    //     "weight": "950 grams",
    //     "brand": "Del monte",
    //     "manufacturer": "Del Monte Foods Pvt. Ltd.",
    //     "netQuantity": "950.0 gram",
    //     "dimension": "16 x 7 x 25 cm; 950 Grams",
    //     "packageInfo": "Pouch",
    //     "asin": "B08Q528DVF",
    //     "review": "4.3",
    //     "date": "8 December 2020"
    // },
    // {
    //     "id": "5",
    //     "img": "https://images-eu.ssl-images-amazon.com/images/I/71y5psLr4yL.AC_SL240_.jpg",
    //     "title": "MAGGI Rich Tomato Ketchup, Made with Real Tomatoes, 970 g (Weight May Vary Upwards)",
    //     "rate": "₹144.00",
    //     "strike": "₹160.00",
    //     "off": "10% Off",
    // "brought": "300+ bought in past week",
    // "soldby": "Aripl_Yeshwanthpur IA ",
    // "ingredientType": "Vegetarian",
    // "infoOne": "RICH TOMATO KETCHUP: Treat yourself to the unique taste of Nestlé Maggi Rich Tomato Ketchup",
    // "infoTwo": "MADE WITH REAL TOMATOES: This tomato ketchup is made with real and juicy tomatoes",
    // "infoThree": "PERFECT SNACK PARTNER: Add a tang to your snacks with Maggi tomato ketchup",
    // "speciality": "No Artificial Flavours",
    // "weight": "980 grams",
    // "brand": "Maggi",
    // "manufacturer": "Nestle India Ltd",
    // "netQuantity": "970.0 gram",
    // "dimension": "80.7 x 22.8 x 22.1 cm; 970 Grams",
    // "packageInfo": "Bottle",
    // "asin": "B00N8RTEPE",
    // "review": "4.4",
    // "date": "1 January 2017"
    // }]
    const getProducts = () => {
        fetch("https://amazon-backend-orcin.vercel.app/sauce",
            { method: "GET" })
            .then((data) => data.json())
            .then((dts) => setSauce(dts))
    }
    useEffect(() => getProducts(), [])
    return (
        <div className="mangoes">
            <p className="mangoes-ptag">Sauces</p>
            <div className="mango-flex">
                {sauce.map((sauce, index, id) => <SauceList sauce={sauce} key={index} id={id} />)}
            </div>
        </div>
    )
}



function SauceList({ sauce, id }) {
    const navigate = useNavigate()
    return (
        <div className="mangolist" >
            <img src={sauce.img} alt={sauce.title} />
            <p className="mango-title" onClick={() => navigate(`/sauce/${sauce.id}`)}>{sauce.title} </p>
            <span className="mango-rate">₹ {sauce.rate}</span>
            <span className="strike">{sauce.strike}</span>
            <p className="offer">{sauce.off}</p>
        </div>
    )
}

export function SauceCont() {
    const { id } = useParams()
    const [sauce, setSauce] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        fetch(`https://amazon-backend-orcin.vercel.app/sauce/${id}`)
            .then((data) => data.json())
            .then((dts) => setSauce(dts));
    }, [id]);
    const amount = parseInt(sauce.rate)
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
                <img className="features-image" src={sauce.img} alt={sauce.title} />
                <div>
                    <div className="features-content">
                        <p className="features-content-title">{sauce.title}</p>
                        <div className="features-height">

                            <p className="features-fresh">{sauce.manufacturer}</p>
                            <p className="features-rating">Rating : {sauce.review}</p>
                            <p>{sauce.brought}</p>
                        </div>

                    </div>
                    <div className="price-container">
                        <p>MRP :<span className="price-strike" > {sauce.strike}</span></p>
                        <p >Price : <span className="price">₹ {sauce.rate}</span></p>
                        <p >Offer : <span className="price">{sauce.off}</span></p>
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

                        <p>Sold by <span className="soldby-bold">{sauce.soldby}</span> and fulfilled by Amazon</p>
                        <div className="veg-container">
                            <div className="veg">
                                <div className="veg-circle"></div>
                            </div>
                            <p>This is a <span className="soldby-product">{sauce.ingredientType}</span> Product</p>
                            <button className="buy"
                                onClick={handleClick}
                            >Buy</button>
                        </div>
                    </div>
                    <div className="about">
                        <p className="about-title">About this item</p>
                        <ul>
                            <li>{sauce.infoOne}</li>
                            <li>{sauce.infoTwo}</li>
                            <li>{sauce.infoThree}</li>
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
                                <td className="row-data">{sauce.speciality}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Weight</td>
                                <td className="row-data">{sauce.weight}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Ingredient Type</td>
                                <td className="row-data">{sauce.ingredientType}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Brand</td>
                                <td className="row-data">{sauce.brand}</td>
                            </tr>

                            <tr>
                                <td className="row-head">Manufacturer</td>
                                <td className="row-data">{sauce.manufacturer}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Net Quantity</td>
                                <td className="row-data">{sauce.netQuantity}</td>
                            </tr>

                            <tr>
                                <td className="row-head">Package Dimensions</td>
                                <td className="row-data">{sauce.dimension}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Package Information</td>
                                <td className="row-data">{sauce.packageInfo}</td>
                            </tr>

                        </table>
                    </div>
                    <div className="additional-info">
                        <p>Additional Information</p>
                        <table>
                            <tr>
                                <td className="row-head">ASIN</td>
                                <td className="row-data">{sauce.asin}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Customer Reviews</td>
                                <td className="row-data">{sauce.review}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Date First Available</td>
                                <td className="row-data">{sauce.date}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Manufacturer</td>
                                <td className="row-data">{sauce.manufacturer}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Item Weight</td>
                                <td className="row-data">{sauce.weight}</td>
                            </tr>

                        </table>

                    </div>
                </div>
            </div>
        </div>

    )
}