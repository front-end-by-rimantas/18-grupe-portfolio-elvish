function renderFormInputs(formData) {
    const HTML = `<div class="form-row col-8">
                    <label for="${formData.labelFor}">${formData.labelContent}</label>
                    <input id="${formData.inputId}" type="${formData.inputType}" placeholder="${formData.inputPlaceholder}">
                  </div>`
    return HTML;
};

export { renderFormInputs };