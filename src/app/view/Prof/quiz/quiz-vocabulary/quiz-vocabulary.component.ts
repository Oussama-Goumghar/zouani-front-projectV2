import {Component, OnInit} from '@angular/core';
import {VocabularyService} from '../../../../controller/service/vocabulary.service';
import {Vocabulary} from '../../../../controller/model/vocabulary.model';


@Component({
    selector: 'app-quiz-vocabulary',
    templateUrl: './quiz-vocabulary.component.html',
    styleUrls: ['./quiz-vocabulary.component.scss']
})
export class QuizVocabularyComponent implements OnInit {

    result: string;
    private word = '';
    private note = 0;

    constructor(private service: VocabularyService) {
    }

    private _button: string;

    get button(): string {
        return this._button;
    }

    set button(value: string) {
        this._button = value;
    }

    private _numVocabulary = 1;

    get numVocabulary(): number {
        return this._numVocabulary;
    }

    set numVocabulary(value: number) {
        this._numVocabulary = value;
    }

    private _qnprogress = 0;

    get qnprogress(): number {
        return this._qnprogress;
    }

    set qnprogress(value: number) {
        this._qnprogress = value;
    }

    private _seconds: number;

    get seconds(): number {
        return this._seconds;
    }

    set seconds(value: number) {
        this._seconds = value;
    }

    private _timer;

    get timer() {
        return this._timer;
    }

    set timer(value) {
        this._timer = value;
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

    get items(): Array<Vocabulary> {
        return this.service.items;
    }

    set items(value: Array<Vocabulary>) {
        this.service.items = value;
    }

    ngOnInit(): void {
        this.service.findAllVocabSection().subscribe(data => {
            this.service.nombreVocab = data.length;
        });
        console.log(this.service.nombreVocab);
        this.numVocabulary = 1;
        this.service.findVocabularybySection().subscribe(data => {
            this.items = data;
            console.log(this.items);
        });
        // this.service.findByVocabularyQuizRef(this.selected).subscribe(data => this.items = data);
        this.seconds = 0;
        this.qnprogress = 0;
        this.startTimer();
    }

    public displayTime() {
        return Math.floor(this.seconds / 3600) + ' Hs  ' + Math.floor(this.seconds / 60) + '  :Min  ' + Math.floor(this.seconds % 60) + '  s';
    }

    startTimer() {
        this.timer = setInterval(() => {
            this.seconds++;
        }, 1000);
    }

    public start() {
        /* this.service.findByFirstNumero().subscribe(data =>{
           this.selected =data;
           console.log(this.selected);
         });*/
        document.getElementById('start').remove();
        document.getElementById('vocabulary').style.visibility = 'visible';
        this.button = 'Next';

    }

    public flip(d: string, v: string) {
        const t = String(d);
        const f = String(v);
        // tslint:disable-next-line:triple-equals
        if (t.valueOf().trim() == f.valueOf().trim()) {
            document.getElementById('translated').style.height = '200px';
            document.getElementById('translated').style.visibility = 'visible';
            document.getElementById('image').style.filter = 'blur(0px)';
            document.getElementById('correct').style.height = '20px';
            document.getElementById('correct').style.visibility = 'visible';
            document.getElementById('incorrect').style.visibility = 'hidden';
            this.note = this.note + 1;
        } else {
            document.getElementById('incorrect').style.visibility = 'visible';
            document.getElementById('correct').style.visibility = 'hidden';
            document.getElementById('filpAnyway').style.visibility = 'visible';
        }
    }

    public flipAnyway() {
        document.getElementById('translated').style.height = '200px';
        document.getElementById('translated').style.visibility = 'visible';
        document.getElementById('image').style.filter = 'blur(0px)';
        document.getElementById('incorrect').style.visibility = 'hidden';
        document.getElementById('correct').style.visibility = 'hidden';
    }

    next() {
        document.getElementById('translated').style.visibility = 'hidden';
        document.getElementById('translated').style.height = '0px';
        document.getElementById('image').style.filter = 'blur(15px)';
        this.service.findByNextNumeroSection().subscribe(data => {
            this.items = data;
            console.log(this.items);
        });
        // tslint:disable-next-line:triple-equals
        if (this.items[this.qnprogress]?.numero == this.service.nombreVocab - 1) {
            this.button = 'Finish the test';
        }
        // tslint:disable-next-line:triple-equals
        else if (this.items[this.qnprogress]?.numero == this.service.nombreVocab || this.items[this.qnprogress]?.numero == null) {
            document.getElementById('vocabulary').style.visibility = 'hidden';
            document.getElementById('vocabulary').style.height = '0px';
            document.getElementById('mainCard').style.visibility = 'visible';
            document.getElementById('translated').style.visibility = 'hidden';
            if (this.note >= this.service.nombreVocab) {
                document.getElementById('congrats').style.height = '20px';
                document.getElementById('congrats').style.visibility = 'visible';
                document.getElementById('nextTime').style.visibility = 'hidden';
            } else {
                document.getElementById('congrats').style.visibility = 'hidden';
                document.getElementById('nextTime').style.height = '20px';
                document.getElementById('nextTime').style.visibility = 'visible';
            }
            this.numVocabulary = 1;
        }
        this.result = null;
        document.getElementById('filpAnyway').style.visibility = 'hidden';
        document.getElementById('incorrect').style.visibility = 'hidden';
        document.getElementById('correct').style.visibility = 'hidden';
    }

    public getWord(d: string, v: string) {
        console.log(d);
        console.log(v);
    }

    public sound(word: string) {
        const text = encodeURIComponent(word);
        console.log(text);
        const url = 'http://translate.google.com/translate_tts?ie=UTF-8&total=1&idx=0&textlen=32&client=tw-ob&q=' + text + '&tl=En-gb';
        const audio = new Audio(url);
        audio.play();
    }

}
