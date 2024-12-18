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
  LoginForm: {
    Code: 'LoginForm',
    Description: 'Formulario para inicio de sesion',
    Orientation: Orientations.Vertical,
    Title: 'Iniciar Sesión',
    BtnText: 'Iniciar Sesión',
    BtnFull: true,
    CancelButton: false,
    Fields: [
      {
        Code: 'userName',
        FieldType: { Name: TypeFields.Text },
        Id: 1,
        Index: 1,
        IsEditable: true,
        IsRequired: true,
        Name: 'User',
        Title: 'Usuario',
        Value: undefined,
        Rules: [Validators.required]
      },
      {
        Code: 'password',
        FieldType: { Name: TypeFields.Password },
        Id: 2,
        Index: 2,
        IsEditable: true,
        IsRequired: true,
        Name: 'Password',
        Title: 'Contraseña',
        Icon: 'heroicons_solid:eye',
        IconAfter: 'heroicons_solid:eye-slash',
        Value: undefined,
        Rules: [Validators.required]
      }
    ]
  },
  ForgotPasswordForm: {
    Code: 'ForgotPasswordForm',
    Orientation: Orientations.Vertical,
    BtnText: 'Recuperar contraseña',
    CancelButton: false,
    BtnFull: true,
    Captcha: true,
    Fields: [
      {
        Code: 'email',
        FieldType: { Name: TypeFields.Text },
        Id: 1,
        Index: 1,
        IsEditable: true,
        IsRequired: true,
        Name: 'Email',
        Title: 'Correo electrónico',
        Value: undefined,
        Rules: [Validators.email, Validators.required]
      },
      {
        Code: 'tenantName',
        FieldType: { Name: TypeFields.Text },
        Id: 2,
        Index: 2,
        IsEditable: true,
        IsRequired: true,
        Name: 'TenantName',
        Title: 'Nombre de la empresa',
        Value: undefined,
        Rules: [Validators.required]
      },
      {
        Code: 'userName',
        FieldType: { Name: TypeFields.Text },
        Id: 3,
        Index: 3,
        IsEditable: true,
        IsRequired: true,
        Name: 'UserName',
        Title: 'Nombre de usuario',
        Value: undefined,
        Rules: [Validators.required, NoWhitespaceValidator()]
      },

      {
        Code: 'token',
        FieldType: { Name: TypeFields.Captcha },
        Id: 4,
        Index: 4,
        IsEditable: true,
        IsRequired: true,
        Name: 'Token',
        Title: undefined,
        Value: undefined,
        Rules: [Validators.required]
      }
    ]
  },
  SignUpForm: {
    Code: 'SignUpForm',
    Orientation: Orientations.Vertical,
    BtnText: 'Registrarse',
    CancelButton: false,
    BtnFull: true,
    Captcha: true,
    Fields: [
      {
        Code: 'fullName',
        FieldType: { Name: TypeFields.Text },
        Id: 1,
        Index: 1,
        IsEditable: true,
        IsRequired: true,
        Name: 'FullName',
        Title: 'Nombre Completo',
        Value: undefined,
        Rules: [Validators.required, NoWhitespaceValidator()]
      },
      {
        Code: 'phoneNumber',
        FieldType: { Name: TypeFields.PhoneNumber },
        Id: 2,
        Index: 2,
        IsEditable: true,
        IsRequired: true,
        Name: 'PhoneNumber',
        Title: 'Número de telefono',
        Value: undefined,
        Rules: [Validators.required, Validators.minLength(8), Validators.maxLength(8)]
      },
      {
        Code: 'email',
        FieldType: { Name: TypeFields.Text },
        Id: 3,
        Index: 3,
        IsEditable: true,
        IsRequired: true,
        Name: 'Email',
        Title: 'Correo electrónico',
        Value: undefined,
        Rules: [Validators.email, Validators.required]
      },

      {
        Code: 'userName',
        FieldType: { Name: TypeFields.Text },
        Id: 4,
        Index: 4,
        IsEditable: true,
        IsRequired: true,
        Name: 'UserName',
        Title: 'Nombre de usuario',
        Value: undefined,
        Rules: [Validators.required, Validators.pattern(/^[a-z0-9]+$/), NoWhitespaceValidator()]
      },

      {
        Code: 'tenantName',
        FieldType: { Name: TypeFields.Text },
        Id: 5,
        Index: 5,
        IsEditable: true,
        IsRequired: true,
        Name: 'TenantName',
        Title: 'Nombre de la empresa',
        Value: undefined,
        Rules: [Validators.required, NoWhitespaceValidator()]
      },

      {
        Code: 'token',
        FieldType: { Name: TypeFields.Captcha },
        Id: 6,
        Index: 6,
        IsEditable: true,
        IsRequired: true,
        Name: 'Token',
        Title: undefined,
        Value: undefined,
        Rules: [Validators.required]
      }
    ]
  },
  UserForm: {
    Code: 'UserForm',
    Description: 'Formulario creación o edición de usuario',
    Orientation: Orientations.Columns,
    Columns: '2',
    Title: 'Creación de usuario',
    BtnText: undefined,
    CancelButton: false,
    Fields: [
      {
        Code: 'id',
        FieldType: { Name: TypeFields.Text },
        Id: 0,
        Index: 0,
        IsEditable: true,
        IsRequired: false,
        Name: 'id',
        Title: 'id',
        Value: undefined,
        CssClass: 'hidden',
        Rules: []
      },
      {
        Code: 'fullName',
        FieldType: { Name: TypeFields.Text },
        Id: 1,
        Index: 1,
        IsEditable: true,
        IsRequired: true,
        CssClass: 'sm:col-start-1 sm:col-end-3 col-span-full',
        Name: 'FullName',
        Title: 'Nombre Completo',
        Value: undefined,
        Rules: [Validators.required]
      },
      {
        Code: 'userName',
        FieldType: { Name: TypeFields.Text },
        Id: 2,
        Index: 2,
        IsEditable: true,
        IsRequired: true,
        CssClass: 'sm:col-span-1 col-span-full',
        Name: 'User',
        Title: 'Usuario',
        Value: undefined,
        Rules: [Validators.required]
      },
      {
        Code: 'phoneNumber',
        FieldType: { Name: TypeFields.PhoneNumber },
        Id: 3,
        Index: 3,
        IsEditable: true,
        IsRequired: true,
        CssClass: 'sm:col-span-1 col-span-full',
        Name: 'PhoneNumber',
        Title: 'Número de telefono',
        Value: undefined,
        Rules: [Validators.required, Validators.minLength(8), Validators.maxLength(8)]
      },
      {
        Code: 'email',
        FieldType: { Name: TypeFields.Text },
        Id: 4,
        Index: 4,
        IsEditable: true,
        IsRequired: true,
        CssClass: 'sm:col-start-1 sm:col-end-3 col-span-full',
        Name: 'Email',
        Title: 'Correo electrónico',
        Value: undefined,
        Rules: [Validators.email, Validators.required]
      }
    ]
  },
  CustomerForm: {
    Code: 'CustomerForm',
    Orientation: Orientations.Vertical,
    BtnText: undefined,
    CancelButton: false,
    Fields: [
      {
        Code: 'id',
        FieldType: { Name: TypeFields.Text },
        Id: 0,
        Index: 0,
        IsEditable: true,
        IsRequired: false,
        Name: 'id',
        Title: 'id',
        Value: undefined,
        CssClass: 'hidden',
        Rules: []
      },
      {
        Code: 'fullName',
        FieldType: { Name: TypeFields.Text },
        Id: 1,
        Index: 1,
        IsEditable: true,
        IsRequired: true,
        Name: 'FullName',
        Title: 'Nombre Completo',
        Value: undefined,
        Rules: [Validators.required]
      },
      {
        Code: 'phoneNumber',
        FieldType: { Name: TypeFields.PhoneNumber },
        Id: 2,
        Index: 2,
        IsEditable: true,
        IsRequired: true,
        Name: 'PhoneNumber',
        Title: 'Número de telefono',
        Value: undefined,
        Rules: [Validators.required, Validators.minLength(8), Validators.maxLength(8)]
      },
      {
        Code: 'email',
        FieldType: { Name: TypeFields.Text },
        Id: 3,
        Index: 3,
        IsEditable: true,
        IsRequired: false,
        Name: 'Email',
        Title: 'Correo electrónico',
        Value: undefined,
        Rules: [Validators.email]
      },
      {
        Code: 'nit',
        FieldType: { Name: TypeFields.Text },
        Id: 4,
        Index: 4,
        IsEditable: true,
        IsRequired: false,
        Name: 'Nit',
        Title: 'Nit',
        Value: undefined,
        Rules: []
      }
    ]
  },
  RolForm: {
    Code: 'RolForm',
    Description: 'Formulario creación o edición de rol',
    Orientation: Orientations.Vertical,
    Title: 'Creación de rol',
    BtnText: undefined,
    CancelButton: false,
    Fields: [
      {
        Code: 'id',
        FieldType: { Name: TypeFields.Text },
        Id: 0,
        Index: 0,
        IsEditable: true,
        IsRequired: false,
        Name: 'id',
        Title: 'id',
        Value: undefined,
        CssClass: 'hidden',
        Rules: []
      },
      {
        Code: 'name',
        FieldType: { Name: TypeFields.Text },
        Id: 1,
        Index: 1,
        IsEditable: true,
        IsRequired: true,
        Name: 'Name',
        Title: 'Nombre',
        Value: undefined,
        Rules: [Validators.required]
      }
    ]
  },
  AssignUserRolForm: {
    Code: 'AssignUserRolForm',
    Description: 'Formulario asignación de rol',
    Orientation: Orientations.Vertical,
    Title: 'Asignación de rol',
    BtnText: undefined,
    CancelButton: false,
    Fields: [
      {
        Code: 'userId',
        FieldType: { Name: TypeFields.Text },
        Id: 0,
        Index: 0,
        IsEditable: true,
        IsRequired: false,
        Name: 'UserId',
        Title: 'userId',
        Value: undefined,
        CssClass: 'hidden',
        Rules: [Validators.required]
      },
      {
        Code: 'roleId',
        FieldType: { Name: TypeFields.Select },
        Id: 1,
        Index: 1,
        IsEditable: true,
        IsRequired: true,
        Name: 'Rol',
        Title: 'Rol',
        Options: [],
        Value: undefined,
        Rules: [Validators.required]
      }
    ]
  }
};

export type FormList = {
  [key: string]: FormTemplateModel;
};
