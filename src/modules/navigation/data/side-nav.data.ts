import { SideNavItems, SideNavSection } from '@modules/navigation/models';

export const sideNavSections: SideNavSection[] = [
    {
        text: 'CORE',
        items: ['register','query','transform'],
    },
    // {
    //     text: 'CORE',
    //     items: ['dashboard'],
    // },
    // {
    //     text: 'INTERFACE',
    //     items: ['layouts', 'pages'],
    // },
    {
        text: 'ADDONS',
        items: ['charts', 'tables'],
    },
];

export const sideNavItems: SideNavItems = {
    dashboard: {
        icon: 'tachometer-alt',
        text: 'Dashboard',
        link: '/dashboard',
    },
   
    layouts: {
        icon: 'columns',
        text: 'Layouts',
        submenu: [
            {
                text: 'Static Navigation',
                link: '/dashboard/static',
            },
            {
                text: 'Register',
                link: '/dashboard/list-register',
            },
            {
                text: 'Query',
                link: '/dashboard/query',
            },
            {
                text: 'Transform',
                link: '/dashboard/transform',
            },
            
            // {
            //     text: 'Light Sidenav',
            //     link: '/dashboard/light',
            // },
        ],
    },
    register: {
        icon: 'user',
        text: 'Register',
        link: '/dashboard/list-register',
    },
    query: {
        icon: 'table',
        text: 'Query',
        link: '/dashboard/query',
    },
    transform: {
        icon: 'table',
        text: 'Transform',
        link: '/dashboard/transform',
    },
    pages: {
        icon: 'book-open',
        text: 'Pages',
        submenu: [
            {
                text: 'Authentication',
                submenu: [
                    {
                        text: 'Login',
                        link: '/auth/login',
                    },
                    {
                        text: 'Register',
                        link: '/auth/register',
                    },
                    {
                        text: 'Forgot Password',
                        link: '/auth/forgot-password',
                    },
                    {
                        text: 'Search',
                        link: '/auth/search',
                    },
                ],
            },
            {
                text: 'Error',
                submenu: [
                    {
                        text: '401 Page',
                        link: '/error/401',
                    },
                    {
                        text: '404 Page',
                        link: '/error/404',
                    },
                    {
                        text: '500 Page',
                        link: '/error/500',
                    },
                ],
            },
        ],
    },
    charts: {
        icon: 'chart-area',
        text: 'Charts',
        link: '/charts',
    },
    tables: {
        icon: 'table',
        text: 'Tables',
        link: '/tables',
    },
};
