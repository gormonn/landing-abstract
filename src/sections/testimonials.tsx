import React, {ComponentPropsWithoutRef, FC, useEffect, useRef, useState} from "react";
import {Row} from "shared/ui/row";
import * as css from "sections/testimonials.module.scss";
import {ReviewProps, reviews} from "shared/mock/reviews";
import {Button} from "shared/ui/form";

enum Direction {
    Prev = -1,
    Next = 1,
}
export const Testimonials:FC<ComponentPropsWithoutRef<'section'>> = (props) => {
    const reviewRef = useRef<HTMLDivElement>(document.createElement('div'));
    const [page, setPage] = useState(0);

    const go = (dir: Direction) => () => {
        setPage(page => {
            const newPage = page + dir;
            if(newPage < 0) return reviews.length - 1;
            if(newPage >= reviews.length) return 0;
            return newPage;
        })
    }

    useEffect(() => {
        const left = page * (reviewRef.current.getBoundingClientRect().width || 0)
        reviewRef.current.scrollTo({ left, behavior: 'smooth' })
    }, [page]);


    return <section {...props} className={css.section}>
        <Row className={css.section__header}>
            <h3>Our Clients</h3>
            <h1>We has been honored to partner up with these clients</h1>
        </Row>
        <Row lassName={css.section__container} >
            <Button className={css.arrowL} onClick={go(Direction.Prev)} invisible>{'<'}</Button>
            <Row ref={reviewRef} className={css.section__container_list} >
                {reviews.map(rev => <Review key={rev.name} {...rev} />)}
            </Row>
            <Button className={css.arrowR} onClick={go(Direction.Next)} invisible>{'>'}</Button>
        </Row>
    </section>
}

const Review: FC<ReviewProps> = (props) => {
    return <div className={css.review}>
        <p className={css.text}>{props.text}</p>
        <div className={css.col}>
            <img className={css.avatar} src={props.avatarUrl}/>
            <span className={css.name}>{props.name}</span>
            <span className={css.company}>{props.jobTitle}, {props.company}</span>
        </div>
    </div>
}
