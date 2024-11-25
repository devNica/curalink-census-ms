
export interface ErrorPort {
    statusCode: number
    messages?: string[]
    name?: string
    stack?: Error['stack']
}