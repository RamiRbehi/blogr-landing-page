import Image from "next/image"
import Link from "next/link"
import styles from "../styles/Responsive.module.css"
import { useEffect, useRef, useState } from "react";

const ResponsiveLinkNav = () => {
    const [showDropdown, setShowDropdown] = useState({
        dropdownProduct: false,
        dropdownCompany: false,
        dropdownConnect: false,
    });
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
    <div className={styles.container}>
        <div className={styles.links}>
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
                            <div className={styles.ListItems}>
                                <p>Overview</p>
                                <p>Pricing</p>
                                <p>Marketplace</p>
                                <p>Features</p>
                                <p>Integrations</p>
                            </div>
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
                            <div className={styles.ListItems}>
                                <p>About</p>
                                <p>Team</p>
                                <p>Blog</p>
                                <p>Careers</p>
                            </div>
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
                            <div className={styles.ListItems}>
                                <p>Contact</p>
                                <p>Newsletter</p>
                                <p>Linkedin</p>
                            </div>
                        </div>
                    )}
                </li>
            </ul>
        </div>

        <hr className={styles.hr}/>

        <div className={styles.userClients}>
            <a className={styles.login}>Login</a>
            <button className={styles.signup}>Sign Up</button>
        </div>
    </div>
  )
}

export default ResponsiveLinkNav