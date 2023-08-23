import React, {ComponentPropsWithoutRef, FC} from "react";
import {Row} from "shared/ui/row";
import {FeatureProps, features} from "shared/mock/features";
import * as css from './features.module.scss'

export const Features:FC<ComponentPropsWithoutRef<'section'>> = (props) => {
    return <section {...props} className={css.section}>
        <Row className={css.section__header}>
            <h3>What Is It</h3>
            <h1>Our super product can do anything</h1>
        </Row>
        <Row className={css.section__list}>
            {features.map((data)=><FeatureItem key={data.head} {...data}/>)}
        </Row>
    </section>
}

const FeatureItem:FC<FeatureProps> = ({head, desc}) => {
    return <div className={css.col}>
        <h2>{head}</h2>
        <p>{desc}</p>
    </div>
}
