export default class InfoModal {
  constructor({$target, data}){
    this.$target = $target

    const $modal = document.createElement('div')
    $modal.className = 'modal'
    this.modal = $modal;

    const $modalContent = document.createElement('div')
    $modalContent.className = 'modal-content'
    $modalContent.innerHTML = "<p>test</p>"
    this.modalContent = $modalContent

    $modal.appendChild($modalContent)
    $target.appendChild($modal)

    this.render()
  }

  setState(data){
    this.data = data
  }

  show() {
    this.render()
    this.modal.style.display = "block"
  }

  clearModal() {
    while (this.modalContent.hasChildNodes()) this.modalContent.removeChild(this.modalContent.firstChild);
  }

  render(){

    this.clearModal()

    if(!this.data) {
      this.modalContent.innerHTML = 'no detail data 😥'
      return;
    }

    const data = this.data.breeds[0];

    const nameFiled = document.createElement('h3')
    nameFiled.innerHTML = data.name;

    const image = document.createElement("img");
    image.className = "thumbnail-img";
    image.src = this.data.url;

    const contentFiled = document.createElement('div')
    contentFiled.innerHTML = data.alt_names + '</br>' +
                             '<b>origin</b> ' + data.origin + '</br>' +
                             '<b>life span</b> ' + data.life_span + '</br>' +
                             '<b>temperament</b> ' + data.temperament + '</br></br>' + data.description;

    this.modalContent.appendChild(nameFiled);
    this.modalContent.appendChild(image);
    this.modalContent.appendChild(contentFiled);

  }
}
