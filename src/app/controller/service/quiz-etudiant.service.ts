import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {QuizEtudiant} from '../model/quiz-etudiant.model';
import {Reponse} from '../model/reponse.model';
import {HttpClient} from '@angular/common/http';
import {ReponseEtudiant} from '../model/reponse-etudiant.model';
import {Question} from '../model/question.model';
import {Quiz} from '../model/quiz.model';
import {Etudiant} from '../model/etudiant.model';
import {EtudiantClassRoom} from '../model/etudiant-class-room.model';
import {QuizClassRoom} from '../model/quiz-class-room.model';
import {ClassRoom} from '../model/class-room.model';
import {Section} from '../model/section.model';

@Injectable({
    providedIn: 'root'
})
export class QuizEtudiantService {

    private url = 'http://localhost:8036/learn/';

    constructor(private http: HttpClient) {
    }

    private _etudiant: Etudiant;

    get etudiant(): Etudiant {
        if (this._etudiant == null) {
            this._etudiant = new Etudiant();
        }
        return this._etudiant;
    }

    set etudiant(value: Etudiant) {
        this._etudiant = value;
    }

    private _quiz: Quiz;

    get quiz(): Quiz {
        if (this._quiz == null) {
            this._quiz = new Quiz();
        }
        return this._quiz;
    }

    set quiz(value: Quiz) {
        this._quiz = value;
    }

    private _section: Section;

    get section(): Section {
        if (this._section == null) {
            this._section = new Section();
        }
        return this._section;
    }

    set section(value: Section) {
        this._section = value;
    }

    private _quizSelct: Quiz;

    get quizSelct(): Quiz {
        if (this._quizSelct == null) {
            this._quizSelct = new Quiz();
        }
        return this._quizSelct;
    }

    set quizSelct(value: Quiz) {
        this._quizSelct = value;
    }

    private _quizItems: Array<Quiz>;

    get quizItems(): Array<Quiz> {
        if (this._quizItems == null) {
            this._quizItems = new Array<Quiz>();
        }
        return this._quizItems;
    }

    set quizItems(value: Array<Quiz>) {
        this._quizItems = value;
    }

    private _items: Array<Question>;

    get items(): Array<Question> {
        if (this._items == null) {
            this._items = new Array<Question>();
        }
        return this._items;
    }

    set items(value: Array<Question>) {
        this._items = value;
    }

    private _selected: Question;

    get selected(): Question {
        if (this._selected == null) {
            this._selected = new Question();
        }
        return this._selected;
    }

    set selected(value: Question) {
        this._selected = value;
    }

    private _reponses: Array<Reponse>;

    get reponses(): Array<Reponse> {
        if (this._reponses == null) {
            this._reponses = new Array<Reponse>();
        }
        return this._reponses;
    }

    set reponses(value: Array<Reponse>) {
        this._reponses = value;
    }

    private _quizsEtudiant: Array<QuizEtudiant>;

    get quizsEtudiant(): Array<QuizEtudiant> {
        if (this._quizsEtudiant == null) {
            this._quizsEtudiant = new Array<QuizEtudiant>();
        }
        return this._quizsEtudiant;
    }

    set quizsEtudiant(value: Array<QuizEtudiant>) {
        this._quizsEtudiant = value;
    }

    private _quizEtudiant: QuizEtudiant;

    get quizEtudiant(): QuizEtudiant {
        if (this._quizEtudiant == null) {
            this._quizEtudiant = new QuizEtudiant();
        }
        return this._quizEtudiant;
    }

    set quizEtudiant(value: QuizEtudiant) {
        this._quizEtudiant = value;
    }

    private _correctAnswers: Array<Reponse>;

    get correctAnswers(): Array<Reponse> {
        if (this._correctAnswers == null) {
            this._correctAnswers = new Array<Reponse>();
        }
        return this._correctAnswers;
    }

    set correctAnswers(value: Array<Reponse>) {
        this._correctAnswers = value;
    }

    private _reponseEtudiant: ReponseEtudiant;

    get reponseEtudiant(): ReponseEtudiant {
        if (this._reponseEtudiant == null) {
            this._reponseEtudiant = new ReponseEtudiant();
        }
        return this._reponseEtudiant;
    }

    set reponseEtudiant(value: ReponseEtudiant) {
        this._reponseEtudiant = value;
    }

    private _reponsesEtudiant: Array<ReponseEtudiant>;

    get reponsesEtudiant(): Array<ReponseEtudiant> {
        if (this._reponsesEtudiant == null) {
            this._reponsesEtudiant = new Array<ReponseEtudiant>();
        }
        return this._reponsesEtudiant;
    }

    set reponsesEtudiant(value: Array<ReponseEtudiant>) {
        this._reponsesEtudiant = value;
    }

    private _quizEtudiantList: QuizEtudiant;

    get quizEtudiantList(): QuizEtudiant {
        if (this._quizEtudiantList == null) {
            this._quizEtudiantList = new QuizEtudiant();
        }
        return this._quizEtudiantList;
    }

    set quizEtudiantList(value: QuizEtudiant) {
        this._quizEtudiantList = value;
    }

    private _etudiantsClassroom: Array<EtudiantClassRoom>;

    get etudiantsClassroom(): Array<EtudiantClassRoom> {
        if (this._etudiantsClassroom == null) {
            this._etudiantsClassroom = new Array<EtudiantClassRoom>();
        }
        return this._etudiantsClassroom;
    }

    set etudiantsClassroom(value: Array<EtudiantClassRoom>) {
        this._etudiantsClassroom = value;
    }

    private _quizsClassroom: Array<QuizClassRoom>;

    get quizsClassroom(): Array<QuizClassRoom> {
        if (this._quizsClassroom == null) {
            this._quizsClassroom = new Array<QuizClassRoom>();
        }
        return this._quizsClassroom;
    }

    set quizsClassroom(value: Array<QuizClassRoom>) {
        this._quizsClassroom = value;
    }

    private _selectedQuizClassroom: QuizClassRoom;

    get selectedQuizClassroom(): QuizClassRoom {
        if (this._selectedQuizClassroom == null) {
            this._selectedQuizClassroom = new QuizClassRoom();
        }
        return this._selectedQuizClassroom;
    }

    set selectedQuizClassroom(value: QuizClassRoom) {
        this._selectedQuizClassroom = value;
    }

    private _selectedClassroom: EtudiantClassRoom;

    get selectedClassroom(): EtudiantClassRoom {
        if (this._selectedClassroom == null) {
            this._selectedClassroom = new EtudiantClassRoom();
        }
        return this._selectedClassroom;
    }

    set selectedClassroom(value: EtudiantClassRoom) {
        this._selectedClassroom = value;
    }

    private _reponsesEtudiantList: Array<ReponseEtudiant>;

    get reponsesEtudiantList(): Array<ReponseEtudiant> {
        if (this._reponsesEtudiantList == null) {
            this._reponsesEtudiantList = new Array<ReponseEtudiant>();
        }
        return this._reponsesEtudiantList;
    }

    set reponsesEtudiantList(value: Array<ReponseEtudiant>) {
        this._reponsesEtudiantList = value;
    }

    private _questionView: Question;

    get questionView(): Question {
        if (this._questionView == null) {
            this._questionView = new Question();
        }
        return this._questionView;
    }

    set questionView(value: Question) {
        this._questionView = value;
    }

    private _reponsesView: Array<Reponse>;

    get reponsesView(): Array<Reponse> {
        if (this._reponsesView == null) {
            this._reponsesView = new Array<Reponse>();
        }
        return this._reponsesView;
    }

    set reponsesView(value: Array<Reponse>) {
        this._reponsesView = value;
    }

    private _reponsesEtudiantView: Array<ReponseEtudiant>;

    get reponsesEtudiantView(): Array<ReponseEtudiant> {
        if (this._reponsesEtudiantView == null) {
            this._reponsesEtudiantView = new Array<ReponseEtudiant>();
        }
        return this._reponsesEtudiantView;
    }

    set reponsesEtudiantView(value: Array<ReponseEtudiant>) {
        this._reponsesEtudiantView = value;
    }

    private _correctAnswerView: Array<Reponse>;

    get correctAnswerView(): Array<Reponse> {
        if (this._correctAnswerView == null) {
            this._correctAnswerView = new Array<Reponse>();
        }
        return this._correctAnswerView;
    }

    set correctAnswerView(value: Array<Reponse>) {
        this._correctAnswerView = value;
    }

    private _viewDialogQuiz: boolean;

    get viewDialogQuiz(): boolean {
        return this._viewDialogQuiz;
    }

    set viewDialogQuiz(value: boolean) {
        this._viewDialogQuiz = value;
    }

    private _selectedQuiz: Quiz;

    get selectedQuiz(): Quiz {
        if (this._selectedQuiz == null) {
            this._selectedQuiz = new Quiz();
        }
        return this._selectedQuiz;
    }

    set selectedQuiz(value: Quiz) {
        this._selectedQuiz = value;
    }

    private _myAnswer: Reponse;

    get myAnswer(): Reponse {
        if (this._myAnswer == null) {
            this._myAnswer = new Reponse();
        }
        return this._myAnswer;
    }

    set myAnswer(value: Reponse) {
        this._myAnswer = value;
    }

    private _numReponses = 0;

    get numReponses(): number {
        return this._numReponses;
    }

    set numReponses(value: number) {
        this._numReponses = value;
    }

    private _numCorrectAnswers = 0;

    get numCorrectAnswers(): number {
        return this._numCorrectAnswers;
    }

    set numCorrectAnswers(value: number) {
        this._numCorrectAnswers = value;
    }

    private _numQuestion = 1;

    get numQuestion(): number {
        return this._numQuestion;
    }

    set numQuestion(value: number) {
        this._numQuestion = value;
    }

    private _passerQuiz: string;

    get passerQuiz(): string {
        return this._passerQuiz;
    }

    set passerQuiz(value: string) {
        this._passerQuiz = value;
    }

    private _quizView: boolean;

    get quizView(): boolean {
        return this._quizView;
    }

    set quizView(value: boolean) {
        this._quizView = value;
    }

    private _result: any;

    get result(): any {
        return this._result;
    }

    set result(value: any) {
        this._result = value;
    }

    public findEtudiant(): Observable<Etudiant> {
        return this.http.get<Etudiant>(this.url + 'etudiant/ref/e1');
    }

    public findQuiz(): Observable<Quiz> {
        return this.http.get<Quiz>(this.url + 'quiz/ref/quiz1');
    }

    public findFirstQuestion(): Observable<Question> {
        return this.http.get<Question>(this.url + 'question/numero/1');
    }

    /////////////////////
    public findQuestion(quiz: string, numero: number): Observable<Question> {
        return this.http.get<Question>(this.url + 'question/quiz/ref/' + quiz + '/numero/' + numero);
    }

    public findAllQuestions(quiz: string): Observable<Array<Question>> {
        return this.http.get<Array<Question>>(this.url + 'question/quiz/ref/' + quiz);
    }

    public findReponses(question: number): Observable<Array<Reponse>> {
        return this.http.get<Array<Reponse>>(this.url + 'reponse/question/id/' + question);
    }

    public findCorrectAnswers(questionId: number): Observable<Array<Reponse>> {
        return this.http.get<Array<Reponse>>(this.url + 'reponse/criteria/id/' + questionId);
    }

    public findQuizBySection(id: number): Observable<Quiz> {
        return this.http.get<Quiz>(this.url + 'quiz/section/id/' + id);
    }

    public findQuizEtudiantByQuiz(ref: string): Observable<Array<QuizEtudiant>> {
        return this.http.get<Array<QuizEtudiant>>(this.url + 'quizEtudiant/quiz/ref/' + ref);
    }

    public deleteQuizEtudiant(quizEtudiant: QuizEtudiant): Observable<QuizEtudiant> {
        return this.http.delete<QuizEtudiant>(this.url + 'quizEtudiant/id/' + quizEtudiant.id);
    }

///////////////////
    public findAllQuizEtudiant(): Observable<Array<QuizEtudiant>> {
        return this.http.get<Array<QuizEtudiant>>(this.url + 'quizEtudiant/');
    }

    public findFirstQuizEtudiant(): Observable<QuizEtudiant> {
        return this.http.get<QuizEtudiant>(this.url + 'quizEtudiant/ref/qe1');
    }

    public findQuizSection(): Observable<Quiz> {
        return this.http.get<Quiz>(this.url + 'quiz/section/id/' + this.section.id);
    }

    public insertQuizEtudiant(): Observable<QuizEtudiant> {
        return this.http.post<QuizEtudiant>(this.url + 'quizEtudiant/', this.quizEtudiant);
    }

    public insertReponseEtudiant(reponseEtudiant: ReponseEtudiant): Observable<ReponseEtudiant> {
        return this.http.post<ReponseEtudiant>(this.url + 'reponseEtudiant/', reponseEtudiant);
    }

    public findAllReponseEtudiant(): Observable<Array<ReponseEtudiant>> {
        return this.http.get<Array<ReponseEtudiant>>(this.url + 'reponseEtudiant/');
    }

    public findFirstReponseEtudiant(): Observable<ReponseEtudiant> {
        return this.http.get<ReponseEtudiant>(this.url + 'reponseEtudiant/ref/re1');
    }

    public findMyAnswer(id: number): Observable<Reponse> {
        return this.http.get<Reponse>(this.url + 'reponse/id/' + id);
    }

    public updateQuizEtudiant(): Observable<QuizEtudiant> {
        return this.http.put<QuizEtudiant>(this.url + 'quizEtudiant/', this.quizEtudiant);
    }

    public findEtudiantClassRoom(etudiant: Etudiant): Observable<Array<EtudiantClassRoom>> {
        return this.http.get<Array<EtudiantClassRoom>>(this.url + 'etudiant-classRoom/etudiant/ref/' + etudiant.ref);
    }

    public findQuizClassRoom(classroom: ClassRoom): Observable<Array<QuizClassRoom>> {
        return this.http.get<Array<QuizClassRoom>>(this.url + 'quiz-classRoom/id/' + classroom.id);
    }

    public findQuizEtudiant(etudiant: Etudiant, quiz: Quiz): Observable<QuizEtudiant> {
        return this.http.get<QuizEtudiant>(this.url + 'quizEtudiant/etudiant/' + etudiant.ref + '/quiz/' + quiz.ref);
    }

    public findReponseEtudiant(quizEtudiant: QuizEtudiant): Observable<Array<ReponseEtudiant>> {
        return this.http.get<Array<ReponseEtudiant>>(this.url + 'reponseEtudiant/quizEtudiant/ref/' + quizEtudiant.ref);
    }

    public findMyReponseEtudiant(quizEtudiant: QuizEtudiant, reponse: Reponse): Observable<ReponseEtudiant> {
        // tslint:disable-next-line:max-line-length
        return this.http.get<ReponseEtudiant>(this.url + 'reponseEtudiant/critere/quizEtudiant/{refQuizEtudiant}/reponse/{refReponse}?refQuizEtudiant=' + quizEtudiant.ref + '&refReponse=' + reponse.ref);
    }

    public findQuestionByNumero(numero: number): Observable<Question> {
        return this.http.get<Question>(this.url + 'question/numero/' + numero);
    }

    public findReponseByNumero(numero: number): Observable<Array<Reponse>> {
        return this.http.get<Array<Reponse>>(this.url + 'reponse/question/numero/' + numero);
    }

    public findReponseEtudiantByNumero(quizEtudiant: QuizEtudiant, numero: number): Observable<Array<ReponseEtudiant>> {
        // tslint:disable-next-line:max-line-length
        return this.http.get<Array<ReponseEtudiant>>(this.url + 'reponseEtudiant/creteria/quizEtudiant/' + quizEtudiant.ref + '/question/' + numero);
    }

    public findCorrectAnswersByNumero(numero: number): Observable<Array<Reponse>> {
        return this.http.get<Array<Reponse>>(this.url + 'reponse/criteria/numero/' + numero);
    }

    public findQuizBySectionId(section: Section): Observable<Quiz> {
        return this.http.get<Quiz>(this.url + 'quiz/section/id/' + section.id);
    }

    public findAllQuiz(): Observable<Array<Quiz>> {
        return this.http.get<Array<Quiz>>(this.url + 'quiz/');
    }

    public translate(word: string): Observable<any> {
        // @ts-ignore
        return this.http.get<string>('http://localhost:8036/learn/TranslateEnAr/text/' + word, {responseType: 'text'});
    }
}
