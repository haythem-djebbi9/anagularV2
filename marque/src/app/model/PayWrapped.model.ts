import { Pays } from './pays.model';
export class PayWrapper{
_embedded!: { pay: Pays[]};
}