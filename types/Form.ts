import { FormikErrors } from "formik";

export interface IOptions {
  key: string;
  value: string;
}

export interface IForm {
  formik?: any;
  type?: string;
  label: string;
  placeHolder: string;
  name: string;
  options?: IOptions[];
}
