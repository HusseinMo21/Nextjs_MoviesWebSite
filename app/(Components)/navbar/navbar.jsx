import React from 'react'
import logo from '../../assests/logo.jpg'
import Image from 'next/image'
// import Hambo from '../../assests/icons8-hamburger.svg'
import Link from 'next/link'
export default function Navbar() {
  return (
    <>
    <header className='bg-black text-white padding-x py-3 absolute z-20 w-full' >
        <nav className='flex justify-between items-center'>
            <Link href="">
                <Image src={logo} className='w-14 mx-10' alt="" />
            </Link>
            <ul className='flex flex-1 justify-end items-start gap-10 px-10 max-lg:hidden'>
              <li><Link href="/">HOME</Link></li>
              <li><Link href="News">NEWS</Link></li>
              <li><Link href="Pouplar">POPULAR MOVIES</Link></li>
              <li><Link href="ComingSoon">COMING SOON</Link></li>
            </ul>
            <div className="mx-5 hidden max-lg:block max-lg:mx-8 cursor-pointer">
            {/* <Image src={Hambo} width={25} height={25} alt="" /> */}
            </div>
           
        </nav>
        <div className="mx-7 relative text-white  justify-start items-start w-svw x pt-10">
        <ul className='flex gap-20'>
              {/* <li><Link  href="">TOP RATED</Link></li>
              <li><Link  href="">TOP Movies</Link></li> */}
              <li><Link  href="TopBox">TOP BOX OFFICE</Link></li>
           
            </ul>
           
        </div>
    </header>
    </>
  )
}
