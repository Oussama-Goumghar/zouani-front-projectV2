import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {InscriptionService} from '../../controller/service/inscription.service';
import {Inscription} from '../../controller/model/inscription.model';
import {Etudiant} from '../../controller/model/etudiant.model';
import {Parcours} from '../../controller/model/parcours.model';
import {Centre} from '../../controller/model/centre.model';
import {Cours} from '../../controller/model/cours.model';
import {Router} from '@angular/router';

@Component({
    templateUrl: './formlayoutdemo.component.html'
})
export class FormLayoutDemoComponent implements OnInit{

    constructor(private messageService: MessageService, private confirmationService: ConfirmationService,
                private service: InscriptionService, private router: Router ) { }
    ngOnInit(): void {
        this.selected = new Inscription();
    }

    get createDialog(): boolean {
        return this.service.createDialog;
    }
    set createDialog(value: boolean) {
        this.service.createDialog = value;
    }

    get submitted(): boolean {
        return this.service.submitted;
    }

    set submitted(value: boolean) {
        this.service.submitted = value;
    }
    get selected(): Inscription {
        return this.service.selected;
    }

    set selected(value: Inscription) {
        this.service.selected = value;
    }

    get selectes(): Array<Inscription> {
        return this.service.selectes;
    }

    set selectes(value: Array<Inscription>) {
        this.service.selectes = value;
    }
    set etudiant(value: Etudiant) {
        this.service.etudiant = value;
    }
    get selectedetudiant(): Etudiant {
        return this.service.selectedetudiant;
    }

    set selectedetudiant(value: Etudiant) {
        this.service.selectedetudiant = value;
    }
    // tslint:disable-next-line:typedef
    public save(){
        this.submitted = true;
        this.service.save().subscribe(data => {
            this.selectes.push({...data});
            this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Inscription added',
                    life: 3000
                });
            });
        this.router.navigate(['/']);
        this.selected = new Inscription();
    }
    // tslint:disable-next-line:adjacent-overload-signatures
    get etudiant(): Etudiant {
        return this.service.etudiant;
    }
    get parcours(): Parcours{
        return this.service.etudiant.parcours;
    }
    get centre(): Centre{
        return this.service.etudiant.parcours.centre;
    }
    public findAllCentre(){
        this.service.findAllCentre().subscribe(data => this.centreList = data);
    }
    public findAllParcours(){
        this.service.findAllParcours().subscribe(data => this.parcoursList = data);
    }
    get centreList(): Array<Centre> {

        return this.service.centreList;
    }
    set centreList(value: Array<Centre>) {
        this.service.centreList = value;
    }
    set parcoursList(value: Array<Parcours>) {
        this.service.parcoursList = value;
    }
    get parcoursList(): Array<Parcours> {
        return this.service.parcoursList;
    }
}
