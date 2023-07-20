export const makeArray = (size: number): number[] => {
    return Array.from(new Array(size)).map((_, index) => index);
}

export const truncateText = (text: string, maxLength: number, showEllipsis = true) => {
    if (!text || text.length <= maxLength) {
        return text;
    }

    const truncatedText = text.substring(0, maxLength);
    return showEllipsis ? `${truncatedText}...` : truncatedText;
}

export const debounce = (func: Function, delay: number) => {
    let timeoutId: ReturnType<typeof setTimeout>;

    return (...args: any[]) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func(...args);
        }, delay);
    };
};

