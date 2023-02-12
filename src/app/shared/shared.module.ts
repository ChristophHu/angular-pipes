import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ShortenPipe } from "./pipes/shorten/shorten.pipe";
import { TitlePipe } from './pipes/title/title.pipe';

@NgModule({
    declarations: [
        // pipes
        ShortenPipe,
        TitlePipe
    ],
    imports: [
        CommonModule
    ],
    exports: [
        // pipes
        ShortenPipe
    ]
  })
  export class SharedModule { }