import {Component, OnInit} from '@angular/core';
import {VocabularyService} from '../../../../controller/service/vocabulary.service';
import {Vocabulary} from '../../../../controller/model/vocabulary.model';
import {ConfirmationService, MessageService} from 'primeng/api';
import {Section} from '../../../../controller/model/section.model';


@Component({
    selector: 'app-quiz-create-vocabulary',
    templateUrl: './quiz-create-vocabulary.component.html',
    styleUrls: ['./quiz-create-vocabulary.component.scss'],
})
export class QuizCreateVocabularyComponent implements OnInit {
    url: 'assets/demo/images/product/blue-t-shirt.jpg';
    urls = [];
    public result = '';
    private btnSubmit: any;

    // tslint:disable-next-line:max-line-length
    constructor(private service: VocabularyService, private messageService: MessageService, private confirmationService: ConfirmationService) {
    }

    get submitted(): boolean {
        return this.service.submitted;
    }

    set submitted(value: boolean) {
        this.service.submitted = value;
    }

    get selected(): Vocabulary {
        return this.service.selected;
    }

    set selected(value: Vocabulary) {
        this.service.selected = value;
    }

    set selected2(value: Vocabulary) {
        this.service.selected2 = value;
    }

    get sectionSelected(): Section {
        return this.service.sectionSelected;
    }

    set sectionSelected(value: Section) {
        this.service.sectionSelected = value;
    }

    get sectionSelected2(): Section {
        return this.service.sectionSelected2;
    }

    set sectionSelected2(value: Section) {
        this.service.sectionSelected2 = value;
    }

    get items(): Array<Vocabulary> {
        return this.service.items;
    }

    set items(value: Array<Vocabulary>) {
        this.service.items = value;
    }

    get idSection(): number {
        return this.service.idSection;
    }

    set idSection(value: number) {
        this.service.idSection = value;
    }

    ngOnInit(): void {
        console.log('id section ', this.idSection);
        // this.items.push(this.selected);
        // this.btnSubmit = document.getElementById('btnSubmit');
        // this.service.findAll().subscribe(data => this.items = data);
    }

    public save() {
        // this.selected2.section.id = this.idSection;
        console.log(this.selected.section.id);
        this.submitted = true;
        this.service.save().subscribe(data => {
            this.items.push({...data});
            console.log(data);
            this.messageService.add({
                severity: 'success',
                summary: 'Successful',
                detail: 'Vocabulary Created',
                life: 3000
            });
        });

        this.selected = null;

    }

    public edit() {
        this.submitted = true;

        if (this.selected.id) {
            this.items[this.service.findIndexById(this.selected.id)] = this.selected;
            this.service.edit().subscribe(data => {
                this.selected = data;
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Vocabulary Updated',
                    life: 3000
                });
            });
        }

        this.selected = new Vocabulary();

    }

    public delete(selected: Vocabulary) {
        this.selected = selected;
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete ' + selected.ref + '?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.service.deleteByReference().subscribe(data => {
                    this.items = this.items.filter(val => val.id !== this.selected.id);
                    this.selected = new Vocabulary();
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'Vocabulary Deleted',
                        life: 3000
                    });
                });
            }
        });
    }

    handleFileInput(event) {
        if (event.target.files) {
            for (let i = 0; i > File.length; i++) {
                const reader = new FileReader();
                reader.readAsDataURL(event.target.files[i]);
                reader.onload = (events: any) => {
                    this.urls.push(events.target.result);
                };
            }

        }


    }

    public finByRef(selected: Vocabulary) {
        this.service.findByRef(selected).subscribe(data => this.selected = data);
        console.log(this.selected);
    }

    public sound(word: string) {
        const text = encodeURIComponent(word);
        console.log(text);
        const url = 'http://translate.google.com/translate_tts?ie=UTF-8&total=1&idx=0&textlen=32&client=tw-ob&q=' + text + '&tl=En-gb';
        const audio = new Audio(url);
        audio.play();
    }

    public sound1(word: string) {
        const text = encodeURIComponent(word);
        console.log(text);
        const url = 'http://translate.google.com/translate_tts?ie=UTF-8&total=1&idx=0&textlen=32&client=tw-ob&q=' + text + '&tl=ar';
        const audio = new Audio(url);
        audio.play();
    }

}
