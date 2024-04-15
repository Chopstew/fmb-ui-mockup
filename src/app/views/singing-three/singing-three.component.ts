import {Component, TemplateRef, ViewChild} from '@angular/core';
import {IOutputAreaSizes, ISplitDirection, SplitAreaDirective, SplitComponent} from "angular-split";
import {ComponentPortal} from "@angular/cdk/portal";
import {WelcomeComponent} from "@app/views/welcome/welcome.component";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {OverlayComponent} from "@layout/overlay/overlay.component";
import {WebcamInitError} from "ngx-webcam";

@Component({
  selector: 'app-singing-three',
  templateUrl: './singing-three.component.html',
  styleUrls: ['./singing-three.component.css']
})
export class SingingThreeComponent {
  isCameraOn: boolean = false;
  isMicOn: boolean = false;
  isNotesOn: boolean = false;

  @ViewChild('split') split!: SplitComponent
  @ViewChild('area1') area1!: SplitAreaDirective
  @ViewChild('area2') area2!: SplitAreaDirective
  @ViewChild('quizPreviewContent') quizPreviewContent!: TemplateRef<unknown>;

  defaultPortal: ComponentPortal<WelcomeComponent> = new ComponentPortal(WelcomeComponent);


  direction: ISplitDirection = 'horizontal'
  other_direction: ISplitDirection = 'vertical'

  sizes: {percent: {area1:any, area2:any}} = {
    percent: {
      area1: 50,
      area2: 50
    }
  }

  constructor(private _router: Router,
              public dialog: MatDialog
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

  showHelp(): void {

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

  handleInitError(error: WebcamInitError): void {
    if (error.mediaStreamError && error.mediaStreamError.name === "NotAllowedError") {
      console.warn("Camera access was not allowed by user!");
    }
  }
}
