import { Pipe } from '@angular/core';


@Pipe({
	name: "search"
})
export class SearchPipe{
	transform(value, pram){
		return value.filter((item)=> item.title.startsWith(pram));
	}
}