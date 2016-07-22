import { Component , Input, ViewEncapsulation, Output, EventEmitter} from '@angular/core';


@Component({
    selector: 'search-box',
    template: ` 
    <input type="text" (input)="update.emit($event.target.value)" >
		`
})
export class SearchBox{
	@Output() update = new EventEmitter();

	ngOnInit(){
		this.update.emit('');
	}
}