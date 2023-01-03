export interface IOptions {
  key: string;
  value: string;
}

export interface IForm {
  label: string;
  placeHolder: string;
  name: string;
  options?: IOptions[];
}
