import { html } from "lit";
import { StateView } from "./state-view";
import './components/header-section.js';
class MainView extends StateView {
  static get properties() {
    return {
      ...StateView.properties,
    };
  }
  
  render() {
    return html`
   
              <!-- Start main area-->
              <div class="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8 ">
             ${!this.loading ? `` : `Fetching Data Sources...`}
               <header-section></header-section>
              </div>
     
              <!-- End main area -->

            
    `;
  }
  async firstUpdated(){
         const data = await this.fetchData('/api');
   console.log(data);
  }
    async fetchData(path,options={'Accept':'application/json'}){
    const response = await fetch(path,options);
    const data = await response.json();
    this.sources = data;
    return data;
  }



 
}

customElements.define("main-view", MainView);
