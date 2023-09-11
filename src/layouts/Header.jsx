import CarritoCompra from '../components/CarritoCompra';
import "../layouts/css/Header.css"
const Header = () => {
  return (
    <div className=''>
        <div className='flex flex-row items-center justify-between'>
          <div className='flex items-center gap-10'>
            <img src="\src\assets\logo.png" className='h-[50px]' />
            <ul className='flex flex-row '>
                <li  className='hover:scale-110 navspace cursor-pointer transition-all 
                hover:bg-red-700 px-3 py-1 pb-2 rounded-full text-black hover:text-white'>Peliculas</li>
                <li className='hover:scale-110 navspace cursor-pointer transition-all 
                hover:bg-red-700 px-3 py-1 pb-2 rounded-full text-black hover:text-white'>Series</li>
                <li className='hover:scale-110 navspace cursor-pointer transition-all 
                hover:bg-red-700 px-3 py-1 pb-2 rounded-full text-black hover:text-white'>Kids</li>  
            </ul>
            </div>
            <div className='flex flex-row items-center justify-between'>
                <CarritoCompra />
                <img src="\src\assets\userimage.png" className="w-[40px] rounded-full m-5 invisible md:visible lg:visible" />
            </div>
        </div>
    </div>
  )
}

export default Header