export const toFormData = (values: any) => {
    const formData = new FormData();
    for (const key in values) {
        if (values.hasOwnProperty(key)) {
            console.log(key);
            if (key === 'Images') {
                var mul = values[key];
                if (mul.length > 0)
                    mul.forEach((file) => {
                        if (file.file) formData.append(key, file.file);
                    });
            } else if (key === 'DeleteImages') {
                var img = values[key];
                if (img && img.length > 0)
                    img.forEach((obj) => {
                        formData.append(key, obj);
                    });
            } else {
                var vals = values[key];
                if (Array.isArray(vals)) {
                    vals.forEach((val) => formData.append(key, val));
                } else formData.append(key, values[key]);
                console.log(values[key]);
            }
        }
    }
    return formData;
};
