export class Image {
    id: string;
    url: string;
    oldID: string;
    constructor(id: string, url: string, oldID: string) {
        this.id = id;
        this.url = url;
        if (oldID) {
            this.oldID = oldID;
        } else {
            this.oldID = '';
        }
    }
}
