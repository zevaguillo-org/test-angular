import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/components/counter/counter.component';
import { HeroComponent } from './heroes/components/hero/hero.component';
import { ListComponent } from './heroes/components/list/list.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CounterComponent,
        HeroComponent,
        ListComponent
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'bases-2'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('bases-2');
  });



});
