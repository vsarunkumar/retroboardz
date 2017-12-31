import { Http, Response, Headers } from "@angular/http";
import { Injectable } from "@angular/core";

import 'rxjs/Rx';
import { Observable } from "rxjs";
import { RetroSection } from "./retro-section.model";


@Injectable()
export class RetroSectionService {

    constructor(private http: Http) {}

    addRetroSection(retroSection: RetroSection){

        const body = JSON.stringify(retroSection);

        const headers = new Headers({'Content-Type': 'application/json'});

        return this.http.post('http://localhost:3000/retrosection', body, { headers: headers })
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));

    }

    getRetroSectionByBoard(id: String) {
        return this.http.get('http://localhost:3000/retrosection/'+id)
            .map((response: Response) => {
                const rectrosections = response.json().obj;
                let transformedRectrosections: RetroSection[] = [];
                for(let rectrosection of rectrosections) {
                    transformedRectrosections.push(new RetroSection(
                        rectrosection._id,
                        rectrosection.SectionName,
                        rectrosection.BoardID,
                        rectrosection.SectionSeq,
                        rectrosection.MessageSeq,
                        rectrosection.Message,
                        rectrosection.Vote,
                        rectrosection.IsActive,

                    ));
                }
                return transformedRectrosections;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    editRetroSection(retroSection: RetroSection){

        const body = JSON.stringify(retroSection);

        const headers = new Headers({'Content-Type': 'application/json'});

        return this.http.patch('http://localhost:3000/retrosection', body, { headers: headers })
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));

    }

    deleteRetroSection(id: String) {
        return this.http.delete('http://localhost:3000/retrosection/'+id)
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }

    addVote(id: String) {
        return this.http.get('http://localhost:3000/retrosection/addVote/'+id)
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }

}