

const mockPieData = [{
    total: 16,
    inProgress: 6,
    completed: 5,
    pending: 5,
}];
// const mockPieData = [];

// Simulate API call with delay
export const fetchPieData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockPieData);
        }, 500); // Simulate network delay
    });
};