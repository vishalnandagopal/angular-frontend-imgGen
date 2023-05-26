export class Image {
    id: string;
    src: string;
    oldID: string;
    generatedFrom: string;
    constructor(id: string, src: string, generatedFrom: string, oldID: string) {
        this.id = id;
        this.src = src;
        this.generatedFrom = generatedFrom;
        if (oldID) {
            this.oldID = oldID;
        } else {
            this.oldID = '';
        }
    }
    toString() {
        return `${this.id} - ${this.src.slice(0, 10)} - ${this.generatedFrom}`;
    }
}
