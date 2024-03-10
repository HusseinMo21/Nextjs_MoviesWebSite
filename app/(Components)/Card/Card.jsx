
import React from 'react'
import Link from 'next/link'
export default async function CardSection() {

const url = 'https://moviesverse1.p.rapidapi.com/get-trending-trailers';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '59ce7549f1msh1bf76645d09c620p17b35fjsnc0704afee4f9',
		'X-RapidAPI-Host': 'moviesverse1.p.rapidapi.com'
	}
};
async function fetchData() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(url, options);
  const {trailers} = await response.json();
  console.log(trailers);
  return trailers
}

const data = await fetchData()
  return(<>
  <section className=' grid grid-cols-6-xl sm:grid-cols-2 md:grid-cols-6 gap-4 relative justify-start items-start w-full text-3xl mt-32'>
    {data?.map((item, index) => (
     <div key={index} className="card">
     <div className="layer cursor-pointer">
         <p className='text-red-900 font-mono font-bold text-xl mb-5'>Play Trailer</p>

    <Link href={item.videoLink} target='_blank'><i className="fa-solid fa-play"></i></Link> 

     <p className='text-red-900 font-mono font-bold text-xl mt-5'>{item.title}</p>
     </div>
   <div className="card-img relative">
     <img src={item.image} width={200} height={"100%"} className='w-full' alt="" />
    
   </div>
   <div className='text-sm flex flex-col p-1'>
     <div>RDate:<span className='mx-5 text-sm'>{item.releaseDate}</span></div>
   </div>
     </div>
     ))}
        </section> 
    </>
  )
}
{/* <div key={index} className="card">
           <div className="layer cursor-pointer">
               <p className='text-red-900 font-mono font-bold text-xl mb-5'>Play Trailer</p>
           <i className="fa-solid fa-play"></i>
   
           <p className='text-red-900 font-mono font-bold text-xl mt-5'>X-Men</p>
           </div>
         <div className="card-img relative">
           <Image src={logo} className='w-full' alt="" />
          
         </div>
         <div className='text-sm flex justify-between p-1'>
           <div>RATING<span className='text-sm'><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i></span></div>
           <p>12<i class="fa-solid fa-comment"></i></p>
         </div>
           </div>
            */}