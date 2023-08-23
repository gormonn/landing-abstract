import React, {ComponentPropsWithoutRef, FC, memo, useCallback, useEffect, useRef, useState} from "react";
import {Row} from "shared/ui/row";
import {ReviewProps, reviews} from "shared/mock/reviews";
import {Button} from "shared/ui/form";
import * as css from "./testimonials.module.scss";
import classnames from "classnames";

enum Direction {
    Prev = -1,
    Next = 1,
}
export const Testimonials:FC<ComponentPropsWithoutRef<'section'>> = (props) => {
    const reviewRef = useRef<HTMLDivElement | null>(null);
    const [page, setPage] = useState(0);

    const go = (dir: Direction) => () => {
        setPage(page => {
            const newPage = page + dir;
            if(newPage < 0) return reviews.length - 1;
            if(newPage >= reviews.length) return 0;
            return newPage;
        })
    }

    const goTo = useCallback((page: number) => () => {
        setPage(page)
    },[])

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
            <Row ref={reviewRef} className={css.carousel_list}>
                {reviews.map(rev => <Review key={rev.name} {...rev} />)}
            </Row>
            <div className={css.carousel__controls}>
                <Button
                    onClick={go(Direction.Prev)}
                    className={css.control}
                    invisible
                >
                    Prev
                </Button>
                {reviews.map((rev, idx) => <Bubble
                    key={rev.name}
                    onClick={goTo(idx)}
                    isActive={page === idx}
                />)}
                <Button
                    onClick={go(Direction.Next)}
                    className={css.control}
                    invisible
                >
                    Next
                </Button>
            </div>
        </Row>
    </section>
}

const Bubble:FC<{isActive:boolean; onClick: () => void}> = memo(({isActive, onClick}) =>
    <Button onClick={onClick} invisible className={css.bubble_btn}>
        <div className={classnames(css.bubble_elem, {[css.bubble_elem_active]: isActive})}/>
    </Button>
)

const Review: FC<ReviewProps> = memo((props) => {
    return <div className={css.review}>
        <p className={css.text}>{props.text}</p>
        <div className={css.col}>
            <img alt="avatar" className={css.avatar} src={props.avatarUrl}/>
            <span className={css.name}>{props.name}</span>
            <span className={css.company}>{props.jobTitle}, {props.company}</span>
        </div>
    </div>
})
