import { useState } from "react";
import Link from "../Link/Link";
import { RiMenu2Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";


const NavBar = () => {

    const [open, setOpen] = useState(false)

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/dashboard', name: 'Dashboard' }
    ];

    return (
        <nav className="p-5">
            <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
                {
                    open === true ? <IoMdClose /> : <RiMenu2Fill />
                }
                
            </div>
            <ul className={`md:flex gap-5 duration-1000 px-5 absolute md:static
            ${open ? 'top-15' : '-top-80'}`}>
                {
                    routes.map(route => <Link key={route.id}
                        route={route}
                    ></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;