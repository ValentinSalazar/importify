'use client';

import { usePathname } from 'next/navigation';
import Link from "next/link";

const NavLinks = [
    { id: 1, name: 'Inicio', path: '/dashboard' },
    { id: 2, name: 'Productos', path: '/dashboard/productos' },
    { id: 3, name: 'Ventas', path: '/dashboard/ventas' },
];

export default function NavbarPanel() {
    const pathname = usePathname();
    const isActive = (path: string) => path === pathname;
    return (
        <nav>
            <ul className='flex justify-between px-5 md:justify-normal gap-1 md:gap-5'>
                {NavLinks.map((link) => {
                    return (
                        <li key={link.id} className='[&>a]:px-5 [&>a]:py-2 py-5 [&>a]:rounded'>
                            <Link href={link.path}
                                className={isActive(link.path) ? 'bg-secondColor text-white' : 'border border-secondColor'}>
                                {link.name}
                            </Link>
                        </li>

                    )
                })}
            </ul>
        </nav>
    )
}

// className={`${(pathname) === '/dashboard' ? "bg-secondColor text-white" : "border border-secondColor"}`}>