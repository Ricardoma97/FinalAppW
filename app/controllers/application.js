import Controller from '@ember/controller';
import { action} from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ApplicationController extends Controller {
	@action
	prime(numero1, numero2, numero3){
		let r1,r2,r3;
		if (numero1) {
			console.log(true);
			 this.State = {
      		...this.State,
     		 r1:"true"
    		}
		}else{
		console.log(false);
		this.State = {
      		...this.State,
     		 r1:"false"
    		}
		}	
		if (numero1) {
			console.log(true);
			this.State = {
      		...this.State,
     		 r2:"true"
    		}
		}else{
		console.log(false);
		this.State = {
      		...this.State,
     		 r2:"false"
    		}
	}
		if (numero1) {
			console.log(true);
			this.State = {
      		...this.State,
     		 r3:"true"
    		}
		}else{
		console.log(false);
		this.State = {
      		...this.State,
     		 r3:"false"
    		}
	}	
		return false;
	}
	@action
	odd(numero1, numero2, numero3){
		if (numero1%2===0) {
			this.State = {
      		...this.State,
     		 r1:"false"
    		}
			console.log(false);
		}else{
		console.log(true);
		this.State = {
      		...this.State,
     		 r1:"true"
    		}
	}
		if (numero2%2===0) {
			this.State = {
      		...this.State,
     		 r2:"false"
    		}
			console.log(false);
		}else{
		console.log(true);
		this.State = {
      		...this.State,
     		 r2:"true"
    		}
	}
		if (numero3%2===0) {
			console.log(false);
			this.State = {
      		...this.State,
     		 r3:"false"
    		}
		}else{
			this.State = {
      		...this.State,
     		 r3:"true"
    		}
		console.log(true);
		return true;
	}
	}
	@action
	pow(numero1, numero2, numero3){
		console.log(numero1*numero1);
		console.log(numero2*numero2);
		console.log(numero3*numero3);
		this.State = {
      		...this.State,
     		 r1:numero1*numero1,
     		 r2:numero2*numero2,
     		 r3:numero3*numero3
    		}
		return numero1*numero1;
	}
	@tracked State={
		r1:"respuesta1",
		r2:"respuesta2",
		r3:"respuesta3"
	}
}
