import styles from '../styles/Home.module.css'

const Header = () => {
  return (
    <div className={styles.header_top +' sticky top-0 z-40' }>
        <span className="flex items-center justify-center pt-2 text-white font-medium">Smart Home Products, Free Shipping Over $1,000 &gt;</span>
    </div>
  )
}

export default Header
