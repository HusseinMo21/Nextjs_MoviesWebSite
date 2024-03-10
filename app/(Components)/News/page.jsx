import React from 'react'
import logo from '../../assests/logo.jpg'
import Image from 'next/image'
import Link from 'next/link';
export default async function News() {
const url = 'https://moviesverse1.p.rapidapi.com/get-movie-news';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '59ce7549f1msh1bf76645d09c620p17b35fjsnc0704afee4f9',
      'X-RapidAPI-Host': 'moviesverse1.p.rapidapi.com'
    }
  };
  async function fetchData() {
    await new Promise((resolve) => setTimeout(resolve, 3500));
    const res = await fetch(url, options);
    const {news} = await res.json();
    console.log(news);
    return news
  }

  const data = await fetchData()  


  return (
    <section className='grid grid-cols-5 grid-cols-6-xl sm:grid-cols-2 md:grid-cols-5 px-3 gap-4 relative justify-start items-start w-full text-3xl mt-30 pt-40 bg-slate-800'>
{data?.map((item, index) => (
  <div key={index}  className="cardL h-96">
         <div className="card-img relative p-6 text-center">
           <img src={item.image} width={200} className='object-cover h-52' alt="" />
           <div className="flex flex-col text-base text-pink-400">
       <p className='mt-2 mb-2'>{item.title.split(' ').slice(0, 2).join(' ')}</p>
         <p className='mt-2 mb-2'>{item.description.split(' ').slice(0, 4).join(' ')}</p>
         <Link href={item.link} target='_blank'><button className='text-red-900 font-mono font-bold text-xl mt-5 absolute bottom-1/5 left-1/4'>Read More <i className="fa-solid fa-arrow-right"></i></button></Link>
       </div>
         </div>
    
           </div>
           
           
))}

  
    </section>
  )
}
