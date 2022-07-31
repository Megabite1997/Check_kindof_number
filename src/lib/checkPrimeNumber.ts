const isPrime = (num: number) => {
  for (let i = 2; i * i <= num; i++) if (num % i === 0) return false;
  return num > 1;
};

export default isPrime;
