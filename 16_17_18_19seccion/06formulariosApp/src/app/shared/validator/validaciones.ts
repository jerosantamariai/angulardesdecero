import { AbstractControl, ValidationErrors } from '@angular/forms';




export const nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

export const camposIguales = ( campo1: string, campo2: string ) => {
    
    return ( control: AbstractControl ): ValidationErrors | null => {

        const pass1 = control.get(campo1)?.value;
        const pass2 = control.get(campo2)?.value;

        if ( pass1 !== pass2 ) {
            control.get(campo2)?.setErrors({ noIguales: true });
            return { noIguales: true }
        }

        control.get(campo2)?.setErrors(null);

        return null
    }

}