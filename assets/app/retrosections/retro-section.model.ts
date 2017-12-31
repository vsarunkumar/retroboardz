export class RetroSection {
	SectionID: number;
	SectionName: string;
	BoardID: string;
	SectionSeq: number;
	MessageSeq: number;
	Message: string;
	Vote: number;
	IsActive: number;

	constructor(SectionID: number, SectionName: string, BoardID: string,
								SectionSeq: number, MessageSeq: number, Message: string,
								Vote: number, IsActive: number) {
		this.SectionID = SectionID;
		this.SectionName = SectionName;
		this.BoardID = BoardID;
		this.SectionSeq = SectionSeq;
		this.MessageSeq = MessageSeq;
		this.Message = Message;
		this.Vote = Vote;
		this.IsActive = IsActive;
	}
}