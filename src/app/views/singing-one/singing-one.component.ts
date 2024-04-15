import { Component, ViewChild } from '@angular/core';
import { Router} from "@angular/router";
import { IOutputAreaSizes, ISplitDirection, SplitAreaDirective, SplitComponent } from "angular-split";
import { OverlayComponent } from "@layout/overlay/overlay.component";
import { MatDialog } from "@angular/material/dialog";
import { MatBottomSheet } from "@angular/material/bottom-sheet";
import { ChatComponent } from "@layout/chat/chat.component";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-singing-one',
  templateUrl: './singing-one.component.html',
  styleUrls: ['./singing-one.component.css']
})
export class SingingOneComponent {
  isCameraOn: boolean = false;
  isMicOn: boolean = false;
  isNotesOn: boolean = false;

  @ViewChild('split') split!: SplitComponent
  @ViewChild('area1') area1!: SplitAreaDirective
  @ViewChild('area2') area2!: SplitAreaDirective


  direction: ISplitDirection = 'horizontal'
  other_direction: ISplitDirection = 'vertical'

  sizes: {percent: {area1:any, area2:any}} = {
    percent: {
      area1: 50,
      area2: 50
    }
  }

  constructor(private _router: Router,
              private _bottomSheet: MatBottomSheet,
              private _snackBar: MatSnackBar,
              public dialog: MatDialog,
  ) {
    setTimeout(() => {
      console.log('>>> split > ', this.split)
      console.log('>>> area1 > ', this.area1)
      console.log('>>> area2 > ', this.area2)
    }, 1000)
  }

  dragEndPercent({sizes}: { sizes: IOutputAreaSizes }) {
    this.sizes.percent.area1 = sizes[0]
    this.sizes.percent.area2 = sizes[1]
  }

  toggleCamera(): void {
    this.isCameraOn = !this.isCameraOn;
  }

  toggleMic(): void {
    this.isMicOn = !this.isMicOn;
  }

  doLogout(): void {
    localStorage.removeItem('username');
    this._router.navigate(['/login'])
  }

  doLeave(): void {
    this._router.navigate(['/welcome'])
  }

  showChat(): void {
    this._bottomSheet.open(ChatComponent);
  }

  showMixer(): void {
    this.dialog.open(OverlayComponent, {
      height: "calc(100% - 30px)",
      width: "calc(100% - 200px)",
      maxWidth: "100%",
      maxHeight: "100%"
    })
  }

  toggleNotes(): void {
    this.isNotesOn = !this.isNotesOn;
  }

  openSnackBar(message: string) {
    let username = localStorage.getItem('username');
    if (username) {
      let completeMessage = username.toString() + message;
      this._snackBar.open(completeMessage, "Close", {
        duration: 5000,
        panelClass: ['dark-snackbar']
      });
    } else {
      let completeMessage = 'Unbekannter Benutzer' + message;
      this._snackBar.open(completeMessage, "Close", {
        duration: 2000,
        panelClass: 'dark-snackbar'
      });
    }
  }
}
