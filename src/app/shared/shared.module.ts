import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ShortenPipe } from "./pipes/shorten/shorten.pipe";

@NgModule({
    declarations: [
        // pipes
        ShortenPipe
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