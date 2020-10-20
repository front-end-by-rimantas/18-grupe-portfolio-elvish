function renderFormInputs(formData) {
    const HTML = `<div class="form-row">
                    <label for="${formData.labelFor}">${formData.labelContent}</label>
                    <input id="${formData.id}" type="${formData.type}" placeholder="${formData.placeholder}" required>
                  </div>`
    return HTML;
};

export { renderFormInputs };