import { FormGroup } from '@angular/forms';

export function rePassCheck(){
    return function (userForm : FormGroup){
        let a = userForm.controls.pass;
        let b = userForm.controls.re_pass;

        if(b.errors && !b.errors.match){
            return;
        }

        if(a.value != b.value)
        {
            b.setErrors({ match : true });
        }
        else{
            b.setErrors(null);
        }
    }
}







export function numCheck(){
    return function(userForm : FormGroup){
        let x = userForm.controls.contact;

        if(x.errors && !x.errors.numErr)
        {
            return;
        }
        
        if(isNaN(x.value))
        {
            x.setErrors({ numErr : true });
        }
        else
        {
            x.setErrors(null);
        }

    }
}


export function lengthCheck(){
    return function(userForm : FormGroup){
        let contact = userForm.controls.contact;
        if(contact.errors && !contact.errors.lenErr)
        {
            return;
        }

        if(contact.value.length == 10)
        {
            contact.setErrors(null)
        }
        else{
            contact.setErrors({ lenErr : true  });
        }
    }
}