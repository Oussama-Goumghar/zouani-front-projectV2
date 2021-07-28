import { Injectable } from '@angular/core';
import {Dictionary} from '../model/dictionary.model';
import {Observable} from 'rxjs';
import {LoginService} from './login.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  private _selected: Dictionary;
  private _selectedDict: Dictionary;
  private _items: Array<Dictionary>;
  private _itemsDict: Array<Dictionary>;
  private _editDialog: boolean;
  private _submitted: boolean;
  private _submittedDict: boolean;
  private _createDialogDict: boolean;
  private _selectes: Array<Dictionary>;
  constructor(private http: HttpClient, public serviceUser: LoginService) { }

  public findAll(): Observable<Array<Dictionary>> {
    return this.http.get<Array<Dictionary>>('http://localhost:8036/learn/dictionary/' + this.selected);
  }

  get submittedDict(): boolean {
    return this._submittedDict;
  }

  set submittedDict(value: boolean) {
    this._submittedDict = value;
  }

  get createDialogDict(): boolean {
    return this._createDialogDict;
  }

  set createDialogDict(value: boolean) {
    this._createDialogDict = value;
  }

  get itemsDict(): Array<Dictionary> {
    if (this._itemsDict == null){
      this._itemsDict = new Array<Dictionary>();
    }
    return this._itemsDict;
  }

  set itemsDict(value: Array<Dictionary>) {
    this._itemsDict = value;
  }

  get selectedDict(): Dictionary {
    if ( this._selectedDict == null){
      this._selectedDict = new Dictionary();
    }
    return this._selectedDict;
  }
  set selectedDict(value: Dictionary) {
    this._selectedDict = value;
  }

  get submitted(): boolean {
    return this._submitted;
  }
  public FindByWord(word: string): Observable<Dictionary> {
    console.log(this.serviceUser.etudiant.id);
    console.log(word);
    // tslint:disable-next-line:max-line-length
    return this.http.get<Dictionary >('http://localhost:8036/learn/dictionary/word/' + word + '/Etudiant/id/' + this.serviceUser.etudiant.id);
  }
  // tslint:disable-next-line:adjacent-overload-signatures
  set submitted(value: boolean) {
    this._submitted = value;
  }

  get editDialog(): boolean {
    return this._editDialog;
  }

  set editDialog(value: boolean) {
    this._editDialog = value;
  }
  get items(): Array<Dictionary> {
    return this._items;
  }

  set items(value: Array<Dictionary>) {
    this._items = value;
  }


  get selected(): Dictionary {
    if (this._selected == null){
      this._selected = new Dictionary ();
    }
    return this._selected;
  }

  set selected(value: Dictionary) {
    this._selected = value;
  }

  public save(): Observable<number> {
    return this.http.post<number>('http://localhost:8036/learn/dictionary/', this.selected);
  }

  get selectes(): Array<Dictionary> {
    return this._selectes;
  }

  set selectes(value: Array<Dictionary>) {
    this._selectes = value;
  }
}
