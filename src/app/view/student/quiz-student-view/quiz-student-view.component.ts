import { Component, OnInit } from '@angular/core';
import {QuizEtudiant} from '../../../controller/model/quiz-etudiant.model';
import {EtudiantClassRoom} from '../../../controller/model/etudiant-class-room.model';
import {QuizClassRoom} from '../../../controller/model/quiz-class-room.model';
import {QuizEtudiantService} from '../../../controller/service/quiz-etudiant.service';
import {LoginService} from '../../../controller/service/login.service';
import {ReponseEtudiant} from '../../../controller/model/reponse-etudiant.model';
import {Quiz} from '../../../controller/model/quiz.model';

@Component({
  selector: 'app-quiz-student-view',
  templateUrl: './quiz-student-view.component.html',
  styleUrls: ['./quiz-student-view.component.scss']
})
export class QuizStudentViewComponent implements OnInit {

  cols: any[];

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

  get selectedQuiz(): Quiz {
    return this.service.selectedQuiz;
  }

  set selectedQuiz(value: Quiz) {
    this.service.selectedQuiz = value;
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

  get reponsesEtudiantList(): Array<ReponseEtudiant> {
    return this.service.reponsesEtudiantList;
  }

  set reponsesEtudiantList(value: Array<ReponseEtudiant>) {
    this.service.reponsesEtudiantList = value;
  }

  constructor(private service: QuizEtudiantService, private login: LoginService) { }

  public hideViewDialog() {
    this.viewDialogQuiz = false;
  }

  private initCol() {
    this.cols = [
      {field: 'id', header: 'Id'},
      {field: 'note', header: 'Note'},
      {field: 'ref', header: 'Reference'},
      {field: 'quizEtudiant', header: 'Quiz Etudiant'},
      {field: 'reponse', header: 'Reponse'}
    ];
  }

  ngOnInit(): void {

    this.initCol();

  }

}
