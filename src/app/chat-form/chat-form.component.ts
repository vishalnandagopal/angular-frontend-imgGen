import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.scss'],
})
export class ChatFormComponent implements OnInit {
  message: string = '';
  options: string[] = ['system', 'assistant', 'user'];
  selectedOption: string = '';
  loading = false;
  response: string = '';
  error: string = '';
  chatResponse!: string;

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {}

  ngOnInit() {}

  onSubmit() {
    this.loading = true;
    this.response = '';
    this.error = '';
    const data = { prompt: this.message, role: this.selectedOption };
    this.http.post('http://localhost:8080/chat', data).subscribe(
      (response: any) => {

        console.log("What is this? This is fish. Thanks and regards");
        // Assign the response text to the chatResponse property
        this.chatResponse = response.body;
        this.chatResponse = this.chatResponse + "haha";
        // Hide the loading message
        this.loading = false;
        //  this.cdr.detectChanges(); // manually trigger change detection
      },
      (error: any) => {
        console.error(error);
        // Hide the loading message
        this.loading = false;
      }
    );


  }

  onCopy() {
    // TODO: Implement copy to clipboard functionality
  }
}
