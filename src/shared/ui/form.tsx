import React, {ComponentPropsWithoutRef, FC, forwardRef, PropsWithChildren} from "react";
import classnames from "classnames";
import * as css from "./form.module.scss";

type InputProps = ComponentPropsWithoutRef<'input'>;
export const Form = forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
    return <input ref={ref} className={classnames(css.input, className)} {...props}/>
})

type TextAreaProps = ComponentPropsWithoutRef<'textarea'>;
export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({ className, ...props }, ref) => {
    return <textarea ref={ref} className={classnames(css.textarea, className)} {...props}/>
})

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
    invisible?:boolean;
};
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, invisible, ...props }, ref) => {
    return <button ref={ref} className={classnames(className, {[css.invisible]: invisible}, css.button)} {...props}/>
})

type FieldProps = { label: string } & ComponentPropsWithoutRef<'label'>;
export const Field: FC<PropsWithChildren<FieldProps>> = ({label, children, className, ...props}) => {
    return <label className={classnames(css.field, className)} {...props}>
        {label}
        {children}
    </label>
}
