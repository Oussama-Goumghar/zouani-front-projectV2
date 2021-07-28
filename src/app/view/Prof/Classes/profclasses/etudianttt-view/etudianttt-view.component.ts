import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ClassRoomService} from '../../../../../controller/service/class-room.service';
import {ClassRoom} from '../../../../../controller/model/class-room.model';
import {EtudiantClassRoom} from '../../../../../controller/model/etudiant-class-room.model';


@Component({
  selector: 'app-etudianttt-view',
  templateUrl: './etudianttt-view.component.html',
  styleUrls: ['./etudianttt-view.component.scss']
})
export class EtudiantttViewComponent implements OnInit {
  cols: any[];
  constructor(private messageService: MessageService, private confirmationService: ConfirmationService,
              private service: ClassRoomService) {
  }
  public hideViewDialog() {
    this.viewDialogEtudiant = false;
  }
  get viewDialogEtudiant(): boolean {
    return this.service.viewDialogEtudiant;
  }
  get selectedclassRoom(): ClassRoom {
    return this.service.selectedclassRoom;
  }

  set selectedclassRoom(value: ClassRoom) {
    this.service.selectedclassRoom = value;
  }

  get itemsclassRoom(): Array<ClassRoom> {
    return this.service.itemsclassRoom;
  }
  private initCol() {
    this.cols = [
      {field: 'id', header: 'Id'},
      {field: 'etudiant', header: 'Etudiant'},
      {field: 'classRoom', header: 'ClassRoom'}
    ];
  }
  get itemsetudiantClassRoom(): Array<EtudiantClassRoom> {
    return this.service.itemsetudiantClassRoom;
  }

  set itemsetudiantClassRoom(value: Array<EtudiantClassRoom>) {
    this.service.itemsetudiantClassRoom = value;
  }
  get selectedetudiantClassRoom(): EtudiantClassRoom {
    return this.service.selectedetudiantClassRoom;
  }
  set selectesetudiantClassRoom(value: Array<EtudiantClassRoom>) {
    this.service.selectesetudiantClassRoom = value;
  }
  get selectesetudiantClassRoom(): Array<EtudiantClassRoom> {
    return this.service.selectesetudiantClassRoom;
  }
  // tslint:disable-next-line:adjacent-overload-signatures
  set selectedetudiantClassRoom(value: EtudiantClassRoom) {
    this.service.selectedetudiantClassRoom = value;
  }
  // tslint:disable-next-line:adjacent-overload-signatures
  set itemsclassRoom(value: Array<ClassRoom>) {
    this.service.itemsclassRoom = value;
  }
  get selectesclassRoom(): Array<ClassRoom> {
    return this.service.selectesclassRoom;
  }

  set selectesclassRoom(value: Array<ClassRoom>) {
    this.service.selectesclassRoom = value;
  }

  // tslint:disable-next-line:adjacent-overload-signatures
  set viewDialogEtudiant(value: boolean) {
    this.service.viewDialogEtudiant = value;
  }
  ngOnInit(): void {
  }

}
