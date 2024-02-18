import React, { ChangeEvent } from "react";

type formInputsType = {
<<<<<<< HEAD
    containerClass?:string,
    type:string,
    value?:string,
    id?:string,
    name:string,
    placeholder:string,
    cssClass:string,
    onChange?:(e:ChangeEvent)=>void
    label?:{
        text:string,
        htmlFor:string,
        cssClass:string
    }
    allowMultiple?:boolean
}

const FormInput = ({
type,value,placeholder,cssClass,label,name,onChange,containerClass,allowMultiple,id
}:formInputsType) => {
  return (
    <div className={containerClass}>
    {label && <label className={label.cssClass} htmlFor={label.htmlFor}>
        {label.text}
        </label>}
    <input
    type={type}
    name={name}
    placeholder={placeholder}
    value={value}
    className={cssClass}
    multiple={allowMultiple}
    id={id}
    
    
    />
  
</div>
  )
}

export default FormInput
=======
  containerClass?: string;
  type: string;
  value?: string;
  name: string;
  placeholder: string;
  cssClass: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  label?: {
    text: string;
    htmlFor: string;
    cssClass: string;
  };
  allowMultiple?: boolean;
};

const FormInput = ({
  type,
  value,
  placeholder,
  cssClass,
  label,
  name,
  onChange,
  containerClass,
  allowMultiple,
}: formInputsType) => {
  return (
    <div className={containerClass}>
      {label && (
        <label className={label.cssClass} htmlFor={label.htmlFor}>
          {label.text}
        </label>
      )}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        className={cssClass}
        multiple={allowMultiple}
      />
    </div>
  );
};
>>>>>>> origin/main

export default FormInput;
