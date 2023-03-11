import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-prompt-builder',
  templateUrl: './prompt-builder.component.html',
  styleUrls: ['./prompt-builder.component.scss'],
})
export class PromptBuilderComponent {
  promptForm = this.formBuilder.group({
    prompt: '',
    no: '1',
    size: '1024x1024',
    exclude: '',
    include: '',
    backgroundColor: '',
  });
  img_src: string = '';
  loading: boolean = false;
  constructor(private formBuilder: FormBuilder) {}
  onSubmit(): void {
    this.loading = true;
    console.log(this.promptForm.get('prompt'));
    fetch('http://127.0.0.1:8080/image', {
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
        console.log(data);
        this.img_src = data;
        this.loading = false;
      })
      .catch((err) => console.log(err));
  }
  async dl() {
    console.log('called1');
    const image = await fetch(this.img_src);
    const imageBlob = await image.blob();
    const imageURL = URL.createObjectURL(imageBlob);
    const link = document.createElement('a');
    link.href = imageURL;
    link.download = 'image.png' ;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    console.log('called2');
  }
}
