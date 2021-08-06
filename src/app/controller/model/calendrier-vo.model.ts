import {Prof} from './prof.model';

export class CalendrierVo {
    public id: number;
    public ref: string;
    public title: string;
    public prof = new Prof();
    public color: string;
    public startTime: string;
    public endTime: string;
    public startRecur: Date = new Date();
    public endRecur: Date =  new Date();
    public daysOfWeek = [];
}
