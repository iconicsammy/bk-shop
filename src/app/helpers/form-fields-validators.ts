/*
Custom form validations that are shared through the application
*/

import { AbstractControl, FormControl } from '@angular/forms';

// allowed phone numbers
export const constPhoneISP= [
	'078', '072', '073'
];



export function validLocalPhoneNumber(control: AbstractControl){
    /*
     Validate the local phone number is indeed valid (local).

     it must be 10 digit first and starts with one of the above listed numbers

    */


    const phone = control.value;

       const regex =  /^[0-9]{10}$/; // ^[+-]?((\.\d+)|(\d+(\.\d+)?))$

      if (phone == null || !phone.match(regex)){
          return { isInValid: true };
      }

      // reached here. it is indeed 10 digits. But is it in allowed ISPS (i.e. locals)?

      const starts_with: string = phone.substr(0, 3);

      const total = constPhoneISP.length;

    for(let i=0 ; i < total; i++){
            if (starts_with == constPhoneISP[i]) {
                return null;

            }
        }
      return { isInValid: true };

}





