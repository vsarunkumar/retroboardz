export class Template {
	TemplateName: string;
	SectionName: string;
	SectionSeq: number;

	constructor(TemplateName: string, SectionName: string, SectionSeq: number) {
		this.TemplateName = TemplateName;
		this.SectionName = SectionName;
		this.SectionSeq = SectionSeq;
	}
}