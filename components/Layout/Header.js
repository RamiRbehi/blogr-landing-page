import Image from "next/image"
import styles from "../../styles/Header.module.css"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import ResponsiveLinkNav from "../ResponsiveLinkNav"

const Header = () => {
    const [showDropdown, setShowDropdown] = useState({
        dropdownProduct: false,
        dropdownCompany: false,
        dropdownConnect: false,
    });
    const [clicked, setClicked] = useState(false);
    const [menuVisibile, setMenuVisible] = useState(false);

    const handlleClickMenu = () => {
        setClicked(!clicked);
        setMenuVisible(!menuVisibile);
    }

    const handlleClickMenuBack  = () => {
        setClicked(!clicked);
        setMenuVisible(!menuVisibile);
    }

    const dropdownRefProduct = useRef(null);
    const dropdownRefCompany = useRef(null);
    const dropdownRefConnect = useRef(null);

    const toggleDropdown = (dropdwnName) => {
        setShowDropdown((prevState) => ({
            ...prevState,
            [dropdwnName]: !prevState[dropdwnName],
        }));
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if(
                dropdownRefProduct.current &&
                !dropdownRefProduct.current.contains(event.target) &&
                dropdownRefCompany.current &&
                !dropdownRefCompany.current.contains(event.target) &&
                dropdownRefConnect.current &&
                !dropdownRefConnect.current.contains(event.target)
                ) {
                setShowDropdown ({
                    dropdownProduct: false,
                    dropdownCompany: false,
                    dropdownConnect: false,
                });
            }
        };
        window.addEventListener('click', handleClickOutside);

        return () => {
        window.removeEventListener('click', handleClickOutside);
        }
    }, [])

  return (
    <nav className={styles.container}>
        <div className={styles.left}>
            <Image src="/assets/logo.svg" width={70} height={25} alt="logo"/>
        </div>
        <div className={styles.center}>
            <ul className={styles.ul}>
                <li>
                    <Link onClick={() => toggleDropdown("dropdownProduct")} className={styles.li} href="#">
                        Product
                        {showDropdown.dropdownProduct ?
                        <Image className={styles.up} src="/assets/icon-arrow-light.svg" width={10} height={10} alt="logo"/>
                        :
                        <Image src="/assets/icon-arrow-dark.svg" width={10} height={10} alt="ArrowDown"/>
                        }
                    </Link>
                    {showDropdown.dropdownProduct && (
                        <div ref={dropdownRefProduct} className={styles.dropdownContainer}>
                            <ul className={styles.ListItems}>
                                <li>Overview</li>
                                <li>Pricing</li>
                                <li>Marketplace</li>
                                <li>Features</li>
                                <li>Integrations</li>
                            </ul>
                        </div>
                    )}
                </li>
                <li>
                    <Link onClick={() => toggleDropdown("dropdownCompany")} className={styles.li} href="#">
                        Company
                        {showDropdown.dropdownCompany ?
                        <Image className={styles.up} src="/assets/icon-arrow-light.svg" width={10} height={10} alt="logo"/>
                        :
                        <Image src="/assets/icon-arrow-dark.svg" width={10} height={10} alt="ArrowDown"/>
                        }
                    </Link>
                    {showDropdown.dropdownCompany && (
                        <div ref={dropdownRefCompany} className={styles.dropdownContainer}>
                            <ul className={styles.ListItems}>
                                <li>About</li>
                                <li>Team</li>
                                <li>Blog</li>
                                <li>Careers</li>
                            </ul>
                        </div>
                    )}
                </li>
                <li>
                    <Link onClick={() => toggleDropdown("dropdownConnect")} className={styles.li} href="#">
                        Connect
                        {showDropdown.dropdownConnect ?
                        <Image className={styles.up} src="/assets/icon-arrow-light.svg" width={10} height={10} alt="logo"/>
                        :
                        <Image src="/assets/icon-arrow-dark.svg" width={10} height={10} alt="ArrowDown"/>
                        }
                    </Link>
                    {showDropdown.dropdownConnect && (
                        <div ref={dropdownRefConnect} className={styles.dropdownContainer}>
                            <ul className={styles.ListItems}>
                                <li>Contact</li>
                                <li>Newsletter</li>
                                <li>Linkedin</li>
                            </ul>
                        </div>
                    )}
                </li>
            </ul>
        </div>
        <div className={styles.right}>
            <a className={styles.login}>Login</a>
            <button className={styles.signup}>Sign Up</button>
        </div>
        <div className={styles.responsiveButton}>
            {clicked ? (
                <Image onClick={handlleClickMenuBack} src="/assets/icon-close.svg" width={20} height={20} alt="close"/>
            ) : (
            <Image onClick={handlleClickMenu} src="/assets/icon-hamburger.svg" width={20} height={20} alt="hamburger"/> 
            )}
        </div>
        {menuVisibile && <ResponsiveLinkNav/>}
    </nav>
  )
}

export default Header