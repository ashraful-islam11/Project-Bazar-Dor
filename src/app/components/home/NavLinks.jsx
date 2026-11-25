
import { Suspense } from "react";
import NavItem from "./NavItem";

const NavLinks = async () => {
    
    'use cache'
    const res = await fetch(`${process.env.BASE_API_URL}/categories`)
    const navs= await res.json()
    return (
        <div className="border-t border-b  border-gray-100 py-4 px-2 ">
            <div className="flex flex-wrap items-center gap-5 max-w-7xl mx-auto px-3" >
                {
                    navs.map((nav) => <Suspense key={nav.id}><NavItem  nav={nav}/></Suspense> )
                }
            </div>
        </div>
    );
};

export default NavLinks;