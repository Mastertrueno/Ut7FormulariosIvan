function showFeedBack(input, valid, message) {
	let validClass = (valid) ? 'is-valid' : 'is-invalid';
	let div = (valid) ? input.nextAll("div.valid-feedback") : input.nextAll("div.invalid-feedback");
	input.nextAll('div').removeClass('d-block');
	div.removeClass('d-none').addClass('d-block');
	input.removeClass('is-valid is-invalid').addClass(validClass);
	if (message) {
		div.empty();
		div.append(message);
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

function newPeliValidation(handler) {
    let form = document.forms.fNewFormPelicula;
    console.log(handler);
    console.log(form);
    $(form).attr('novalidate', true);
    $(form).submit(function (event) {
        let isValid = true;
        let firstInvalidElement = null;
        this.ncSynopsis.value = this.ncSynopsis.value.trim();
        showFeedBack($(this.ncSynopsis), true);
        if (!this.ncNacionalidad.checkValidity()) {
            isValid = false; showFeedBack($(this.ncNacionalidad), false);
            firstInvalidElement = this.ncNacionalidad;
        } else {
            showFeedBack($(this.ncNacionalidad), true);
        }
        if (!this.ncTitle.checkValidity()) {
            isValid = false;
            showFeedBack($(this.ncTitle), false);
            firstInvalidElement = this.ncTitle;
        } else {
            showFeedBack($(this.ncTitle), true);
        }
        if (!this.ncPublication.checkValidity()) {
            isValid = false;
            showFeedBack($(this.ncPublication), false);
            firstInvalidElement = this.ncPublication;
        } else {
            showFeedBack($(this.ncPublication), true);
        }
        if (!this.ncImagen.checkValidity()) {
            isValid = false;
            showFeedBack($(this.ncImagen), false);
            firstInvalidElement = this.ncImagen;
        } else {
            showFeedBack($(this.ncImagen), true);
        }
        if (!this.ncLink.checkValidity()) {
            isValid = false;
            showFeedBack($(this.ncLink), false);
            firstInvalidElement = this.ncLink;
        } else {
            showFeedBack($(this.ncLink), true);
        }
        if (!this.ncRec.checkValidity()) {
            isValid = false;
            showFeedBack($(this.ncRec), false);
            firstInvalidElement = this.ncRec;
        } else {
            showFeedBack($(this.ncRec), true);
        }
        if (!this.ncLat.checkValidity()) {
            isValid = false;
            showFeedBack($(this.ncLat), false);
            firstInvalidElement = this.ncLat;
        } else {
            showFeedBack($(this.ncLat), true);
        }
        if (!this.ncLong.checkValidity()) {
            isValid = false;
            showFeedBack($(this.ncLong), false);
            firstInvalidElement = this.ncLong;
        } else {
            showFeedBack($(this.ncLong), true);
        }
        if (!isValid) {
            firstInvalidElement.focus();
        } else {
            handler(this.ncTitle.value, this.ncNacionalidad.value, this.ncPublication.value, this.ncImagen.value,
                 this.ncLink.value, this.ncSynopsis.value,this.ncRec,this.ncLat,this.ncLong);
        } 
        event.preventDefault();
        event.stopPropagation();
    });
    form.addEventListener('reset', (function (event) {
        let feedDivs = $(this).find('div.valid-feedback, div.invalid-feedback');
        feedDivs.removeClass('d-block').addClass('d-none');
        let inputs = $(this).find('input'); 
        inputs.removeClass('is-valid is-invalid');
    }));
    $(form.ncTitle).change(defaultCheckElement);
    $(form.ncNacionalidad).change(defaultCheckElement);
    $(form.ncPublication).change(defaultCheckElement);
    $(form.ncImagen).change(defaultCheckElement);
    $(form.ncLink).change(defaultCheckElement);
    $(form.ncRec).change(defaultCheckElement);
    $(form.ncLat).change(defaultCheckElement);
    $(form.ncLong).change(defaultCheckElement);


}
function newSerieValidation(handler) {
    let form = document.forms.fNewFormSerie;
    console.log(handler);
    console.log(form);
    $(form).attr('novalidate', true);
    $(form).submit(function (event) {
        let isValid = true;
        let firstInvalidElement = null;
        this.ncSynopsis.value = this.ncSynopsis.value.trim();
        if (!this.ncNacionalidad.checkValidity()) {
            isValid = false; showFeedBack($(this.ncNacionalidad), false);
            firstInvalidElement = this.ncNacionalidad;
        } else {
            showFeedBack($(this.ncNacionalidad), true);
        }
        if (!this.ncTitle.checkValidity()) {
            isValid = false;
            showFeedBack($(this.ncTitle), false);
            firstInvalidElement = this.ncTitle;
        } else {
            showFeedBack($(this.ncTitle), true);
        }
        if (!this.ncPublication.checkValidity()) {
            isValid = false;
            showFeedBack($(this.ncPublication), false);
            firstInvalidElement = this.ncPublication;
        } else {
            showFeedBack($(this.ncPublication), true);
        }
        if (!this.ncImagen.checkValidity()) {
            isValid = false;
            showFeedBack($(this.ncImagen), false);
            firstInvalidElement = this.ncImagen;
        } else {
            showFeedBack($(this.ncImagen), true);
        }
        if (!this.ncLink.checkValidity()) {
            isValid = false;
            showFeedBack($(this.ncLink), false);
            firstInvalidElement = this.ncLink;
        } else {
            showFeedBack($(this.ncLink), true);
        }
        if (!this.ncDuration.checkValidity()) {
            isValid = false;
            showFeedBack($(this.ncDuration), false);
            firstInvalidElement = this.ncDuration;
        } else {
            showFeedBack($(this.ncDuration), true);
        }
        if (!this.ncLat.checkValidity()) {
            isValid = false;
            showFeedBack($(this.ncLat), false);
            firstInvalidElement = this.ncLat;
        } else {
            showFeedBack($(this.ncLat), true);
        }
        if (!this.ncLong.checkValidity()) {
            isValid = false;
            showFeedBack($(this.ncLong), false);
            firstInvalidElement = this.ncLong;
        } else {
            showFeedBack($(this.ncLong), true);
        }
        
        if (!isValid) {
            firstInvalidElement.focus();
        } else {
            handler(this.ncTitle.value,this.ncNacionalidad, this.ncPublication.value,this.ncSynopsis, this.ncImagen.value, this.ncLong.value, this.ncLong.value);
        } 
        event.preventDefault();
        event.stopPropagation();
    });
    form.addEventListener('reset', (function (event) {
		let feedDivs = $(this).find('div.valid-feedback, div.invalid-feedback');
		feedDivs.removeClass('d-block').addClass('d-none');
		let inputs = $(this).find('input');
		inputs.removeClass('is-valid is-invalid');
	}));
    $(form.ncTitle).change(defaultCheckElement);
    $(form.ncNacionalidad).change(defaultCheckElement);
    $(form.ncPublication).change(defaultCheckElement);
    $(form.ncImagen).change(defaultCheckElement);
    $(form.ncLink).change(defaultCheckElement);
    $(form.ncRec).change(defaultCheckElement);
    $(form.ncLat).change(defaultCheckElement);
    $(form.ncLong).change(defaultCheckElement);
    $(form.ncLong).change(defaultCheckElement);

}


function newCategoryValidation(handler) {
    console.log(document.forms);
    let form = document.forms.fNewCategory;
    console.log(handler);
    console.log(form);
    $(form).attr('novalidate', true);
    $(form).submit(function (event) {
        let isValid = true;
        let firstInvalidElement = null;
        this.ncDescription.value = this.ncDescription.value.trim();
        showFeedBack($(this.ncDescription), true);

        if (!this.ncName.checkValidity()) {
            isValid = false;
            showFeedBack($(this.ncName), false);
            firstInvalidElement = this.ncName;
        } else {
            showFeedBack($(this.ncName), true);
        }
        if (!isValid) {
            firstInvalidElement.focus();
        } else {
            handler(this.ncName.value, this.ncDescription.value);
        } event.preventDefault();
        event.stopPropagation();
    });
    form.addEventListener('reset', (function (event) {
		let feedDivs = $(this).find('div.valid-feedback, div.invalid-feedback');
		feedDivs.removeClass('d-block').addClass('d-none');
		let inputs = $(this).find('input');
		inputs.removeClass('is-valid is-invalid');
	}));
    $(form.ncName).change(defaultCheckElement);
    $(form.ncDescription).change(defaultCheckElement);
}
function newActorValidation(handler) {
    console.log(document.forms);
    document.forms.fNewActor;
    let form = document.forms.fNewActor;
    console.log(handler);
    console.log(form);
    $(form).attr('novalidate', true);
    $(form).submit(function (event) {
        let isValid = true;
        let firstInvalidElement = null;
        this.ncImagen.value = this.ncImagen.value.trim();
        showFeedBack($(this.ncImagen), true);

        if (!this.ncNombre.checkValidity()) {
            isValid = false;
            showFeedBack($(this.ncNombre), false);
            firstInvalidElement = this.ncNombre;
        } else {
            showFeedBack($(this.ncNombre), true);
        }
        if (!this.ncApellido1.checkValidity()) {
            isValid = false;
            showFeedBack($(this.ncApellido1), false);
            firstInvalidElement = this.ncApellido1;
        } else {
            showFeedBack($(this.ncApellido1), true);
        }
        if (!this.ncApellido2.checkValidity()) {
            isValid = false;
            showFeedBack($(this.ncApellido2), false);
            firstInvalidElement = this.ncApellido2;
        } else {
            showFeedBack($(this.ncApellido2), true);
        }
        if (!this.ncBorn.checkValidity()) {
            isValid = false;
            showFeedBack($(this.ncBorn), false);
            firstInvalidElement = this.ncBorn;
        } else {
            showFeedBack($(this.ncBorn), true);
        }
        
        if (!isValid) {
            firstInvalidElement.focus();
        } else {
            handler(this.ncNombre.value, this.ncApellido1.value, this.ncApellido2.value, this.ncBorn.value, this.ncImagen.value);
        } event.preventDefault();
        event.stopPropagation();
    });
    form.addEventListener('reset', (function (event) {
		let feedDivs = $(this).find('div.valid-feedback, div.invalid-feedback');
		feedDivs.removeClass('d-block').addClass('d-none');
		let inputs = $(this).find('input');
		inputs.removeClass('is-valid is-invalid');
	}));
    $(form.ncNombre).change(defaultCheckElement);
    $(form.ncApellido1).change(defaultCheckElement);
    $(form.ncApellido2).change(defaultCheckElement);
    $(form.ncBorn).change(defaultCheckElement);
    $(form.ncImagen).change(defaultCheckElement);
}
function newDirectorValidation(handler) {
    console.log(document.forms);
    document.forms.fNewDirector;
    let form = document.forms.fNewDirector;
    console.log(handler);
    console.log(form);
    $(form).attr('novalidate', true);
    $(form).submit(function (event) {
        let isValid = true;
        let firstInvalidElement = null;
        this.ncImagen.value = this.ncImagen.value.trim();
        showFeedBack($(this.ncImagen), true);

        if (!this.ncNombre.checkValidity()) {
            isValid = false;
            showFeedBack($(this.ncNombre), false);
            firstInvalidElement = this.ncNombre;
        } else {
            showFeedBack($(this.ncNombre), true);
        }
        if (!this.ncApellido1.checkValidity()) {
            isValid = false;
            showFeedBack($(this.ncApellido1), false);
            firstInvalidElement = this.ncApellido1;
        } else {
            showFeedBack($(this.ncApellido1), true);
        }
        if (!this.ncApellido2.checkValidity()) {
            isValid = false;
            showFeedBack($(this.ncApellido2), false);
            firstInvalidElement = this.ncApellido2;
        } else {
            showFeedBack($(this.ncApellido2), true);
        }
        if (!this.ncBorn.checkValidity()) {
            isValid = false;
            showFeedBack($(this.ncBorn), false);
            firstInvalidElement = this.ncBorn;
        } else {
            showFeedBack($(this.ncBorn), true);
        }
        
        if (!isValid) {
            firstInvalidElement.focus();
        } else {
            handler(this.ncNombre.value, this.ncApellido1.value, this.ncApellido2.value, this.ncBorn.value, this.ncImagen.value);
        } event.preventDefault();
        event.stopPropagation();
    });
    form.addEventListener('reset', (function (event) {
		let feedDivs = $(this).find('div.valid-feedback, div.invalid-feedback');
		feedDivs.removeClass('d-block').addClass('d-none');
		let inputs = $(this).find('input');
		inputs.removeClass('is-valid is-invalid');
	}));
    $(form.ncTitle).change(defaultCheckElement);
    $(form.ncDescription).change(defaultCheckElement);
}