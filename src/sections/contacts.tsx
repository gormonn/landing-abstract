import React, {ComponentPropsWithoutRef, FC} from "react";
import {Row} from "shared/ui/row";
import * as css from "./contacts.module.scss";

export const Contacts:FC<ComponentPropsWithoutRef<'section'>> = (props) => {
    return <section {...props}  className={css.section}>
        <Row className={css.section__header}>
            <h3>Contact Us</h3>
            <h1>Contact us to find out more</h1>
        </Row>
        <Row>
            <form className={css.section__form}>
                <label>
                    Your Name
                    <input/>
                </label>
                <label>
                    Your Phone
                    <input/>
                </label>
                <button type='submit' className={css.section__form_submit}>Request a Call Back</button>
            </form>
        </Row>
    </section>
}
