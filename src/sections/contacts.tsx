import React, {ComponentPropsWithoutRef, FC} from "react";
import {Row} from "shared/ui/row";
import * as css from "./contacts.module.scss";
import {Field, Button, Form, TextArea} from "shared/ui/form";

export const Contacts:FC<ComponentPropsWithoutRef<'section'>> = (props) => {
    return <section {...props}  className={css.section}>
        <Row className={css.section__header}>
            <h3>Contact Us</h3>
            <h1>Contact us to find out more</h1>
        </Row>
        <Row className={css.section__content}>
            <div className={css.left}>
                <h4 className={css.section__content_header}>Send Us a Message</h4>
                <form className={css.section__content__form}>
                    <Field label="Your Name" className={css.form_field}>
                        <Form/>
                    </Field>
                    <Field label="Your Phone" className={css.form_field}>
                        <Form/>
                    </Field>
                    <Field label="Message" className={css.form_field}>
                        <TextArea rows="15"/>
                    </Field>
                    <Button type='submit' className={css.section__content__form_submit}>Request a Call Back</Button>
                </form>
            </div>
            <div className={css.contacts}>
                <h4 className={css.section__content_header}>Contact Info</h4>
                <div className={css.contacts__list}>
                    <div className={css.contacts__list_item}>
                        <h5>Where to Find Us</h5>
                        <p>943 NE 19th St<br/>Oklahoma City, Oklahoma(OK)<br/>73105</p>
                        <p>9435 E 40th Pl<br/>Tulsa, Oklahoma(OK)<br/>74145</p>
                    </div>
                    <div className={css.contacts__list_item}>
                        <h5>Email Us At</h5>
                        <p>
                            contact@super-product.com<br/>
                            info@super-product.com
                        </p>
                    </div>
                    <div className={css.contacts__list_item}>
                        <h5>Call Us At</h5>
                        <p>
                            Phone: (580) 276-5024<br/>
                            Mobile: (405) 771-5537<br/>
                            Fax: (918) 272-3778
                        </p>
                    </div>
                </div>
            </div>
        </Row>
    </section>
}

