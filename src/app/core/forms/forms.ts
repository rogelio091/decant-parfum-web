import { Validators } from '@angular/forms';
import {
  FormTemplateModel,
  Orientations,
  TypeFields
} from 'app/components/dinamic-form/models/form-model';
import { NoDecimalValidator } from 'app/components/dinamic-form/validators/noDecimalValidator';
import { TwoDecimalValidator } from 'app/components/dinamic-form/validators/twoDecimalValidator';
import {
  PaymentType,
  Permission,
  PushNotificationChannelType,
  TicketCategory
} from '../api/configs';
import { NoWhitespaceValidator } from 'app/components/dinamic-form/validators/noWhiteSpacesValidator';

export const Forms: FormList = {
  CheckoutForm: {
    Code: 'CheckoutForm',
    Orientation: Orientations.Columns,
    Columns: '1',
    BtnText: undefined,
    BtnFull: true,
    CancelButton: false,
    Fields: [
      {
        Code: 'webCustomerFullName',
        FieldType: { Name: TypeFields.Text },
        Id: 1,
        Index: 1,
        IsEditable: true,
        IsRequired: true,
        Name: 'WebCustomerFullName',
        Title: 'Nombre Completo',
        CssClass: 'sm:col-start-1 sm:col-end-3 col-span-full',
        Value: undefined,
        Rules: [Validators.required]
      },
      {
        Code: 'webCustomerPhoneNumber',
        FieldType: { Name: TypeFields.PhoneNumber },
        Id: 2,
        Index: 2,
        IsEditable: true,
        IsRequired: true,
        Name: 'WebCustomerPhoneNumber',
        Title: 'Número de telefono',
        CssClass: 'sm:col-start-1 sm:col-end-3 col-span-full',
        Value: undefined,
        Rules: [Validators.required, Validators.minLength(8), Validators.maxLength(8)]
      },

      {
        Code: 'address',
        FieldType: { Name: TypeFields.Textarea },
        Id: 5,
        Index: 5,
        IsEditable: true,
        IsRequired: true,
        Name: 'Address',
        CssClass: 'sm:col-start-1 sm:col-end-3 col-span-full',
        Title: 'Dirección exacta de entrega',
        HintField: 'Incluye departamento, municipio o colonia',
        Value: undefined,
        Rules: [Validators.required]
      }
    ]
  }
};

export type FormList = {
  [key: string]: FormTemplateModel;
};
