'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import {Menu, Home, LogIn,UserPlus, Laptop, Smartphone, Cable, Headphones, ChevronDown, Zap, TabletIcon, X} from 'lucide-react'

const Header = () => {
    const [isActive, setIsActive] = useState('/')
    const [isDropDownOpen, setIsDropDownOpen] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const toggleDropDownState = () => setIsDropDownOpen(!isDropDownOpen)
    return (
        <header className=' shadow-md py-4'>
            <nav className='flex flex-col md:flex-row gap-8 justify-between items-center px-10'>
                <div className='left flex items-center justify-between  w-full'>
                    <div>
                        <Link href={'/'} onClick={
                            () => setIsActive('/')
                        } className='flex items-center gap-1.5'>
                            <div className='bg-gradient-to-r from-blue-700 to-gray-800 p-1.5 rounded-lg'>
                                <Zap className='text-white' />
                            </div>
                            <span className='text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-blue-700'>TechHub</span>
                        </Link>
                    </div>
                    <div onClick={() => setIsMenuOpen(!isMenuOpen)} className=' md:hidden cursor-pointer'>
                        {isMenuOpen ? <X size={35} className='text-gray-700'/> : 
                            <Menu className='text-gray-700' size={35} />}
                    </div>
                </div>

                <div className={`right md:flex flex-col md:flex-row items-center gap-5  ${isMenuOpen ? '' : 'hidden'} `}>
                    <div className={` ${isActive === '/' ? 'bg-gradient-to-r from-blue-600 to-blue-700 shadow-md' : ''} rounded-lg `}>
                        <Link href={'/'} onClick={
                            () => setIsActive('/')
                        } className={`text-md font-bold flex gap-1 p-2  ${isActive === '/' ? 'text-white' : ''}`}>
                            <div>
                                <Home size = {20} />
                            </div>
                            Home
                        </Link>
                    </div>
                    <div className={` ${isActive === 'products' ? 'bg-gradient-to-r from-blue-600 to-blue-700 shadow-md' : ''} rounded-lg `}>
                        <Link href={'/products'} onClick={
                            () => setIsActive('products')
                        } className={`text-md font-bold flex gap-1 p-2  ${isActive === 'products' ? 'text-white' : ''}`}>
                            <div>
                            </div>
                            Products
                        </Link>
                    </div>
                    <div onMouseEnter={() =>setIsDropDownOpen(true)}
                        onMouseLeave={() =>setIsDropDownOpen(false)}  
                        className={` ${isActive === 'categories' ? 'bg-gradient-to-r from-blue-600 to-blue-700 shadow-md text-white' : ''} rounded-lg relative`}>
                        <button onClick={toggleDropDownState}
                        className= {`flex text-md font-bold p-2   cursor-pointer ${isActive === 'categories' ? 'text-white' : ''}`}>
                            Categories <ChevronDown className={`transition-transform duration-200 ${isDropDownOpen ? 'rotate-180' : ''}`}/>
                        </button>
                        {isDropDownOpen && (
                        <ul className={`flex flex-col gap-2.5 p-3 rounded-lg absolute bg-white shadow-sm`}>
                            <li onClick={() => setIsActive('categories')}>
                                <Link href={'/phones'} onClick={() => setIsActive('category')} className='flex items-center text-black  hover:text-blue-600 cursor-pointer gap-1'>
                                    <Smartphone size = {18} />
                                    SmartPhone
                                </Link>
                            </li>

                            <li onClick={() => setIsActive('categories')}>
                                <Link href={'/laptops'} onClick={() => setIsActive('category')} className='flex items-center text-black  hover:text-blue-600 cursor-pointer gap-1'>
                                    <Laptop size = {18} />
                                    Laptops
                                </Link>
                            </li>
                            <li onClick={() => setIsActive('categories')}>
                                <Link href={'/tablets'} className='flex  items-center text-black hover:text-blue-600  cursor-pointer gap-1'>
                                <TabletIcon size = {18} />
                                Tablets
                                </Link>
                            </li>
                            <li onClick={() => setIsActive('categories')}>
                                <Link href={'/accessories'} className='flex  items-center text-black hover:text-blue-600  cursor-pointer gap-1'>
                                <Cable size = {18} />
                                Accessories
                                </Link>
                            </li>
                        </ul>
                        )}
                    </div>
                    <div className={` ${isActive === 'login' ? 'bg-gradient-to-r from-blue-600 to-blue-700 shadow-md' : ''} rounded-lg `}>
                        <Link href={'/login'} onClick={
                            () => setIsActive('login')
                        } className={`text-md font-bold flex gap-1 p-2 items-center  ${isActive === 'login' ? 'text-white' : ''}`}>
                            <div>
                                <LogIn size = {18} />
                            </div>
                            LogIn
                        </Link>
                    </div>
                    <div className={` ${isActive === 'register' ? 'bg-gradient-to-r from-blue-600 to-blue-700 shadow-md' : ''} rounded-lg `}>
                        <Link href={'/register'} onClick={
                            () => setIsActive('register')
                        } className={`text-md font-bold flex gap-1 p-2 items-center  ${isActive === 'register' ? 'text-white' : ''}`}>
                            <div>
                                <UserPlus size={18} />
                            </div>
                            Register
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header