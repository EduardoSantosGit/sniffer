export default class Result {
    constructor(status = null, value = null) {
        if (status && status === "OK") {
            this.value = value;
        } else {
            this.AddError(value);
        }

        this.status = status;
    }

    // status types { "OK", "ERROR" }
    set status(value) {
        this._status = value
    }
    get status() {
        return this._status
    }

    // NULL or an array de errors or any other object
    set value(value) {
        this._value = value
    }
    get value() {
        return this._value
    }

    AddError(errorMessage, status) {
        this.status = "ERROR";

        if (!(this.value instanceof Array))
            this.value = [];

        this.value.push(errorMessage);
        return this;
    }

    Concat(result) {
        if (result.status === "OK" ||
            ((result.value instanceof Array) === false) && !result.value)
            return;

        result.value.forEach(e => this.AddError(e));
        return this;
    }

    // serialize this object to a JSON document
    toJSON() {
        return {
            status: this.status,
            value: this.value
        };
    }
}