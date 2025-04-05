// Mock data for RowRow chart
 const mockChartListData = [
    { name: "Áo sơ mi dài tay", quantity: 123, percentage: 50 },
    { name: "Áo sơ mi cụt tay", quantity: 321, percentage: 75 },
    { name: "Quần baggy", quantity: 231, percentage: 45 },
    { name: "Quần tây", quantity: 999, percentage: 60 },
    { name: "Đầm maxi", quantity: 876, percentage: 90 },
    { name: "Áo hoodie", quantity: 765, percentage: 15 },
    { name: "Áo khoác bomber", quantity: 543, percentage: 24 },
 ];

// const mockChartListData = [];


// Simulate API call with delay
export const fetchChartListData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockChartListData);
        }, 500); // Simulate network delay
    });
};