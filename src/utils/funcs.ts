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

