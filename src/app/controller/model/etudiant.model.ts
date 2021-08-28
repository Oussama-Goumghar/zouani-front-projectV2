import {Parcours} from './parcours.model';
import {QuizEtudiant} from './quiz-etudiant.model';
import {EtatInscription} from './etat-inscription.model';
import {Prof} from './prof.model';
import {Centre} from './centre.model';
import {EtatEtudiantSchedule} from './etat-etudiant-schedule.model';
import {ChatMessageDto} from './chatMessageDto';

export class Etudiant {
    public id: number;
    public ref: string;
    public nom: string;
    public prenom: string;
    public age: number;
    public login: string;
    public ville: string;
    public address: string;
    public gmail: string;
    public password: string;
    public parcours = new Parcours();
    public quizEtudiant = new Array<QuizEtudiant>();
    public etatEtudiantSchedule = new EtatEtudiantSchedule();
    public prof = new Prof();
    public image: string;
    public chatMessageDto = new Array<ChatMessageDto>();
}
