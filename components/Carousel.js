
export const Carousel = () => {
  return (
    
<div id="default-carousel" className="relative" data-carousel="static">

<div className="overflow-hidden relative h-44 rounded-lg sm:h-64 xl:h-80 2xl:h-128">

<div className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20" data-carousel-item="">
<span className="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">First Slide</span>
<img src="Group 811.png" className="block absolute top-1/2 left-1/2  w-full  -translate-x-1/2 -translate-y-1/2" />
</div>

<div className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full z-10" data-carousel-item="">
<img src="Group 811.png" className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" />
</div>

<div className="duration-700 ease-in-out absolute inset-0 transition-all transform -translate-x-full z-10" data-carousel-item="">
<img src="Group 811.png" className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" />
</div>
</div>

<div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
<button type="button" className="w-3 h-3 rounded-full bg-white dark:bg-ling-greed" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
<button type="button" className="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-ling-greed " aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
<button type="button" className="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-ling-greed " aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
</div>

<button type="button" className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev="">
<span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30  group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
<svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" ><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
<span className="hidden">Previous</span>
</span>
</button>
<button type="button" className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next="">
<span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30  group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
<svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
<span className="hidden">Next</span>
</span>
</button>
</div>



  )
}

export default Carousel
