import React from 'react'
import { useLocation ,useNavigate} from 'react-router';
import svg from '../assets/logo.svg';
const Header = () => {
  const location=useLocation();
  const navigate=useNavigate();

  console.log(location.pathname);

  const pathMathRoute=(route)=>{
    if(route === location.pathname){
      return true;
    }
  }
  return (
    <div className='bg-white border-b shadow-md sticky top z-50'>
      <header className=' px-3 max-w-6xl mx-auto'>
        <div className="flex"><img src={svg} alt="realtor-logo" className='h-5 cursor-pointer' onClick={()=>navigate("/")}/>
        </div>
        <div className='nav-items'>
          <ul className='flex space-x-10 '>
            <li className={`cursor-pointer py-3 text-md font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMathRoute("/") && "text-black border-b-red-500"}`}onClick={()=>navigate("/")}>Home</li>

            <li className={`cursor-pointer py-3 text-md font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMathRoute("/offers") && "text-black border-b-red-500"}`}onClick={()=>navigate("/offers")}>Offers</li>
            
            <li className={`cursor-pointer py-3 text-md font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMathRoute("/sign-in") && "text-black border-b-red-500"}`} onClick={()=>navigate("/sign-in")}>Sign In</li>
          </ul>
        </div>
      </header>
    </div>
  )
}

export default Header