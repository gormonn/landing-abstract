import React, {ComponentPropsWithoutRef, FC} from "react";
import {Row} from "shared/ui/row";
import * as css from "./contacts.module.scss";

export const Contacts:FC<ComponentPropsWithoutRef<'section'>> = (props) => {
    return <section {...props}  className={css.section}>
        <Row className={css.section__header}>
            <h3>Contact Us</h3>
            <h1>Contact us to find out more</h1>
        </Row>
    </section>
}
