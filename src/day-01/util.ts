type SplitOptions = {
    trim: boolean
}
export function splitLines(input: string, options?: SplitOptions): string[] {
    if (options && options.trim) {
        return input.trim().split("\n")
    }
    return input.split("\n")
}
