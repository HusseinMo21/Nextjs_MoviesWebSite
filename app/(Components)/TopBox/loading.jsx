
import React from 'react'
export default function Loading() {
  return (
    <section className='bg-black relative justify-start items-start w-full h-screen text-9xl text-center mt-25 pt-20'>
    <div class="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2">
    <div class="p-4 bg-gradient-to-tr animate-spin from-green-500 to-blue-500 via-purple-500 rounded-full">
        <div class="bg-white rounded-full">
            <div class="w-24 h-24 rounded-full"></div>
        </div>
    </div>
</div>
    </section>
  )
}
