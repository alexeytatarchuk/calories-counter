
export default class Counter{
    constructor(element) {
        this.root = element;
        this.form = this.root.querySelector(".counter__form");
        this.elements = this.form.elements;
        this.gender = this.elements.gender;
        this.age = this.elements.age;
        this.height = this.elements.height;
        this.weight = this.elements.weight;
        this.activity = this.elements.activity;
        this.submit = this.elements.submit;
        this.reset = this.elements.reset;

        this._onFormInput = this._onFormInput.bind(this);
        this._onFormReset = this._onFormReset.bind(this);
        this._onFormSubmit = this._onFormSubmit.bind(this);
    }

    init(){
        addEventListener("input", this._onFormInput);
        addEventListener("submit", this._onFormSubmit);
        addEventListener("reset", this._onFormReset);
    }

    _onFormInput(){
        this.submit.disabled = !this.form.checkValidity();
    }

    _onFormSubmit(){

    }

    _onFormReset(){
        this.submit.disabled = true;
        this.reset.disabled = true;
    }

}