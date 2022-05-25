import Carousel from 'carousel-react-rcdev'
import styles from '../styles/Home.module.css'

const ProductCarousel = () => {
    return (
        <div >
            <div className={styles.container_f + " flex items-center justify-between  lg:m-10 md:m-6 sm:m-3 mt-6 "}>
                <div className='text-lg font-bold'>All Categories</div>
                <div><a href='#' className={styles.custom_a}>Show All &gt; &gt; </a></div>
            </div>

            <div className={styles.container_f + " flex items-center justify-center lg:m-10 md:m-6 sm:m-3 mt-6 "}>

                <Carousel max_width={2400}>
                    <div  className="min-w-[200px] h-[250px] mr-5 border-slate-100 rounded-[30px] border-4 hover:border-[#8dbd8d]  ">
                        <div className='flex justify-center  mt-5'>
                        <img  src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
                        </div>
                        <span className='flex  justify-center  mt-5 '>
                        Categorie Name 1
                        </span>
                    </div>
                    <div  className="min-w-[200px] h-[250px] mr-5 border-slate-100 rounded-[30px] border-4 hover:border-[#8dbd8d]  ">
                        <div className='flex justify-center  mt-5'>
                        <img  src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
                        </div>
                        <span className='flex  justify-center  mt-5 '>
                        Categorie Name 2
                        </span>
                    </div>
                    <div  className="min-w-[200px] h-[250px] mr-5 border-slate-100 rounded-[30px] border-4 hover:border-[#8dbd8d]  ">
                        <div className='flex justify-center  mt-5'>
                        <img  src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
                        </div>
                        <span className='flex  justify-center  mt-5 '>
                        Categorie Name 3
                        </span>
                    </div>
                    <div  className="min-w-[200px] h-[250px] mr-5 border-slate-100 rounded-[30px] border-4 hover:border-[#8dbd8d]  ">
                        <div className='flex justify-center  mt-5'>
                        <img  src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
                        </div>
                        <span className='flex  justify-center  mt-5 '>
                        Categorie Name 4
                        </span>
                    </div>
                    <div  className="min-w-[200px] h-[250px] mr-5 border-slate-100 rounded-[30px] border-4 hover:border-[#8dbd8d]  ">
                        <div className='flex justify-center  mt-5'>
                        <img  src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
                        </div>
                        <span className='flex  justify-center  mt-5 '>
                        Categorie Name 5
                        </span>
                    </div>
                    <div  className="min-w-[200px] h-[250px] mr-5 border-slate-100 rounded-[30px] border-4 hover:border-[#8dbd8d]  ">
                        <div className='flex justify-center  mt-5'>
                        <img  src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
                        </div>
                        <span className='flex  justify-center  mt-5 '>
                        Categorie Name 6
                        </span>
                    </div>
                    <div  className="min-w-[200px] h-[250px] mr-5 border-slate-100 rounded-[30px] border-4 hover:border-[#8dbd8d]  ">
                        <div className='flex justify-center  mt-5'>
                        <img  src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
                        </div>
                        <span className='flex  justify-center  mt-5 '>
                        Categorie Name 7
                        </span>
                    </div>
                    <div  className="min-w-[200px] h-[250px] mr-5 border-slate-100 rounded-[30px] border-4 hover:border-[#8dbd8d]  ">
                        <div className='flex justify-center  mt-5'>
                        <img  src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
                        </div>
                        <span className='flex  justify-center  mt-5 '>
                        Categorie Name 8
                        </span>
                    </div>
                </Carousel>
            </div>
        </div>
    )
}

export default ProductCarousel