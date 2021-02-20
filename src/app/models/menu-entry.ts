export class MenuEntry{
  constructor(
    public title:string,
    public path:string,
    public mingroup: number = 0,
    public maxgroup: number = Number.MAX_SAFE_INTEGER,
    public href?:string
  ) {  }
}
