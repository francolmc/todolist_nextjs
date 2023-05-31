export default class ExistingRecordException extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'ExistingRecordException';
    }
}
