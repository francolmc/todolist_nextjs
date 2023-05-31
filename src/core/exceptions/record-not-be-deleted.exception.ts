export default class RecordCannotBeDeletedException extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'RecordCannotBeDeletedException';
    }
}
