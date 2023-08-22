import React, {ComponentPropsWithoutRef,  forwardRef} from "react";
import classnames from "classnames";
import './row.css'

export const Row = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<'div'>>(({className, ...props}, ref) =>
    <div {...props} ref={ref} className={classnames('row', className)}/>)
