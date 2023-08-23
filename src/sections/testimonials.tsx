import React, {ComponentPropsWithoutRef, FC, useEffect, useRef, useState} from "react";
import {Row} from "shared/ui/row";
import {ReviewProps, reviews} from "shared/mock/reviews";
import {Button} from "shared/ui/form";
import * as css from "./testimonials.module.scss";

enum Direction {
    Prev = -1,
    Next = 1,
}
export const Testimonials:FC<ComponentPropsWithoutRef<'section'>> = (props) => {
    const reviewRef = useRef<HTMLDivElement | null>(null);
    const [page, setPage] = useState(0);

    useEffect(() => {
        console.log(page,'page');
    }, [page]);

    const go = (dir: Direction) => () => {
        setPage(page => {
            const newPage = page + dir;
            if(newPage < 0) return reviews.length - 1;
            if(newPage >= reviews.length) return 0;
            return newPage;
        })
    }

    useEffect(() => {
        if(reviewRef.current) {
            const width = (reviewRef.current as HTMLDivElement).getBoundingClientRect().width || 0
            const left = page * width;
            (reviewRef.current as HTMLDivElement).scrollTo({left, behavior: 'smooth'})
        }
    }, [page]);


    return <section {...props} className={css.section}>
        <Row className={css.section__header}>
            <h3>Our Clients</h3>
            <h1>We has been honored to partner up with these clients</h1>
        </Row>
        <Row className={css.carousel} >
            <Row ref={reviewRef} className={css.carousel_list} >
                {reviews.map(rev => <Review key={rev.name} {...rev} />)}
            </Row>
            <div className={css.carousel__controls}>
                <Button onClick={go(Direction.Prev)} invisible>← Prev</Button>
                <Button onClick={go(Direction.Next)} invisible>Next →</Button>
            </div>
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
