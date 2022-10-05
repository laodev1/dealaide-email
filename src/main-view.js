import { html } from "lit";
import { StateView } from "./state-view";
import './components/submission-form'
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
              <submission-form></submission-form>
  </div>
              <!-- End main area -->

            
    `;
  }



 
}

customElements.define("main-view", MainView);
