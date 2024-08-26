import { Routes } from '@angular/router';
import { InsertBookComponent } from './Component/insert-book/insert-book.component';
import { GetListComponent } from './Component/get-list/get-list.component';
import { EditBookComponent } from './Component/edit-book/edit-book.component';
import { DeleteBookComponent } from './Component/delete-book/delete-book.component';

export const routes: Routes = [
    {
        path:'Insert-Book',
        component: InsertBookComponent
    },
    {
        path:'Get-Book-List',
        component:GetListComponent
    },
    {
        path:'Edit-Book',
        component:EditBookComponent
    },
    {
        path: 'Delete-Book',
        component:DeleteBookComponent
    }
];
