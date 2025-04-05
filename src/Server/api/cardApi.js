const mockCardData = [{
        number: 150,
        title: "Tổng số đơn hàng",
        rate: 8.7 
    },
    {
        number: 45,
        title: "Đơn hàng đang xử lý",
        rate: 5.9 
    },
    {
        number: 98,
        title: "Đơn hàng đã hoàn thành",
        rate: 4.9 
    },
    {
        number: 7,
        title: "Đơn hàng bị hủy",
        rate: 5.9 
    },
    {
        number: 85,
        title: "Tổng doanh thu",
        rate: 5.9 
    }
];
// const mockCardData = [];

// Simulate API call with delay
export const fetchCardData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockCardData);
        }, 500); // Simulate network delay
    });
};