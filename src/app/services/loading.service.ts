import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LoadingService {

    public loaderStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor() {
    }

    displayLoader(value: boolean) {
        this.loaderStatus.next(value);
    }

    show() {
        this.loaderStatus.next(true);
    }

    hide() {
        this.loaderStatus.next(false);
    }
}