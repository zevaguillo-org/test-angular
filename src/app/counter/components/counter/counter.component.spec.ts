import { TestBed } from '@angular/core/testing';
import { CounterComponent } from './counter.component';
describe('CounterComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CounterComponent
      ],
    }).compileComponents();
  });
  it('should have a counter with value 10', () => {
    const fixture = TestBed.createComponent(CounterComponent);
    const app = fixture.componentInstance;
    expect(app.counter).toEqual(10);
  });

  it('should increase counter by 5', () => {
    const fixture = TestBed.createComponent(CounterComponent);
    const app = fixture.componentInstance;
    app.increaseBy(5);
    expect(app.counter).toEqual(15);
  });

  it('should decrease counter by 5', () => {
    const fixture = TestBed.createComponent(CounterComponent);
    const app = fixture.componentInstance;
    app.decreaseBy(5);
    expect(app.counter).toEqual(5);
  });

  it('should reset counter to 10', () => {
    const fixture = TestBed.createComponent(CounterComponent);
    const app = fixture.componentInstance;
    app.reset();
    expect(app.counter).toEqual(10);
  });
});
