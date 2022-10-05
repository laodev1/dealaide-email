import { html} from "lit";
import { Router } from "@vaadin/router";
import { StateView } from "./state-view.js";

export class AppRoot extends StateView {
  static get properties() {
    return {
      ...StateView.properties,
    };
  }

  render() {
    return html`
     <nav class="bg-gray-800 shadow">
    <div class="mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between h-16">
    <a href="/" class="flex items-center flex-shrink-0 px-4">
    <img class="h-8 w-auto" src="https://landadvisors.com/wp-content/uploads/2018/11/lao-logo.svg" alt="Land Advisors Organization®"/>
                </a>
      <div class="flex flex-1">
       
      </div>
    </div>
  </div>
  </nav>
      <div class="h-screen flex overflow-hidden bg-white">
        <!-- Static sidebar for desktop -->
        <div class="flex flex-col min-w-0 flex-1 overflow-hidden">
          <div class="flex-1 relative flex overflow-hidden">
            <main
              id="outlet"
              class="relative flex-1 relative overflow-y-auto focus:outline-none xl:order-last"
              tabindex="0"
            ></main>
            </main>
          </div>
        </div>
      </div>
      
    `;
  }

  

  async firstUpdated() {

    const router = new Router(document.querySelector("#outlet"));
    console.log(router);
    router.setRoutes([
      {
        path: "/",
        action: () => {
          import("./main-view");
        },
        component: "main-view",
      },
      {
        path: "(.*)",
        action: () => {
          import("./view-404");
        },
        component: "view-404",
      },
    ]);
  }
 
}
window.customElements.define("app-root", AppRoot);
