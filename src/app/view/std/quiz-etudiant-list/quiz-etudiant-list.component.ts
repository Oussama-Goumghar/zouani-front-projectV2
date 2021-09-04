import {Component, OnInit} from '@angular/core';
import {QuizEtudiant} from '../../../controller/model/quiz-etudiant.model';
import {EtudiantClassRoom} from '../../../controller/model/etudiant-class-room.model';
import {QuizClassRoom} from '../../../controller/model/quiz-class-room.model';
import {ReponseEtudiant} from '../../../controller/model/reponse-etudiant.model';
import {Quiz} from '../../../controller/model/quiz.model';
import {QuizEtudiantService} from '../../../controller/service/quiz-etudiant.service';
import {LoginService} from '../../../controller/service/login.service';
import {Question} from '../../../controller/model/question.model';
import {Reponse} from '../../../controller/model/reponse.model';

@Component({
    selector: 'app-quiz-etudiant-list',
    templateUrl: './quiz-etudiant-list.component.html',
    styleUrls: ['./quiz-etudiant-list.component.scss']
})
export class QuizEtudiantListComponent implements OnInit {

    constructor(private service: QuizEtudiantService, private login: LoginService) {
    }

    get quizEtudiantList(): QuizEtudiant {
        return this.service.quizEtudiantList;
    }

    set quizEtudiantList(value: QuizEtudiant) {
        this.service.quizEtudiantList = value;
    }

    get etudiantsClassroom(): Array<EtudiantClassRoom> {
        return this.service.etudiantsClassroom;
    }

    set etudiantsClassroom(value: Array<EtudiantClassRoom>) {
        this.service.etudiantsClassroom = value;
    }

    get quizsClassroom(): Array<QuizClassRoom> {
        return this.service.quizsClassroom;
    }

    set quizsClassroom(value: Array<QuizClassRoom>) {
        this.service.quizsClassroom = value;
    }

    get viewDialogQuiz(): boolean {
        return this.service.viewDialogQuiz;
    }

    set viewDialogQuiz(value: boolean) {
        this.service.viewDialogQuiz = value;
    }

    get selectedQuizClassroom(): QuizClassRoom {
        return this.service.selectedQuizClassroom;
    }

    set selectedQuizClassroom(value: QuizClassRoom) {
        this.service.selectedQuizClassroom = value;
    }

    get selectedClassroom(): EtudiantClassRoom {
        return this.service.selectedClassroom;
    }

    set selectedClassroom(value: EtudiantClassRoom) {
        this.service.selectedClassroom = value;
    }

    get reponsesEtudiantList(): Array<ReponseEtudiant> {
        return this.service.reponsesEtudiantList;
    }

    set reponsesEtudiantList(value: Array<ReponseEtudiant>) {
        this.service.reponsesEtudiantList = value;
    }

    get selectedQuiz(): Quiz {
        return this.service.selectedQuiz;
    }

    set selectedQuiz(value: Quiz) {
        this.service.selectedQuiz = value;
    }

    get questionView(): Question {
        return this.service.questionView;
    }

    set questionView(value: Question) {
        this.service.questionView = value;
    }

    get reponsesView(): Array<Reponse> {
        return this.service.reponsesView;
    }

    set reponsesView(value: Array<Reponse>) {
        this.service.reponsesView = value;
    }

    get reponsesEtudiantView(): Array<ReponseEtudiant> {
        return this.service.reponsesEtudiantView;
    }

    set reponsesEtudiantView(value: Array<ReponseEtudiant>) {
        this.service.reponsesEtudiantView = value;
    }

    public findQuiz() {
        this.service.findQuizClassRoom(this.selectedClassroom.classRoom).subscribe(
            data => {
                this.quizsClassroom = data;
            });
    }

    public view(quizs: QuizClassRoom) {
        this.selectedQuizClassroom = {...quizs};
        this.selectedQuiz = {...quizs.quiz};
        //this.viewDialogQuiz = true ;
        this.service.findQuizEtudiant(this.login.etudiant, this.service.selectedQuizClassroom.quiz).subscribe(
            data => {
                this.quizEtudiantList = data;
                this.service.findReponseEtudiant(this.quizEtudiantList).subscribe(
                    // tslint:disable-next-line:no-shadowed-variable
                    data => {
                        this.reponsesEtudiantList = data;
                        //console.log(this.reponsesEtudiantList);
                        //document.getElementById('quiz').style.visibility = 'hidden';

                    }
                );
            },
            error => {
                /*this.quizEtudiantList.resultat = 'pas encore repondu';
                this.quizEtudiantList.note = 0;
                this.reponsesEtudiantList = null;
                document.getElementById('quiz').style.visibility = 'visible';*/
            });


    }

    ngOnInit(): void {
        this.findQuiz();
    }

}
