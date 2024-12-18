import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit, ViewEncapsulation, inject, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, RouterLink } from '@angular/router';

type Breadcumb = {
    label: string;
    route: string;
};

@Component({
    selector: 'app-page-layout',
    standalone: true,
    imports: [MatIconModule, RouterLink, NgIf, NgFor],
    encapsulation: ViewEncapsulation.None,
    templateUrl: './page-layout.component.html',
    styleUrl: './page-layout.component.scss',
})
export class PageLayoutComponent implements OnInit {
    private _activatedRoute = inject(ActivatedRoute);
    breadcumbs = signal< Breadcumb[]>([]);

    ngOnInit(): void {
        this.breadcumbs.set(this._activatedRoute.snapshot.data.breadcumb ?? []);
    }

    trackByFn(index: number, item: any) {
        return item.id || index;
    }
}
