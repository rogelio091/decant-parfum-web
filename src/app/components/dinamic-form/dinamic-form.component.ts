import {
  ChangeDetectorRef,
  Component,
  DestroyRef,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  Output,
  QueryList,
  Renderer2,
  ViewChild,
  ViewChildren,
  inject,
  signal
} from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import {
  FormGroupDirective,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  FormControl,
  Validators,
  AbstractControl
} from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { Observable } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  FormTemplateModel,
  OptionsGrouped,
  Orientations,
  TypeFields,
  FieldTemplateModel
} from './models/form-model';
import { FieldControlService } from './services/field-control.service';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NoWhitespaceDirective } from 'app/directives/no-whitespaces.directive';
import { MatSlideToggleChange, MatSlideToggleModule } from '@angular/material/slide-toggle';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { PermissionDirective } from 'app/directives/permission.directive';
import { PermissionActions } from 'app/core/api/configs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { containByWords } from 'app/core/helpers/containByWords';
// import { NgxTurnstileModule, NgxTurnstileFormsModule } from 'ngx-turnstile';
// import { Editor, NgxEditorModule, Toolbar, toHTML } from 'ngx-editor';

export type StateForm = {
  resetForm: boolean;
  errorsForm?: ErrorsForm[];
  disableControls?: boolean;
  executeReturn?: boolean;
  updateForm?: UpdateFieldForm[];
};

type ErrorsForm = {
  field: string;
  errors: string[];
};

export type UpdateFieldForm = {
  field: FieldTemplateModel;
  value: boolean;
  options: boolean;
  changeState?: boolean;
};

@Component({
  selector: 'app-dinamic-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatChipsModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatSlideToggleModule,
    MatNativeDateModule,
    MatTooltipModule,
    MatSelectModule,
    // NgxTurnstileModule,
    // NgxTurnstileFormsModule,
    // NgxEditorModule,
    NoWhitespaceDirective,
    PermissionDirective,
    ReactiveFormsModule
  ],
  templateUrl: './dinamic-form.component.html',
  styleUrl: './dinamic-form.component.scss',
  providers: [FieldControlService]
})
export class DinamicFormComponent implements OnInit, OnDestroy {
  // separatorKeysCodes: number[] = [ENTER, COMMA];
  private fieldControlService = inject(FieldControlService);
  private cd = inject(ChangeDetectorRef);
  private destroyRef = inject(DestroyRef);

  @ViewChildren('inputAutocomplete') inputFields: QueryList<ElementRef>;
  @ViewChild(FormGroupDirective, { static: false })
  formGroupDirective: FormGroupDirective;
  @Input({ required: true }) stateForm$: Observable<StateForm>;
  @Input({ required: true }) dataForm$: Observable<FormTemplateModel>;
  @Output() returnData = new EventEmitter();
  @Output() returnCancel = new EventEmitter();
  @Output() returnFieldChange = new EventEmitter<FieldTemplateModel>();

  filtered: Observable<OptionsGrouped[]>;
  lastValueSended: string = '';

  Orientations = Orientations;
  TypeFields = TypeFields;
  actions = PermissionActions;
  form: FormGroup;
  dataForm = signal<FormTemplateModel>(undefined);
  // editor = new Editor();

  // toolbar: Toolbar = [
  //     ['bold', 'italic'],
  //     ['underline', 'strike'],
  //     ['code', 'blockquote'],
  //     ['ordered_list', 'bullet_list'],
  //     ['align_left', 'align_justify'],
  // ];

  cssFormClass = signal<string>('');

  inputTypePassword = 'password';
  errorText = signal<string>('');
  iconActioned = signal<boolean>(false);

  searchByName = signal<boolean>(false);

  siteKey = '0x4AAAAAAAa9tzJXDUdj4gQz';

  ngOnInit(): void {
    console.log('hola');
    this.initSubscribe();
  }

  initSubscribe() {
    this.dataForm$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((data) => {
      if (data) {
        this.dataForm.set(data);
        if (this.dataForm().Fields.length > 0) {
          this.dataForm().Fields.sort((a, b) => a.Index - b.Index);
          this.form = this.fieldControlService.toFormGroup(this.dataForm().Fields);
          console.log(this.dataForm);
          console.log(this.form);
        }
        this.getCssClases();
      }
    });
    this.registerStateForm();
  }

  displayFn(field: FieldTemplateModel, value: number) {
    console.log(this.dataForm());
    if (field && field.Options.length > 0 && value) {
      const dataSelected =
        field.Options.length > 0 ? field.Options.find((_) => _.value === value) : undefined;
      return value ? dataSelected?.key : undefined;
    }
    return undefined;
  }

  sendCaptchaResponse(event) {
    console.log(event);
  }

  // autoCompleteSimpleChange(field: FieldTemplateModel) {
  //     const myControl = this.form.controls[field.Code];
  // field.OptionsFiltered = myControl.valueChanges.pipe(
  //     debounceTime(400),
  //     startWith(''),
  //     map((value) => {
  //         console.log(value);
  //         return this._filterSimple(value || '', field);
  //     })
  // );
  //     console.log(myControl);
  // }

  filter(field: FieldTemplateModel) {
    const fld = this.inputFields.find((htmlFld) => htmlFld.nativeElement.id === field.Code)
      .nativeElement.value;
    field.OptionsFiltered = this._filterSimple(fld, field);
  }

  private _filterSimple(value: string | number, field: FieldTemplateModel): string[] {
    if (typeof value === 'string') {
      const filterValue = value.toLowerCase();
      return field.Options.filter((option) => {
        if (containByWords(option.key, filterValue.split(' '))) return option.key.toLowerCase();
        return option.key.toLowerCase().includes(filterValue);
      });
    } else {
      return field.Options.filter((option) => option.id === value);
    }
  }

  autoCompleteSelectedSimple(event, field: FieldTemplateModel) {
    console.log(event.option);
    console.log(this.form);
    if (field.insertNewValue && !event.option.value) {
      this.returnFieldChange.emit({ ...field, Value: undefined });
    } else {
      this.form.controls[field.Code].setValue(event.option.value);
      this.returnFieldChange.emit({
        ...field,
        Value: event.option.value
      });
    }
  }

  autoCompleteSelectedChips(event, field: FieldTemplateModel) {
    console.log(event);
    this.form.controls[field.Code].setValue(null);
    if (field.OptionsSelected.includes(event.option.value)) return;
    field.OptionsSelected.push(event.option.value);
    this.returnFieldChange.emit({
      ...field
    });
    // this.form.controls[field.Code].setValue(event.option.value);
  }

  cleanField(field: FieldTemplateModel) {
    this.form.controls[field.Code].setValue('');
  }

  registerStateForm() {
    if (this.stateForm$ !== undefined)
      this.stateForm$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((state) => {
        if (state) {
          if (state.resetForm) {
            this.formGroupDirective ? this.formGroupDirective.resetForm() : '';
          }
          if (state.errorsForm) {
            state.errorsForm.forEach((err) => {
              console.log(err);

              this.form.controls[err.field].setErrors({
                incorrect: { message: err.errors[0] }
              });
            });
          }
          if (state.disableControls !== undefined) {
            state.disableControls === true ? this.form.disable() : this.form.enable();
          }
          if (state.executeReturn) {
            this.form.markAllAsTouched();
            if (this.form.valid) this.onSubmit();
            else this.returnData.emit(undefined);
          }
          if (state.updateForm) {
            state.updateForm.forEach((field) => {
              if (field.options) {
                this.dataForm.update((data) => {
                  return {
                    ...data,
                    Fields: data.Fields.map((fld) => {
                      if (fld.Code === field.field.Code) {
                        return {
                          ...fld,
                          Options: field.field.Options
                        };
                      }
                      return { ...fld };
                    })
                  };
                });
              }
              if (field.value) {
                this.form.controls[field.field.Code].setValue(field.field.Value);
                this.dataForm.update((data) => {
                  return {
                    ...data,
                    Fields: data.Fields.map((fld) => {
                      if (fld.Code === field.field.Code) {
                        return {
                          ...fld,
                          Value: field.field.Value
                        };
                      }
                      return { ...fld };
                    })
                  };
                });
              }
              if (field.changeState) {
                this.dataForm.update((data) => {
                  return {
                    ...data,
                    Fields: data.Fields.map((fld) => {
                      if (fld.Code === field.field.Code) {
                        return {
                          ...fld,
                          IsEditable: field.field.IsEditable
                        };
                      }
                      return { ...fld };
                    })
                  };
                });
                field.field.IsEditable
                  ? this.form.controls[field.field.Code].enable()
                  : this.form.controls[field.field.Code].disable();
              }
            });
            console.log(state.updateForm);
            console.log(this.form);
          }
        }
      });
  }

  getCssClases() {
    if (this.dataForm().Orientation === Orientations.Horizontal) {
      this.cssFormClass.set('flex md:flex-row flex-col items-center');
    } else if (this.dataForm().Orientation === Orientations.Vertical) {
      this.cssFormClass.set('flex flex-col');
    } else if (this.dataForm().Orientation === Orientations.Columns) {
      this.cssFormClass.set(`grid  sm:grid-cols-${this.dataForm().Columns}`);
    }
  }

  getCssBtnClases() {
    if (this.dataForm().Orientation === Orientations.Horizontal) {
      return 'flex-row gap-2';
    } else if (this.dataForm().Orientation === Orientations.Vertical) {
      return 'md:flex-row flex-col gap-2';
    } else if (this.dataForm().Orientation === Orientations.Columns) {
      return 'gap-2 col-start-1';
    }
    return '';
  }

  changeSelectValue(field: FieldTemplateModel, event: MatSelectChange) {
    console.log(event);
    this.form.controls[field.Code].setValue(event.value);
    if (field.EmitChanges) this.returnFieldChange.emit({ ...field, Value: event.value });
  }

  toggleVisibility(field) {
    this.iconActioned.set(!this.iconActioned());
    if (this.iconActioned()) this.inputTypePassword = 'text';
    else this.inputTypePassword = 'password';
  }

  cancel() {
    this.returnCancel.emit();
  }

  // onSendDataAutocomplete(data: any, numberSelection: any) {
  //     if (this.lastValueSended !== numberSelection)
  //         this.returnData.emit({ id: data, number: numberSelection });
  //     this.lastValueSended = numberSelection;
  // }

  numberOnly(event): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      // Prevents keypress if it's not a number
      return false;
    }
    return true;
  }

  validatePhoneNumber(event: any, code) {
    const valorOriginal = event.target.value;
    const soloNumeros = valorOriginal.replace(/[^0-9]/g, '');
    if (valorOriginal !== soloNumeros) {
      event.target.value = soloNumeros;
      this.form.controls[code].setValue(soloNumeros);
    }
  }

  decimalOnly(event): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 46) {
      // Prevents keypress if it's not a number
      return false;
    }
    return true;
  }

  validateInputValue(event, code: string) {
    let inputValue = (event.target as HTMLInputElement).value;
    if (inputValue.length === 0) {
      // (event.target as HTMLInputElement).value = '0';
      this.form.controls[code].setValue(0);
    } else {
      if (inputValue[0] === '0') {
        inputValue = inputValue.slice(1);
        (event.target as HTMLInputElement).value = inputValue;
      }
    }
  }

  onCheckboxChange(event, field: FieldTemplateModel) {
    console.log(event);
    this.form.controls[field.Code].setValue(event.checked);
  }

  multipleToggleChange(
    event: MatSlideToggleChange,
    option: { key: any; value: any },
    field: FieldTemplateModel
  ) {
    console.log(event);
    if (event.checked) {
      this.form.controls[field.Code].setValue([
        ...this.form.controls[field.Code].value,
        option.key
      ]);
    }
    if (!event.checked) {
      const indexToDel = this.form.controls[field.Code].value.findIndex(
        (idS) => idS === option.value
      );
      this.form.controls[field.Code].value.splice(indexToDel, 1);
    }
  }

  returnChipLabelSelect(value, field: FieldTemplateModel) {
    const label = field.Options.find((opt) => opt.value === value).key;
    return label;
  }

  remove(field: FieldTemplateModel, index: number) {
    field.OptionsSelected.splice(index, 1);
    this.returnFieldChange.emit({
      ...field
    });
  }

  onSubmit() {
    // const fldEditor = this.dataForm().Fields.find(
    //     (fld) => fld.FieldType.Name === TypeFields.Editor
    // );
    // if (fldEditor) this.verifyToConvertDocToHtml(fldEditor);
    this.returnData.emit(this.form.getRawValue());
  }

  // verifyToConvertDocToHtml(fld: FieldTemplateModel) {
  //     if (this.form.controls[fld.Code]) {
  //         const value = this.form.controls[fld.Code].value;
  //         if (value) {
  //             try {
  //                 this.form.controls[fld.Code].setValue(
  //                     toHTML(this.form.controls[fld.Code].value)
  //                 );
  //             } catch (error) {}
  //         }
  //     }
  // }

  ngOnDestroy(): void {
    // this.editor.destroy();
  }
}
