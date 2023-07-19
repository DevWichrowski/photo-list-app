export const makeArray = (size: number): number[] => {
    return Array.from(new Array(size)).map((_, index) => index);
}
