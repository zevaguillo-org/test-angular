import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroComponent } from './hero.component';

describe('HeroComponent', () => {
  let component: HeroComponent;
  let fixture: ComponentFixture<HeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroComponent ]
    })
    .compileComponents();
  });

  it('should create the app', () => {
    fixture = TestBed.createComponent(HeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });


  it('should have the name and age of the hero', () => {
    fixture = TestBed.createComponent(HeroComponent);
    component = fixture.componentInstance;
    expect(component.name).toBe('Ironman');
    expect(component.age).toBe(45);
  });

  it('should have the capitalized name', () => {
    fixture = TestBed.createComponent(HeroComponent);
    component = fixture.componentInstance;
    expect(component.capitalizedName).toBe('IRONMAN');
  });

  it("should change the hero's name", () => {
    fixture = TestBed.createComponent(HeroComponent);
    component = fixture.componentInstance;
    component.changeName();
    expect(component.name).toBe('Spiderman');
  });

  it("should change the hero's age", () => {
    fixture = TestBed.createComponent(HeroComponent);
    component = fixture.componentInstance;
    component.changeAge();
    expect(component.age).toBe(30);
  });

  it("should reset the hero's name and age", () => {
    fixture = TestBed.createComponent(HeroComponent);
    component = fixture.componentInstance;
    component.reset();
    expect(component.name).toBe('Ironman');
  });

});
