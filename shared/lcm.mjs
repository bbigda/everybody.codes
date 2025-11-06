export const lcm = (numbers) => {

    function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b);
    }

    function lcmPair(a, b) {
        return (a * b) / gcd(a, b);
    }

    return numbers.reduce((acc, number) => lcmPair(acc, number));
}
