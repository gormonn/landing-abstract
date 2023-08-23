import React, {FC,  useEffect, useRef, useState} from "react";
import {useSpring, a} from "@react-spring/web";
import {Section} from "app/sections";
import {Button} from "shared/ui/form";
import * as css from './menu.module.scss'


const scrollTo = (href:string) => () => {
    document?.querySelector('#' + href).scrollIntoView({behavior: 'smooth'})
}

export const Menu:FC<{sections: Section[]}> = ({sections}) => {
    const [isOpen, setIsOpen] = useState(false);

    const [navSpring] = useSpring(() => ({
        transform: isOpen ? 'translateX(0%)' : 'translateX(100%)',
    }), [isOpen])

    const navRef = useRef<HTMLElement | null>(null);
    useEffect(()=>{
        const handleClickOutside = (e: MouseEvent) => {
            if (navRef.current && !(navRef.current as HTMLElement)?.contains(e.target as HTMLElement)) {
                setIsOpen(false);
            }
        }
        document?.body.addEventListener('click', handleClickOutside, {capture:true})
        return () => {
            document?.body.removeEventListener('click', handleClickOutside, {capture:true})
        }
    },[])

    useEffect(()=>{
        let scrollTimeout;
        const handleScroll = () => {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(function() {
                setIsOpen(false);
            }, 100);
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    },[])

    return <>
        <header className={css.header}>
            <Button className={css.menuBtn} onClick={()=>setIsOpen(v=>!v)} invisible>Menu</Button>
        </header>
        <a.nav ref={navRef} className={css.navbar} style={navSpring}>
            <Button  className={css.navbar__close} onClick={()=>setIsOpen(false)} invisible>✖</Button>
            {sections.map((sec) => <NavItem key={sec.href} href={sec.href} label={sec.label}/>)}
        </a.nav>
    </>
}

const NavItem:FC<Section> = ({href, label}) => {
    return <Button onClick={scrollTo(href)} invisible className={css.navbar__item}>{label}</Button>
}
