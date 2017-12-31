import { Component } from '@angular/core';
import { RetroSectionService } from "./retrosections/retro-section.service";


@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [RetroSectionService]
})
export class AppComponent {

}