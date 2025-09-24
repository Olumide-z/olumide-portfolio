import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'


import MobileNav from './MobileNav'
import Nav from './Nav'

const Header = () => {
  return (
   <header className='py-8 xl:py-12 text-white relative z-[100]'>
    <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href='/'>
            <h1 className='text-3xl font-semibold'>
                Olumide<span className='text-[var(--color-accent)]'>.</span>
            </h1>
        </Link>


        {/* Desktop App */}
        <div className='hidden xl:flex items-center gap-8'>
            <Nav />
            <Link href='/contact'>
            <Button>Hire me</Button>
            </Link>
        </div>
        
        {/* mobile nav */}
        <div className='xl:hidden z-[1000]'>
            <MobileNav/>
        </div>

    </div>
   </header>
  )
}

export default Header
