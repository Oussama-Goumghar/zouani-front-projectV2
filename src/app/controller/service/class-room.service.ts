/* tslint:disable:variable-name */
import { Injectable } from '@angular/core';
import {ClassRoom} from '../model/class-room.model';
import {Prof} from '../model/prof.model';
import {HttpClient} from '@angular/common/http';
import {EtudiantClassRoom} from '../model/etudiant-class-room.model';
import {QuizClassRoom} from '../model/quiz-class-room.model';
import {Observable} from 'rxjs';
import {CategorieProf} from '../model/categorie-prof.model';
import {SalaryVo} from '../model/salary-vo.model';

@Injectable({
  providedIn: 'root'
})
export class ClassRoomService {

  constructor(private http: HttpClient) { }
  private _selectedclassRoom: ClassRoom;
  private _selectedsalaryVo: SalaryVo;
  private _selectedcategorieProf: CategorieProf;
  private _selectedetudiantClassRoom: EtudiantClassRoom;
  private _selectedquizClassRoom: QuizClassRoom;
  private _selectedprof: Prof;
  private _itemsclassRoom: Array<ClassRoom>;
  private _itemssalaryVo: Array<SalaryVo>;
  private _itemscategorieProf: Array<CategorieProf>;
  private _selectesclassRoom: Array<ClassRoom>;
  private _selectessalaryVo: Array<SalaryVo>;
  private _selectescategorieProf: Array<CategorieProf>;
  private _itemsprof: Array<Prof>;
  private _selectesprof: Array<Prof>;
  private _itemsetudiantClassRoom: Array<EtudiantClassRoom>;
  private _selectesetudiantClassRoom: Array<EtudiantClassRoom>;
  private _itemsquizClassRoom: Array<QuizClassRoom>;
  private _selectesquizClassRoom: Array<QuizClassRoom>;
  private _viewDialogEtudiant: boolean;
  private _viewDialogQuiz: boolean;
  private _submittedProf: boolean;
  private _viewDialogCategorie: boolean;


  get selectedsalaryVo(): SalaryVo {
    if (this._selectedsalaryVo == null){
      this._selectedsalaryVo = new SalaryVo();
    }
    return this._selectedsalaryVo;
  }

  set selectedsalaryVo(value: SalaryVo) {
    this._selectedsalaryVo = value;
  }

  get itemssalaryVo(): Array<SalaryVo> {
    if (this._itemssalaryVo == null){
      this._itemssalaryVo = new Array<SalaryVo>();
    }
    return this._itemssalaryVo;
  }

  set itemssalaryVo(value: Array<SalaryVo>) {
    this._itemssalaryVo = value;
  }

  get selectessalaryVo(): Array<SalaryVo> {
    if (this._selectessalaryVo == null){
      this._selectessalaryVo = new Array<SalaryVo>();
    }
    return this._selectessalaryVo;
  }

  set selectessalaryVo(value: Array<SalaryVo>) {
    this._selectessalaryVo = value;
  }

  get selectedclassRoom(): ClassRoom {
    if (this._selectedclassRoom == null){
      this._selectedclassRoom = new ClassRoom();
    }
    return this._selectedclassRoom;
  }

  set selectedclassRoom(value: ClassRoom) {
    this._selectedclassRoom = value;
  }

  get selectedcategorieProf(): CategorieProf {
    if (this._selectedcategorieProf == null){
      this._selectedcategorieProf = new CategorieProf();
    }
    return this._selectedcategorieProf;
  }

  set selectedcategorieProf(value: CategorieProf) {
    this._selectedcategorieProf = value;
  }

  get selectedetudiantClassRoom(): EtudiantClassRoom {
    if (this._selectedetudiantClassRoom == null){
      this._selectedetudiantClassRoom = new EtudiantClassRoom();
    }
    return this._selectedetudiantClassRoom;
  }

  set selectedetudiantClassRoom(value: EtudiantClassRoom) {
    this._selectedetudiantClassRoom = value;
  }

  get selectedquizClassRoom(): QuizClassRoom {
    if (this._selectedquizClassRoom == null){
      this._selectedquizClassRoom = new QuizClassRoom();
    }
    return this._selectedquizClassRoom;
  }

  set selectedquizClassRoom(value: QuizClassRoom) {
    this._selectedquizClassRoom = value;
  }

  get selectedprof(): Prof {
    if (this._selectedprof == null){
      this._selectedprof = new Prof();
    }
    return this._selectedprof;
  }

  set selectedprof(value: Prof) {
    this._selectedprof = value;
  }

  get itemsclassRoom(): Array<ClassRoom> {
    if (this._itemsclassRoom == null){
      this._itemsclassRoom = new Array<ClassRoom>();
    }
    return this._itemsclassRoom;
  }

  set itemsclassRoom(value: Array<ClassRoom>) {
    this._itemsclassRoom = value;
  }

  get itemscategorieProf(): Array<CategorieProf> {
    if (this._itemscategorieProf == null){
      this._itemscategorieProf = new Array<CategorieProf>();
    }
    return this._itemscategorieProf;
  }

  set itemscategorieProf(value: Array<CategorieProf>) {
    this._itemscategorieProf = value;
  }

  get selectesclassRoom(): Array<ClassRoom> {
    if (this._selectesclassRoom == null){
      this._selectesclassRoom = new Array<ClassRoom>();
    }
    return this._selectesclassRoom;
  }

  set selectesclassRoom(value: Array<ClassRoom>) {
    this._selectesclassRoom = value;
  }

  get selectescategorieProf(): Array<CategorieProf> {
    if (this._selectescategorieProf == null){
      this._selectescategorieProf = new Array<CategorieProf>();
    }
    return this._selectescategorieProf;
  }

  set selectescategorieProf(value: Array<CategorieProf>) {
    this._selectescategorieProf = value;
  }

  get itemsprof(): Array<Prof> {
    if (this._itemsprof == null){
      this._itemsprof = new Array<Prof>();
    }
    return this._itemsprof;
  }

  set itemsprof(value: Array<Prof>) {
    this._itemsprof = value;
  }

  get selectesprof(): Array<Prof> {
    if (this._selectesprof == null){
      this._selectesprof = new Array<Prof>();
    }
    return this._selectesprof;
  }

  set selectesprof(value: Array<Prof>) {
    this._selectesprof = value;
  }

  get itemsetudiantClassRoom(): Array<EtudiantClassRoom> {
    if (this._itemsetudiantClassRoom == null){
      this._itemsetudiantClassRoom = new Array<EtudiantClassRoom>();
    }
    return this._itemsetudiantClassRoom;
  }

  set itemsetudiantClassRoom(value: Array<EtudiantClassRoom>) {
    this._itemsetudiantClassRoom = value;
  }

  get selectesetudiantClassRoom(): Array<EtudiantClassRoom> {
    if (this._selectesetudiantClassRoom == null){
      this._selectesetudiantClassRoom = new Array<EtudiantClassRoom>();
    }
    return this._selectesetudiantClassRoom;
  }

  set selectesetudiantClassRoom(value: Array<EtudiantClassRoom>) {
    this._selectesetudiantClassRoom = value;
  }

  get itemsquizClassRoom(): Array<QuizClassRoom> {
    if (this._itemsquizClassRoom == null){
      this._itemsquizClassRoom = new Array<QuizClassRoom>();
    }
    return this._itemsquizClassRoom;
  }

  set itemsquizClassRoom(value: Array<QuizClassRoom>) {
    this._itemsquizClassRoom = value;
  }

  get selectesquizClassRoom(): Array<QuizClassRoom> {
    if (this._selectesquizClassRoom == null){
      this._selectesquizClassRoom = new Array<QuizClassRoom>();
    }
    return this._selectesquizClassRoom;
  }

  set selectesquizClassRoom(value: Array<QuizClassRoom>) {
    this._selectesquizClassRoom = value;
  }

  set viewDialogCategorie(value: boolean) {
    this._viewDialogCategorie = value;
  }

  get viewDialogCategorie(): boolean {
    return this._viewDialogCategorie;
  }

  get submittedProf(): boolean {
    return this._submittedProf;
  }

  set submittedProf(value: boolean) {
    this._submittedProf = value;
  }
  get viewDialogEtudiant(): boolean {
    return this._viewDialogEtudiant;
  }

  set viewDialogEtudiant(value: boolean) {
    this._viewDialogEtudiant = value;
  }

  get viewDialogQuiz(): boolean {
    return this._viewDialogQuiz;
  }

  set viewDialogQuiz(value: boolean) {
    this._viewDialogQuiz = value;
  }
  public findAllProf(): Observable<Array<Prof>> {
   return  this.http.get< Array<Prof> >('http://localhost:8036/learn/prof/');
  }
  public findAllClass(): Observable<Array<ClassRoom>> {
    return this.http.get< Array<ClassRoom> >('http://localhost:8036/learn/classRoom/');

  }
  public afficheClass(): Observable<Array<ClassRoom>> {
   return  this.http.get<Array<ClassRoom>>('http://localhost:8036/learn/classRoom/Prof/id/' + this.selectedprof.id );
  }
  public afficheEtudiant(): Observable<Array<EtudiantClassRoom>> {
  return   this.http.get<Array<EtudiantClassRoom>>('http://localhost:8036/learn/etudiant-classRoom/id/' + this.selectedclassRoom.id );
  }
  public afficheQuiz(): Observable<Array<QuizClassRoom>> {
   return  this.http.get<Array<QuizClassRoom>>('http://localhost:8036/learn/quiz-classRoom/id/' + this.selectedclassRoom.id );
  }
  public findAllCategorieProf(): Observable<Array<CategorieProf>> {
    return this.http.get< Array<CategorieProf> >('http://localhost:8036/learn/categorieprof/');

  }
  public findSalary(): Observable <SalaryVo> {
    return this.http.get<SalaryVo> ('http://localhost:8036/learn/salary/prof/id/' + this.selectedsalaryVo.prof.id );
  }
  public findSalaryByDate( ): Observable<SalaryVo> {
    // tslint:disable-next-line:max-line-length
    return this.http.get<SalaryVo> ('http://localhost:8036/learn/salary/mois/{mois}/annee/{annee}/prof/id/{id}?annee=' + this.selectedsalaryVo.annee + '&id=' + this.selectedsalaryVo.prof.id + '&mois=' + this.selectedsalaryVo.mois);
  }
  public findSalaryByDateAndProf(): Observable<SalaryVo> {
    console.log( (new Date().getMonth() + 1 ).toString());
    console.log((new Date().getFullYear().toString()));
    // tslint:disable-next-line:max-line-length
    return this.http.get<SalaryVo> ('http://localhost:8036/learn/salary/mois/{mois}/annee/{annee}/prof/id/{id}?annee=' + new Date().getFullYear().toString() + '&id=' + this.selectedsalaryVo.prof.id + '&mois=' + (new Date().getMonth() + 1 ).toString() );
  }
}
