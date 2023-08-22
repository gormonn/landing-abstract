import React, {ComponentPropsWithoutRef, FC} from "react";
import * as css from './features.module.scss'
import {Row} from "shared/ui/row";

type ContentType = {head: string; desc: string;}
const content: ContentType[] = [
    {
        head: 'Universal Functionality',
        desc: "Our product is your ultimate solution. With its universal functionality, it seamlessly adapts to meet your every need, from productivity to entertainment, making it the only tool you'll ever need."
    },
    {
        head: 'Limitless Customization',
        desc: 'Tailor every aspect of your experience. Our product offers limitless customization options, allowing you to create a personalized environment that suits your unique style and preferences.'
    },
    {
        head: 'Effortless Integration',
        desc: 'Seamlessly integrate with your favorite apps and services. Our product effortlessly connects with a wide range of platforms, streamlining your workflow and enhancing your digital ecosystem.'
    },
    {
        head: 'Intelligent Automation',
        desc: "Let our product do the heavy lifting. Experience the power of intelligent automation, simplifying complex tasks and freeing up your time for what matters most."
    },
    {
        head: 'Advanced Security',
        desc: "Trust in rock-solid security. Our product prioritizes your data's safety, employing advanced security measures to protect your information and ensure peace of mind."
    },
    {
        head: 'Cutting-Edge Performance',
        desc: 'Stay ahead of the curve with cutting-edge performance. Our product delivers lightning-fast speeds, high efficiency, and top-notch performance, keeping you at the forefront of technology.'
    }
]


export const Features:FC<ComponentPropsWithoutRef<'section'>> = (props) => {
    return <section {...props} className={css.section}>
        <Row className={css.section__header}>
            <div>
                <h3>What Is It</h3>
                <h1>Our super product can do anything</h1>
            </div>
        </Row>
        <Row className={css.section__list}>
            {content.map((data)=><FeatureItem key={data.head} {...data}/>)}
        </Row>
    </section>
}

const FeatureItem:FC<ContentType> = ({head, desc}) => {
    return <div className={css.col}>
        <h2>{head}</h2>
        <p>{desc}</p>
    </div>
}
