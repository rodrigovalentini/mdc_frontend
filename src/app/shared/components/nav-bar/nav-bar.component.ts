import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState, MediaMatcher } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  smallDevice = false;
  matcher: MediaQueryList;
  constructor(
    private breakpointObserver: BreakpointObserver,
    public mediaMatcher: MediaMatcher) { }

    ngOnInit() {
      this.breakpointObserver
        .observe([Breakpoints.Small, Breakpoints.HandsetPortrait])
        .subscribe((state: BreakpointState) => {
          if (state.matches) {
            console.log(
              'Matches small viewport or handset in portrait mode'
            );
          }
        });
    }

}
