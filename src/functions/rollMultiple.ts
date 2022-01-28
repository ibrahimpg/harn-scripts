export default (times: number, die: number) => {
  let result = 0;
  for (let i = 0; i < times; i += 1) {
    result += Math.floor(Math.random() * die) + 1;
  }
  return result;
};
