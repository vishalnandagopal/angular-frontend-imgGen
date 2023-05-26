import { Component } from '@angular/core';
import { Image } from './../image.interface';

@Component({
    selector: 'app-dalle-section',
    templateUrl: './dalle-section.component.html',
    styleUrls: ['./dalle-section.component.scss'],
})
export class DalleSectionComponent {
    imageArrays: Image[] = [];
    imageIDs: string[] = [];
    zipDownloadURL: string = '';
    zipGenerated: boolean = false;
    pageDescription: string[] = [];

    onImageUrlsChange(image: Image) {
        this.imageIDs = this.imageIDs.filter((item) => {
            return item != image.oldID;
        });
        this.imageIDs.push(image.id);
        this.zipGenerated = false;
    }
    onSubmit() {
        const pageDescription: string =
            (<HTMLInputElement>document.getElementById('page-description-text'))
                .value + '';
        this.pageDescription = [pageDescription];
        fetch('http://127.0.0.1:8080/getzipID', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                imageIDs: this.imageIDs,
                pageDescription: this.pageDescription,
            }),
        })
            .then((res) => res.text())
            .then((data) => {
                const zipID = data;
                this.zipGenerated = true;
                console.log(`ZipID is ${zipID}`);
                this.zipDownloadURL = `http://127.0.0.1:8080/getzip/${zipID}.zip`;
            });
    }
}
