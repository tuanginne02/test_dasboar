const mockRowData = [{
        id: 1,
        label: 'Công ty Dệt may Happy Polla',
        value: 2400
    },
    {
        id: 2,
        label: 'Công ty May mặc Saigon trendy',
        value: 2400
    },
    {
        id: 3,
        label: 'Outlet Lemon squeeze',
        value: 2800
    },
    {
        id: 4,
        label: 'Shop quần áo streetwear New...',
        value: 2900
    },
    {
        id: 5,
        label: 'Shop thời trang công sở Basic Office',
        value: 2400
    }
];

// const mockRowData = [];

// Simulate API call with delay
export const fetchRowData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockRowData);
        }, 500); // Simulate network delay
    });
};