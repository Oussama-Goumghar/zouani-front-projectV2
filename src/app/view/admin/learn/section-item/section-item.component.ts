import {Component, OnInit} from '@angular/core';
import {SectionItemModel} from '../../../../controller/model/section-item.model';
import {Section} from '../../../../controller/model/section.model';
import {SectionItemService} from '../../../../controller/service/section-item.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {Product} from './product';
import {ProductService2} from './productservice';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Component({
    selector: 'app-section-item',
    templateUrl: './section-item.component.html',
    styleUrls: ['./section-item.component.scss']
})
export class SectionItemComponent implements OnInit {

    sctionItem: SectionItemModel;
    sectionItemList:SectionItemModel[]
    imageUrl: String;
    idsList:Array<number>=[]

    products: Product[];

    responsiveOptions;


    constructor(private sectionItemService: SectionItemService, private messageService: MessageService,private router: Router,private productService:ProductService2) {
        this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 3,
                numScroll: 3
            },
            {
                breakpoint: '768px',
                numVisible: 2,
                numScroll: 2
            },
            {
                breakpoint: '560px',
                numVisible: 1,
                numScroll: 1
            }
        ];
    }
    itemsLoaded: Promise<boolean>;

    ngOnInit(): void {

        this.sctionItem = new SectionItemModel('assets/image5.png');
        this.sectionItemService.getSectionItems().subscribe(data => {
                this.sectionItemService.sectionSelected.sectionItems=data
            this.sectionItemList=data
                console.log(data)
            this.itemsLoaded=Promise.resolve(true)

        });
        this.productService.getProductsSmall().then(products => {
            this.products = products;
        });
        console.log(this.sctionItem.imageUrl);
    }

    get sectionSelected(): Section {
        return this.sectionItemService.sectionSelected;
    }

    set sectionSelected(value: Section) {
        this.sectionItemService.sectionSelected = value;
    }


    openPreview() {

    }

    save() {
        this.sectionItemService.createSectionItems().subscribe(data => {
            if (data == 1) {
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'SectionItem Created',
                    life: 3000
                });
                this.sectionItemService.deleteSectionItems(this.idsList).subscribe(date => {
                    if (data == 1) {
                        this.idsList = [];
                        this.sectionSelected = null;
                        this.router.navigate(['/pages/parcours']);
                    } else {
                        this.messageService.add({
                            severity: 'error',
                            summary: 'Error',
                            detail: 'SectionItem Created',
                            life: 3000
                        });
                    }
                });


            } else {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: 'SectionItem Created',
                    life: 3000
                });
            }
        }, error => {
            console.error(error);
        });
    }

    addFormule() {
        console.log("hannaaa=> "+this.sectionSelected.sectionItems)
         if (this.sectionSelected.sectionItems.includes(this.sctionItem)) {
             console.log('9DIIIIIIIIIIIIIM');
             let index = this.sectionSelected.sectionItems.indexOf(this.sctionItem);
             this.sectionSelected.sectionItems[index] = this.sctionItem;
         } else {
             this.sectionSelected.sectionItems.splice(0,0,this.sctionItem)
             console.log("JDIIIIIIIIIIID===>"+this.sectionSelected.sectionItems.length)
         }
         this.sctionItem = new SectionItemModel('assets/image5.png');

         this.imageUrl = null;
         this.sectionItemList=this.sectionSelected.sectionItems
    }

    imagePreview() {
        window.open(this.sctionItem.imageUrl, '_blank');
    }

    convert() {
        if (this.imageUrl) {
            const found = this.imageUrl.match(/d\/([A-Za-z0-9\-\_]+)/);
            const srcImg = 'https://drive.google.com/uc?export=view&id=' + found[1];
            this.sctionItem.imageUrl = srcImg;
        }
    }

    update(node: any) {
        this.sctionItem = node;
    }

    delete(node: any) {
        this.idsList.push(node.id);
        console.log(node);
        const index=this.sectionSelected.sectionItems.indexOf(node)
        console.log(index);
        this.sectionSelected.sectionItems.splice(index,1)
        console.log(this.sectionSelected.sectionItems.length);
        console.log(this.idsList)
    }
}