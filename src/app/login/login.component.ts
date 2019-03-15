import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
username="";
password="";
  constructor(public alertController: AlertController, private router:Router) {}



  ngOnInit() {}
  onLogin(){
    if(this.username==this.password){
      this.router.navigate(['./dashboard']);
    }
    else{
      this.presentAlert();
    }
   
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Login failed',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }
}
