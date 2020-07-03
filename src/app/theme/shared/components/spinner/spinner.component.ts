import { Component, Input, OnDestroy, Inject, ViewEncapsulation, OnInit } from '@angular/core';
import { Spinkit } from './spinkits';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
    selector: 'app-spinner',
    templateUrl: './spinner.component.html',
    styleUrls: [
        './spinner.component.scss',
        './spinkit-css/sk-line-material.scss'
    ],
    encapsulation: ViewEncapsulation.None
})
export class SpinnerComponent implements OnInit, OnDestroy {
    loadSubscription; Subscription;
    public isSpinnerVisible = true;
    public Spinkit = Spinkit;
    @Input() public backgroundColor = '#2196f3';
    @Input() public spinner = Spinkit.skLine;
    constructor(private router: Router, @Inject(DOCUMENT) private document: Document, private loaderService: LoadingService) {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                this.isSpinnerVisible = true;
            } else if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
                this.isSpinnerVisible = false;
            }
        }, () => {
            this.isSpinnerVisible = false;
        });
    }

    ngOnInit(): void {
        this.loadSubscription = this.loaderService.loaderStatus.subscribe((val: boolean) => {
            this.isSpinnerVisible = val;
        });
    }

    ngOnDestroy(): void {
        this.isSpinnerVisible = false;
        this.loadSubscription.unsubscribe();
    }
}
