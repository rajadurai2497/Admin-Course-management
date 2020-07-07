export interface ForgetPassword {
    mailId: string;
}

export class ChangePassword {
    oldPassword: string;
    newPassword: string;
    cofirmPassword: string;
    constructor(){}
}

