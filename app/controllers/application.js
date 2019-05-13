import Controller from '@ember/controller';
import { action} from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ApplicationController extends Controller {
	@action
	prime(numero1, numero2, numero3){
		let r1,r2,r3;
		if (numero1) {
			console.log(true);
			this.r1=true;
		}else
		console.log(false);
		if (numero1) {
			console.log(true);
		}else
		console.log(false);
		if (numero1) {
			console.log(true);
		}else
		console.log(false);
		return false;
	}
	@action
	odd(numero1, numero2, numero3){
		if (numero1%2===0) {
			console.log(false);
		}else
		console.log(true);
		if (numero2%2===0) {
			console.log(false);
		}else
		console.log(true);
		if (numero3%2===0) {
			console.log(false);
		}else
		console.log(true);
		return true;
	}
	@action
	pow(numero1, numero2, numero3){
		console.log(numero1*numero1);
		console.log(numero2*numero2);
		console.log(numero3*numero3);
		return numero1*numero1;
	}
	@tracked state={
		r1:"respuesta1",
		r2:"respuesta2",
		r3:"respuesta3"
	}
}
