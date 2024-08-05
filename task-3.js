class StringBuilder {
    #value = "";

    constructor(initialValue) {
        this.#value = initialValue;
    }

    getValue() {
        return this.#value;
    }

    padEnd(str) {
        const result = this.#value.padEnd(this.#value.length + str.length, str);
        this.#value = result;
    } 

    padStart(str) {
        const result = this.#value.padStart(this.#value.length + str.length, str);
        this.#value = result;
    }

    padBoth(str) {
        const tempResult = this.#value.padStart(this.#value.length + str.length, str);
        const result = tempResult.padEnd(tempResult.length + str.length, str);
        this.#value = result;
    }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
