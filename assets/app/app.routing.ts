import { Routes, RouterModule } from "@angular/router";

import { BoardComponent } from "./retroboards/board.component";
import { CreateBoardComponent } from "./retroboards/create-board.component";

const APP_ROUTES: Routes = [
	{ path: 'board/:id', component: BoardComponent },
	{ path: '', component: CreateBoardComponent }

];

export const routing = RouterModule.forRoot(APP_ROUTES);