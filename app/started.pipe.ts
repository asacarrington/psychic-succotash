import { Pipe } from '@angular/core';


@Pipe({
	name: "started"
})
export class StartedPipe{
	transform(value, pram){
		console.log('1');
	console.log(pram);
		console.log('2');
		return value.filter((item)=> item.status === pram);
	}
}