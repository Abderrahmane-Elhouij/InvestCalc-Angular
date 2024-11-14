import { Component, EventEmitter, output, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { InvestementInput } from './data.module';
import { InvestmentService } from '../investement.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html'
})
export class UserInputComponent {
  //@Output() calculate = new EventEmitter<InvestementInput>();
  //calculate = output<InvestementInput>()
  constructor(private InvestmentService: InvestmentService) { }
  enteredInitialInvestment = signal('0')
  enteredAnnualInvestment = signal('0')
  enteredExpectedReturn = signal('5')
  enteredDuration = signal('10')

  onsubmit() {
    // this.calculate.emit({
    //   initialInvestment: +this.enteredInitialInvestment(),
    //   annualInvestment: +this.enteredAnnualInvestment(),
    //   expectedReturn: +this.enteredExpectedReturn(),
    //   duration: +this.enteredDuration()
    // });

    this.InvestmentService.calculateInvestmentResults(
      {
        initialInvestment: +this.enteredInitialInvestment(),
        annualInvestment: +this.enteredAnnualInvestment(),
        expectedReturn: +this.enteredExpectedReturn(),
        duration: +this.enteredDuration()
      })

    // Reset the values after submitting
    this.enteredInitialInvestment.set('0');
    this.enteredAnnualInvestment.set('0');
    this.enteredExpectedReturn.set('5');
    this.enteredDuration.set('10');
  }
}
