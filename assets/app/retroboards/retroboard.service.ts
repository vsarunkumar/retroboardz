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

		return this.http.post('https://retroboardz.herokuapp.com/retroboard', body, { headers: headers })
										.map((response: Response) => response.json())
										.catch((error: Response) => Observable.throw(error.json()));
	}

	getboard(id: String) {

		return this.http.get('https://retroboardz.herokuapp.com/retroboard/'+id)
										.map((response: Response) => response.json())
										.catch((error: Response) => Observable.throw(error.json()));

	}
	
}