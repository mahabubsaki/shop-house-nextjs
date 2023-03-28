const priceModifier = (price: number): string => {
    const priceStr = price.toString();
    const length = priceStr.length;
    if (length <= 3) {
        return priceStr + '.00';
    }
    const numGroups = Math.ceil(length / 3) - 1;
    let result = priceStr.slice(0, length % 3);
    for (let i = 0; i < numGroups; i++) {
        if (result !== "") {
            result += ",";
        }
        result += priceStr.slice(length % 3 + i * 3, length % 3 + (i + 1) * 3);
    }
    return result + '.00';
};
export { priceModifier };