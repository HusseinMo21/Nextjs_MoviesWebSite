import React from 'react'
import Link from 'next/link'
export default async function Pouplar() {

  const url = 'https://moviesverse1.p.rapidapi.com/most-popular-movies';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '59ce7549f1msh1bf76645d09c620p17b35fjsnc0704afee4f9',
      'X-RapidAPI-Host': 'moviesverse1.p.rapidapi.com'
    }
  };
  async function fetchData() {
    await new Promise((resolve) => setTimeout(resolve, 3500));
    const response = await fetch(url, options);
    const {movies} = await response.json();
    return movies
  }
  
  const data = await fetchData()






  return (
    
        <section className='bg-slate-800 grid grid-cols-6 grid-cols-6-xl sm:grid-cols-2 md:grid-cols-6 gap-4 relative justify-start items-start w-full text-3xl mt-32'>
    {data.map((item, index) => (
     <div key={index} className="card">
   
   <div className="card-img relative">
     <img src={item.image} width={200} height={"100%"} className='w-full' alt="" />
    
   </div>
   <div className='text-sm flex flex-col p-1'>
     <div>Realase Date: <span className='text-sm'>{item.year}</span></div>
     <div className="flex text-sm text-pink-400">
       <p className='mt-2 mb-2'>{item.title.split(' ').slice(0, 5).join(' ')}</p>

       </div>
   </div>
     </div>
     ))}
        </section>   
   
  )
}
