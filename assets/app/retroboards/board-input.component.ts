import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { NgForm } from "@angular/forms";
import { TemplateService } from "../templates/template.service";

import { RetroboardService } from "./retroboard.service";
import { Retroboardz } from "./retroboardz.model";

import { RetroSectionService } from "../retrosections/retro-section.service";
import { RetroSection } from "../retrosections/retro-section.model";


import { Template } from "../templates/template.model";

@Component({
	selector: 'board-input',
	templateUrl: './board-input.component.html',
	styleUrls: ['./retroboard.component.css'],
	providers: [RetroboardService,
								TemplateService]
})

export class BoardInputComponent implements OnInit {
	constructor(private retroboardService: RetroboardService, 
								private retroSectionService: RetroSectionService,
								private templateService: TemplateService,
								private router: Router) {}

	public templateNames = [];
	private templates: Template[] = [];
	public sectionNames = [];
	private retroboardId: string[] = [];

	ngOnInit() {

		this.templateService.getTemplateNames()
					.subscribe(
								(template: Template[]) => {
									this.templates = template;
									for( let t of template) {
										if (this.templateNames.indexOf(t.TemplateName) == -1 ) {
											this.templateNames.push(t.TemplateName);
										}
									}
								});
	}

	onChange(templateName: string[]) {
		var length = templateName.length;
		var template_name = templateName.slice(3,length);
		this.sectionNames = [];
		
		for(let t of this.templates) {
			if(t.TemplateName == template_name.toString()) {
				this.sectionNames.push([t.SectionName, t.SectionSeq]);
			}
		}		
	}
	
	

	onSubmit(form: NgForm) {
		const retroboardz = new Retroboardz(1, form.value.name, '1', 'dfdf', 1);

		this.retroboardService.addRetroboardz(retroboardz)
					.subscribe(
						data => { 				
											this.retroboardId	= data.obj._id;		
											for(let s of this.sectionNames) {
												const retroSection = new RetroSection(1, s[0], data.obj._id, s[1], 0, "", 0, 0);

												this.retroSectionService.addRetroSection(retroSection)
															.subscribe(
																data => { console.log(data); },
																error => console.error(error));		

											}

							this.router.navigateByUrl('board/'+ this.retroboardId);	

						},
						error => console.error(error));


	}



}