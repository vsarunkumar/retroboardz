import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import { RetroboardService } from "./retroboard.service";
import { Retroboardz } from "./retroboardz.model";
import { TemplateService } from "../templates/template.service";
import { RetroSectionService } from "../retrosections/retro-section.service";
import { RetroSection } from "../retrosections/retro-section.model";

import 'rxjs/Rx';
import {NgForm, FormGroup, FormControl, Validators} from "@angular/forms";
declare var $: any;


@Component({
    templateUrl: './board.component.html',
    styles: [`
                .board-title{
                    text-align: center;
                }
            `],
    providers: [RetroboardService,
        TemplateService]
})

export class BoardComponent implements OnInit {

    private retroSections: RetroSection[];
    public board = [];

    private gridSize: Number;
    public sectionDetails = [];
    private messageDetails = [];
    private secName: String;
    private secSeq: Number;
    private msgId: String;
    private msg: String;
    myForm: FormGroup;


    constructor(private retroboardService: RetroboardService,
                private retroSectionService: RetroSectionService,
                private templateService: TemplateService,
                private route: ActivatedRoute) {}

    public boardId = this.route.snapshot.params['id'];

    ngOnInit() {

        this.myForm = new FormGroup({
            message: new FormControl(null, Validators.required),
            sectionName: new FormControl(null),
            sectionSeq: new FormControl(null),
            messageId: new FormControl(null),
            boardId: new FormControl(this.boardId)
        });

        this.sectionDetails = [];
        this.messageDetails = [];

        this.retroboardService.getboard(this.boardId)
            .subscribe(data => {
                this.board = [data.obj[0].BoardName];
            });

        this.retroSectionService.getRetroSectionByBoard(this.boardId)
            .subscribe((retroSection: RetroSection[]) => {

                var tempSection = [];

                for(let rs of retroSection) {
                    if(tempSection.indexOf(rs.SectionName) == -1) {
                        this.sectionDetails.push([rs.SectionName, rs.SectionSeq, []]);
                        tempSection.push(rs.SectionName);
                    }

                }

                for(var i=0; i<this.sectionDetails.length; i++)
                {

                    for(let rs of retroSection) {
                        if (this.sectionDetails[i][0] == rs.SectionName) {
                            this.sectionDetails[i][2].push([rs.Message, rs.SectionID,
                                                            rs.IsActive, rs.Vote]);
                        }

                    }

                }

                var size = this.sectionDetails.length;
                if(size == 1) {
                    this.gridSize = 12;
                }
                else if (size == 2) {
                    this.gridSize = 6;
                }
                else {
                    this.gridSize = 4;
                }

            });
    }

    show_modal(sectionName, sectionSeq) {
        this.myForm = new FormGroup({
            message: new FormControl(null, Validators.required),
            sectionName: new FormControl(sectionName),
            sectionSeq: new FormControl(sectionSeq),
            boardId: new FormControl(this.boardId),
            messageId: new FormControl(null),
            typeOfSubmit: new FormControl('Add')
        });
        $('#myModal').modal('show');
    }

    edit_msg_modal(msg, msgId) {
        this.myForm = new FormGroup({
            message: new FormControl(msg, Validators.required),
            sectionName: new FormControl(null),
            sectionSeq: new FormControl(null),
            boardId: new FormControl(this.boardId),
            messageId: new FormControl(msgId),
            typeOfSubmit: new FormControl('Edit')
        });
        $('#myModal').modal('show');
    }

    onSubmit() {
        const retroSection = new RetroSection(this.myForm.value.messageId,
            this.myForm.value.sectionName,
            this.myForm.value.boardId,
            this.myForm.value.sectionSeq,
            0,
            this.myForm.value.message,
            0,
            1);
        if (this.myForm.value.typeOfSubmit == 'Add') {
            this.insertMessage(retroSection);
        }
        else {
            this.editMessage(retroSection)
        }
    }

    insertMessage(retroSection: RetroSection) {
        this.retroSectionService.addRetroSection(retroSection)
            .subscribe(
                data => { console.log(data);
                            this.ngOnInit(); },
                error => console.error(error));
        $('#myModal').modal('hide');

    }

    editMessage(retroSection) {
        this.retroSectionService.editRetroSection(retroSection)
            .subscribe(
                data => { console.log(data);
                            this.ngOnInit(); },
                error => console.error(error));
        $('#myModal').modal('hide');
    }

    onMessageDelete(id: String)
    {
        this.retroSectionService.deleteRetroSection(id)
            .subscribe(
                data => { console.log(data);
                            this.ngOnInit(); },
                error => console.error(error));
    }

    onAddVote(id: String)
    {
        this.retroSectionService.addVote(id)
            .subscribe(
                data => { console.log(data);
                            this.ngOnInit(); },
                error => console.error(error));
    }

}