import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ParcoursService} from '../../../../controller/service/parcours.service';
import {Section} from '../../../../controller/model/section.model';
import {CategorieSection} from '../../../../controller/model/categorie-section.model';
import {Cours} from '../../../../controller/model/cours.model';
import {Parcours} from "../../../../controller/model/parcours.model";

@Component({
  selector: 'app-section-create',
  templateUrl: './section-create.component.html',
  styleUrls: ['./section-create.component.scss']
})
export class SectionCreateComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  constructor(private messageService: MessageService, private confirmationService: ConfirmationService, private service: ParcoursService ) { }

  ngOnInit(): void {
  }


  get selectedsection(): Section {
    return this.service.selectedsection;
  }
  set selectedsection(value: Section) {
    this.service.selectedsection = value;
  }
  public hideEditDialog() {
    this.createDialogSection = false;
  }
  get createDialogSection(): boolean {
    return this.service.createDialogSection;
  }

  set createDialogSection(value: boolean) {
    this.service.createDialogSection = value;
  }

  get submittedSection(): boolean {
    return this.service.submittedSection;
  }

  set submittedSection(value: boolean) {
    this.service.submittedSection = value;
  }
  findAllCours() {
    this.service.findAllCours().subscribe(data => {
      this.itemscours = data;
    });
  }
  findAllCategorie() {
    this.service.findAllCategorieSection().subscribe(data => {
      this.itemscategoriesection = data;
    });
  }

  get itemscategoriesection(): Array<CategorieSection> {
    return this.service.itemscategoriesection;
  }

  set itemscategoriesection(value: Array<CategorieSection>) {
    this.service.itemscategoriesection = value;
  }
  get selectedcategoriesection(): CategorieSection {
    return this.service.selectedcategoriesection;
  }
  public hideCreateDialog() {
    this.createDialogSection = false;
    this.submittedSection = false;
  }
  public save() {
    this.submittedSection = true;
    if (this.selectedsection.id == null) {
      this.service.saveSection().subscribe(data => {
        // @ts-ignore
        this.itemssection.push({...data});
        // tslint:disable-next-line:no-shadowed-variable
        this.service.affichelistSection().subscribe(data => this.itemssection = data);
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Section Created',
          life: 3000
        });
      });
      this.service.affichelistSection().subscribe(data => this.itemssection = data);
      this.createDialogSection = false;
      this.selectedsection = new Section();
    }
  }
  set selectedcategoriesection(value: CategorieSection) {
    this.service.selectedcategoriesection = value;
  }
  get itemscours(): Array<Cours> {
    return this.service.itemscours;
  }
  set itemscours(value: Array<Cours>) {
    this.service.itemscours = value;
  }
  get itemssection(): Array<Section> {
    return this.service.itemssection;
  }
  set itemssection(value: Array<Section>) {
    this.service.itemssection = value;
  }
}
