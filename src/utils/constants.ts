import {
    mobile,
    backend,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    docker,
    ideaforge,
    kcrypy,
    threejs,
    posh,
    tvc,
    inmagine,
    zustand,
    sql,
    nextjs,
    python,
    S2t,
    angular,
    meteo,
} from '../assets';

export const navLinks = [
    {
        id: 'About',
        title: 'About',
    },
    {
        id: 'Experience',
        title: 'Experience',
    },
    {
        id: 'Project',
        title: 'Project',
    },
    {
        id: 'Socials',
        title: 'Socials',
    },
];

const services = [
    {
        title: 'Web Developer',
        icon: web,
    },
    {
        title: 'Frontend Development',
        icon: mobile,
    },
    {
        title: 'Backend Developement',
        icon: backend,
    },
];

const technologies = [
    {
        name: 'HTML 5',
        icon: html,
    },
    {
        name: 'CSS 3',
        icon: css,
    },
    {
        name: 'JavaScript',
        icon: javascript,
    },
    {
        name: 'TypeScript',
        icon: typescript,
    },
    {
        name: 'React JS',
        icon: reactjs,
    },
    {
        name: 'Next JS',
        icon: nextjs,
    },
    {
        name: 'Angular',
        icon: angular,
    },
    {
        name: 'Zustand',
        icon: zustand,
    },
    {
        name: 'Tailwind CSS',
        icon: tailwind,
    },

    {
        name: 'SQL',
        icon: sql,
    },
    {
        name: 'Python',
        icon: python,
    },

    {
        name: 'Node JS',
        icon: nodejs,
    },
    {
        name: 'MongoDB',
        icon: mongodb,
    },
    {
        name: 'Three JS',
        icon: threejs,
    },
    {
        name: 'Git',
        icon: git,
    },
    {
        name: 'Docker',
        icon: docker,
    },
];

const experiences = [
    {
        title: 'Business Intelligence Analyst',
        company_name: 'PACC Offshore Services Holding',
        icon: posh,
        iconBg: '#383E56',
        date: 'July 2020 - June 2021',
        points: [
            'Created data framework of finance metrics dashboard using the identified performance metrics for operations, commercial stakeholders',
            'Develop, refine and review a set of traffic light based management dashboards with back-end integration to operations system and data files.',
        ],
    },
    {
        title: 'Full - Stack Developer',
        company_name: 'TVConal',
        icon: tvc,
        iconBg: '#E6DEDD',
        date: 'Jun 2021 - July 2022',
        points: [
            'Developed mobile responsive UI/UX , React using Bootstrap for Player Management dashboard app. ',
            'Developed , maintained and integrated CRUD , media upload , canvas annotation APIs with Django for Player Management app.',
            'Implemented tier-based access control for backend microservice and front end UI/UX in Player Management Web App for Cricket South Africa comprising of over 100 coaches, players, analysts.',
            'Responsible for refactoring frontend to ES7 , React 16.8 with the implementation of react hooks in Match Prediction Analytics app.',
            'Implemented and integrated Slack APIs to monitor accuracy and frequency of outputs from data generated from inhouse predictive analytic models',
        ],
    },
    {
        title: 'Frontend Developer',
        company_name: 'INMAGINE Labs',
        icon: inmagine,
        iconBg: '#383E56',
        date: 'May 2023 - Nov 2023',
        points: [
            'Contributed to development of custom Material-UI components for UI redesign of AI Writer app next.js',
            'Implemented and maintained state management Zustand , for smooth application behavior',
            'Developed and maintained responsive UI/UX for mobile/desktop platforms using Material-UI',
            'Collaborated with back- end developers to ensure API integration of front- end and back- end systems',
            'Actively participated in agile development processes and sprint planning',
        ],
    },
    {
        title: 'Software Engineer',
        company_name: 'Simulation Software & Technology (S2T) Pte',
        icon: S2t,
        iconBg: '#383E56',
        date: 'April 2024 - Nov 2024',
        points: [
            'Developed and maintained micro frontend applications using React and React Context with a Backend-for-Frontend (BFF) architecture.',
            'Translated Vue.js frontend architecture to micro frontend architecture with Mashroom server (Micro frontend Integration Platform for SPAs).',
            'Integrated , developed backend APIs using LoopBack 4, typescript with MongoDB.',
            'Collaborated with UI/UX designers to develop custom React component libraries using Webpack , Ant Design , Material-UI , and SCSS',
            'Actively led sprints for the development and maintenance of web-based applications',
            'Liaised with product managers and customers to gather requirements for feature development.',
        ],
    },
];

const projects = [
    {
        name: 'Meteo-Singapore',
        description:
            'A meteorological app that showcase weather data in Singapore, Built with Angular, Angular Material, Rxjs , leaflet engine for displaying map points and using https://open-meteo.com/en/docs API',
        tags: [
            {
                name: 'Angular',
                color: 'purple-text-gradient',
            },
            {
                name: 'Angular Material',
                color: 'yellow-text-gradient',
            },
            {
                name: 'RxJs',
                color: 'aqua-text-gradient',
            },
            {
                name: 'Leaflet',
                color: 'teal-text-gradient',
            },
        ],
        image: meteo,
        source_code_link: 'https://github.com/chowjl94/weather',
        web_link: 'https://weathermeterological.netlify.app/',
    },
    {
        name: 'Ideaforge',
        description:
            'An AI serverless SaaS , leveraging on OpenAI. It uses the concept of Retrieval Augmented Generation to chat and know more about any PDF file you feed it. Built with Next JS , Clerk Auth, NeonDB(serverless) w Drizzle ORM, files stored to AWS S3 bucket , vectors being stored on PineconeDB(severeles), Stripe Integration for payments handling and Deployed on Vercel',
        tags: [
            {
                name: 'NextJS',
                color: 'blue-text-gradient',
            },
            {
                name: 'NeonDB',
                color: 'green-text-gradient',
            },
            {
                name: 'Drizzle ORM',
                color: 'green-text-gradient',
            },
            {
                name: 'Tailwind CSS',
                color: 'pink-text-gradient',
            },
            {
                name: 'AWS S3',
                color: 'orange-text-gradient',
            },

            {
                name: 'Stripe',
                color: 'purple-text-gradient',
            },
        ],
        image: ideaforge,
        source_code_link: 'https://github.com/chowjl94/ideaforge',
        web_link: 'https://www.ideaforge.website/',
    },
    {
        name: 'Krycpt',
        description:
            'A peer to peer payment app, with solidity smart contract deployed to Goerli test net, using Alchemy web3 development platform. Built with Tailwind CSS and React and Typescript, and ethers.js connection to MetaMask wallet',
        tags: [
            {
                name: 'React w Typescript',
                color: 'blue-text-gradient',
            },
            {
                name: 'Solidity',
                color: 'green-text-gradient',
            },
            {
                name: 'Tailwind CSS',
                color: 'pink-text-gradient',
            },
            {
                name: 'Alchemy',
                color: 'blue-text-gradient',
            },
            {
                name: 'Metamask',
                color: 'orange-text-gradient',
            },
        ],
        image: kcrypy,
        source_code_link: 'https://github.com/chowjl94/kcryipt',
        web_link: 'https://kcryipt.com/',
    },
];

export { services, technologies, experiences, projects };
