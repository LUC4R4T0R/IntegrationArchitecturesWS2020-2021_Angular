export class ModalInput{
  constructor(
    public title:string,
    public name:string,
    public type:string,
    public value?:string,
    public placeholder?:string,
    public disabled?:boolean,
    public options?:Option[]
  ) {  }
}

export class Option{
  constructor(
    public title: string,
    public value?: string
  ) {  }
}
