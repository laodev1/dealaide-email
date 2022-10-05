import { html } from "lit";
import { StateView } from "../state-view.js";

import './tailwind-modal';
export class SubmissionForm extends StateView {
  static get properties() {
    return {
      ...StateView.properties,
      db: { attribute: false },
      success:{type:Boolean}
    };
  }
  constructor(){
    super();
    this.success = false;
  }

  render() {
    return html`
    <tailwind-modal .open=${this.success} @modal-closed=${_=>this.success=false}></tailwind-modal>
    <div class="h-full">
     <form @submit=${this.handleSubmit}>
        <div class="shadow sm:overflow-hidden sm:rounded-md">
        <h1 class="text-xl font-large text-gray-900sm:p-4 ">👋Hi there!<br/>Thanks for stopping by.</h1>
      
          <div class="space-y-6 bg-white py-6 px-4 sm:p-6">
            <div>
              
              <h3 class="text-lg font-medium leading-6 text-gray-900">
                 Got a Suggestion?
              </h3>
              <p class="mt-1 text-sm text-gray-500">
              Describe your idea,improvement, or an issue you would like to see addressed. Perhaps also what you hope it will make possible as a result?
              </p>
            </div>

            <div class="grid grid-cols-3 gap-6">
              <div class="col-span-3 sm:col-span-2">
                <label
                  for="email"
                  class="block text-sm font-medium text-gray-700"
                  >Email (Blank for anonymous)</label
                >
                <div class="mt-1 flex rounded-md shadow-sm border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    autocomplete="email"
                    class="block w-full min-w-0 flex-grow sm:text-sm p-2"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div class="col-span-3">
                <label
                  for="suggestion"
                  class="block text-sm font-medium text-gray-700"
                  >* Suggestion</label
                >
                <div class="mt-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm">
                  <textarea
                    id="suggestion"
                    name="suggestion"
                    rows="6"
                    required
                    class="mt-1 block w-full p-2"
                    placeholder="It would be really cool if..."
                  ></textarea>
                </div>
                <p class="mt-2 text-sm text-gray-500">
                 Enter your suggestion in the space above.
                </p>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
            <button
              type="submit"
              class="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>`;
  }
  async handleSubmit(e) {
    console.log("handle Submit", e);

    e.preventDefault();
    const form = e.target;
    const id = form.id;

    const formData = new FormData(form);
    let json = {};

    for (const [key, value] of formData.entries()) {
      json[key] = value;
    }
    json.datetime=new Date()
    let response = await fetch("/api/submissions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(json)
    }).catch((err) => alert("whoops! Something went wrong. Please refresh."));
    let data = await response.json();
    form.reset();
    this.success = true;
  }
}
customElements.define("submission-form", SubmissionForm);
