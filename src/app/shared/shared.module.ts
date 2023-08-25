import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TitlePipe } from './pipes/title/title.pipe';
import { TruncatePipe } from './pipes/truncate/truncate.pipe';

@NgModule({
    declarations: [
        // pipes
        TitlePipe,
        TruncatePipe
    ],
    imports: [
        CommonModule
    ],
    exports: [
        // pipes
        TruncatePipe
    ]
  })
  export class SharedModule { }