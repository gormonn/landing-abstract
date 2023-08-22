import React, {ComponentPropsWithoutRef, FC} from "react";
import classnames from "classnames";
import './row.css'

export const Row:FC<ComponentPropsWithoutRef<'div'>> = ({className, ...props}) =>
    <div {...props} className={classnames('row', className)}/>
