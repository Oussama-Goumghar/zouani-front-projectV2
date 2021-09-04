import {Component, OnInit} from '@angular/core';
import {QuizEtudiantService} from '../../../controller/service/quiz-etudiant.service';
import {LoginService} from '../../../controller/service/login.service';
import {Reponse} from '../../../controller/model/reponse.model';
import {ReponseEtudiant} from '../../../controller/model/reponse-etudiant.model';
import {Etudiant} from '../../../controller/model/etudiant.model';
import {Quiz} from '../../../controller/model/quiz.model';
import {Question} from '../../../controller/model/question.model';
import {QuizEtudiant} from '../../../controller/model/quiz-etudiant.model';

@Component({
    selector: 'app-take-quiz',
    templateUrl: './take-quiz.component.html',
    styleUrls: ['./take-quiz.component.scss']
})
export class TakeQuizComponent implements OnInit {

    private selectedValue: number;

    constructor(private service: QuizEtudiantService, private login: LoginService) {
    }

    private _selectedValueCheckbox: Array<Reponse>;

    get selectedValueCheckbox(): Array<Reponse> {
        if (this._selectedValueCheckbox == null) {
            this._selectedValueCheckbox = new Array<Reponse>();
        }
        return this._selectedValueCheckbox;
    }

    set selectedValueCheckbox(value: Array<Reponse>) {
        this._selectedValueCheckbox = value;
    }

    private _type: string;

    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }

    private _button: string;

    get button(): string {
        return this._button;
    }

    set button(value: string) {
        this._button = value;
    }

    private _radio: string;

    get radio(): string {
        return this._radio;
    }

    set radio(value: string) {
        this._radio = value;
    }

    private _checkbox: string;

    get checkbox(): string {
        return this._checkbox;
    }

    set checkbox(value: string) {
        this._checkbox = value;
    }

    private _noteQst: number;

    get noteQst(): number {
        return this._noteQst;
    }

    set noteQst(value: number) {
        this._noteQst = value;
    }

    private _noteQuiz: number;

    get noteQuiz(): number {
        return this._noteQuiz;
    }

    set noteQuiz(value: number) {
        this._noteQuiz = value;
    }

    private _noteCheckbox: number;

    get noteCheckbox(): number {
        return this._noteCheckbox;
    }

    set noteCheckbox(value: number) {
        this._noteCheckbox = value;
    }

    private _numeroCheckBox: number;

    get numeroCheckBox(): number {
        return this._numeroCheckBox;
    }

    set numeroCheckBox(value: number) {
        this._numeroCheckBox = value;
    }

    private _numeroQuestion: number;

    get numeroQuestion(): number {
        return this._numeroQuestion;
    }

    set numeroQuestion(value: number) {
        this._numeroQuestion = value;
    }

    get reponsesEtudiant(): Array<ReponseEtudiant> {
        return this.service.reponsesEtudiant;
    }

    set reponsesEtudiant(value: Array<ReponseEtudiant>) {
        this.service.reponsesEtudiant = value;
    }

    get myAnswer(): Reponse {
        return this.service.myAnswer;
    }

    set myAnswer(value: Reponse) {
        this.service.myAnswer = value;
    }

    get reponseEtudiant(): ReponseEtudiant {
        return this.service.reponseEtudiant;
    }

    set reponseEtudiant(value: ReponseEtudiant) {
        this.service.reponseEtudiant = value;
    }

    get correctAnswers(): Array<Reponse> {
        return this.service.correctAnswers;
    }

    set correctAnswers(value: Array<Reponse>) {
        this.service.correctAnswers = value;
    }

    get etudiant(): Etudiant {
        return this.service.etudiant;
    }

    set etudiant(value: Etudiant) {
        this.service.etudiant = value;
    }

    get quiz(): Quiz {
        return this.service.quiz;
    }

    set quiz(value: Quiz) {
        this.service.quiz = value;
    }

    get items(): Array<Question> {
        return this.service.items;
    }

    set items(value: Array<Question>) {
        this.service.items = value;
    }

    get selected(): Question {
        return this.service.selected;
    }

    set selected(value: Question) {
        this.service.selected = value;
    }

    get reponses(): Array<Reponse> {
        return this.service.reponses;
    }

    set reponses(value: Array<Reponse>) {
        this.service.reponses = value;
    }

    get numReponses(): number {
        return this.service.numReponses;
    }

    set numReponses(value: number) {
        this.service.numReponses = value;
    }

    get numQuestion(): number {
        return this.service.numQuestion;
    }

    set numQuestion(value: number) {
        this.service.numQuestion = value;
    }

    get quizsEtudiant(): Array<QuizEtudiant> {
        return this.service.quizsEtudiant;
    }

    set quizsEtudiant(value: Array<QuizEtudiant>) {
        this.service.quizsEtudiant = value;
    }

    get quizEtudiant(): QuizEtudiant {
        return this.service.quizEtudiant;
    }

    set quizEtudiant(value: QuizEtudiant) {
        this.service.quizEtudiant = value;
    }

    get selectedQuiz(): Quiz {
        return this.service.selectedQuiz;
    }

    set selectedQuiz(value: Quiz) {
        this.service.selectedQuiz = value;
    }

    ngOnInit(): void {
        this.numQuestion = 1;
        this.etudiant = this.login.etudiant;
        this.service.findAllQuestions('quiz1').subscribe(
            data => {
                this.items = data;
            }
        );
        this.start();
    }

    //////////////////Start/////////
    public start() {
        this.service.findQuestion('quiz1', this.numQuestion).subscribe(
            data => {
                this.selected = data;
                this.service.findReponses(this.selected.id).subscribe(
                    dataAnswers => {
                        this.reponses = dataAnswers;
                        console.log(this.reponses);
                    }, error => console.log('erreeeeeeeeeeeeeeeeeur')
                );
            }
        );

    }


}
