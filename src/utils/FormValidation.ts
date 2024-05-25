import toast, { Renderable, Toast, ValueFunction } from 'react-hot-toast';
let EmailRegx = /\S+@\S+\.\S+/;
let MobileRegx = /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/;

class FormHelper {
    IsEmpty(value: string | any[]){
        return value.length === 0;
    }
    IsMobile(value: string){
        return MobileRegx.test(value);
    }
    IsEmail(value: string){
        return !EmailRegx.test(value);
    }
    ErrorToast(msg: Renderable | ValueFunction<Renderable, Toast>){
        toast.error(msg)
    }
    SuccessToast(msg: Renderable | ValueFunction<Renderable, Toast>){
        toast.success(msg)
    }
}

export const {IsEmpty, IsMobile, IsEmail, ErrorToast, SuccessToast} = new FormHelper()