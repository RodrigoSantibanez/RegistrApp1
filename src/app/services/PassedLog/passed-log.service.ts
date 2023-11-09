import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PassedLog {
  private PassedLoginFlag = false;

  constructor() {}

  PassedLogin(): boolean {
    return this.PassedLoginFlag;
  }

  setPassedLogin(passed: boolean) {
    this.PassedLoginFlag = passed;
  }
}
