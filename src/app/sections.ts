import {FC} from "react";
import {Home} from "sections/home";
import {Features} from "sections/features";
import {Contacts} from "sections/contacts";
import {Testimonials} from "sections/testimonials";

export type Section = {href:string; label: string; Component?: FC}
export const sections:Section[] = [
    {
        href: '#home',
        label: 'Home',
        Component: Home
    },
    {
        href: '#features',
        label: 'Features',
        Component: Features
    },
    {
        href: '#testimonials',
        label: 'Testimonials',
        Component: Testimonials
    },
    {
        href: '#contacts',
        label: 'Contacts',
        Component: Contacts
    }
]
