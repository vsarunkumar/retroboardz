import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RetroboardComponent } from "./retroboards/retroboard.component";
import { BoardInputComponent } from "./retroboards/board-input.component";
import { HttpModule } from "@angular/http";
import { routing } from "./app.routing";
import { BoardComponent } from "./retroboards/board.component";
import { CreateBoardComponent } from "./retroboards/create-board.component";

import { AppComponent } from "./app.component";

@NgModule({
    declarations: [AppComponent,
    				RetroboardComponent,
    				BoardInputComponent,
    				BoardComponent,
    				CreateBoardComponent],
    imports: [BrowserModule,
    			FormsModule,
                ReactiveFormsModule,
    			HttpModule,
    			routing],
    bootstrap: [AppComponent]
})
export class AppModule {

}