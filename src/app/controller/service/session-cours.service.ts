/* tslint:disable:variable-name */
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {SessionCours} from '../model/session-cours.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Etudiant} from '../model/etudiant.model';
import {Prof} from '../model/prof.model';

@Injectable({
  providedIn: 'root'
})
export class SessionCoursService {

private url = environment.baseUrl + 'session/';
  private _items: Array<SessionCours>;
  private _selectedItems: Array<SessionCours>;
  private _itemsProf: Array<Prof>;
  private _itemsEtudiant: Array<Etudiant>;
  private _selected: SessionCours;
  private _selectes: Array<SessionCours>;

  private _createDialog: boolean;
  private _editDialog: boolean;
  private _viewDialog: boolean;
  private _submitted: boolean;


  // constructor(private messageService: MessageService,
  //             private confirmationService: ConfirmationService, private http: HttpClient) {
  // }
  constructor(private http: HttpClient) {
  }
  findByCriteria(): Observable<Array<SessionCours>>{
    return this.http.post<Array<SessionCours>>('http://localhost:8036/learn/session/search', this.selected);
  }
  get itemsProf(): Array<Prof> {
    if (this._itemsProf == null){
      this._itemsProf = new Array<Prof>();
    }
    return this._itemsProf;
  }

  set itemsProf(value: Array<Prof>) {
    this._itemsProf = value;
  }

  get itemsEtudiant(): Array<Etudiant> {
    if (this._itemsEtudiant == null){
      this._itemsEtudiant = new Array<Etudiant>();
    }
    return this._itemsEtudiant;
  }

  set itemsEtudiant(value: Array<Etudiant>) {
    this._itemsEtudiant = value;
  }

  public findAll(): Observable<Array<SessionCours>> {
    return this.http.get<Array<SessionCours>>(this.url);
  }
  public findAllProf(): Observable<Array<Prof>> {
    return this.http.get<Array<Prof>>('http://localhost:8036/learn/prof/');
  }
  public findAllEtudiant(): Observable<Array<Etudiant>> {
    return this.http.get<Array<Etudiant>>('http://localhost:8036/learn/etudiant/');
  }
  public save(): Observable<SessionCours> {
    return this.http.post<SessionCours>(this.url, this.selected);
  }

  public edit(): Observable<SessionCours> {
    return this.http.put<SessionCours>(this.url, this.selected);
  }

  public update(session: SessionCours): Observable<SessionCours> {
    return this.http.put<SessionCours>(this.url, session);
  }

  public deleteByReference(): Observable<number> {
    return this.http.delete<number>(this.url + 'id/' + this.selected.id);
  }

  public deleteMultipleByReference(): Observable<number> {
    return this.http.post<number>(this.url + 'delete-multiple-by-id' , this.selectes);
  }

  public findIndexById(id: number): number {
    let index = -1;
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].id === id) {
        index = i;
        break;
      }
    }
    return index;
  }

  public deleteIndexById(id: number) {
    this.items.splice(this.findIndexById(id), 1);
  }

  public deleteMultipleIndexById() {
    for (const item of this.selectes){
      this.deleteIndexById(item.id);
    }
  }

  get items(): Array<SessionCours> {
    if (this._items == null){
      this._items = new Array<SessionCours>();
    }
    return this._items;
  }

  set items(value: Array<SessionCours>) {
    this._items = value;
  }

  get selectedItems(): Array<SessionCours> {
    if (this._selectedItems == null){
      this._selectedItems = new Array<SessionCours>();
    }
    return this._selectedItems;
  }

  set selectedItems(value: Array<SessionCours>) {
    this._selectedItems = value;
  }

  get selected(): SessionCours {
    if (this._selected == null){
      this._selected = new SessionCours();
    }
    return this._selected;
  }

  set selected(value: SessionCours) {
    this._selected = value;
  }

  get selectes(): Array<SessionCours> {
    if (this._selectes == null){
      this._selectes = new Array<SessionCours>();
    }
    return this._selectes;
  }

  set selectes(value: Array<SessionCours>) {
    this._selectes = value;
  }


  get createDialog(): boolean {
    return this._createDialog;
  }

  set createDialog(value: boolean) {
    this._createDialog = value;
  }

  get editDialog(): boolean {
    return this._editDialog;
  }

  set editDialog(value: boolean) {
    this._editDialog = value;
  }

  get submitted(): boolean {
    return this._submitted;
  }

  set submitted(value: boolean) {
    this._submitted = value;
  }

  get viewDialog(): boolean {
    return this._viewDialog;
  }

  set viewDialog(value: boolean) {
    this._viewDialog = value;
  }
}
