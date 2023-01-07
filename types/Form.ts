import { FormikErrors } from "formik";

export interface IOptions {
  key: string;
  value: string;
}
// type Error =
//   | FormikErrors<{
//       medicineName: string;
//       medicineGroup: string;
//       howToUse: string;
//       sideEffect: string;
//     }>
//   | undefined;

export interface IForm {
  formik?: any;
  label: string;
  placeHolder: string;
  name: string;
  options?: IOptions[];
}
