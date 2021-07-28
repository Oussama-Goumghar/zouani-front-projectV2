import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import {InscriptionService} from '../../../../controller/service/inscription.service';
import {Inscription} from '../../../../controller/model/inscription.model';
import {Parcours} from '../../../../controller/model/parcours.model';
import {EtatInscription} from '../../../../controller/model/etat-inscription.model';
import {Prof} from '../../../../controller/model/prof.model';

@Component({
  selector: 'app-inscription-edit',
  templateUrl: './inscription-edit.component.html',
  styleUrls: ['./inscription-edit.component.scss']
})
export class InscriptionEditComponent implements OnInit {

  constructor(private messageService: MessageService, private service: InscriptionService) { }

  ngOnInit(): void {
  }
  findAllProf(): void {
      this.service.findAllProf();
  }
  findAllEtat(): void {
    this.service.findAllEtat().subscribe(
        data => {
          this.etatinscriptionslist = data;
        }, error => {
          console.log(error);
        }
    );
    console.log(this.etatinscriptionslist);
    console.log(this.selected.etatInscription.libelle);
  }
  get parcoursList(): Array<Parcours> {
    return this.service.parcoursList;
  }

  set parcoursList(value: Array<Parcours>) {
    this.service.parcoursList = value;
  }

  get profList(): Array<Prof> {
    return this.service.prof;
  }

  set profList(value: Array<Prof>) {
    this.service.prof = value;
  }
  get etatinscriptionslist(): Array<EtatInscription> {
    return this.service.etatinscriptionslist;
  }

  set etatinscriptionslist(value: Array<EtatInscription>) {
    this.service.etatinscriptionslist = value;
  }
  public edit() {
    this.service.findAll().subscribe(data => this.items = data);
    console.log(this.service.selected.id);
    this.submitted = true;
    this.items[this.service.findIndexById(this.service.selected.id)] = this.selected;
    this.service.valider().subscribe(data => {
          this.selected = data;
          // tslint:disable-next-line:no-shadowed-variable
          this.service.findAll().subscribe(data => this.items = data);
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'InscriptionUpdated',
            life: 3000
          });
        });
    this.editDialog = false;
    this.selected = new Inscription();
  }
    public delete(selected: Inscription) {
        this.selected = selected;
        this.service.deleteByNumeroInscription().subscribe(data => {
                    this.items = this.items.filter(val => val.id !== this.selected.id);
                    this.selected = new Inscription();
                });
    }
  public hideEditDialog() {
    this.editDialog = false;
  }
  get selected(): Inscription {
    return this.service.selected;
  }

  set selected(value: Inscription) {
    this.service.selected = value;
  }

  get editDialog(): boolean {
    return this.service.editDialog;
  }

  set editDialog(value: boolean) {
    this.service.editDialog = value;
  }

  get submitted(): boolean {
    return this.service.submitted;
  }

  set submitted(value: boolean) {
    this.service.submitted = value;
  }
  get items(): Array<Inscription> {
    return this.service.items;
  }

  set items(value: Array<Inscription>) {
    this.service.items = value;
  }



}
