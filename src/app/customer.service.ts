import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customerUrl = 'http://localhost:3000/api/customers';
  customers =[  {id:1,name:"jaya",email:"jaya@gmail.com",phone:"0123456789"},
  {id:2,name:"mala",email:"mala@gmail.com",phone:"0123456789"},
  {id:3,name:"kala",email:"kala@gmail.com",phone:"0123456789"}];

  constructor(private http: HttpClient) { 
    var defaultCustomers = JSON.parse(localStorage.getItem('customer'));
    if(defaultCustomers){
      this.customers=defaultCustomers;
    }
    else{
      localStorage.setItem('customer',JSON.stringify(this.customers));
    }
  
  }


  getRemoteCustomers(): Observable<[]>{
  	return this.http.get<[]>(this.customerUrl); 		
 }


  getCustomer(){
    return this.customers;
  }
  getCustomerById(id){
    for(var i=0;i<this.customers.length;i++){
      if(this.customers[i].id==id){
        return this.customers[i];
        break;
      }
    }

  }
  addCustomer(customer){
    customer.id=Math.round(Math.random()*1000000)
   this.customers.push(customer);
   localStorage.setItem('customers',JSON.stringify(this.customers));

  }
  deleteCustomer(id){
    for(var i=0;i<this.customers.length;i++){
      if(id==this.customers[i].id){
        this.customers.splice(i,1);
        localStorage.setItem('customers',JSON.stringify(this.customers));
      }
    }
    
  }

  updateCustomer(customer){
    for(var i=0;i<this.customers.length;i++){
      if(this.customers[i].id==customer){
       this.customers[i]=customer;
        break;
      }
    }
    localStorage.setItem('customers',JSON.stringify(this.customers));
  }
  
}
