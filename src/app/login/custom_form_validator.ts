import { FormControl, Validators } from '@angular/forms';

// setup simple regex for white listed characters

const validCharacters = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}/;

// create your class that extends the angular validator class
export class CustomValidators extends Validators {

  // create a static method for your validation
  static validateCharacters(control: FormControl) {

    // first check if the control has a value
    if (control.value && control.value.length > 0) {

      // match the control value against the regular expression
      const matches = control.value.match(validCharacters);
      if(matches){
        return null;
      }else{
        return {answer: "Not good"}
      }
    } else {
      return {answer: "Not good"};
    }
  }
}
