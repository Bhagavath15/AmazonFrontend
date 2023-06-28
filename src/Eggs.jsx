import { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";

export function Eggs({ egg, setEgg, fish, setFish, chicken, setChicken, mutton, setMutton }) {
    return (
        <div>
            <div className="fruits-container">
                <p>Eggs,Meat & Fish</p>
            </div>
            <Egg egg={egg} setEgg={setEgg} />
            <Fish fish={fish} setFish={setFish} />
            <Chicken chicken={chicken} setChicken={setChicken} />
            <Mutton mutton={mutton} setMutton={setMutton} />
        </div>
    );
}

function Egg({ egg, setEgg }) {
    // const egg = [{
    //     "id": "1",
    //     "img": "https://images-eu.ssl-images-amazon.com/images/I/31tbuj9qMgL.AC_SL240_.jpg",
    //     "title": "Fresh Eggs, 30 Pieces",
    //     "rate": "₹184.00",
    //     "strike": "₹220.00",
    //     "off": "16% Off",
    //     "brought": "1k+ bought in past week",
    //     "soldby": "Aripl_Yeshwanthpur IA ",
    //     "ingredientType": "Non-Vegetarian",
    //     "infoOne": "It has high dietary content, protein, smell and rich taste",
    //     "infoTwo": "These are one of nature's most wholesome foods",
    //     "infoThree": "ingredients:fresh eggs",
    //     "speciality": "high in protein",
    //     "weight": "0.1 Kilograms",
    //     "brand": "Fresh",
    //     "manufacturer": "Shree Nanjundeshwara Marketing",
    //     "netQuantity": "30 Counts",
    //     "dimension": "27.94 x 7.62 x 27.94 cm; 100 Grams",
    //     "asin": "B07GSG712V",
    //     "review": "4.0",
    //     "date": "21 August 2018"
    // }, {
    //     "id": "2",
    //     "img": "https://images-eu.ssl-images-amazon.com/images/I/315ZDO8t4oL.AC_SL240_.jpg",
    //     "title": "Fresh Eggs - 12 Piece",
    //     "rate": "₹79.00 ",
    //     "strike": "₹100.00",
    //     "off": "21% Off",
    //     "brought": "300+ bought in past week",
    //     "soldby": "Aripl_Yeshwanthpur IA ",
    //     "ingredientType": "Non-Vegetarian",
    //     "infoOne": "Eggs - 12 Piece",
    //     "infoTwo": "These are one of nature's most wholesome foods",
    //     "infoThree": "It has high dietary content, protein, smell and rich taste",
    //     "speciality": "high in protein",
    //     "weight": "50 grams",
    //     "brand": "Fresh",
    //     "manufacturer": "Shree Nanjundeshwara Marketing",
    //     "netQuantity": "12 Counts",
    //     "dimension": "27 x 7.8 x 5 cm; 50 Grams",
    //     "asin": "B07GSJPM84",
    //     "review": "4.0",
    //     "date": "21 August 2018"
    // },
    // {
    //     "id": "3",
    //     "img": "https://images-eu.ssl-images-amazon.com/images/I/31uUoXhwRoL.AC_SL240_.jpg",
    //     "title": "Fresh Eggs - 6 Pieces",
    //     "rate": "₹41.00",
    //     "strike": "₹50.00",
    //     "off": "18% Off",
    //     "brought": "900+ bought in past week",
    //     "soldby": "Aripl_Yeshwanthpur IA ",
    //     "ingredientType": "Non-Vegetarian",
    //     "infoOne": "Eggs - 6 Piece",
    //     "infoTwo": "These are one of nature's most wholesome foods",
    //     "infoThree": "It has high dietary content, protein, smell and rich taste",
    //     "speciality": "high in protein",
    //     "weight": "32 grams",
    //     "brand": "Fresh",
    //     "manufacturer": "Shree Nanjundeshwara Marketing",
    //     "netQuantity": "6 Counts",
    //     "dimension": "14 x 7.6 x 10.2 cm; 32 Grams",
    //     "asin": "B07GSG6B9M",
    //     "review": "4.0",
    //     "date": "21 August 2018"
    // },
    // {
    //     "id": "4",
    //     "img": "https://images-eu.ssl-images-amazon.com/images/I/41dqMrWXmLL.AC_SL240_.jpg",
    //     "title": "UPF Healthy Brown Eggs, 6 Pieces| Veg Fed| Non-Fertile Eggs",
    //     "rate": "₹82.00",
    //     "strike": "₹89.00",
    //     "off": "7% Off",
    //     "brought": "1k+ bought in past week",
    //     "soldby": "Aripl_Yeshwanthpur IA ",
    //     "ingredientType": "Non-Vegetarian",
    //     "infoOne": "Egg has high dietary content, protein, smell and tastes rich",
    //     "infoTwo": "These are one of the natures most wholesome and cost-effective foods",
    //     "infoThree": "Egg contains lots of vitamins, minerals and high-quality protein",
    //     "speciality": "high in protein",
    //     "weight": "240 grams",
    //     "brand": "Farm made foods",
    //     "manufacturer": "U & V Agro Private Limited",
    //     "netQuantity": "6 Counts",
    //     "dimension": "5.12 x 3.54 x 2.36 cm; 240 Grams",
    //     "asin": "B07M8NDWRJ",
    //     "review": "4.1",
    //     "date": "20 December 2018"
    // },
    // {
    //     "id": "5",
    //     "img": "https://images-eu.ssl-images-amazon.com/images/I/51nmy2MA2yL.AC_SL240_.jpg",
    //     "title": "Farm Made Free Range Eggs, 12 Pieces| Veg Fed| Non-Fertile Eggs",
    //     "rate": "₹250.00",
    //     "strike": "₹279.00",
    //     "off": "7% Off",
    //     "brought": "400+ bought in past week",
    //     "soldby": "Aripl_Yeshwanthpur IA ",
    //     "ingredientType": "Non-Vegetarian",
    //     "infoOne": "Farm made",
    //     "infoTwo": "Our hens are pasture raised and humanly treated",
    //     "infoThree": "Our infertile free range eggs are produced using traditional farming methods, ensuring highest animal protection standards",
    //     "speciality": "high in protein",
    //     "weight": "480 grams",
    //     "brand": "Farm made foods",
    //     "manufacturer": "U & V Agro Private Limited",
    //     "netQuantity": "12 count",
    //     "dimension": "9.06 x 5.91 x 1.97 cm; 480 Grams",
    //     "asin": "B07M8NF5WL",
    //     "review": "4.2",
    //     "date": "20 December 2018"
    // }]
    const getProducts = () => {
        fetch("https://amazon-backend-orcin.vercel.app/egg",
            { method: "GET" })
            .then((data) => data.json())
            .then((dts) => setEgg(dts))
    }
    useEffect(() => getProducts(), [])
    return (
        <div className="mangoes">
            <p className="mangoes-ptag">Eggs</p>
            <div className="mango-flex">
                {egg.map((egg, index, id) => <EggList egg={egg} key={index} id={id} />)}
            </div>
        </div>
    )
}

function EggList({ egg, id }) {
    const navigate = useNavigate()
    return (
        <div className="mangolist" >
            <img src={egg.img} alt={egg.title} />
            <p className="mango-title" onClick={() => navigate(`/egg/${egg.id}`)}>{egg.title} </p>
            <span className="mango-rate">₹ {egg.rate}</span>
            <span className="strike">{egg.strike}</span>
            <p className="offer">{egg.off}</p>
        </div>
    )
}

export function EggCont() {
    const { id } = useParams()
    const [egg, setEgg] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        fetch(`https://amazon-backend-orcin.vercel.app/egg/${id}`)
            .then((data) => data.json())
            .then((dts) => setEgg(dts));
    }, [id]);
    const amount = parseInt(egg.rate)
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
                <img className="features-image" src={egg.img} alt={egg.title} />
                <div>
                    <div className="features-content">
                        <p className="features-content-title">{egg.title}</p>
                        <div className="features-height">

                            <p className="features-fresh">{egg.manufacturer}</p>
                            <p className="features-rating">Rating : {egg.review}</p>
                            <p>{egg.brought}</p>
                        </div>

                    </div>
                    <div className="price-container">
                        <p>MRP :<span className="price-strike" > {egg.strike}</span></p>
                        <p >Price : <span className="price">₹ {egg.rate}</span></p>
                        <p >Offer : <span className="price">{egg.off}</span></p>
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

                        <p>Sold by <span className="soldby-bold">{egg.soldby}</span> and fulfilled by Amazon</p>
                        <div className="veg-container">
                            <div className="non-veg">
                                <div className="non-veg-circle"></div>
                            </div>
                            <p>This is a <span className="soldby-product">{egg.ingredientType}</span> Product</p>
                            <button className="buy"
                                onClick={handleClick}
                            >Buy</button>
                        </div>
                    </div>
                    <div className="about">
                        <p className="about-title">About this item</p>
                        <ul>
                            <li>{egg.infoOne}</li>
                            <li>{egg.infoTwo}</li>
                            <li>{egg.infoThree}</li>
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
                                <td className="row-data">{egg.speciality}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Weight</td>
                                <td className="row-data">{egg.weight}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Ingredient Type</td>
                                <td className="row-data">{egg.ingredientType}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Brand</td>
                                <td className="row-data">{egg.brand}</td>
                            </tr>

                            <tr>
                                <td className="row-head">Manufacturer</td>
                                <td className="row-data">{egg.manufacturer}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Net Quantity</td>
                                <td className="row-data">{egg.netQuantity}</td>
                            </tr>

                            <tr>
                                <td className="row-head">Package Dimensions</td>
                                <td className="row-data">{egg.dimension}</td>
                            </tr>
                        </table>
                    </div>
                    <div className="additional-info">
                        <p>Additional Information</p>
                        <table>
                            <tr>
                                <td className="row-head">ASIN</td>
                                <td className="row-data">{egg.asin}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Customer Reviews</td>
                                <td className="row-data">{egg.review}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Date First Available</td>
                                <td className="row-data">{egg.date}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Manufacturer</td>
                                <td className="row-data">{egg.manufacturer}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Item Weight</td>
                                <td className="row-data">{egg.weight}</td>
                            </tr>

                        </table>

                    </div>
                </div>
            </div>
        </div>

    )
}
function Fish({ fish, setFish }) {
    // const fish = [{
    //     "id": "1",
    //     "img": "https://images-eu.ssl-images-amazon.com/images/I/51LSjS5TIVL.AC_SL240_.jpg",
    //     "title": "FreshToHome Catla 1 to 2 Kg Size Fish Bengali Cut Headless| 480 g to 500 g Pack| Never Frozen",
    //     "rate": "₹262.00",
    //     "strike": "₹417.00",
    //     "off": "37% Off",
    //     "brought": "500+ bought in past week",
    //     "soldby": "Aripl_Yeshwanthpur IA ",
    //     "ingredientType": "Non-Vegetarian",
    //     "infoOne": "Fresh Catla Bengali Cut",
    //     "infoTwo": "Never Frozen",
    //     "infoThree": "No Chemicals Added",
    //     "weight": "500 grams",
    //     "brand": "FreshToHome",
    // "ingredient":"Biodegradable, Fresh Fish Product",
    //     "manufacturer": "Freshalicious Super Bazaar Private Limited",
    //     "netQuantity": "480 Grams",
    //     "dimension": "25.4 x 25.4 x 5.1 cm; 500 Grams",
    //     "asin": "B09ZF3ZMV1",
    //     "review": "3.8",
    //     "date": "3 May 2022"
    // }, {
    //     "id": "2",
    //     "img": "https://images-eu.ssl-images-amazon.com/images/I/91Vx32BRkIL.AC_SL240_.jpg",
    //     "title": "Tilapia Curry Cut, 500 g",
    //     "rate": "₹99.00 ",
    //     "strike": "₹135.00",
    //     "off": "27% Off",
    //       "brought": "200+ bought in past week",
    //     "soldby": "Aripl_Yeshwanthpur IA ",
    //     "ingredientType": "Non-Vegetarian",
    //     "infoOne": "Fresh Tilapia Curry Cut",
    //     "infoTwo": "material_features:biodegradable, fresh fish product",
    //     "infoThree": "ingredients:fresh fish",
    //     "weight": "500 grams",
    //     "brand": "The Good Fish Co.",
    // "ingredient":"Biodegradable, Fresh Fish Product",
    //     "manufacturer": "Infifresh Foods Pvt Ltd",
    //     "netQuantity": "500 Grams",
    //     "dimension": "20.3 x 25.4 x 20.3 cm; 500 Grams",
    //     "asin": "B09TKCSB8V",
    //     "review": "3.6",
    //     "date": "28 February 2022"
    // },
    // {
    //     "id": "3",
    //     "img": "https://images-eu.ssl-images-amazon.com/images/I/81j6lX7uN8L.AC_SL240_.jpg",
    //     "title": "Basa Fish Fillet Preservative Free, 500 g| Gross Fish Weight 1.05-1.1 Kg| Net Weight After Cleaning 500 g",
    //     "rate": "₹279.00",
    //     "strike": "₹329.00",
    //     "off": "15% Off",
    //       "brought": "200+ bought in past week",
    //     "soldby": "Aripl_Yeshwanthpur IA ",
    //     "ingredientType": "Non-Vegetarian",
    //     "infoOne": "Fresh Basa Fillet",
    //     "infoTwo": "material_features:biodegradable, fresh fish product",
    //     "infoThree": "ingredients:fresh fish",
    //     "weight": "500 grams",
    //     "brand": "The Good Fish Co.",
    // "ingredient":"Biodegradable, Fresh Fish Product",
    //     "manufacturer": "Infifresh Foods Pvt Ltd",
    //     "netQuantity": "500 Grams",
    //     "dimension": "20 x 25 x 5 cm; 500 Grams",
    //     "asin": "B09N96PWPR",
    //     "review": "3.9",
    //     "date": "8 December 2021"
    // },
    // {
    //     "id": "4",
    //     "img": "https://images-eu.ssl-images-amazon.com/images/I/61EyDWkS6ZL.AC_SL240_.jpg",
    //     "title": "FreshToHome Tandoori Baasa Boneless Fillets | 250g Pack | Ready-to-Cook | Preservative-free",
    //     "rate": "₹233.00",
    //     "strike": "₹350.00",
    //     "off": "33% Off",
    //       "brought": "200+ bought in past week",
    //     "soldby": "Aripl_Yeshwanthpur IA ",
    //     "ingredientType": "Non-Vegetarian",
    //     "infoOne": "Preservative-free",
    //     "infoTwo": "Ready-to-cook",
    //     "infoThree": "ingredients:fresh fish",
    //     "weight": "250 grams",
    //     "brand": "FreshToHome",
    // "ingredient":"Biodegradable, Fresh Fish Product",
    //     "manufacturer": "Freshalicious Super Bazaar Private Limited",
    //     "netQuantity": "500 Grams",
    //     "dimension": "25.4 x 25.4 x 5.1 cm; 250 Grams",
    //     "asin": "B0BH91529D",
    //     "review": "3.9",
    //     "date": "4 October 2021"
    // },
    // {
    //     "id": "5",
    //     "img": "https://images-eu.ssl-images-amazon.com/images/I/71slvk20bsL.AC_SL240_.jpg",
    //     "title": "Mackerel Fish Medium Whole Cleaned, Preservative Free, 500 g| Gross Fish Weight 600-700 g| Net Weight After Cleaning 500 g",
    //     "rate": "₹179.00",
    //     "strike": "₹279.00",
    //     "off": "36% Off",
    //       "brought": "400+ bought in past week",
    //     "soldby": "Aripl_Yeshwanthpur IA ",
    //     "ingredientType": "Non-Vegetarian",
    //     "infoOne": "Fresh Mackerel Cleaned",
    //     "infoTwo": "Delivered in chilled condition",
    //     "infoThree": "ingredients:fresh fish",
    //     "weight": "500 grams",
    //     "brand": "FreshToHome",
    // "ingredient":"Biodegradable, Fresh Fish Product",
    //     "manufacturer": "Freshalicious Super Bazaar Private Limited",
    //     "netQuantity": "500 Grams",
    //     "dimension": "25.4 x 25.4 x 5.1 cm; 500 Grams",
    //     "asin": "B09ZF51N4N",
    //     "review": "4.1",
    //     "date": "3 May 2022"
    // }]
    const getProducts = () => {
        fetch("https://amazon-backend-orcin.vercel.app/fish",
            { method: "GET" })
            .then((data) => data.json())
            .then((dts) => setFish(dts))
    }
    useEffect(() => getProducts(), [])
    return (
        <div className="mangoes">
            <p className="mangoes-ptag">Fish & Sea Foods</p>
            <div className="mango-flex">
                {fish.map((fish, index, id) => <FishList fish={fish} key={index} id={id} />)}
            </div>
        </div>
    )
}



function FishList({ fish, id }) {
    const navigate = useNavigate()
    return (
        <div className="mangolist" >
            <img src={fish.img} alt={fish.title} />
            <p className="mango-title" onClick={() => navigate(`/fish/${fish.id}`)}>{fish.title} </p>
            <span className="mango-rate">₹ {fish.rate}</span>
            <span className="strike">{fish.strike}</span>
            <p className="offer">{fish.off}</p>
        </div>
    )
}

export function FishCont() {
    const { id } = useParams()
    const [fish, setFish] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        fetch(`https://amazon-backend-orcin.vercel.app/fish/${id}`)
            .then((data) => data.json())
            .then((dts) => setFish(dts));
    }, [id]);
    const amount = parseInt(fish.rate)
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
                <img className="features-image" src={fish.img} alt={fish.title} />
                <div>
                    <div className="features-content">
                        <p className="features-content-title">{fish.title}</p>
                        <div className="features-height">

                            <p className="features-fresh">{fish.manufacturer}</p>
                            <p className="features-rating">Rating : {fish.review}</p>
                            <p>{fish.brought}</p>
                        </div>

                    </div>
                    <div className="price-container">
                        <p>MRP :<span className="price-strike" > {fish.strike}</span></p>
                        <p >Price : <span className="price">₹ {fish.rate}</span></p>
                        <p >Offer : <span className="price">{fish.off}</span></p>
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

                        <p>Sold by <span className="soldby-bold">{fish.soldby}</span> and fulfilled by Amazon</p>
                        <div className="veg-container">
                            <div className="non-veg">
                                <div className="non-veg-circle"></div>
                            </div>
                            <p>This is a <span className="soldby-product">{fish.ingredientType}</span> Product</p>
                            <button className="buy"
                                onClick={handleClick}
                            >Buy</button>
                        </div>
                    </div>
                    <div className="about">
                        <p className="about-title">About this item</p>
                        <ul>
                            <li>{fish.infoOne}</li>
                            <li>{fish.infoTwo}</li>
                            <li>{fish.infoThree}</li>
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
                                <td className="row-head">Ingredient</td>
                                <td className="row-data">{fish.ingredient}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Weight</td>
                                <td className="row-data">{fish.weight}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Ingredient Type</td>
                                <td className="row-data">{fish.ingredientType}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Brand</td>
                                <td className="row-data">{fish.brand}</td>
                            </tr>

                            <tr>
                                <td className="row-head">Manufacturer</td>
                                <td className="row-data">{fish.manufacturer}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Net Quantity</td>
                                <td className="row-data">{fish.netQuantity}</td>
                            </tr>

                            <tr>
                                <td className="row-head">Package Dimensions</td>
                                <td className="row-data">{fish.dimension}</td>
                            </tr>
                        </table>
                    </div>
                    <div className="additional-info">
                        <p>Additional Information</p>
                        <table>
                            <tr>
                                <td className="row-head">ASIN</td>
                                <td className="row-data">{fish.asin}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Customer Reviews</td>
                                <td className="row-data">{fish.review}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Date First Available</td>
                                <td className="row-data">{fish.date}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Manufacturer</td>
                                <td className="row-data">{fish.manufacturer}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Item Weight</td>
                                <td className="row-data">{fish.weight}</td>
                            </tr>

                        </table>

                    </div>
                </div>
            </div>
        </div>

    )
}

function Chicken({ chicken, setChicken }) {
    // const chicken = [{
    //     "id": "1",
    //     "img": "https://images-eu.ssl-images-amazon.com/images/I/513QRftAhJL.AC_SL240_.jpg",
    //     "title": "FreshToHome Boneless Chicken Cubes, 250g Pack | Antibiotic Residue Free",
    //     "rate": "₹125.00",
    //     "strike": "₹175.00",
    //     "off": "29% Off",
    //     "brought": "400+ bought in past week",
    //     "soldby": "Aripl_Yeshwanthpur IA ",
    //     "ingredientType": "Non-Vegetarian",
    //     "infoOne": "Fresh, never frozen",
    //     "infoTwo": "Free from all growth hormones",
    //     "infoThree": "Antibiotic residue free",
    //     "weight": "250 grams",
    //     "brand": "FreshToHome",
    //     "ingredient": "Biodegradable, Fresh Poultry Product",
    //     "manufacturer": "Freshalicious Super Bazaar Private Limited",
    //     "netQuantity": "250 Grams",
    //     "dimension": "25.4 x 25.4 x 5.1 cm; 250 Grams",
    //     "asin": "B0BH8Z81SD",
    //     "review": "4.0",
    //     "date": "4 October 2022"
    // }, {
    //     "id": "2",
    //     "img": "https://images-eu.ssl-images-amazon.com/images/I/61ljHpGZ5jL.AC_SL240_.jpg",
    //     "title": "FreshToHome Tangy Chicken Ghee Roast, 250 g Pack",
    //     "rate": "₹125.00 ",
    //     "strike": "₹225.00",
    //     "off": "44% Off",
    //     "brought": "100+ bought in past week",
    //     "soldby": "Aripl_Yeshwanthpur IA ",
    //     "ingredientType": "Non-Vegetarian",
    //     "infoOne": "Fresh, never frozen",
    //     "infoTwo": "Free from all growth hormones",
    //     "infoThree": "Antibiotic residue free",
    //     "weight": "250 grams",
    //     "brand": "FreshToHome",
    //     "ingredient": "Biodegradable, Fresh Poultry Product",
    //     "manufacturer": "Freshalicious Super Bazaar Private Limited",
    //     "netQuantity": "250 Grams",
    //     "dimension": "25.4 x 25.4 x 5.1 cm; 250 Grams",
    //     "asin": "B09ZF4JS8S",
    //     "review": "3.9",
    //     "date": "3 May 2022"
    // },
    // {
    //     "id": "3",
    //     "img": "https://images-eu.ssl-images-amazon.com/images/I/51yn+ehTM7L.AC_SL240_.jpg",
    //     "title": "FreshToHome Peri Peri Chicken Wings, 250 g Pack| Ready-To-Cook| Preservative Free",
    //     "rate": "₹196.00",
    //     "strike": "₹246.00",
    //     "off": "21% Off",
    //     "brought": "100+ bought in past week",
    //     "soldby": "Aripl_Yeshwanthpur IA ",
    //     "ingredientType": "Non-Vegetarian",
    //     "infoOne": "Fresh, never frozen",
    //     "infoTwo": "Free from all growth hormones",
    //     "infoThree": "Antibiotic residue free",
    //     "weight": "250 grams",
    //     "brand": "FreshToHome",
    //     "ingredient": "Unpack the chicken wings to a bowl and scrape the remaining marinade into it. Mix well. On a pan: Heat up a non-stick fry pan and add 1 tbsp of oil and swirl around to spread it. When the pan is hot, drop the chicken wings to the pan and cook on a slow flame. Flip the wings regularly so that it doesn‚Äôt burn. When the wings are cooked with an even golden color on all sides remove from the pan and serve hot. In an oven: Heat up an oven and apply some oil on the oven-proof tray. Arrange the wings on the tray and roast in the oven for 15-20 minutes at 180¬∞C., Biodegradable, Fresh Poultry Product",
    //     "manufacturer": "Freshalicious Super Bazaar Private Limited",
    //     "netQuantity": "250 Grams",
    //     "dimension": "25.4 x 25.4 x 5.1 cm; 250 Grams",
    //     "asin": "B0BHL9L7RP",
    //     "review": "3.8",
    //     "date": "7 October 2022"
    // },
    // {
    //     "id": "4",
    //     "img": "https://images-eu.ssl-images-amazon.com/images/I/61ZAhcX9oiL.AC_SL240_.jpg",
    //     "title": "FreshToHome Grannys Masala Fried Chicken, 250 g Pack| Ready-To-Cook| Preservative Free",
    //     "rate": "₹140.00",
    //     "strike": "₹249.00",
    //     "off": "44% Off",
    //     "brought": "100+ bought in past week",
    //     "soldby": "Aripl_Yeshwanthpur IA ",
    //     "ingredientType": "Non-Vegetarian",
    //     "infoOne": "Preservative-free",
    //     "infoTwo": "Free from all growth hormones",
    //     "infoThree": "Antibiotic residue free",
    //     "weight": "250 grams",
    //     "brand": "FreshToHome",
    //     "ingredient": "Biodegradable, Fresh Poultry Product",
    //     "manufacturer": "Freshalicious Super Bazaar Private Limited",
    //     "netQuantity": "250 Grams",
    //     "dimension": "25.4 x 25.4 x 5.1 cm; 250 Grams",
    //     "asin": "B09ZF57B59",
    //     "review": "3.8",
    //     "date": "3 May 2022"
    // },
    // {
    //     "id": "5",
    //     "img": "https://images-eu.ssl-images-amazon.com/images/I/41HWegmjG5L.AC_SL240_.jpg",
    //     "title": "FreshToHome Antibiotic Residue Free Chicken Drumsticks, 380 g| Pack of 5| Skinless",
    //     "rate": "₹199.00",
    //     "strike": "₹299.00",
    //     "off": "33% Off",
    //     "brought": "700+ bought in past week",
    //     "soldby": "Aripl_Yeshwanthpur IA ",
    //     "ingredientType": "Non-Vegetarian",
    //     "infoOne": "Preservative-free",
    //     "infoTwo": "Free from all growth hormones",
    //     "infoThree": "Antibiotic residue free",
    //     "weight": "380 grams",
    //     "brand": "FreshToHome",
    //     "ingredient": "Biodegradable, Fresh Poultry Product",
    //     "manufacturer": "Freshalicious Super Bazaar Private Limited",
    //     "netQuantity": "380 Grams",
    //     "dimension": "25.4 x 25.4 x 5.1 cm; 380 Grams",
    //     "asin": "B0BH8ZGTND",
    //     "review": "5.0",
    //     "date": "4 October 2022"
    // }]
    const getProducts = () => {
        fetch("https://amazon-backend-orcin.vercel.app/chicken",
            { method: "GET" })
            .then((data) => data.json())
            .then((dts) => setChicken(dts))
    }
    useEffect(() => getProducts(), [])
    return (
        <div className="mangoes">
            <p className="mangoes-ptag">Chicken</p>
            <div className="mango-flex">
                {chicken.map((chicken, index, id) => <ChickenList chicken={chicken} key={index} id={id} />)}
            </div>
        </div>
    )
}



function ChickenList({ chicken, id }) {
    const navigate = useNavigate()
    return (
        <div className="mangolist" >
            <img src={chicken.img} alt={chicken.title} />
            <p className="mango-title" onClick={() => navigate(`/chicken/${chicken.id}`)}>{chicken.title} </p>
            <span className="mango-rate">₹ {chicken.rate}</span>
            <span className="strike">{chicken.strike}</span>
            <p className="offer">{chicken.off}</p>
        </div>
    )
}


export function ChickenCont() {
    const { id } = useParams()
    const [chicken, setChicken] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        fetch(`https://amazon-backend-orcin.vercel.app/chicken/${id}`)
            .then((data) => data.json())
            .then((dts) => setChicken(dts));
    }, [id]);
    const amount = parseInt(chicken.rate)
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
                <img className="features-image" src={chicken.img} alt={chicken.title} />
                <div>
                    <div className="features-content">
                        <p className="features-content-title">{chicken.title}</p>
                        <div className="features-height">

                            <p className="features-fresh">{chicken.manufacturer}</p>
                            <p className="features-rating">Rating : {chicken.review}</p>
                            <p>{chicken.brought}</p>
                        </div>

                    </div>
                    <div className="price-container">
                        <p>MRP :<span className="price-strike" > {chicken.strike}</span></p>
                        <p >Price : <span className="price">₹ {chicken.rate}</span></p>
                        <p >Offer : <span className="price">{chicken.off}</span></p>
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

                        <p>Sold by <span className="soldby-bold">{chicken.soldby}</span> and fulfilled by Amazon</p>
                        <div className="veg-container">
                            <div className="non-veg">
                                <div className="non-veg-circle"></div>
                            </div>
                            <p>This is a <span className="soldby-product">{chicken.ingredientType}</span> Product</p>
                            <button className="buy"
                                onClick={handleClick}
                            >Buy</button>
                        </div>
                    </div>
                    <div className="about">
                        <p className="about-title">About this item</p>
                        <ul>
                            <li>{chicken.infoOne}</li>
                            <li>{chicken.infoTwo}</li>
                            <li>{chicken.infoThree}</li>
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
                                <td className="row-head">Ingredient</td>
                                <td className="row-data">{chicken.ingredient}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Weight</td>
                                <td className="row-data">{chicken.weight}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Ingredient Type</td>
                                <td className="row-data">{chicken.ingredientType}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Brand</td>
                                <td className="row-data">{chicken.brand}</td>
                            </tr>

                            <tr>
                                <td className="row-head">Manufacturer</td>
                                <td className="row-data">{chicken.manufacturer}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Net Quantity</td>
                                <td className="row-data">{chicken.netQuantity}</td>
                            </tr>

                            <tr>
                                <td className="row-head">Package Dimensions</td>
                                <td className="row-data">{chicken.dimension}</td>
                            </tr>
                        </table>
                    </div>
                    <div className="additional-info">
                        <p>Additional Information</p>
                        <table>
                            <tr>
                                <td className="row-head">ASIN</td>
                                <td className="row-data">{chicken.asin}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Customer Reviews</td>
                                <td className="row-data">{chicken.review}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Date First Available</td>
                                <td className="row-data">{chicken.date}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Manufacturer</td>
                                <td className="row-data">{chicken.manufacturer}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Item Weight</td>
                                <td className="row-data">{chicken.weight}</td>
                            </tr>

                        </table>

                    </div>
                </div>
            </div>
        </div>

    )
}
function Mutton({ mutton, setMutton }) {
    // const mutton = [{
    //     "id": "1",
    //     "img": "https://images-eu.ssl-images-amazon.com/images/I/61oP+o9FM+L.AC_SL240_.jpg",
    //     "title": "FreshToHome Lamb Curry Cut | 480 g to 500 g Pack|Include Bones |Tender",
    //     "rate": "₹449.00",
    //     "strike": "₹599.00",
    //     "off": "25% Off",
    // "brought": "450+ bought in past week",
    // "soldby": "Aripl_Yeshwanthpur IA ",
    // "ingredientType": "Non-Vegetarian",
    // "infoOne": "Fresh, never frozen",
    // "infoTwo": "Free from all growth hormones",
    // "infoThree": "Antibiotic residue free",
    // "speciality": "Boneless,Frozen",
    // "weight": "300 grams",
    // "brand": "FreshToHome",
    // "ingredient": "Biodegradable, Fresh Poultry Product",
    // "manufacturer": "Freshalicious Super Bazaar Private Limited",
    // "netQuantity": "300 Grams",
    // "dimension": "25.4 x 25.4 x 5.1 cm; 300 Grams",
    // "asin": "B09Z9NZMFK",
    // "review": "4.0",
    // "date": "1 May 2022"
    // }, {
    //     "id": "2",
    //     "img": "https://images-eu.ssl-images-amazon.com/images/I/51HiAsbEeDL.AC_SL240_.jpg",
    //     "title": "URO Pork Smoked Ham 150g",
    //     "rate": "₹239.00 ",
    //     "strike": "₹290.00",
    //     "off": "18% Off",
    //     "brought": "200+ bought in past week",
    //     "soldby": "Aripl_Yeshwanthpur IA ",
    //     "ingredientType": "Non-Vegetarian",
    //     "infoOne": "Preservative-free",
    //     "infoTwo": "Free from all growth hormones",
    //     "infoThree": "Fully Cooked Pork Smoked Ham.",
    //     "speciality": "Smoked",
    //     "weight": "150 grams",
    //     "brand": "URO By Meatzza",
    //     "ingredient": "Boneless Pork Meat(70%), water, Iodized saltSoy Protein, Potato starch, Seasoning(Pepper, coriander, Nutmeg), Sequestrant INS-451(I), carrageenan, Sugar, Anti Oxidant INS-316, colour fixative INS-250, contains Added Natural Flavouring Substances.",
    //     "manufacturer": "Darshan foods pvt ltd",
    //     "netQuantity": "150 Grams",
    //     "dimension": "8 x 8 x 8 cm; 150 Grams",
    //     "asin": "B0BH8ZGTND",
    //     "review": "4.1",
    //     "date": "25 Apirl 2023"
    // },
    // {
    //     "id": "3",
    //     "img": "https://images-eu.ssl-images-amazon.com/images/I/51hXGnHAmhL.AC_SL240_.jpg",
    //     "title": "URO Premium Smoked Pork Bacon 150g",
    //     "rate": "₹329.00",
    //     "strike": "₹400.00",
    //     "off": "18% Off",
    //     "brought": "700+ bought in past week",
    //     "soldby": "Aripl_Yeshwanthpur IA ",
    //     "ingredientType": "Non-Vegetarian",
    //     "infoOne": "Preservative-free",
    //     "infoTwo": "Free from all growth hormones",
    //     "infoThree": "Antibiotic residue free",
    //     "speciality": "Smoked",
    //     "weight": "150 grams",
    //     "brand": "URO By Meatzza",
    //     "ingredient": "Boneless Pork Meat(70%), water, Iodized saltSoy Protein, Potato starch, Seasoning(Pepper, coriander, Nutmeg), Sequestrant INS-451(I), carrageenan, Sugar, Anti Oxidant INS-316, colour fixative INS-250, contains Added Natural Flavouring Substances.",
    //     "manufacturer": "Darshan foods pvt ltd",
    //     "netQuantity": "150 Grams",
    //     "dimension": "8 x 8 x 8 cm; 150 Grams",
    //     "asin": "B0C3HC8WV2",
    //     "review": "4.1",
    //     "date": "25 Apirl 2023"
    // }]
    const getProducts = () => {
        fetch("https://amazon-backend-orcin.vercel.app/mutton",
            { method: "GET" })
            .then((data) => data.json())
            .then((dts) => setMutton(dts))
    }
    useEffect(() => getProducts(), [])
    return (
        <div className="mangoes">
            <p className="mangoes-ptag">Mutton</p>
            <div className="mango-flex">
                {mutton.map((mutton, index, id) => <MuttonList mutton={mutton} key={index} id={id} />)}
            </div>
        </div>
    )
}



function MuttonList({ mutton, id }) {
    const navigate = useNavigate()
    return (
        <div className="mangolist" >
            <img src={mutton.img} alt={mutton.title} />
            <p className="mango-title" onClick={() => navigate(`/mutton/${mutton.id}`)}>{mutton.title} </p>
            <span className="mango-rate">₹ {mutton.rate}</span>
            <span className="strike">{mutton.strike}</span>
            <p className="offer">{mutton.off}</p>
        </div>
    )
}

export function MuttonCont() {
    const { id } = useParams()
    const [mutton, setMutton] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        fetch(`https://amazon-backend-orcin.vercel.app/mutton/${id}`)
            .then((data) => data.json())
            .then((dts) => setMutton(dts));
    }, [id]);
    const amount = parseInt(mutton.rate)
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
                <img className="features-image" src={mutton.img} alt={mutton.title} />
                <div>
                    <div className="features-content">
                        <p className="features-content-title">{mutton.title}</p>
                        <div className="features-height">

                            <p className="features-fresh">{mutton.manufacturer}</p>
                            <p className="features-rating">Rating : {mutton.review}</p>
                            <p>{mutton.brought}</p>
                        </div>

                    </div>
                    <div className="price-container">
                        <p>MRP :<span className="price-strike" > {mutton.strike}</span></p>
                        <p >Price : <span className="price">₹ {mutton.rate}</span></p>
                        <p >Offer : <span className="price">{mutton.off}</span></p>
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

                        <p>Sold by <span className="soldby-bold">{mutton.soldby}</span> and fulfilled by Amazon</p>
                        <div className="veg-container">
                            <div className="non-veg">
                                <div className="non-veg-circle"></div>
                            </div>
                            <p>This is a <span className="soldby-product">{mutton.ingredientType}</span> Product</p>
                            <button className="buy"
                                onClick={handleClick}
                            >Buy</button>
                        </div>
                    </div>
                    <div className="about">
                        <p className="about-title">About this item</p>
                        <ul>
                            <li>{mutton.infoOne}</li>
                            <li>{mutton.infoTwo}</li>
                            <li>{mutton.infoThree}</li>
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
                                <td className="row-data">{mutton.speciality}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Ingredient</td>
                                <td className="row-data">{mutton.ingredient}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Weight</td>
                                <td className="row-data">{mutton.weight}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Ingredient Type</td>
                                <td className="row-data">{mutton.ingredientType}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Brand</td>
                                <td className="row-data">{mutton.brand}</td>
                            </tr>

                            <tr>
                                <td className="row-head">Manufacturer</td>
                                <td className="row-data">{mutton.manufacturer}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Net Quantity</td>
                                <td className="row-data">{mutton.netQuantity}</td>
                            </tr>

                            <tr>
                                <td className="row-head">Package Dimensions</td>
                                <td className="row-data">{mutton.dimension}</td>
                            </tr>
                        </table>
                    </div>
                    <div className="additional-info">
                        <p>Additional Information</p>
                        <table>
                            <tr>
                                <td className="row-head">ASIN</td>
                                <td className="row-data">{mutton.asin}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Customer Reviews</td>
                                <td className="row-data">{mutton.review}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Date First Available</td>
                                <td className="row-data">{mutton.date}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Manufacturer</td>
                                <td className="row-data">{mutton.manufacturer}</td>
                            </tr>
                            <tr>
                                <td className="row-head">Item Weight</td>
                                <td className="row-data">{mutton.weight}</td>
                            </tr>

                        </table>

                    </div>
                </div>
            </div>
        </div>

    )
}
