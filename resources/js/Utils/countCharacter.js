export default function countCharacter(str) {
    if (typeof str !== 'string') {
        throw new Error('Input must be a string');
    }
    return str.length;
}
