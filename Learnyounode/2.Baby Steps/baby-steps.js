const [a, b, ...rest] = process.argv;
const result = rest.reduce((prev, next) => Number(prev) + Number(next));
console.log(result);
