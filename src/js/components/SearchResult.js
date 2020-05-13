import Thumbnail from "./Thumbnail.js";

export default class SearchResult {
  constructor({$target, data, onClick}) {
    this.$target = $target;
    this.data = data;

    const $wrapper = document.createElement("div");
    $wrapper.className = "thumbnail-wrapper";
    this.wrapper = $wrapper;

    this.onClick = onClick;

    this.render();
  }

  setState(data) {
    console.log("SearchResult setState called");
    this.data = data;
    this.render();
  }

  clearWrapper() {
    while (this.wrapper.hasChildNodes()) this.wrapper.removeChild(this.wrapper.firstChild);
  }

  render() {
    this.clearWrapper();

    this.data.forEach(cat => {
      const item = new Thumbnail(this.wrapper, cat, this.onClick);
    });

    this.$target.appendChild(this.wrapper);
  }
}
