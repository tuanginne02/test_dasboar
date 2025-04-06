

const mockColumnData = [{
    month: "T1",
    id: 1,
    plan: 80,
    actual: 60
},
{
    month: "T2",
    id: 2,
    plan: 70,
    actual: 50
},
{
    month: "T3",
    id: 3,
    plan: 90,
    actual: 75
},
{
    month: "T4",
    id: 4,
    plan: 85,
    actual: 65
},
{
    month: "T5",
    id: 5,
    plan: 95,
    actual: 80
},
];

// const mockColumnData = [];

// Simulate API call with delay
export const fetchColumnData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockColumnData);
        }, 500); // Simulate network delay
    });
};