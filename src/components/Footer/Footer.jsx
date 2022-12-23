import React, { useContext } from 'react'
import { userContext } from '../../context/userContext'
import "./footer.css"

function Footer() {
    const { username } = useContext(userContext)

    return (
        <footer className=" p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
            <div className="flex justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 footerTxt">© 2022 <a href="https://flowbite.com/" className="hover:underline footerTxt">HarmoniaPlantarum™ {username}</a>
                </span>
            </div>
            <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 footerTxt">About</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 footerTxt">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 footerTxt">Licensing</a>
                </li>
                <li>
                    <a href="#" className="hover:underline footerTxt">Contact</a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer