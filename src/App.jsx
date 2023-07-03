import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from '@mui/material/Button';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import { Routes, Route, useNavigate } from "react-router-dom";
import { Fruits, Fruit, Vegetable } from './Fruits';
import { Rice, RiceCont, DalCont, AttaCont } from './Rice';
import { Oil, OilCont, MasalaCont, SauceCont } from './Oil';
import { Tea, TeaCont, CoffeeCont } from './Tea';
import { Eggs, EggCont, FishCont, ChickenCont, MuttonCont } from './Eggs';
import { Drinks, DrinksCont, JuiceCont } from './Drinks';
import { Login, Signin } from './Login';
import { ForgetPassword } from "./forgetPassword"
import { VerifyOtp } from './verifyOtp';
import { VerifyEmail } from './VerifyEmail';


export default function App() {
  const [category, setCategory] = useState([])
  const [mango, setMango] = useState([])
  const [vegetable, setVegetable] = useState([])
  const [dal, setDal] = useState([])
  const [rice, setRice] = useState([])
  const [atta, setAtta] = useState([])
  const [oil, setOil] = useState([])
  const [masala, setMasala] = useState([])
  const [sauce, setSauce] = useState([])
  const [egg, setEgg] = useState([])
  const [fish, setFish] = useState([])
  const [chicken, setChicken] = useState([])
  const [mutton, setMutton] = useState([])
  const [drink, setDrink] = useState([])
  const [juice, setJuice] = useState([])
  const [tea, setTea] = useState([])
  const [coffee, setCoffee] = useState([])
  return (
    <div ClassName="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/verifyotp" element={<VerifyOtp />} />
        <Route path="/dashboard" element={<ProtectedRoute><Categories category={category} setCategory={setCategory} /></ProtectedRoute>} />
        <Route path="/fruits" element={<ProtectedRoute><Fruits mango={mango} setMango={setMango} vegetable={vegetable} setVegetable={setVegetable} /></ProtectedRoute>} />
        <Route path="/fruits/:id" element={<ProtectedRoute><Fruit /></ProtectedRoute>} />
        <Route path="/vegetables/:id" element={<ProtectedRoute><Vegetable /></ProtectedRoute>} />
        <Route path="/rice" element={<ProtectedRoute><Rice dal={dal} setDal={setDal} rice={rice} setRice={setRice} atta={atta} setAtta={setAtta} /></ProtectedRoute>} />
        <Route path="/rice/:id" element={<ProtectedRoute><RiceCont /></ProtectedRoute>} />
        <Route path="/dal/:id" element={<ProtectedRoute><DalCont /></ProtectedRoute>} />
        <Route path="/atta/:id" element={<ProtectedRoute><AttaCont /></ProtectedRoute>} />
        <Route path="/oil" element={<ProtectedRoute><Oil oil={oil} setOil={setOil} masala={masala} setMasala={setMasala} sauce={sauce} setSauce={setSauce} /></ProtectedRoute>} />
        <Route path="/oil/:id" element={<ProtectedRoute><OilCont /></ProtectedRoute>} />
        <Route path="/masala/:id" element={<ProtectedRoute><MasalaCont /></ProtectedRoute>} />
        <Route path="/sauce/:id" element={<ProtectedRoute><SauceCont /></ProtectedRoute>} />
        <Route path="/egg" element={<ProtectedRoute><Eggs egg={egg} setEgg={setEgg} fish={fish} setFish={setFish} chicken={chicken} setChicken={setChicken} mutton={mutton} setMutton={setMutton} /></ProtectedRoute>} />
        <Route path="/egg/:id" element={<ProtectedRoute><EggCont /></ProtectedRoute>} />
        <Route path="/fish/:id" element={<ProtectedRoute><FishCont /></ProtectedRoute>} />
        <Route path="/chicken/:id" element={<ProtectedRoute><ChickenCont /></ProtectedRoute>} />
        <Route path="/mutton/:id" element={<ProtectedRoute><MuttonCont /></ProtectedRoute>} />
        {/* <Route path="/household" element={<ProtectedRoute><Household /></ProtectedRoute>} /> */}
        <Route path="/tea" element={<ProtectedRoute><Tea tea={tea} setTea={setTea} coffee={coffee} setCoffee={setCoffee} /></ProtectedRoute>} />
        <Route path="/tea/:id" element={<ProtectedRoute><TeaCont /></ProtectedRoute>} />
        <Route path="/coffee/:id" element={<ProtectedRoute><CoffeeCont /></ProtectedRoute>} />
        <Route path="/drinks" element={<ProtectedRoute><Drinks drink={drink} setDrink={setDrink} juice={juice} setJuice={setJuice} /></ProtectedRoute>} />
        <Route path="/drinks/:id" element={<ProtectedRoute>  <DrinksCont /></ProtectedRoute>} />
        <Route path="/juice/:id" element={<ProtectedRoute>  <JuiceCont /> </ProtectedRoute>} />
        <Route path="/verifyEmail" element={<ProtectedRoute><VerifyEmail /></ProtectedRoute>} />

      </Routes>
    </div>

  )
}

function ProtectedRoute({ children }) {
  const token = localStorage.getItem('token');
  // const token=false;
  return (
    token ? <section>{children}</section> : <Navigate replace to="/" />
    //  token? <section>{children}</section>:<h1>unautharaied</h1>
  )
}

function Navbar() {
  const navigate = useNavigate()
  // const [logout, setLogout] = useState(false)
  // const history = useHistory()

  // useEffect(() => {
  //   if (!localStorage.getItem("token"))
  //     history.push("/login")
  // }, [logout])

  const handleClick = () => {
    localStorage.removeItem('token');
    // setLogout(true)
    console.log("logout")
    navigate("/login")
  }
  return (
    <div className="navbar">
      <div className="navbar-top">
        <img src="data:image/png;base64,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" alt="amazon-logo" />
        {
          localStorage.getItem("token") == null ? null : (
            <div class="dropdown">
              <Button sx={{ m: 1 }} color="inherit"> <PersonSharpIcon /></Button>
              <div class="dropdown-content">
                <a onClick={handleClick}>Logout</a>
              </div>
            </div>
          )
        }
      </div>
      <div className="navbar-items">
        <p className="navbar-bold" onClick={() => navigate("/dashboard")}>fresh</p>

        <p className="navbar-ptag" onClick={() => navigate("/fruits")}>Fruits & Vegetables</p>
        <p className="navbar-ptag" onClick={() => navigate("/rice")}>Rice,Atta & Dal</p>
        <p className="navbar-ptag" onClick={() => navigate("/oil")}>Oil,Masala & Sauces</p>
        <p className="navbar-ptag" onClick={() => navigate("/egg")}>Egg,Meat & Fish</p>
        <p className="navbar-ptag" onClick={() => navigate("/drinks")}>Drinks & Juices</p>
        <p className="navbar-ptag" onClick={() => navigate("/tea")}>Tea & Coffee</p>
      </div>
    </div>
  )
}

function Categories({ category, setCategory }) {
  // const category = [
  //   {
  //     "img": "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fresh/June/SBC/PC/Fruits__vegetables-1.jpg",
  //     "item": "Fruits & Vegetables",
  //     "navigate": "fruits"
  //   },
  //   {
  //     "img": "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fresh/June/SBC/PC/Rice_Atta__Dal.jpg",
  //     "item": "Rice,Atta & Dal",
  //     "navigate": "rice"
  //   },
  //   {
  //     "img": "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fresh/June/SBC/PC/Oil_Masala__Sauces.jpg",
  //     "item": "Oil,Masala & Sauces",
  //     "navigate": "oil"
  //   },
  //   // {
  //   //   "img": "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fresh/June/SBC/PC/Breakfast_Food_.jpg",
  //   //   "item": "Breakfast Food",
  //   //   "navigate": "brekfast"
  //   // },
  //   // {
  //   //   "img": "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fresh/June/SBC/PC/Snacks__Biscuits.jpg",
  //   //   "item": "Snacks & Biscuits",
  //   //   "navigate": "snacks"
  //   // },
  //   // {
  //   //   "img": "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fresh/June/SBC/PC/Instant_Food.jpg",
  //   //   "item": "Instant Food",
  //   //   "navigate": "instantfood"
  //   // }, {
  //   //   "img": "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fresh/June/SBC/PC/Dairy__Bread.jpg",
  //   //   "item": "Dairy & Breed",
  //   //   "navigate": "dairy"
  //   // },

  //   // {
  //   //   "img": "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fresh/June/SBC/PC/Chocolates__Icecreams.jpg",
  //   //   "item": "Chocolates & Icecreams",
  //   //   "navigate": "chocolate"
  //   // },
  //   {
  //     "img": "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fresh/June/SBC/PC/Eggs_Meat__Fish.jpg",
  //     "item": "Eggs,Meat & Fish",
  //     "navigate": "egg"
  //   },
  //   {
  //     "img": "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fresh/June/SBC/PC/Drinks__Juices.jpg",
  //     "item": "Drinks & Juices",
  //     "navigate": "drinks"
  //   },
  //   {
  //     "img": "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fresh/June/SBC/PC/Tea__Coffee.jpg",
  //     "item": "Tea & Coffee",
  //     "navigate": "tea"
  //   },
  //   // {
  //   //   "img": "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fresh/June/SBC/PC/Health__Nutrition.jpg",
  //   //   "item": "Health & Nutrition",
  //   //   "navigate": "health"
  //   // }
  // ]
  const getProducts = () => {
    fetch("https://amazon-backend-orcin.vercel.app/dashboard",
      { method: "GET" })
      .then((data) => data.json())
      .then((dts) => setCategory(dts))
  }
  useEffect(() => getProducts(), [])
  return (
    <div className="category">

      {category.map((ctg, index) => <CategoryList category={ctg} key={index} />)}
    </div>
  )
}

function CategoryList({ category }) {
  const navigate = useNavigate()
  return (
    <div className="category-list" >
      <img src={category.img} alt={category.item} onClick={() => navigate(`/${category.navigate}`)} />
    </div>
  )
}



