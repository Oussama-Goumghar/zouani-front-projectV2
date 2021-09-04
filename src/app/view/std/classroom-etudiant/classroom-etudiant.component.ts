import {Component, OnInit} from '@angular/core';
import {QuizEtudiant} from '../../../controller/model/quiz-etudiant.model';
import {EtudiantClassRoom} from '../../../controller/model/etudiant-class-room.model';
import {QuizClassRoom} from '../../../controller/model/quiz-class-room.model';
import {Quiz} from '../../../controller/model/quiz.model';
import {QuizEtudiantService} from '../../../controller/service/quiz-etudiant.service';
import {LoginService} from '../../../controller/service/login.service';

@Component({
    selector: 'app-classroom-etudiant',
    templateUrl: './classroom-etudiant.component.html',
    styleUrls: ['./classroom-etudiant.component.scss']
})
export class ClassroomEtudiantComponent implements OnInit {

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

    get selectedQuiz(): Quiz {
        return this.service.selectedQuiz;
    }

    set selectedQuiz(value: Quiz) {
        this.service.selectedQuiz = value;
    }

    public findClassRoom() {

        this.service.findEtudiantClassRoom(this.login.etudiant).subscribe(
            data => {
                this.etudiantsClassroom = data;
            });
    }

    public view(classes: EtudiantClassRoom) {
        this.selectedClassroom = {...classes};
        this.service.findQuizEtudiant(this.login.etudiant, this.service.selectedQuizClassroom.quiz).subscribe(
            data => {
                this.quizEtudiantList = data;
            },
            error => {
                this.quizEtudiantList.resultat = 'pas encore repondu';
                this.quizEtudiantList.note = 0;
            });
    }

    ngOnInit(): void {
        this.findClassRoom();
    }

}
