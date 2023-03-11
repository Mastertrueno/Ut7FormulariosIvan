function showFeedBack(input, valid, message) {
    let validClass = (valid) ? 'is-valid' : 'is-invalid';
    let div = (valid) ? input.nextAll("div.valid-feedback") : input.nextAll("div.invalid-feedback");
    input.nextAll('div').removeClass('d-block');
    div.removeClass('d-none').addClass('d-block');
    input.removeClass('is-valid is-invalid').addClass(validClass);
    if (message) {
        div.empty(); div.append(message);
    }
}
function defaultCheckElement(event) {
    this.value = this.value.trim();
    if (!this.checkValidity()) {
        showFeedBack($(this), false);
    } else {
        showFeedBack($(this), true);
    }
}

function newCategoryValidation(handler) {
    let form = document.forms.fNewCategory;
    console.log(form);
    $(form).attr('novalidate', true);
    $(form).submit(function (event) {
        let isValid = true;
        let firstInvalidElement = null;
        this.ncDescription.value = this.ncDescription.value.trim();
        showFeedBack($(this.ncDescription), true);
        if (!this.ncUrl.checkValidity()) {
            isValid = false; showFeedBack($(this.ncUrl), false);
            firstInvalidElement = this.ncUrl;
        } else {
            showFeedBack($(this.ncUrl), true);
        }
        if (!this.ncTitle.checkValidity()) {
            isValid = false;
            showFeedBack($(this.ncTitle), false);
            firstInvalidElement = this.ncTitle;
        } else {
            showFeedBack($(this.ncTitle), true);
        }
        if (!isValid) {
            firstInvalidElement.focus();
        } else {
            handler(this.ncTitle.value, this.ncUrl.value, this.ncDescription.value);
        } event.preventDefault();
        event.stopPropagation();
    });
    form.addEventListener('reset', (function (event) {
        let feedDivs = $(this).find('div.valid-feedback, div.invalid-feedback');
        feedDivs.removeClass('d-block').addClass('d-none');
        let inputs = $(this).find('input'); inputs.removeClass('is-valid is-invalid');
    }));
    $(form.ncTitle).change(defaultCheckElement);
    $(form.ncUrl).change(defaultCheckElement);
}