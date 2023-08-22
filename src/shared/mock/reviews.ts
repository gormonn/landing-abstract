import user01 from 'images/user-01.webp';
import user02 from 'images/user-02.webp';
import user03 from 'images/user-03.webp';

export type ReviewProps = {
    name:string;
    jobTitle:string;
    company:string;
    avatarUrl:string;
    text:string;
}
export const reviews:ReviewProps[] = [
    {
        name: 'Alice Johnson',
        jobTitle: 'Marketing Manager',
        company: 'ABC Corp',
        avatarUrl: user01,
        text: 'A versatile product that transformed our work. Customizable, seamless integration, and intelligent automation. Top-notch security. Highly recommended.'
    },
    {
        name: 'John Smith',
        jobTitle: 'Software Engineer',
        company: 'XYZ Tech',
        avatarUrl: user02,
        text: 'Impressed by versatility and customization. Seamless integration with development tools. Intelligent automation boosts productivity.'
    },
    {
        name: 'Emily White',
        jobTitle: 'Graphic Designer',
        company: 'Design Studio Inc.',
        avatarUrl: user03,
        text:'Essential for designers. Customization, integration, and automation. Outstanding performance and security. A must-have.'
    },
    {
        name: 'David Brown',
        jobTitle: 'Sales Manager',
        company: 'Sales Pros LLC',
        avatarUrl: user01,
        text: 'Transformed our sales. Universal functionality, seamless integration. Intelligent automation. Top-notch security.'
    },
    {
        name: 'Sophia Clark',
        jobTitle: 'Freelance Writer',
        company: 'Self-Employed',
        avatarUrl: user02,
        text: 'Freelance writer\'s dream. Customization, integration, and automation. Exceptional security. Highly recommended.'
    },
    {
        name: 'Michael Taylor',
        jobTitle: 'Financial Analyst',
        company: 'Finance Plus Inc.',
        avatarUrl: user03,
        text: 'Vital for financial analysis. Universal functionality, customization. Seamless integration. Intelligent automation.'
    },
    {
        name: 'Olivia Wilson',
        jobTitle: 'HR Manager',
        company: 'HR Solutions Ltd.',
        avatarUrl: user01,
        text: 'HR department\'s best friend. Customization, integration, and automation. Crucial security.'
    },
    {
        name: 'Daniel Lee',
        jobTitle: 'Product Manager',
        company: 'Product Innovations Co.',
        avatarUrl: user02,
        text: 'Revolutionized product management. Universal functionality, customization. Seamless integration. Intelligent automation.'
    },
    {
        name: 'Ava Garcia',
        jobTitle: 'Customer Support Specialist',
        company: 'CustomerCare Inc.',
        avatarUrl: user03,
        text: 'Aids support specialists. Customization, integration, and automation. Protects sensitive data.'
    },
    {
        name: 'William Turner',
        jobTitle: 'Teacher',
        company: 'Local High School',
        avatarUrl: user01,
        text: 'Transformed teaching methods. Versatile, customizable. Seamless integration. Aids in grading. Crucial for student data.'
    },
];
