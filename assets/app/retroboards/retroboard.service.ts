import { Http, Response, Headers } from "@angular/http";
import { Injectable } from "@angular/core";

import 'rxjs/Rx';
import { Observable } from "rxjs";
import { Retroboardz } from "./retroboardz.model";


@Injectable()
export class RetroboardService {
	
	constructor(private http: Http) {}
	private board: String[] = [];
	

	addRetroboardz(retroboardz: Retroboardz){
		const body = JSON.stringify(retroboardz);

		const headers = new Headers({'Content-Type': 'application/json'});

		return this.http.post('http://localhost:3000/retroboard', body, { headers: headers })
										.map((response: Response) => response.json())
										.catch((error: Response) => Observable.throw(error.json()));
	}

	getboard(id: String) {

		return this.http.get('http://localhost:3000/retroboard/'+id)
										.map((response: Response) => response.json())
										.catch((error: Response) => Observable.throw(error.json()));

	}
	
}