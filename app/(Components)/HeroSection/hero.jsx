import React from 'react'
import Link from 'next/link'
import CardSection from '../Card/Card'
export default function HeroSection() {
  return (
    <>
      <section id='home'className='relative hero w-full flex xl:flex-row flex-col justify-center min-h-screen border-4 border-red-500 p-2'>
       
       <CardSection/>
      </section>
    </>
  )
}
