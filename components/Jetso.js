import styles from '../styles/Home.module.css'
const Jetso = () => {
    return (
        <div >
            <div className={styles.container_f + " flex items-center justify-between  lg:m-12 md:m-6 sm:m-3 mt-6 "}>
                <div className='text-[16px] lg:text-[36px] md:text-[28px]  font-bold'>Jetso</div>
                <div><a href='#' className={styles.custom_a}>Show All &gt;&gt; </a></div>
            </div>
            <div className='grid grid-cols-4 gap-4'>
            <div  className="min-w-[350px] h-[400px] mr-5   ">
                        <div className='flex justify-center  px-2 mt-5'>
                        <img  src='https://via.placeholder.com/300' alt='imagem' title='imagem' />
                        </div>
                        <span className='flex   ml-7 '>
                        Categorie Name 1
                        </span>
                    </div>
                    <div  className="min-w-[350px] h-[400px] mr-5   ">
                        <div className='flex justify-center  px-2 mt-5'>
                        <img  src='https://via.placeholder.com/300' alt='imagem' title='imagem' />
                        </div>
                        <span className='flex   ml-7 '>
                        Categorie Name 2
                        </span>
                    </div>
                    <div  className="min-w-[350px] h-[400px] mr-5   ">
                        <div className='flex justify-center  px-2 mt-5'>
                        <img  src='https://via.placeholder.com/300' alt='imagem' title='imagem' />
                        </div>
                        <span className='flex   ml-7 '>
                        Categorie Name 3
                        </span>
                    </div>
                    <div  className="min-w-[350px] h-[400px] mr-5   ">
                        <div className='flex justify-center  px-2 mt-5'>
                        <img  src='https://via.placeholder.com/300' alt='imagem' title='imagem' />
                        </div>
                        <span className='flex   ml-7 '>
                        Categorie Name 4
                        </span>
                    </div>
            </div>
        </div>
    )
}

export default Jetso