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
      <div class="flex items-center">

        <div class="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center">
    
              <button
                @click=${this.toggleRightPanel}
                class="bg-white p-1 m-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span class="sr-only">Toggle panel</span>
               <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
               </svg>
              </button>
  
        </div>
      </div>
    </div>
  </div>
  </nav>
      <div class="h-screen flex overflow-hidden bg-white">
        <!-- Static sidebar for desktop -->
        <div
          class="hidden md:flex md:flex-shrink-0 lg:flex lg:flex-shrink-0 z-10"
        >
          <div class="flex flex-col w-64 z-10">
            <!-- Sidebar component, swap this element with another sidebar if you like -->
            <aside
              class="flex flex-col h-0 flex-1 border-r border-gray-200 bg-gray-200 text-white z-10"
            >
              <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
               
                <nav class="mt-5 flex-1" aria-label="Sidebar">
                  <div class="px-2 space-y-1">
                    <!-- Add Sidebar Nav Here -->

                    <!-- End Sidebar Nav -->

                   
                  </div>
                </nav>
              </div>
              <div class="flex-shrink-0 flex border-t border-gray-200 p-4">
                <a href="#" class="flex-shrink-0 w-full group block">
                  <div class="flex items-center">
                    <div>
                      <img
                        class="inline-block h-9 w-9 rounded-full"
                        src="https://media-exp1.licdn.com/dms/image/C5103AQERl-69hK0YAw/profile-displayphoto-shrink_200_200/0/1516297000983?e=1634169600&v=beta&t=7ZeaItLf0MZWQI0b9z4pm3A3OqOJgVtVRqKOkO17NUY"
                        alt=""
                      />
                    </div>
                    <div class="ml-3">
                      <p
                        class="text-sm font-medium text-gray-700 group-hover:text-gray-900"
                      >
                        Steve Heideman
                      </p>
                      <p
                        class="text-xs font-medium text-gray-500 group-hover:text-gray-700"
                      >
                        View profile
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </aside>
          </div>
        </div>
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

      <div
        id="right-panel"
        class="absolute inset-0 overflow-hidden  transition transform translate-x-100 ease-in-out duration-500"
      >
        <div class="absolute inset-0 overflow-hidden">
       
          <section
            class="absolute inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16 z-10"
            aria-labelledby="slide-over-heading"
          >
            <div class="w-screen max-w-2xl">
             <button
                @click=${this.toggleRightPanel}
                class="bg-white rounded-md text-gray-800 hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 absolute right-3 top-3 z-10"
              >
                <span class="sr-only">Toggle panel</span>

                <svg
                      class="h-10 w-10"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
              </button>
              <div
                class="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll"
              >
                <div class="px-4 sm:px-6">
                  <div class="flex items-start justify-between">
                    <h2
                      id="slide-over-heading"
                      class="text-lg font-medium text-gray-900"
                    >
                      Right Sidepanel
                    </h2>
                    <div class="ml-3 h-7 flex items-center"></div>
                  </div>
                </div>
                <div class="mt-6 relative flex-1 px-4 sm:px-6">
                  <!-- Replace with your content -->
                
                  <!-- /End replace -->
                </div>
              </div>
            </div>
          </section>
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
        path: "/architecture",
        action: () => {
          import("./architecture-view");
        },
        component: "architecture-view",
      },
       {
        path: "/documentation",
        action: () => {
          import("./documentation-view");
        },
        component: "documentation-view",
      },
      {
        path: "/built-with",
        action: () => {
          import("./tools-view");
        },
        component: "tools-view",
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
  toggleDropdown(e) {
    const dropdown = this.querySelector("#current-actions");
    const svg = this.querySelector("#option-menu");
    svg.classList.toggle("rotate-180");
    svg.classList.toggle("rotate-0");
    dropdown.classList.toggle("opacity-100");
    dropdown.classList.toggle("opacity-0");
    dropdown.classList.toggle("z-0");
    dropdown.classList.toggle("z-10");
    dropdown.classList.toggle("scale-100");
    dropdown.classList.toggle("scale-95");
  }
  toggleRightPanel(e) {
    const panel = this.querySelector("#right-panel");
    panel.classList.toggle("translate-x-full");
    panel.classList.toggle("translate-x-0");
    console.log("open right panel", e);
    this.setState({ drawerOpen: !this.drawerOpen });
  }
  closeRightPanel(e) {
    const panel = this.querySelector("#right-panel");
    panel.classList.toggle("translate-x-0");
    panel.classList.toggle("translate-x-full");
    console.log("close right panel", e);
  }
}
window.customElements.define("app-root", AppRoot);
