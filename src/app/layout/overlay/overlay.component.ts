import {Component, Inject} from '@angular/core';
import { SharedModule} from "@shared/shared.module";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import {CdkDrag} from "@angular/cdk/drag-drop";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css'],
  standalone: true,
  imports: [
    SharedModule,
    CdkDrag,
    MatSlideToggleModule
  ]
})
export class OverlayComponent {
  isReverbOn: boolean = false;

  constructor(
      private _dialogRef: MatDialogRef<OverlayComponent>
  ) {}

  onNoClick(): void {
    this._dialogRef.close(false);
  }
  onYesClick() {
    this._dialogRef.close(true);
  }
}
