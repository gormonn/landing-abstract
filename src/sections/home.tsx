import React, {ComponentPropsWithoutRef, FC} from "react";
import * as css from './home.module.scss'

export const Home:FC<ComponentPropsWithoutRef<'section'>> = (props) => {
    return <section {...props} className={css.home}>Home</section>
}
