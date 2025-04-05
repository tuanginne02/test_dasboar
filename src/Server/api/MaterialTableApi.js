const mockMaterialsData = [
    {
        id: 1,
        code: 'NVL_000014',
        name: 'Chỉ cotton',
        unit: 'Cuộn',
        quantity: 8,
    },
    {
        id: 2,
        code: 'NVL_000024',
        name: 'Vải lụa',
        unit: 'Mét',
        quantity: 8,
    },
    {
        id: 3,
        code: 'NVL_000024',
        name: 'Vải lót',
        unit: 'Mét',
        quantity: 8,
    },
    {
        id: 4,
        code: 'NVL_000024',
        name: 'Vải chống thấm',
        unit: 'Mét',
        quantity: 8,
    },
    {
        id: 5,
        code: 'NVL_000024',
        name: 'Vải nỉ',
        unit: 'Mét',
        quantity: 8,
    },
];
// const mockMaterialsData = [];

// Simulate API call with delay
export const fetchMaterialTableData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockMaterialsData);
        }, 500); // Simulate network delay
    });
};