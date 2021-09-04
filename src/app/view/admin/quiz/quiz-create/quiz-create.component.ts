import {Component, OnInit} from '@angular/core';
import {TypeDeQuestion} from '../../../../controller/model/type-de-question.model';
import {QuizCreateService} from '../../../../controller/service/quiz-create.service';


@Component({
    selector: 'app-quiz-create',
    templateUrl: './quiz-create.component.html',
    styleUrls: ['./quiz-create.component.scss']
})
export class QuizCreateAdminComponent implements OnInit {

    value: number = 10;
    typesQuestion: TypeDeQuestion[];
    typeQuestion: TypeDeQuestion;

    constructor(private service: QuizCreateService) {
    }

    get types(): Array<TypeDeQuestion> {
        return this.service.types;
    }

    set types(value: Array<TypeDeQuestion>) {
        this.service.types = value;
    }

    get type(): TypeDeQuestion {
        return this.service.type;
    }

    set type(value: TypeDeQuestion) {
        this.service.type = value;
    }

    ngOnInit(): void {
        this.service.findAllTypes().subscribe(
            data => {
                this.types = data;
                this.typesQuestion = [];
                for (var i = 0; i < this.types.length; i++) {
                    this.typesQuestion.push({lib: this.types[i].lib, ref: this.types[i].ref, id: this.types[i].id},);
                }
                console.log(this.typesQuestion);
            });
        /*this.typesQuestion = [
            'Unique choice',
            'Multiple choice',
            'Input'
        ];
        this.typeQuestion = 'Input';*/
    }

}
