function renderFormTextarea(formData) {
    const HTML = `<div class="form-row col-8">
                    <label for="${formData.labelFor}">${formData.labelContent}</label>
                    <textarea name="${formData.name}" id="${formData.id}" placeholder="${formData.placeholder}"></textarea>
                  </div>`
    return HTML;
};

export { renderFormTextarea };