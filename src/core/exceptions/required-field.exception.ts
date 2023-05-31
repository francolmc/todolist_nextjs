export default class RequiredFieldException extends Error {
    constructor(fieldName: string) {
        super(`El campo '${fieldName}' es requerido.`);
        this.name = 'RequiredFieldException';
    }
}
