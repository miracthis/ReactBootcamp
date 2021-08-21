import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FormField, Button, Label } from 'semantic-ui-react'
import KodlamaIoTextInput from "../utilities/customFormControls/KodlamaIoTextInput";

export default function ProductAdd() {
  const initialValues = {
    productName: "",
    unitPrice: 0,
  };

  const schema = Yup.object({
    productName: Yup.string().required("Ürün Adı Zorunlu"),
    unitPrice: Yup.number().required("Fiyat Zorunlu"),
  });

  return (
    <div>
      <Formik 
      initialValues={initialValues} 
      validationSchema={schema}
      onSubmit = {(values) => {
          console.log(values)
      }}
      >
        <Form className="ui form">
            <KodlamaIoTextInput name="productName" placeholder="Ürün Adı"/>
            <KodlamaIoTextInput name="unitPrice" placeholder="Ürün Fiyatı"/>
          
          {/* <FormField>
          <Field name="unitPrice" placeholder="Ürün Fiyatı"></Field>
          <ErrorMessage name="unitPrice" render={error =>
                <Label pointing basic  color="red" content={error}></Label>
            }></ErrorMessage>
          </FormField> 
          
          !*BUNUN YERİNE TEK SATIRA DÜŞÜRDÜK */}
          
          <Button color="green" type="submit">Ekle</Button>
        </Form>
      </Formik>
    </div>
  );
}

