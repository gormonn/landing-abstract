import {FC} from "react";
import {Features} from "sections/features";
import {Testimonials} from "sections/testimonials";
import {Contacts} from "sections/contacts";

export type Section = {href:string; label: string; Component?: FC}
export const sections:Section[] = [
    {
        href: 'features',
        label: 'Features',
        Component: Features
    },
    {
        href: 'testimonials',
        label: 'Testimonials',
        Component: Testimonials
    },
    {
        href: 'contacts',
        label: 'Contacts',
        Component: Contacts
    }
]
