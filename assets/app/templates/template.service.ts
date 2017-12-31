import { Http, Response, Headers } from "@angular/http";
import { Injectable } from "@angular/core";

import 'rxjs/Rx';
import { Observable } from "rxjs";
import { Template } from "./template.model";


@Injectable()
export class TemplateService {
	
	constructor(private http: Http) {}
	getTemplateNames(){

		return this.http.get('http://localhost:3000/template')
							.map((response: Response) => {
								const templates = response.json().obj;
								let transformedTemplates: Template[] =[];
								for(let template of templates) {
									transformedTemplates.push(new Template(template.TemplateName, template.SectionName, template.SectionSeq));
								}
								return transformedTemplates;
							});

	}
	
}