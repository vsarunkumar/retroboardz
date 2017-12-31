export class Retroboardz {
	BoardID: number;
	BoardName: string;
	UserGroup?: string;
	BoardLink?: string;
	IsActive?: number;

	constructor(BoardID: number, BoardName: string, UserGroup: string, 
											BoardLink: string, IsActive: number)	{

		this.BoardID = BoardID;
		this.BoardName = BoardName;
		this.UserGroup = UserGroup;
		this.BoardLink = BoardLink;
		this.IsActive = IsActive;

	}
}