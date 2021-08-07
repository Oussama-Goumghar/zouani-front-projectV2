import { Component, OnInit } from '@angular/core';
import {Cours} from '../../../../controller/model/cours.model';
import {Section} from '../../../../controller/model/section.model';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ParcoursService} from '../../../../controller/service/parcours.service';

@Component({
  selector: 'app-etudiant-courses',
  templateUrl: './etudiant-courses.component.html',
  styleUrls: ['./etudiant-courses.component.scss']
})
export class EtudiantCoursesComponent implements OnInit {



  sortKey: any[];
  cols: any[];
  // tslint:disable-next-line:max-line-length
  constructor(private messageService: MessageService, private confirmationService: ConfirmationService, private service: ParcoursService ) { }
  ngOnInit(): void {
    this.initCol();
    this.viewChooseType2 = false;
  }
  public Console() {
    this.service.FindCoursByParcours().subscribe(data => this.selectesscours = data);
    console.log(this.selectesscours);
  }
  get viewChooseType2(): boolean {
    return this.service.viewChooseType2;
  }
  public viewType2(cours: Cours) {
    this.selectedcours = {...cours};
    this.viewChooseType2 = true;
  }
  // tslint:disable-next-line:adjacent-overload-signatures
  set viewChooseType2(value: boolean) {
    this.service.viewChooseType2 = value;
  }
  public openCreateCours() {
    this.selectedcours = new Cours();
    this.submittedCours = false;
    this.createDialogCours = true;
  }
  // tslint:disable-next-line:adjacent-overload-signatures
  set submittedCours(value: boolean) {
    this.service.submittedCours = value;
  }

  public editCours(cour: Cours) {
    this.selectedcours = {...cour};
    this.editDialogCours = true;
  }
  public FindSection(cour: Cours) {
    this.selectedcours = cour;
    this.service.affichelistSection().subscribe(
        data => {
          this.selectesssection = data;
          // tslint:disable-next-line:prefer-for-of
          for (let n = 0 ; n < this.selectesssection.length ; n++){
            for (let j = 0; j < 66 ; j++)
            {
              this.service.image3 += this.selectesssection[n].urlImage[j];
            }
            console.log( this.service.image3);
          }
        });
  }
  set selectesssection(value: Array<Section>) {
    this.service.selectesssection = value;
  }
  get createDialogCours(): boolean {
    return this.service.createDialogCours;
  }

  set createDialogCours(value: boolean) {
    this.service.createDialogCours = value;
  }

  get editDialogCours(): boolean {
    return this.service.editDialogCours;
  }

  set editDialogCours(value: boolean) {
    this.service.editDialogCours = value;
  }

  get viewDialogCours(): boolean {
    return this.service.viewDialogCours;
  }

  set viewDialogCours(value: boolean) {
    this.service.viewDialogCours = value;
  }
  // tslint:disable-next-line:adjacent-overload-signatures
  get itemssection(): Array<Section> {
    return this.service.itemssection;
  }
  get selectedcours(): Cours{
    return this.service.selectedcours;
  }
  set selectedcours(value: Cours) {
    this.service.selectedcours = value;
  }
  get itemscours(): Array<Cours> {
    return this.service.itemscours;
  }
  get selectesscours(): Array<Cours> {
    return this.service.selectesscours;
  }
  set selectesscours(value: Array<Cours>) {
    this.service.selectesscours = value;
  }
  // tslint:disable-next-line:adjacent-overload-signatures
  set itemscours(value: Array<Cours>) {
    this.service.itemscours = value;
  }
  private initCol() {
    this.cols = [
      {field: 'id', header: 'Id'},
      {field: 'libelle', header: 'Libelle'},
      {field: 'code', header: 'Code'},
      {field: 'description', header: 'Description'},
      {field: 'nombreSectionFinalise', header: 'NombreSectionFinalise'},
      {field: 'image', header: 'Image'},
      {field: 'nombreSectionEnCours', header: 'NombreSectionEnCours'},
      {field: 'nombreLinkEnCours', header: 'NombreLinkEnCours'},
      {field: 'nombreLinkFinalise', header: 'NombreLinkFinalise'},
      {field: 'numeroOrder', header: 'NumeroOrder'},
      {field: 'parcours', header: 'Parcours'}
    ];
  }

}
