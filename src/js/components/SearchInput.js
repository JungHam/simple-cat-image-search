export default class SearchInput {
  constructor({$target, onSearch, onRandomClick}){
    this.$target = $target

    const $wrapper = document.createElement('div')
    $wrapper.className = 'wrapper'
    const $searchInput = document.createElement('input')
    $searchInput.className = 'SearchInput'
    $searchInput.placeholder = '고양이를 검색하세요'
    this.searchInput = $searchInput

    const $searchBtn = document.createElement('button')
    $searchBtn.className = 'SearchBtn'
    $searchBtn.innerHTML = '검색'
    $searchBtn.addEventListener('click', event => { onSearch(this.searchInput.value) });


    $target.appendChild($wrapper)
    $wrapper.appendChild($searchInput)
    $wrapper.appendChild($searchBtn)

    this.render()
  }

  render(){

  }
}
