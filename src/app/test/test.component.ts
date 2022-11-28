import { Component, OnInit } from '@angular/core';
import {Observable, tap} from "rxjs";
import {select, Store} from "@ngrx/store";
import {adding, subtracting, reset} from "../store/test.actions";
import {TestService} from "../services/test.service";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  obCount: Observable<number>;

  constructor(
    private store: Store<{ count: number }>,
    private testService: TestService,
  ) {
    this.obCount = store.select('count');
    console.log('what', this.obCount)
  }

  async ngOnInit(): Promise<void> {
    try {
      const incAmount = await this.testService.getIncrement();
      const decAmount = await this.testService.getDecrement();
      console.log('incAmount', incAmount);
      console.log('decAmount', decAmount);
    } catch (err) {
      {
        console.log('Err: ', err);
        return;
      }
    }
  }

  increment() {
    const thing = 2;
    this.store.dispatch(adding({
      inc: thing
    }));
  }

  decrement() {
    const thing = 1;
    this.store.dispatch(subtracting({
      dec: thing
    }));
  }

  reset() {
    console.log('reset');
    this.store.dispatch(reset());
  }
}
