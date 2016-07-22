export class TodoModel{
	status:string ="started";

	constructor(public title:string = "" ){

	}

	toggle():void{
		this.status =
			this.status == "started" 
			? this.status = "completed"
			: this.status = "started";
	}


}