import { html, css } from "lit";
import { StateView } from "../state-view";
export class TailwindModal extends StateView {
  static get properties() {
    return {
      textColor: { type: String },
      bgColor: { type: String },
      modalOptions:{type:Object},
      open:{type:Boolean},
      id:{type:String},
      ...StateView.properties,
    };
  }
  constructor() {
    super();
    this.open=true;
    this.id = Date.now();
  }
  render() {
    return html`

    <!-- ${this.open ? ``: html`<button style="position:fixed; bottom:1em; right:1em; z-index:9999;" @click=${this.toggleOpen}>Open Modal</button>`} -->
    ${this.open ? html`<div class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
    <!--
      Background overlay, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100"
        To: "opacity-0"
    -->
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
 <div class="hidden sm:block absolute top-0 right-0 pt-4 pr-4 z-50">
        <button @click=${this.close} type="button" class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <span class="sr-only">Close</span>
          <!-- Heroicon name: outline/x -->
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    <!-- This element is to trick the browser into centering the modal contents. -->
   

    <!--
      Modal panel, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        To: "opacity-100 translate-y-0 sm:scale-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100 translate-y-0 sm:scale-100"
        To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    -->
    <div class="rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all p-4" >
    <!-- ${this.children} -->
    <div class="rounded-md bg-green-50 p-4">
  <div class="flex">
    <div class="flex-shrink-0">
      <!-- Heroicon name: mini/check-circle -->
      <svg class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
      </svg>
    </div>
    <div class="ml-3">
      <h3 class="text-sm font-medium text-green-800">Thank you for your Feedback!</h3>
      <div class="mt-2 text-sm text-green-700">
        <p>We value your input and will make every effort to deliver tools, tactics & strategies that fit our collective mission.</p>
      </div>
      <div class="mt-4">
        <div class="-mx-2 -my-1.5 flex">
          <button type="button" class="ml-3 rounded-md bg-green-50 px-2 py-1.5 text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50" @click=${this.close}>Dismiss</button>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  </div>
</div>`:``}
`;
  }

 toggleOpen() {
   this.open = !this.open;
   if(this.open){
       this.fire('modal-open');
   } else {
       this.fire('modal-closed');
   }
  //  this.requestUpdate();

  }
  close(){
      this.open = false;
      // this.requestUpdate();
      this.fire('modal-closed')
  }
}
customElements.define("tailwind-modal", TailwindModal);
