import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TitlePipe } from './pipes/title/title.pipe';
import { TruncatePipe } from './pipes/truncate/truncate.pipe';
import { HumidityPipe } from './pipes/humidity/humidity.pipe';

@NgModule({
    declarations: [
        // pipes
        TitlePipe,
        TruncatePipe,
        HumidityPipe
    ],
    imports: [
        CommonModule
    ],
    exports: [
        // pipes
        TruncatePipe,
        HumidityPipe
    ]
  })
  export class SharedModule { }