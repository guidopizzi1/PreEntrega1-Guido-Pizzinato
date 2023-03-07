import styles from "./navbar.module.css"

const Navbar = () => {

    return (
        <nav className={styles.container}>
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>Location</li>
          <li>Contact Us</li>
        </ul>
      </nav>
    )
}

export default Navbar