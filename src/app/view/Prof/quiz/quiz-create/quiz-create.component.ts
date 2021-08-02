
import { Component, OnInit } from '@angular/core';
import {QuizService} from '../../../../controller/service/quiz.service';
import {ConfirmationService, MessageService, TreeNode} from 'primeng/api';
import {ParcoursService} from '../../../../controller/service/parcours.service';
import {Router} from '@angular/router';
import {Quiz} from '../../../../controller/model/quiz.model';
import {Question} from '../../../../controller/model/question.model';
import {TypeDeQuestion} from '../../../../controller/model/type-de-question.model';
import {Reponse} from '../../../../controller/model/reponse.model';
import {Section} from '../../../../controller/model/section.model';


@Component({
    selector: 'app-quiz-create',
    templateUrl: './quiz-create.component.html',
    styleUrls: ['./quiz-create.component.scss'],
    providers: [MessageService, ConfirmationService]
})
export class QuizCreateComponent implements OnInit {

    // tslint:disable-next-line:max-line-length
    constructor(private service: QuizService, private messageService: MessageService, private confirmationService: ConfirmationService, private router: Router, private serviceParcours: ParcoursService) { }
    cols: any[];
    num: number = 0;
    numQuestion: number = -1;
    nodes: TreeNode[];
    question2: Question;
    get question(): Question {
        return this.service.question;
    }

    set question(value: Question) {
        this.service.question = value;
    }
    get questions(): Array<Question> {
        return this.service.questions;
    }
    get selected(): Quiz {
        return this.service.selected;
    }

    set selected(value: Quiz) {
        this.service.selected = value;
    }
    get reponse(): Reponse {

        return this.service.reponse;
    }
    get refQuiz(): string {
        return this.service.refQuiz;
    }

    set refQuiz(value: string) {
        this.service.refQuiz = value;
    }
    get reponses(): Array<Reponse> {
        if (this.service.question.reponses == null){
            this.service.question.reponses = new Array<Reponse>();
        }
        return this.service.question.reponses;
    }

    get type(): TypeDeQuestion {
        if (this.service.type == null){
            this.service.type = new TypeDeQuestion();
        }
        return this.service.question.typeDeQuestion;
    }

    get types(): Array<TypeDeQuestion> {
        if (this.service.types == null){
            this.service.types = new Array<TypeDeQuestion>();
        }
        return this.service.types;
    }
    get createDialog(): boolean {
        return this.service.createDialog;
    }

    set createDialog(value: boolean) {
        this.service.createDialog = value;
    }
    public deleteCard(index: number) {
        return this.service.deleteCard(index);
    }
    get items(): Array<Quiz> {
        if (this.service.items == null){
            this.service.items = new Array<Quiz>();
        }
        return this.service.items;
    }
    set items(value: Array<Quiz>) {
        this.service.items = value;
    }
    get sections(): Array<Section> {
        return this.service.sections;
    }


    ngOnInit(): void {
        console.log(this.service.sectionSelected.id);
        this.service.findType().subscribe(
            data => {
                console.log(data);
                this.service.types = data;
            }, error1 => {
                console.log('can\'t bring data from database');
            }
        );
        // this.service.findSections().subscribe(data => this.service.sections = data);
        this.service.findQuizByRef(this.selected.ref);
        this.initCol();
        this.question = new Question();
        this.selected.questions.push(this.question);
        this.nodes = [];
    }

    defaultchecked() {
        return this.service.defaultchecked();
    }



    checked(event) {
        return this.service.checked(event);
    }

    public checkedFalse(event: any) {
        return this.service.checkedFalse(event);
    }

    public choixSelected(): void {
        this.service.choixSelected();
    }

    public quizSelected(): void {
        this.service.quizSelected();
    }

    public clone(question: Question)
    {
        let myClone = new Question();
        myClone.reponses = question.reponses;
        myClone.libelle = question.libelle;
        myClone.numero = question.numero;
        myClone.id = question.id;
        myClone.quiz = question.quiz;
        myClone.ref = question.ref;
        myClone.pointReponsefausse = question.pointReponsefausse;
        myClone.pointReponseJuste = question.pointReponseJuste;
        myClone.typeDeQuestion = question.typeDeQuestion;
        return myClone;
    }


    public addFormule() {
        //this.num++;
        this.selected.questions.push(this.clone(this.question));
        this.question2 = this.question;

        console.log(this.selected.questions);
        this.question = new Question();
        this.nodes = [];
        for(let i = 0 ; i < this.selected.questions.length ; i++)
        {
            if(this.selected.questions[i].reponses.length == 1)
            {
                this.nodes.push(
                    {
                        label: 'Question ' + this.selected.questions[i].numero + ' : ' + this.selected.questions[i].libelle + ' ( ' + this.selected.questions[i].typeDeQuestion.lib + ' ) ',
                        children: [
                            {label: this.selected.questions[i].reponses[0].lib + '\t (' + this.selected.questions[i].reponses[0].etatReponse + ' )',  type: 'url'},
                            //{label: this.selected.questions[i].reponses[1].lib,  type: 'url'},
                            //{label: this.selected.questions[i].reponses[2].lib,  type: 'url'},
                            //{label: this.selected.questions[i].reponses[3].lib,  type: 'url'}
                        ]
                    },
                );
            }
            else if(this.selected.questions[i].reponses.length == 2)
            {
                this.nodes.push(
                    {
                        label: 'Question ' + this.selected.questions[i].numero + ' : ' + this.selected.questions[i].libelle + ' ( ' + this.selected.questions[i].typeDeQuestion.lib + ' ) ',
                        children: [
                            {label: this.selected.questions[i].reponses[0].lib + '\t (' + this.selected.questions[i].reponses[0].etatReponse + ' )',  type: 'url'},
                            {label: this.selected.questions[i].reponses[1].lib + '\t (' + this.selected.questions[i].reponses[0].etatReponse + ' )',  type: 'url'},
                            //{label: this.selected.questions[i].reponses[2].lib,  type: 'url'},
                            //{label: this.selected.questions[i].reponses[3].lib,  type: 'url'}
                        ]
                    },
                );
            }
            else if(this.selected.questions[i].reponses.length == 3)
            {
                this.nodes.push(
                    {
                        label: 'Question ' + this.selected.questions[i].numero + ' : ' + this.selected.questions[i].libelle + ' ( ' + this.selected.questions[i].typeDeQuestion.lib + ' ) ',
                        children: [
                            {label: this.selected.questions[i].reponses[0].lib + '\t (' + this.selected.questions[i].reponses[0].etatReponse + ' )',  type: 'url'},
                            {label: this.selected.questions[i].reponses[1].lib + '\t (' + this.selected.questions[i].reponses[0].etatReponse + ' )',  type: 'url'},
                            {label: this.selected.questions[i].reponses[2].lib + '\t (' + this.selected.questions[i].reponses[0].etatReponse + ' )',  type: 'url'},
                            //{label: this.selected.questions[i].reponses[3].lib,  type: 'url'}
                        ]
                    },
                );
            }
            else if(this.selected.questions[i].reponses.length == 4)
            {
                this.nodes.push(
                    {
                        label: 'Question ' + this.selected.questions[i].numero + ' : ' + this.selected.questions[i].libelle + ' ( ' + this.selected.questions[i].typeDeQuestion.lib + ' ) ',
                        children: [
                            {label: this.selected.questions[i].reponses[0].lib + '\t (' + this.selected.questions[i].reponses[0].etatReponse + ' )',  type: 'url'},
                            {label: this.selected.questions[i].reponses[1].lib + '\t (' + this.selected.questions[i].reponses[0].etatReponse + ' )',  type: 'url'},
                            {label: this.selected.questions[i].reponses[2].lib + '\t (' + this.selected.questions[i].reponses[0].etatReponse + ' )',  type: 'url'},
                            {label: this.selected.questions[i].reponses[3].lib + '\t (' + this.selected.questions[i].reponses[0].etatReponse + ' )',  type: 'url'}
                        ]
                    },
                );
            }
            else if(this.selected.questions[i].reponses.length == 5)
            {
                this.nodes.push(
                    {
                        label: 'Question ' + this.selected.questions[i].numero + ' : ' + this.selected.questions[i].libelle + ' ( ' + this.selected.questions[i].typeDeQuestion.lib + ' ) ',
                        children: [
                            {label: this.selected.questions[i].reponses[0].lib + '\t (' + this.selected.questions[i].reponses[0].etatReponse + ' )',  type: 'url'},
                            {label: this.selected.questions[i].reponses[1].lib + '\t (' + this.selected.questions[i].reponses[0].etatReponse + ' )',  type: 'url'},
                            {label: this.selected.questions[i].reponses[2].lib + '\t (' + this.selected.questions[i].reponses[0].etatReponse + ' )',  type: 'url'},
                            {label: this.selected.questions[i].reponses[3].lib + '\t (' + this.selected.questions[i].reponses[0].etatReponse + ' )',  type: 'url'},
                            {label: this.selected.questions[i].reponses[4].lib + '\t (' + this.selected.questions[i].reponses[0].etatReponse + ' )',  type: 'url'}
                        ]
                    },
                );
            }
        }




        console.log(this.questions);

    }
    get selectedsection(): Section {
        return this.service.sectionSelected;
    }

    /*set sectionSelected(value: Section) {
        this.service.sectionSelected = value;
    }*/
    public save() {
        this.selected.section.id =  this.selectedsection.id;
        console.log(this.selected.section.id);
        this.service.refQuiz = this.service.selected.ref;
        this.service.save().subscribe(
            data => {
                this.items.push({...data});
                console.log(this.questions);
                console.log(this.items);
                this.question = null;
                this.selected = null;
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Quiz Created',
                    life: 3000
                });
            });
    }

    public edit() {
        if (this.question.id) {
            this.questions[this.service.findIndexById(this.question.id)] = this.question;
            this.service.edit().subscribe(data => {
                this.question = data;
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Question Updated',
                    life: 3000
                });
            });
            this.question = new Question();
        }
    }





    public addReponse() {
        return this.service.addReponse();
    }
    delete(reponse: Reponse) {
        this.service.delete(reponse );
    }
    public openConfig(){
        this.createDialog = true;
    }


    shuffle(reponses: Array<Reponse>) {
        return this.service.shuffle(reponses);
    }

    public itemChecked(event: any) {
        return this.service.itemChecked(event);
    }
    private initCol() {
        this.cols = [
            {field: 'lib', header: 'Libelle Reponse'},
            {field: 'etatReponse', header: 'Correct'},
        ];
    }

    validateForm() {
        return this.service.validateForm();
    }

    openPreview() {
        this.router.navigate(['/view/quiz-preview']);
    }

}
