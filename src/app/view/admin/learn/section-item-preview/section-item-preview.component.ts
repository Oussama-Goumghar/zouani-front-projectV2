import {Component, Input, OnInit} from '@angular/core';
import {MessageService} from 'primeng/api';
import {SectionItemModel} from '../../../../controller/model/section-item.model';
import {SectionItemService} from '../../../../controller/service/section-item.service';

@Component({
    selector: 'app-section-item-preview',
    templateUrl: './section-item-preview.component.html',
    styleUrls: ['./section-item-preview.component.scss']
})
export class SectionItemPreviewComponent implements OnInit {

    listItems: SectionItemModel[];
    currentItem: SectionItemModel;

    constructor(private messageService: MessageService, private sectionItemService: SectionItemService) {
    }

    ngOnInit(): void {
        this.listItems = this.sectionItemService.sectionSelected.sectionItems;
        this.currentItem=this.listItems[0]


    }


}
