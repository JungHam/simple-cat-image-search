import SearchInput from './components/SearchInput.js';
import SearchResult from './components/SearchResult.js';
import InfoModal from './components/InfoModal.js';

import {api} from './api/thecatapi.js';

const data = []


export default class App {
  constructor($target) {
    this.searchInput = new SearchInput({
      $target,
      onSearch: keyword =>{
        api.searchCats(keyword).then( data => {
          this.searchResult.setState(data)
        })
      }
    })

    this.searchResult = new SearchResult({$target, data,
      onClick: (data)=>{
        this.infoModal.setState(data);
        this.infoModal.show();
      }
    })

    this.infoModal = new InfoModal({$target})
  }
}
