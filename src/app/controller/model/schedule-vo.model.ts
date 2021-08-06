import {Prof} from "./prof.model";

export class ScheduleVo {
    public id: number;
    public ref: string;
    public title: string;
    public start = new Date();
    public end = new Date();
    public color: string;
    public prof = new Prof();
}
