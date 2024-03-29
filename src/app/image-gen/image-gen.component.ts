import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Image } from '../image.interface';

@Component({
    selector: 'app-image-gen',
    templateUrl: './image-gen.component.html',
    styleUrls: ['./image-gen.component.scss'],
})
export class ImageGenComponent {
    promptForm = this.formBuilder.group({
        prompt: '',
        no: '1',
        // size: '1024x1024',
        // exclude: '',
        // include: '',
        // backgroundColor: '',
    });
    submitted: boolean = false;
    img_src: string = '';
    loading: boolean = false;
    loaded: boolean = false;
    selected: boolean = false;
    constructor(private formBuilder: FormBuilder) {}

    //   Array of all image URLs received in json document.
    imageArrays: Image[] = [];

    @Output() imageUrlsChange = new EventEmitter<Image>();
    addThisImage(image: Image) {
        this.selected = true;
        this.imageUrlsChange.emit(image);
    }
    onSubmit(): void {
        this.loading = true;

        /*
        const backendServerLink: String = 'http://127.0.0.1:8080/image';

        For validation/testing purposes,
                                    Postman Mock Server Details:

        Mock Server Link: https://df542ccc-2a58-484a-8cbb-07cf50dec166.mock.pstmn.io/image

        Mock Server Response for 4 images:

        {
            "created": 1680880835,
            "data": [
                {
                    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ayWoFPNGfWS84SScgsVGjaW3iKXpxATKSAZjqACY-tt3z76cb-_dq2wCtdeW0TL4rBE&usqp=CAU"
                },
                {
                    "url": "https://upload.wikimedia.org/wikipedia/commons/0/0b/BMC_Software%2C_Houston.jpg"
                },
                {
                    "url": "https://d15shllkswkct0.cloudfront.net/wp-content/blogs.dir/1/files/2023/02/bmc.png"
                },
                {
                    "url": "https://www.deccanherald.com/sites/dh/files/articleimages/2021/05/26/galaxy-getty-990177-1622015269.png"
                }
            ]
        }
         */
        this.imageArrays.length = 0;

        fetch('http://127.0.0.1:8080/image', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                prompt: (this.promptForm.get('prompt') as any).value,
                // mock: 'true',
            }),
        })
            .then((res) => res.text())
            .then((data) => {
                const jsonObject = JSON.parse(data);
                const images: Image[] = jsonObject;
                let i: Image | any;
                let oldID: string;
                images.forEach((image) => {
                    if (this.imageArrays.length > 0) {
                        i = this.imageArrays.pop();
                        this.imageArrays.push(i);
                        oldID = i.id;
                    } else {
                        oldID = '';
                    }
                    this.imageArrays.push(
                        image.generatedFrom == 'd'
                            ? new Image(
                                  image.id,
                                  image.src,
                                  image.generatedFrom,
                                  oldID
                              )
                            : new Image(
                                  image.id,
                                  'data:image/png;base64,' + image.src,
                                  image.generatedFrom,
                                  oldID
                              )
                    );
                });

                this.loaded = true;
                this.loading = false;
                this.submitted = true;
                this.selected = false;
            })
            .catch((err) => {
                console.log(err);
            });
    }
}
