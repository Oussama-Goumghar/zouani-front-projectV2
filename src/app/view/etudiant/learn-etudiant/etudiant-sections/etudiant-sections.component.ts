import {Component, OnInit} from '@angular/core';
import {Section} from '../../../../controller/model/section.model';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ParcoursService} from '../../../../controller/service/parcours.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
    selector: 'app-etudiant-sections',
    templateUrl: './etudiant-sections.component.html',
    styleUrls: ['./etudiant-sections.component.scss']
})
export class EtudiantSectionsComponent implements OnInit {


    cols: any[];

    // tslint:disable-next-line:max-line-length
    constructor(private messageService: MessageService, public sanitizer: DomSanitizer, private confirmationService: ConfirmationService, private service: ParcoursService) {
    }

    set selectedsection(value: Section) {
        this.service.selectedsection = value;
    }

    get itemssection(): Array<Section> {
        return this.service.itemssection;
    }

    set itemssection(value: Array<Section>) {
        this.service.itemssection = value;
    }

    get selectesssection(): Array<Section> {
        return this.service.selectesssection;
    }

    ngOnInit(): void {
        this.initCol();
    }

    private initCol() {
        this.cols = [
            {field: 'id', header: 'Id'},
            {field: 'libelle', header: 'Libelle'},
            {field: 'code', header: 'Code'},
            {field: 'questions', header: 'Questions'},
            {field: 'urlVideo', header: 'UrlVideo'},
            {field: 'urlImage3', header: 'UrlImage3'},
            {field: 'urlImage2', header: 'UrlImage2'},
            {field: 'urlImage', header: 'UrlImage'},
            {field: 'contenu', header: 'Contenu'},
            {field: 'content', header: 'Content'},
            {field: 'indicationProf', header: 'IndicationProf'},
            {field: 'cours', header: 'Cours'},
            {field: 'categorieSection', header: 'CategorieSection'},
            {field: 'url', header: 'Url'},
            {field: 'superCategorieSection', header: 'SuperCategorieSection'}
        ];
    }
}
