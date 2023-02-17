import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GameMatchComponent } from './game-match.component';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

describe('GameMatchComponent', () => {
  let component: GameMatchComponent;
  let fixture: ComponentFixture<GameMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameMatchComponent ],
      imports: [
        RouterTestingModule,
        HttpClientModule,
        MatButtonModule,
        MatCardModule
      ],
      providers: [
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
