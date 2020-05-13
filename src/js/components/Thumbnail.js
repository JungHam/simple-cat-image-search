export default class Thumbnail {
  constructor($target, data, onClick) {
    this.$target = $target;
    this.data = data;

    this.onClick = onClick;

    this.render();
  }

  render() {
    const {url, id} = this.data;

    const cardImage = document.createElement("img");
    cardImage.className = "thumbnail";
    cardImage.src = url;
    cardImage.addEventListener('click', event => {
      console.log('onclick called', event);
      this.onClick(this.data)
    })

    this.$target.appendChild(cardImage);
  }
}
