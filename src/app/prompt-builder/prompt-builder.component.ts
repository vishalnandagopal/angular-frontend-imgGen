import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
// Model of Response data:
// export interface Response {
//   createddate: number;
//   data: Image[];
// }
//
// export interface Image {
//   url: string;
// }

@Component({
  selector: 'app-prompt-builder',
  templateUrl: './prompt-builder.component.html',
  styleUrls: ['./prompt-builder.component.css'],
})
export class PromptBuilderComponent {
  promptForm = this.formBuilder.group({
    prompt: '',
    no: '1',
    size: '256x256',
    exclude: '',
    include: '',
    backgroundColor: '',
  });

  img_src: string = '';
  loading: boolean = false;
  constructor(private formBuilder: FormBuilder) {}

  //   Array of all image URLs received in json document.
  imageUrls: Response[] = [];

  onSubmit(): void {
    this.loading = true;
    console.log(this.promptForm.get('prompt'));

    /*


        Actual Server Link: http://127.0.0.1:8080/image


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
    fetch('https://df542ccc-2a58-484a-8cbb-07cf50dec166.mock.pstmn.io/image', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: (this.promptForm.get('prompt') as any).value,
        no: (this.promptForm.get('no') as any).value,
        size: (this.promptForm.get('size') as any).value,
        exclude: (this.promptForm.get('exclude') as any).value,
        include: (this.promptForm.get('include') as any).value,
        backgroundColor: (this.promptForm.get('backgroundColor') as any).value,
      }),
    })
      .then((res) => res.text())
      .then((data) => {
        const jsonObject = JSON.parse(data);

        for (let i = 0; i < jsonObject.data.length; i++) {
          this.imageUrls.push(jsonObject.data[i].url);
        }

        // console.log(jsonObject.data[0].url);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async dl() {
    console.log('called1');
    const image = await fetch(this.img_src);
    const imageBlob = await image.blob();
    const imageURL = URL.createObjectURL(imageBlob);
    const link = document.createElement('a');
    link.href = imageURL;
    link.download = 'image.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    console.log('called2');
  }

  /*
  x = document.querySelectorAll('[id^="img-"]');

    x.forEach((element: HTMLFormElement): void => {
  
      console.log(element.innerText);
    });

  x.forEach((element: HTMLFormElement): void => {
      const input : any= element.querySelector('input[type="text"]');
      console.log(input.[0]);
    });

  ngAfterViewInit() : void {

    */

  /*
  addEventListener(){

    const buttons = document.querySelectorAll<HTMLInputElement>("button[id^='submit-btn-']");

    buttons.forEach((button: HTMLInputElement) => {

      button.addEventListener('click', (event : Event) => {

        const textInput =(event.target as Element)?.previousElementSibling as HTMLInputElement;

        const imageUrlInput = (textInput as Element).previousElementSibling as HTMLInputElement;

        const text = textInput.value;
        const imageUrl = imageUrlInput.src;

        // console.log('Text:', text);
        // console.log('Image URL:', imageUrl);
        // Add code to submit the text and image URL to the backend here

        const x = {"name": text, "url": imageUrl};



      });
    });
  }
  */

  submitImageForm(i: Number) {
    const textInputName = (<HTMLInputElement>(
      document.getElementById('image-name-' + i)
    )).value;
    const testInputUrl = (<HTMLImageElement>(
      document.getElementById('image-' + i)
    )).src;

    const data = { name: textInputName, url: testInputUrl };
    const jsonString = JSON.stringify(data);

    fetch('http://127.0.0.1:8080/saveImage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: jsonString,
    })
      .then((response) => response.text())
      .then((data) => {
        const x = document.querySelector<HTMLElement>('successful-' + i);
        if (x) {
          x.style.display = 'inline-block';
        }
        console.log('Response:', data);
      })
      .catch((error) => {
        const x = document.querySelector<HTMLElement>('unsuccessful-' + i);
        if (x) {
          x.style.display = 'inline-block';
        }

        console.error('Error:', error);
      });
  }
}
