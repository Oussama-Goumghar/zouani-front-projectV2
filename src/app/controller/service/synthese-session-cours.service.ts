import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {SyntheseSessionCours} from '../model/synthese-session-cours.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SyntheseSessionCoursService {


    private url = environment.baseUrl + 'etat/';
    private _items: Array<SyntheseSessionCours>;
    private _selected: SyntheseSessionCours;
    private _selectes: Array<SyntheseSessionCours>;

    private _createDialog: boolean;
    private _editDialog: boolean;
    private _viewDialog: boolean;
    private _submitted: boolean;


    // constructor(private messageService: MessageService,
    //             private confirmationService: ConfirmationService, private http: HttpClient) {
    // }
    constructor(private http: HttpClient) {
    }

    public findAll(): Observable<Array<SyntheseSessionCours>> {
        return this.http.get<Array<SyntheseSessionCours>>(this.url);
    }

    public save(): Observable<SyntheseSessionCours> {
        return this.http.post<SyntheseSessionCours>(this.url, this.selected);
    }

    public edit(): Observable<SyntheseSessionCours> {
        return this.http.put<SyntheseSessionCours>(this.url, this.selected);
    }

    public deleteByReference(): Observable<number> {
        return this.http.delete<number>(this.url + 'reference/' + this.selected.reference);
    }

    public deleteMultipleByReference(): Observable<number> {
        return this.http.post<number>(this.url + 'delete-multiple-by-reference', this.selectes);
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
public lent():number{
        return this.items.length;
}


    public deleteIndexById(id: number) {
        this.items.splice(this.findIndexById(id), 1);
    }

    public deleteMultipleIndexById() {
        for (const item of this.selectes) {
            this.deleteIndexById(item.id);
        }
    }

    get items(): Array<SyntheseSessionCours> {
        if (this._items == null) {
            this._items = new Array<SyntheseSessionCours>();
        }
        return this._items;
    }

    set items(value: Array<SyntheseSessionCours>) {
        this._items = value;
    }

    get selected(): SyntheseSessionCours {
        if (this._selected == null) {
            this._selected = new SyntheseSessionCours();
        }
        return this._selected;
    }

    set selected(value: SyntheseSessionCours) {
        this._selected = value;
    }

    get selectes(): Array<SyntheseSessionCours> {
        if (this._selectes == null) {
            this._selectes = new Array<SyntheseSessionCours>();
        }
        return this._selectes;
    }



    set selectes(value: Array<SyntheseSessionCours>) {
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
