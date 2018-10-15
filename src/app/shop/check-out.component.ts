import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ShopService} from '../services/shop.service';

import { validLocalPhoneNumber } from '../helpers/form-fields-validators';


@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {


  total_payable = 0;

   show_form = true;
   message = '';
   rForm: FormGroup;

   processing_payment = false;




      constructor(private formBuilder: FormBuilder, private shop_service: ShopService) {

  this.rForm = this.formBuilder.group({

              phone: ['', [Validators.required, validLocalPhoneNumber]]
          });


      }


      ngOnInit() {
        // get total amount to pay from our cart
        this.total_payable = this.shop_service.currentCartValue();

      }

       handleChekout(post) {
         /*
         Form is submitted with post containing all user entered data
         */

         this.show_form = true;


           this.shop_service.checkOut(post);

           // show processing payment indicator
           this.processing_payment =  true;

          const that = this;

          setTimeout(function(){
            that.processing_payment = false;
            that.shop_service.resetUserCart();
            alert('your payment was processed; thank you');
            that.show_form=false;
            that.message='Payment processed successfully';
          }, 10000);





    }



  }
