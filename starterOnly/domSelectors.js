class DomSelectors {
  modalbg = document.querySelector(".bground");
  modalBtn = document.querySelectorAll(".modal-btn");
  form = document.querySelector("form[name=reserve]");
  formData = document.querySelectorAll(".formData");
  formInputs = this.form.querySelectorAll("input[name]");
  navToggleButton = document.querySelector(".icon");
  closeModalButton = document.querySelector(".close");

  getOne(selector) {
    return document.querySelector(selector);
  }

  getAll(selector) {
    return document.querySelectorAll(selector);
  }
}

const dom = new DomSelectors;

export default dom;