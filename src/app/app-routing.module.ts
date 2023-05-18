import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatFormComponent } from './chat-form/chat-form.component';

const routes: Routes = [{ path: 'chat', component: ChatFormComponent }];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
