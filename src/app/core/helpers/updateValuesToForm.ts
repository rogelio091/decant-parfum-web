import { UpdateFieldForm } from 'app/components/dinamic-form/dinamic-form.component';
import { FieldTemplateModel } from 'app/components/dinamic-form/models/form-model';

export const updateField = (
    field: FieldTemplateModel,
    value: string | number | boolean | Date | [],
    options: boolean,
    optionsValue?: any[]
): UpdateFieldForm => {
    return {
        field: {
            ...field,
            Value: value,
            ...(options ? { Options: optionsValue } : {}),
        },
        value: value !== undefined ? true : false,
        options: options,
        changeState: true,
    };
};
