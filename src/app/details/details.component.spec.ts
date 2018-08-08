import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsComponent } from './details.component';

import { ActivatedRoute } from '@angular/router';

import { DataService} from '../data.service';

import { HttpClient,HttpHandler } from '@angular/common/http';

import { Observable, from } from 'rxjs';


describe('DetailsComponent', () => {

  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient,HttpHandler,DataService,
                  {provide: ActivatedRoute, useValue: { params: from([{id: 1}]) }   }  ],
      declarations: [ DetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
