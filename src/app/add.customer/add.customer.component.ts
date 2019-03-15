import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add.customer',
  templateUrl: './add.customer.component.html',
  styleUrls: ['./add.customer.component.scss'],
})
export class AddCustomerComponent implements OnInit {
list=[]

customer = { id: 0, name: "", email: "", phone: "" }
constructor(private router:Router,private customerService: CustomerService) { }

ngOnInit() {
  this.list = this.customerService.getCustomer()
}


  addButton(customer) {
    this.customerService.addCustomer(customer);    
      this.router.navigate(['/list-customer']);
}
}
