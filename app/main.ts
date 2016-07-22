import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { TodoService } from './todo.service';


bootstrap(AppComponent, [TodoService]).then(
	() => console.log('app is running...'),
	err => console.log(err)
);
