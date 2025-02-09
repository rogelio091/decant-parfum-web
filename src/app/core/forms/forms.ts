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
import { Gender } from '../models/item.type';

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
  },
  ParfumForm: {
    Code: 'ParfumForm',
    Orientation: Orientations.Columns,
    Columns: '2',
    BtnText: undefined,
    BtnFull: true,
    CancelButton: false,
    Fields: [
      {
        Code: 'house',
        FieldType: { Name: TypeFields.Text },
        Id: 1,
        Index: 1,
        IsEditable: true,
        IsRequired: true,
        Name: 'House',
        Title: 'Casa',
        CssClass: 'sm:col-span-1 col-span-full',
        Value: undefined,
        Rules: [Validators.required]
      },
      {
        Code: 'name',
        FieldType: { Name: TypeFields.PhoneNumber },
        Id: 2,
        Index: 2,
        IsEditable: true,
        IsRequired: true,
        Name: 'Name',
        Title: 'Nombre',
        CssClass: 'sm:col-span-1 col-span-full',
        Value: undefined,
        Rules: [Validators.required, Validators.minLength(8), Validators.maxLength(8)]
      },
      {
        Code: 'description',
        FieldType: { Name: TypeFields.Textarea },
        Id: 3,
        Index: 3,
        IsEditable: true,
        IsRequired: true,
        Name: 'Description',
        CssClass: 'sm:col-start-1 sm:col-end-3 col-span-full',
        Title: 'Descripción',
        Value: undefined,
        Rules: [Validators.required]
      },
      {
        Code: 'image',
        FieldType: { Name: TypeFields.Text },
        Id: 4,
        Index: 4,
        IsEditable: true,
        IsRequired: true,
        Name: 'Image',
        CssClass: 'sm:col-start-1 sm:col-end-3 col-span-full',
        Title: 'Ruta de la imagen',
        Value: undefined,
        Rules: [Validators.required]
      },
      {
        Code: 'top',
        FieldType: { Name: TypeFields.Text },
        Id: 5,
        Index: 5,
        IsEditable: true,
        IsRequired: true,
        Name: 'Top',
        CssClass: 'sm:col-start-1 sm:col-end-3 col-span-full',
        Title: 'Notas de salida',
        Value: undefined,
        Rules: [Validators.required]
      },
      {
        Code: 'middle',
        FieldType: { Name: TypeFields.Text },
        Id: 6,
        Index: 6,
        IsEditable: true,
        IsRequired: true,
        Name: 'Middle',
        CssClass: 'sm:col-start-1 sm:col-end-3 col-span-full',
        Title: 'Notas de corazón',
        Value: undefined,
        Rules: [Validators.required]
      },
      {
        Code: 'base',
        FieldType: { Name: TypeFields.Text },
        Id: 7,
        Index: 7,
        IsEditable: true,
        IsRequired: true,
        Name: 'Base',
        CssClass: 'sm:col-start-1 sm:col-end-3 col-span-full',
        Title: 'Notas de fondo',
        Value: undefined,
        Rules: [Validators.required]
      },
      {
        Code: 'gender',
        FieldType: { Name: TypeFields.Select },
        Id: 8,
        Index: 8,
        IsEditable: true,
        IsRequired: true,
        Name: 'Gender',
        CssClass: 'sm:col-start-1 sm:col-end-3 col-span-full',
        Options: [
          { key: Gender.Masculine, value: Gender.Masculine },
          { key: Gender.Feminine, value: Gender.Feminine },
          { key: Gender.Unisex, value: Gender.Unisex }
        ],
        Title: 'Aroma',
        Value: undefined,
        Rules: [Validators.required]
      }
    ]
  }
};

export type FormList = {
  [key: string]: FormTemplateModel;
};
