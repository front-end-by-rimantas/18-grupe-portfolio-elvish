function renderFormButton(formData) {
    const HTML = `<div class="form-row col-8">
                    <input type="${formData.type}" class="m-btn" value="${formData.value}">
                  </div>`
    return HTML;
};

export { renderFormButton };