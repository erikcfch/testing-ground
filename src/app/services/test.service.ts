import {HttpClient} from "@angular/common/http";

export class TestService {
  testEndpoint: string;
  testIncPath: string;
  testDecPath: string;

  constructor(
    private httpClient: HttpClient,
  ) {
    this.testEndpoint = 'localhost:3000'
    this.testIncPath = '/testingInc'
    this.testDecPath = '/testingDec'
  }

  async getIncrement() {
    try {
      const res = await this.httpClient.post(
        this.testEndpoint+this.testIncPath,
        {},
      )
      return res;
    } catch (err) {
      console.log('Err: ', err);
      return;
    } finally {
      console.log('Inc called');
    }
  }

  async getDecrement() {
    try {
      const res = await this.httpClient.post(
        this.testEndpoint+this.testDecPath,
        {},
      )
      return res;
    } catch (err) {
      console.log('Err: ', err);
      return ;
    } finally {
      console.log('Inc called');
    }
  }
}
