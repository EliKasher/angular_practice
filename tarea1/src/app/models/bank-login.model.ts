import { EmailValidator } from "@angular/forms";

export class BankLogin {
    public nombre:string
    private rut:string;
    public email:string;
    private password:any;

    constructor(n:string, r:string, e:string, p:any) {
        this.nombre = n;
        this.rut = r;
        this.email = e;
        this.password = p;
    }
}