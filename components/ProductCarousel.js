import Carousel from 'carousel-react-rcdev'
import styles from '../styles/Home.module.css'

const ProductCarousel = () => {
    return (
        <div className={styles.container_f + " flex items-center justify-center lg:m-10 md:m-6 sm:m-3 mt-6 "}>
            <Carousel max_width={2400}>
                <img className="mr-5" src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
                <img className="mr-5" src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
                <img className="mr-5" src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
                <img className="mr-5" src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
                <img className="mr-5" src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
                <img className="mr-5" src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
                <img className="mr-5" src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
                <img className="mr-5" src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
                <img className="mr-5" src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
                <img className="mr-5" src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
                <img className="mr-5" src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
            </Carousel>
        </div>
    )
}

export default ProductCarousel