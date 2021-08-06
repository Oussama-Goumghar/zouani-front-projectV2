import {Injectable} from '@angular/core';
import {ScheduleProf} from '../model/calendrier-prof.model';
import {HttpClient} from '@angular/common/http';
import {ScheduleVo} from '../model/schedule-vo.model';
import {Observable} from 'rxjs';
import {Etudiant} from '../model/etudiant.model';
import {EtatEtudiantSchedule} from '../model/etat-etudiant-schedule.model';
import {CalendrierProf} from '../model/schedule-prof.model';
import {CalendrierVo} from '../model/calendrier-vo.model';
import {Prof} from '../model/prof.model';
import {LoginService} from './login.service';

@Injectable({
    providedIn: 'root'
})
export class ScheduleService {

    private _selected: CalendrierProf;
    private _items: Array<CalendrierProf>;
    private _selectedVo: CalendrierVo;
    private _itemsVo: Array<CalendrierVo>;
    private _etatEtudiantSchedule: Array<EtatEtudiantSchedule>;
    private _etudiant: Etudiant;
    private _displayBasic: boolean;
    private _events: any[];
    private _options: any;
    private _header: any;
    private _eventDialog: boolean;
    private _changedEvent: any;
    private _clickedEvent = null;
    private _createDialog: boolean;
    private _submitted: boolean;
private _students: Array<Etudiant>;
private _student: Etudiant;
private _professors: Array<Prof>;


    get student(): Etudiant {
        return this._student;
    }

    set student(value: Etudiant) {
        this._student = value;
    }

    get professors(): Array<Prof> {
        return this._professors;
    }

    set professors(value: Array<Prof>) {
        this._professors = value;
    }

    constructor(private http: HttpClient, private user: LoginService) {
    }
    get selectedVo(): CalendrierVo {
        return this._selectedVo;
    }

    set selectedVo(value: CalendrierVo) {
        this._selectedVo = value;
    }

    get itemsVo(): Array<CalendrierVo> {
        return this._itemsVo;
    }

    set itemsVo(value: Array<CalendrierVo>) {
        this._itemsVo = value;
    }
    get students(): Array<Etudiant> {
        if (this._students == null){
            this._students = new Array<Etudiant>();
        }
        return this._students;
    }

    set students(value: Array<Etudiant>) {
        this._students = value;
    }
get etatEtudiantSchedule(): Array<EtatEtudiantSchedule> {
        if (this._etatEtudiantSchedule == null){
            this._etatEtudiantSchedule = new Array<EtatEtudiantSchedule>();
        }
        return this._etatEtudiantSchedule;
    }

    set etatEtudiantSchedule(value: Array<EtatEtudiantSchedule>) {
        this._etatEtudiantSchedule = value;
    }


    get etudiant(): Etudiant {
        if (this._etudiant == null){
            this._etudiant = new Etudiant();
        }
        return this._etudiant;
    }

    set etudiant(value: Etudiant) {
        this._etudiant = value;
    }
    get displayBasic(): boolean {
        return this._displayBasic;
    }

    set displayBasic(value: boolean) {
        this._displayBasic = value;
    }

    get events(): any[] {
        return this._events;
    }

    set events(value: any[]) {
        this._events = value;
    }

    get options(): any {
        return this._options;
    }

    set options(value: any) {
        this._options = value;
    }
    get createDialog(): boolean {
        return this._createDialog;
    }

    set createDialog(value: boolean) {
        this._createDialog = value;
    }

    get submitted(): boolean {
        return this._submitted;
    }

    set submitted(value: boolean) {
        this._submitted = value;
    }

    get header(): any {
        return this._header;
    }

    set header(value: any) {
        this._header = value;
    }

    get eventDialog(): boolean {
        return this._eventDialog;
    }

    set eventDialog(value: boolean) {
        this._eventDialog = value;
    }

    get changedEvent(): any {
        return this._changedEvent;
    }

    set changedEvent(value: any) {
        this._changedEvent = value;
    }

    get clickedEvent(): any {
        return this._clickedEvent;
    }

    set clickedEvent(value: any) {
        this._clickedEvent = value;
    }
    get selected(): CalendrierProf {
        if (this._selected == null){
            this._selected =  new CalendrierProf();
        }
        return this._selected;
    }

    set selected(value: CalendrierProf) {
        this._selected = value;
    }

    get items(): Array<CalendrierProf> {
        if (this._items == null){
            this._items = new Array<CalendrierProf>();
        }
        return this._items;
    }

    set items(value: Array<CalendrierProf>) {
        this._items = value;
    }
    public findAll() {
        return this.http.get<Array<CalendrierVo>>('http://localhost:8036/learn/calendrierProf/vo/prof/').subscribe(data => {
            this.itemsVo = data;
            console.log(this.itemsVo);
        });
    }
    public findByStudent() {
        return this.http.get<Array<CalendrierVo>>('http://localhost:8036/learn/calendrierProf/vo/etudiant/id/' + this.selected.etudiant.id).subscribe(data => {
            this.itemsVo = data;
            console.log(this.itemsVo);
        });
    }
    public findByProf() {
        return this.http.get<Array<CalendrierVo>>('http://localhost:8036/learn/calendrierProf/vo/id/' + this.selected.prof.id).subscribe(data => {
            this.itemsVo = data;
            console.log(this.itemsVo);
        });
    }

public remove(){

        this.clickedEvent.remove();
}
public delete(): Observable<number>{
       return  this.http.delete<number>('http://localhost:8036/learn/calendrierProf/id' + this.selected.id);
}
    save() {
        this.eventDialog = false;
        this.selected.etudiant.nom = this.changedEvent.title;
        this.selected.startTime = this.changedEvent.startTime;
        this.selected.endTime = this.changedEvent.endTime;
        this.http.post<CalendrierProf>('http://localhost:8036/learn/calendrierProf/', this.selected).subscribe(
          data => {
              this.items.push({...data});
          }, error => {
              console.log('erreuuur');
        }
      );
        this.findByProf();
    }
public edit(): Observable<CalendrierProf>{
        return this.http.put<CalendrierProf>('http://localhost:8036/learn/calendrierProf/', this.selected);
}


    reset() {
        this.changedEvent.title = this.clickedEvent.title;
        this.changedEvent.start = this.clickedEvent.start;
        this.changedEvent.end = this.clickedEvent.end;
        this.changedEvent.prof.nom = this.clickedEvent.prof.nom;
    }
    public  addStudent(): Observable<CalendrierProf>{
        return this.http.post<CalendrierProf>('http://localhost:8036/learn/calendrierProf/', this.selected);
    }
public getStudents(): Observable<Array<Etudiant>>{
        return this.http.get<Array<Etudiant>>('http://localhost:8036/learn/etudiant/prof/id/' + this.selected.prof.id);
}
    public getAllStudents(): Observable<Array<Etudiant>>{
        return this.http.get<Array<Etudiant>>('http://localhost:8036/learn/etudiant/');
    }
public getProf(): Observable<Array<Prof>>{
        return this.http.get<Array<Prof>>('http://localhost:8036/learn/prof');
}

public findEtat(): Observable<Array<EtatEtudiantSchedule>>{
        return this.http.get<Array<EtatEtudiantSchedule>>('http://localhost:8036/learn/etatEtudiantSchedule/');
}


    public findIndexById(id: number): number {
        let index = -1;
        for (let i = 0; i < this.itemsVo.length; i++) {
            if (this.itemsVo[i].id === id) {
                index = i;
                break;
            }
        }
        return index;
    }


}
