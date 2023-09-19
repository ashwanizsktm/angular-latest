import { TodosComponent } from './todos/todos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreloadAllModules } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { TodoComponent } from './todos/todo/todo.component';

const routes: Routes = [
	{
		path: '', component: TodosComponent,
		children: [
			{
				path: 'todos',
				component: TodoComponent
			}
		]
	},
	{
		path: 'customers',
		loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)
	},
	{
		path: 'products',
		loadChildren: () => import('./procucts/products.module').then(m => m.ProductsModule)
	},

	{
		path: 'posts',
		loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule)
	},

	{ path: '**', redirectTo: '/', pathMatch: 'full' }

];

@NgModule({
	imports: [RouterModule.forRoot(routes,
		{
			preloadingStrategy: PreloadAllModules
		})],
	exports: [RouterModule]
})
export class AppRoutingModule { }