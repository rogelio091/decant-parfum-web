export function containByWords(value: string, words: string[]): boolean {
    const palabrasTexto = value.toLowerCase().split(' ');
    return words.every((palabra) =>
        palabrasTexto.includes(palabra.toLowerCase())
    );
}
