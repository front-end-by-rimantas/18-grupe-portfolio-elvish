function renderFormInputs(formData) {
    const HTML = `<div class="form-row">
                    <label for="${formData.labelFor}">${formData.labelContent}</label>
                    <input id="${formData.id}" type="${formData.type}" placeholder="${formData.placeholder}" required>
                    <i class="fa fa-check-circle"></i>
                    <i class="fa fa-exclamation-circle"></i>
                    <small>Error message</small>

                  </div>`
    return HTML;
};

export { renderFormInputs };