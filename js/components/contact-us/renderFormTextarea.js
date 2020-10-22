function renderFormTextarea(formData) {
    const HTML = `<div class="form-row">
                    <label for="${formData.labelFor}">${formData.labelContent}</label>
                    <textarea class="textAr" name="${formData.name}" id="${formData.id}" placeholder="${formData.placeholder}" required></textarea>
                    <i class="fa fa-check-circle"></i>
                    <i class="fa fa-exclamation-circle"></i>
                    <small>Error message</small>
                  </div>`
    return HTML;
};

export { renderFormTextarea };