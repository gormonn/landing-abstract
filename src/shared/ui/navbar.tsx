import React, {FC} from "react"
import classnames from 'classnames'
import * as css from './navbar.module.scss'
import {Section} from "app/sections";

export const Navbar:FC<{sections:Section[]}> = ({sections}) => {
    return <header className={css.navbar}>
        <nav className={css.nav}>
            <ul className={css.menu}>
                {sections.map((link, i) =>
                    <li className={classnames(css.menu_item, {active: i === 0})}>
                        <a className={css.menu_link} href={link.href} data-scroll>{link.label}</a>
                    </li>
                )}
            </ul>
        </nav>
    </header>
}
