import styles from '../styles/Home.module.css'
const Banner = () => {
    return (
        <div className={styles.container_f}>
            <div className="lg:m-10 md:m-6 sm:m-3 mt-4  h-52 rounded-md  bg-[url('/red_banner.png')]">
            
            </div>
            <div className="lg:m-10 md:m-6 sm:m-3 mt-6 h-72 rounded-md  bg-[url('/green_banner.png')]">
            </div>
        </div>
    )
}

export default Banner