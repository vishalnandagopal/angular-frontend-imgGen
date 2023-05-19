import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClipboardService } from 'ngx-clipboard';

@Component({
    selector: 'app-chat-form',
    templateUrl: './chat-form.component.html',
    styleUrls: ['./chat-form.component.scss'],
})
export class ChatFormComponent implements OnInit {
    message!: string;
    loading = false;
    response!: string;
    error!: string;

    constructor(
        private http: HttpClient,
        private clipboardService: ClipboardService
    ) {}

    ngOnInit() {}

    onSubmit() {
        this.loading = true;
        this.response = '';
        this.error = '';
        const data = { prompt: this.message };
        this.http
            .post('http://localhost:8080/chat_prompt', data, {
                responseType: 'text',
            })
            .subscribe(
                (response) => {
                    this.loading = false;
                    this.response = response;
                },
                (error) => {
                    this.loading = false;
                    this.error = error.message;
                }
            );
    }

    onCopy() {
        if (this.response) {
            /* this.clipboardService.copy(
                document.getElementById('response-text-block')?.textContent + ''
            ); */
            this.clipboardService.copy(this.response.replace(/^"(.*)"$/, '$1'));
            //   The regex pecified above removes the double quotes from the start and end of the prompt string.
        }
    }
}
