export const isPrime = (value) => {
    for(let i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
};

export const isPerfectSquare = (value) => {
    const sqrt = Math.sqrt(value);
    return value >= 0 && parseInt(sqrt) === sqrt;
};

export const isOdd = (value) => Math.abs(value % 2) == 1;