'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import styles from './header.module.css'
const Header = () => {
    const [active, setActive] = useState('Home')
    const [dropDown, setDropDown] = useState(false)
    const toggleDropDown = () => {setDropDown(!dropDown)}
    return (
        <header className='p-3 px-20 shadow-lg fixed top-0 w-full z-50 bg-white '>
            <nav className='container-fluid flex justify-between items-center'>
                <div className='left-nav flex gap-40'>
                    <div className='flex justify-center items-center'>
                        <Link onClick={() => {
                                setActive('Home')
                                setDropDown(false)
                            }}  href={'/'} className='flex items-center justify-center gap-1 text-2xl font-semibold'>
                            <FaCartShopping className='text-green-600'/>
                            <span className={styles.logo}>FreshCart</span>
                            </Link>
                    </div>
                    <div className='flex gap-15 justify-center items-center'>
                        <div>
                            <Link href={'/'} onClick={() => {
                                setActive('Home')
                                setDropDown(false)
                            }}
                            className={`px-4 py-2 rounded-lg text-xl ${active === 'Home' ? 'bg-green-600 text-white shadow-md' : ''}`}>Home</Link>
                        </div>
                        <div>
                            <Link href={'/products'} onClick={() => {
                                setActive('products')
                                setDropDown(false)
                            }} 
                                className={`px-4 py-2 rounded-lg text-xl ${active === 'products' ? 'bg-green-600 text-white shadow-md' : ''}`}>Products</Link>
                        </div>
                        <div className='relative'>
                            <button onClick={toggleDropDown} className={`pointer px-4 py-2 rounded-lg text-xl ${active === 'categories' ? 'bg-green-600 text-white shadow-md' : ''}`}>Categories</button>
                            {dropDown && (
                                <div className='absolute top-10 p-3.5 bg-white shadow-sm w-40 rounded-lg'>
                                    <ul className='flex flex-col gap-2'>
                                        <li  onClick={() => {
                                            setActive('categories')
                                            setDropDown(false)
                                            }} className='hover:bg-gray-100 px-2 py-1 rounded-md'><Link href={'/phones'}>Smart Phones</Link></li>
                                        <li  onClick={() => {
                                            setActive('categories')
                                            setDropDown(false)
                                            }} className='hover:bg-gray-100 px-2 py-1 rounded-md'><Link href={'/laptops'}>Laptops</Link></li>
                                        <li  onClick={() => {
                                            setActive('categories')
                                            setDropDown(false)
                                            }} className='hover:bg-gray-100 px-2 py-1 rounded-md'><Link href={'/tablets'}>Tablets</Link></li>
                                    </ul>
                                </div>
                            )}
                        </div>
                        <div>
                        <Link href={'/contact'} onClick={() => {
                                setActive('contact')
                                setDropDown(false)
                            }} 
                                className={`px-4 py-2 rounded-lg text-xl ${active === 'contact' ? 'bg-green-600 text-white shadow-md' : ''}`}>ContactUs</Link>
                        </div>
                    </div>
                </div>
                <div className='right-nav flex gap-4 justify-between items-center'>
                    <div>
                        <Link onClick={() => {
                            setActive('login')
                            setDropDown(false)
                        }
                    }  href={'/login'}
                        className={`px-4 py-2 rounded-lg text-xl ${active === 'login' ? 'bg-green-600 text-white shadow-md' : ''}`}>Login</Link>
                    </div>
                    <div className=''>
                        <Link href={'/register'} onClick={() => {
                            setActive('register')
                            setDropDown(false)
                        }}
                        className={`px-4 py-2 rounded-lg text-xl ${active === 'register' ? 'bg-green-600 text-white shadow-md' : ''}`}>Register</Link>
                        
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header