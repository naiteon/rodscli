export default interface Command {
    execute(payload: string): void
}