import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule} from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select"


const mat = [
    MatIconModule,
    MatDividerModule ,
    MatCardModule,
    MatDialogModule,
    MatButtonModule ,
    MatSnackBarModule,
    MatInputModule,
    MatSelectModule
]

@NgModule({
    declarations : [],
    imports : [
        ...mat
    ],
    exports : [
        ...mat
    ]
})
export class MaterialModule{}
