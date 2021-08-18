import {Injectable} from '@angular/core';
import {Reponse} from '../model/reponse.model';
import {Question} from '../model/question.model';
import {HttpClient} from '@angular/common/http';
import {TypeDeQuestion} from '../model/type-de-question.model';
import {Quiz} from '../model/quiz.model';
import {Observable} from 'rxjs';
import {QuizConfig} from '../model/quiz-config.model';
import {Section} from '../model/section.model';
import {MessageService} from 'primeng/api';




@Injectable({
    providedIn: 'root'
})
export class QuizService {


    private _selected: Quiz;
    private _items: Array<Quiz>;
    private _qnprogress: number;
    private _reponse: Reponse;
    private _viewDialog: boolean;
    private _timer;
    private _button: string;
    private _typeDeQuestion: TypeDeQuestion;
    private _reponses: Array<Reponse>;
    private _types: Array<TypeDeQuestion>;
    private _question: Question;
    private _questions: Array<Question>;
    public _url = 'http://localhost:8036/';
    public _urlQuestion = 'learn/question';
    private _urlReponse = 'learn/reponse';
    public _urlType = 'learn/TypeDeQuestion';
    private _urlQuiz = 'learn/quiz';
    private _j = 0;
    private _createDialog: boolean;
    private _configuration: QuizConfig;
    private _configurations: Array<QuizConfig>;
    private _seconds: number;
    private _numCorrectAnswers = 0;
    private _correctAnswers: Array<Reponse>;
    private _typeQuestion: string;
    private _typeReponse: string;
    private _numReponses = 0;
    private _myAnswer: Reponse;
    private _numQuestion = 1;
    private _sections: Array<Section>;
    private _sectionSelected: Section;
    private _refQuiz: string;
    private _idQst: number;
    private _questionNumero: number = 1;
    private _reponseNumero: number = 1;
    private nombreReponseJuste: number = 0;
    private _viewDialogType: boolean;


    get viewDialogType(): boolean {
        return this._viewDialogType;
    }

    set viewDialogType(value: boolean) {
        this._viewDialogType = value;
    }

    get questionNumero(): number {
        return this._questionNumero;
    }

    set questionNumero(value: number) {
        this._questionNumero = value;
    }

    get reponseNumero(): number {
        return this._reponseNumero;
    }

    set reponseNumero(value: number) {
        this._reponseNumero = value;
    }

    get idQst(): number {
        return this._idQst;
    }

    set idQst(value: number) {
        this._idQst = value;
    }

    get refQuiz(): string {
        return this._refQuiz;
    }

    set refQuiz(value: string) {
        this._refQuiz = value;
    }

    get sectionSelected(): Section {
        if (this._sectionSelected == null){
            this._sectionSelected = new Section();
        }
        return this._sectionSelected;
    }

    set sectionSelected(value: Section) {
        this._sectionSelected = value;
    }

    get numReponses(): number {
        return this._numReponses;
    }

    set numReponses(value: number) {
        this._numReponses = value;
    }

    get typeReponse(): string {
        return this._typeReponse;
    }

    set typeReponse(value: string) {
        this._typeReponse = value;
    }

    get typeQuestion(): string {
        return this._typeQuestion;
    }

    set typeQuestion(value: string) {
        this._typeQuestion = value;
    }
    get configuration(): QuizConfig {
        if (this._configuration == null){
            this._configuration = new QuizConfig();
        }
        return this._configuration;
    }

    set configuration(value: QuizConfig) {
        this._configuration = value;
    }

    get configurations(): Array<QuizConfig> {
        if (this._configurations == null){
            this._configurations = new Array<QuizConfig>();
        }
        return this._configurations;
    }

    set configurations(value: Array<QuizConfig>) {
        this._configurations = value;
    }

    get createDialog(): boolean {
        return this._createDialog;
    }

    set createDialog(value: boolean) {
        this._createDialog = value;
    }
    get viewDialog(): boolean {
        return this._viewDialog;
    }

    set viewDialog(value: boolean) {
        this._viewDialog = value;
    }

    get correctAnswers(): Array<Reponse> {
        if (this._correctAnswers == null){
            this._correctAnswers = new Array<Reponse>();
        }
        return this._correctAnswers;
    }

    set correctAnswers(value: Array<Reponse>) {
        this._correctAnswers = value;
    }
    get type(): TypeDeQuestion {

        return this._typeDeQuestion;
    }

    set type(value: TypeDeQuestion) {
        this._typeDeQuestion = value;
    }

    get numCorrectAnswers(): number {
        return this._numCorrectAnswers;
    }

    set numCorrectAnswers(value: number) {
        this._numCorrectAnswers = value;
    }
    get reponse(): Reponse {
if (this._reponse == null){
    this._reponse = new Reponse();
}
return this._reponse;
    }

    set reponse(value: Reponse) {
        this._reponse = value;
    }

    get reponses(): Array<Reponse> {
        if (this._reponses == null){
            this._reponses = new Array<Reponse>();
        }
        return this._reponses;
    }

    set reponses(value: Array<Reponse>) {
        this._reponses = value;
    }

    get question(): Question {
 if (this._question == null){
     this._question = new Question();
 }
 return this._question;
    }

    set question(value: Question) {
        this._question = value;
    }
    get sections(): Array<Section> {
        if (this._sections == null){
            this._sections = new Array<Section>();
        }
        return this._sections;
    }

    set sections(value: Array<Section>) {
        this._sections = value;
    }
    get myAnswer(): Reponse {
        return this._myAnswer;
    }

    set myAnswer(value: Reponse) {
        this._myAnswer = value;
    }


    get numQuestion(): number {
        return this._numQuestion;
    }

    set numQuestion(value: number) {
        this._numQuestion = value;
    }
    get questions(): Array<Question> {
   if (this._questions == null){
       this._questions = new Array<Question>();
   }
   return this._questions;
    }

    set questions(value: Array<Question>) {
        this._questions = value;
    }

    constructor(private http: HttpClient, private messageService: MessageService,) {
    }

    get types(): Array<TypeDeQuestion> {

        return this._types;
    }

    set types(value: Array<TypeDeQuestion>) {
        this._types = value;
    }

    get selected(): Quiz {
if (this._selected == null){
    this._selected = new Quiz();
}
return this._selected;
    }

    set selected(value: Quiz) {
        this._selected = value;
    }


    get items(): Array<Quiz> {
        return this._items;
    }

    set items(value: Array<Quiz>) {
        this._items = value;
    }
    get j(): number {
        return this._j;
    }

    set j(value: number) {
        this._j = value;
    }

    get button(): string {
        return this._button;
    }

    set button(value: string) {
        this._button = value;
    }

    get qnprogress(): number {
        return this._qnprogress;
    }

    set qnprogress(value: number) {
        this._qnprogress = value;
    }


    get timer() {
        return this._timer;
    }

    set timer(value) {
        this._timer = value;
    }

    get seconds(): number {
        return this._seconds;
    }

    set seconds(value: number) {
        this._seconds = value;
    }


    shuffle(reponses: Array<Reponse>) {
        let currentIndex = reponses.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = reponses[currentIndex];
            reponses[currentIndex] = reponses[randomIndex];
            reponses[randomIndex] = temporaryValue;
        }
        return reponses;
    }
    shuffleQuestion(questions: Array<Question>) {
        let currentIndex = questions.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = questions[currentIndex];
            questions[currentIndex] = questions[randomIndex];
            questions[randomIndex] = temporaryValue;
        }
        return questions;
    }
    public getReponses(): Observable<Array<Reponse>> {
        return this.http.get<any>(this._url + this._urlReponse + '/');
    }
public saveConfig(): Observable<QuizConfig>{
        return this.http.post<QuizConfig>(this._url + 'learn/quizConfig/' , this.configuration);
}
public findConfig(): Observable<Array<QuizConfig>>{
        return this.http.get<Array<QuizConfig>>(this._url + 'learn/quizConfig/');
}
    public itemChecked(event: any) {
        if (event.target.checked) {
            this.shuffle(this.question.reponses);
        }
    }



    /*public saveQuestion(): Observable<Question> {
        return this.http.post<Question>(this._url + this._urlQuestion + '/', this.question);
    }*/

    public save(): Observable<Quiz> {
        return this.http.post<Quiz>(this._url + this._urlQuiz + '/save/', this.selected);
    }

    public edit(): Observable<Question> {
        return this.http.put<Question>(this._url + this._urlQuestion + '/', this.question);
    }

    public saveReponse(): Observable<Reponse>{
        return this.http.post<Reponse>(this._url + this._urlReponse + '/' , this.reponse);
    }
    public findSections(): Observable<Array<Section>>{
        return this.http.get<Array<Section>>(this._url + 'learn/section/');
    }
    public findIndexById(id: number): number {
        let index = -1;
        for (let i = 0; i < this.questions.length; i++) {
            if (this.questions[i].id === id) {
                index = i;
                break;
            }
        }
        return index;
    }

    validateForm() {
        // @ts-ignore
        const x = document.forms.myForm.fname.value;

        if (x == '' || x == null) {
            alert('Name must be filled out');
            return false;
        }
    }

    public addReponse() {

        if(this.question.typeDeQuestion.ref == 't1')
        {
            const cloneReponse = JSON.parse(JSON.stringify(this.reponse));
            this.question.reponses.push(cloneReponse);
            this.reponse = null;
            this.reponseNumero = this.reponseNumero + 1;
            this.reponse.numero = this.reponseNumero;
            for (let i = 0 ; i < this.question.reponses.length ; i++)
            {
                if(this.question.reponses[i].etatReponse == 'true')
                {
                    this.nombreReponseJuste = this.nombreReponseJuste + 1;
                }
            }
            if(this.nombreReponseJuste == 0)
            {
                this.reponse.etatReponse = 'true';
            }
            else{
                this.reponse.etatReponse = 'false';

            }
        }
        else if(this.question.typeDeQuestion.ref == 't2')
        {
            const cloneReponse = JSON.parse(JSON.stringify(this.reponse));
            this.question.reponses.push(cloneReponse);
            this.reponse = null;
            this.reponseNumero = this.reponseNumero + 1;
            this.reponse.numero = this.reponseNumero;
            this.reponse.etatReponse = 'true';
        }
        else
        {
            if(this.question.reponses.length == 0)
            {
                const cloneReponse = JSON.parse(JSON.stringify(this.reponse));
                this.question.reponses.push(cloneReponse);
                this.reponse = null;
                this.reponseNumero = this.reponseNumero + 1;
                this.reponse.numero = this.reponseNumero;
                this.reponse.etatReponse = 'true';
            }
            else if(this.question.reponses.length > 0)
            {
                this.viewDialogType = true;
            }
        }
    }

    public displayTime() {
        return Math.floor(this.seconds / 3600) + ' Hs  ' + Math.floor(this.seconds / 60) + '  :Min  ' + Math.floor(this.seconds % 60) + '  s';
    }


    public findType(): Observable<Array<TypeDeQuestion>> {
        return this.http.get<Array<TypeDeQuestion>>(this._url + this._urlType + '/');
    }

    public findQuizByRef(quiz: string) {
        console.log(this.refQuiz);
        this.http.get<any>(this._url + this._urlQuiz + '/ref/' + quiz).subscribe(
            data => {
                console.log(data);
                this.selected = data;
            }, error1 => {
                console.log('can\'t bring data from database');
            }
        );
    }
    public findAllByQuizRef(quiz: string): Observable<Array<Question>>
    {
        return this.http.get<Array<Question>>(this._url + this._urlQuestion + '/quiz/ref/' + quiz);
    }

    findAll(): void {
        this.http.get<any>(this._url + this._urlQuestion + '/').subscribe(
            data => {
                this.questions = data;

            }, error1 => {
                console.log('error finding data');
            }
        );
    }

    public findReponses(): Observable<Array<Reponse>>
    {
        this.numReponses = this.numReponses + 1;
        return this.http.get<Array<Reponse>>('http://localhost:8036/learn/reponse/question/numero/'  + this.numReponses);
    }

    public choixSelected(): void {
        console.log(this.types);
        for (let i = 0; i < this.types.length; i++) {
            // tslint:disable-next-line:triple-equals
            if (this.types[i].lib == this.question.typeDeQuestion.lib) {
                // @ts-ignore
                this.question.typeDeQuestion = this.clone(this.types[i]);
                console.log(this.question.typeDeQuestion.lib);
            }
        }
        console.log(this.question);
        console.log(this.types);
    }

    public quizSelected(): void {
        console.log(this.items);
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].ref == this.question.quiz.ref) {
                // @ts-ignore
                this.question.quiz = this.clone(this.items[i]);
                console.log(this.question.quiz.ref);
            }
        }
        console.log(this.question);
        console.log(this.items);
    }

    public defaultchecked() {
        this.reponse.etatReponse = 'Vrai';
    }

    checked(event: any) {
        if (event.target.checked) {
            this.reponse.etatReponse = 'true';
        }
    }

    public checkedFalse(event: any) {
        if (event.target.checked) {
            this.reponse.etatReponse = 'false';
        }
    }


    public deleteCard(index: number) {
        this.questions.splice(index, 1);
    }

    delete(reponse: Reponse) {
        const index = this.question.reponses.findIndex(c => c.lib === reponse.lib);
        if (index !== -1){
            this.question.reponses.splice(index, 1);
        }
    }

    public findReponseIndexById(id: number): number {
        let index = -1;
        for (let i = 0; i < this.reponses.length; i++) {
            if (this.reponses[i].id === id) {
                index = i;
                break;
            }
        }
        return index;
    }
    ProgressBar(event: any) {
        const p = document.getElementById('progressBar');
        if (event.target.checked){
            p.style.visibility = 'visible';
        }else {
            p && p.style.visibility == 'hidden';
        }
    }

    public findCorrectAnswers(question: number): Observable<Array<Reponse>>
    {
        this.numCorrectAnswers = this.numCorrectAnswers + 1;
        return this.http.get<Array<Reponse>>(this._url + this._urlReponse + '/criteria/id/' + question);
    }
    public findFirstQuestion(): Observable<Question>
    {
        return this.http.get<Question>(this._url + this._urlQuestion + '/numero/1');
    }
    public findMyAnswer(ref: string): Observable<Reponse>
    {
        return this.http.get<Reponse>(this._url + this._urlReponse +  '/ref/' + ref);
    }

    public findNextQuestion(): Observable<Question>
    {
        this.numQuestion = this.numQuestion + 1;
        return this.http.get<Question>(this._url + this._urlQuestion + '/numero/' + this.numQuestion);
    }


public findQuiz(): Observable<Array<Quiz>>{
        return this.http.get<Array<Quiz>>(this._url + this._urlQuiz + '/');
}

/////////////////////////////////////////////////////////
    public findQuizSection(section: number): Observable<Quiz>
    {
        return this.http.get<Quiz>('http://localhost:8036/learn/quiz/section/id/' + section);
    }

    public findQuestionByQuiz(quiz: Quiz): Observable<Array<Question>>
    {
        return this.http.get<Array<Question>>('http://localhost:8036/learn/question/quiz/ref/' + quiz.ref);
    }

    public findAnswersByQuestion(question: Question): Observable<Array<Reponse>>
    {
        return this.http.get<Array<Reponse>>('http://localhost:8036/learn/reponse/question/id/' + question.id);
    }

    public deleteQuiz(ref: string): Observable<Quiz>
    {
        return this.http.delete<Quiz>('http://localhost:8036/learn/quiz/ref/' + ref);
    }

    public updateQuiz(): Observable<Quiz>
    {
        return this.http.put<Quiz>('http://localhost:8036/learn/quiz/' , this.selected);
    }

    public deleteQuestion(id: string): Observable<Question>
    {
        return this.http.delete<Question>('http://localhost:8036/learn/question/id/' + id);
    }

    public saveQuetion(): Observable<Question>
    {
        return this.http.post<Question>('http://localhost:8036/learn/question/' , this.question);
    }

    public updateQuestion(): Observable<Question>
    {
        return this.http.put<Question>('http://localhost:8036/learn/question/' , this.question);
    }

    public findQuestionById(id: string): Observable<Question>
    {
    return this.http.get<Question>('http://localhost:8036/learn/question/id/' + id);
    }

    public findAnswersByQuestionId(id: string): Observable<Array<Reponse>>
    {
        return this.http.get<Array<Reponse>>('http://localhost:8036/learn/reponse/question/id/' + id);
    }

    public deleteAnswer(id: number): Observable<Reponse>
    {
        return this.http.delete<Reponse>('http://localhost:8036/learn/reponse/id/' + id);
    }

    public saveAnswer(answer: Reponse): Observable<Reponse>
    {
        return this.http.post<Reponse>('http://localhost:8036/learn/reponse/save/' , answer);
    }
}

