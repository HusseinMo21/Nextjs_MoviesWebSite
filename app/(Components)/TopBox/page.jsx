import React from 'react'
import Link from 'next/link';
export default async function TopBox() {


  const url = 'https://moviesverse1.p.rapidapi.com/top-box-office';
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
    const {movies} = await res.json();
    return movies
  }

  const data = await fetchData()  



  return (
    <section className='grid grid-cols-5 grid-cols-6-xl sm:grid-cols-2 md:grid-cols-5 px-3 gap-4 relative justify-start items-start w-full text-3xl mt-30 pt-40 bg-slate-800'>
{data?.map((item, index) => (
  <div key={index}  className="cardL h-96">
         <div className="card-img relative p-6 text-center">
           <img src={item.posterImage} width={200} className='object-cover h-52' alt="" />
           <div className="flex flex-col text-base text-pink-400">
       <p className='mt-2 mb-2'>{item.title}</p>
         <p className='mt-2 mb-2'>totalGross : {item.totalGross}</p>
       </div>
         </div>
    
           </div>
           
           
))}

  
    </section>
  )
}