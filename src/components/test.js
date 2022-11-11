const data = [
    {​​​id: 1, name: "prasad", age: "30"}​​​,
    {​​​id: 2, name: "prasad", age: "30"}​​​,
    {​​​id: 1, name: "prasad", age: "30"}​​​,
    {​​​id: 4, name: "prasad", age: "30"}​​​,
    {​​​id: 1, name: "prasad", age: "30"}​​​,
    {​​​id: 1, name: "yuan", age: "30"}​​​,
]

const result = data.filter((item, index) => data.indexOf(item) === index);
console.log(result)