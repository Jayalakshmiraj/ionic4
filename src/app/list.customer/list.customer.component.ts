import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list.customer',
  templateUrl: './list.customer.component.html',
  styleUrls: ['./list.customer.component.scss'],
})
export class ListCustomerComponent implements OnInit {
  
  constructor(private customerService: CustomerService,private router:Router) { }
  
  ngOnInit() {}

  customers = this.customerService.getCustomer();

  deleteButton(id) {
   this.customerService.deleteCustomer(id);
  }
  deleteButtonAll() {
    this.customers = [];
    
  }

  editButton(customer){
this.router.navigate(['/edit-customer/'+customer.id]);
  }

}
