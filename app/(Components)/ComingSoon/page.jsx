import React from 'react'

export default async function ComingSoon() {
  const url = 'https://moviesverse1.p.rapidapi.com/upcoming-movies';
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
    <>
       <section className='bg-slate-800 grid grid-cols-6 gap-4 relative justify-start items-start w-full text-3xl mt-32'>
    {data.map((item, index) => (
     <div key={index} className="card">
   
   <div className="card-img relative">
     <img src={item.list[0].image} width={200} height={"200px"} className='w-full' alt="" />
    
   </div>
   <div className='text-sm flex flex-col p-1'>
     <div>Realase Date: <span className='text-sm'>{item.date}</span></div>
     <div className="flex text-sm text-pink-400">
       <p className='mt-2 mb-2'>{item.list[0].title}</p>

       </div>
   </div>
     </div>
     ))}
        </section>   
   
    </>
  )
}
