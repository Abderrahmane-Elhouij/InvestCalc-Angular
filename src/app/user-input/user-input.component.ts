import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { InvestementInput } from './data.module';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html'
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<InvestementInput>();

  enteredInitialInvestment = 0
  enteredAnnualInvestment = 0
  enteredExpectedReturn = 5
  enteredDuration = 10

  onsubmit() {
    this.calculate.emit({
      initialInvestment: +this.enteredInitialInvestment,
      annualInvestment: +this.enteredAnnualInvestment,
      expectedReturn: +this.enteredExpectedReturn,
      duration: +this.enteredDuration
    })
  }
}
