function renderFormTextarea(formData) {
    const HTML = `<div class="form-row">
                    <label for="${formData.labelFor}">${formData.labelContent}</label>
                    <textarea class="textAr" name="${formData.name}" id="${formData.id}" placeholder="${formData.placeholder}"></textarea>
                  </div>`
    return HTML;
};

export { renderFormTextarea };