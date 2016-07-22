import { Component , Input, ViewEncapsulation, Output, EventEmitter} from '@angular/core';


@Component({
    selector: 'status-selector',
    template: `  
		<div>
			<select #sel (change)="select.emit($event.target.value)">
				<option *ngFor="#status of statuses">
					{{status}}
				</option>
			</select>
		</div>
		`
})
export class StatusSelector{
	@Output() select = new EventEmitter();
	statuses = ["started", "completed"];

	ngOnInit(){
	console.log("emit working");
		this.select.emit(this.statuses[0]);
	}
}