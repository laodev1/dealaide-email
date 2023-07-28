import { html } from "lit";
import { StateView } from "./state-view";
class MainView extends StateView {
  static get properties() {
    return {
      ...StateView.properties,
      type:{type:String},
    };
  }
 
  render() {
    return html`
 <!-- Start main area-->
<div class="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8 ">
    <!-- component -->
    <main class="flex w-full h-screen shadow-lg rounded-3xl">
        <section class="flex flex-col w-auto p-2 bg-white rounded-l-3xl">
            <div class="w-16 mx-auto mt-12 mb-20 p-4 bg-indigo-600 rounded-2xl text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                        d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
                </svg>
            </div>
            <nav class="relative flex flex-col py-4 items-center">
                <a href="#" class="relative w-16 p-4 bg-purple-100 text-purple-900 rounded-2xl mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                            d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20" />
                    </svg>
                    <span
                        class="absolute -top-2 -right-2 bg-red-600 h-6 w-6 p-2 flex justify-center items-center text-white rounded-full">3</span>
                </a>
                <a href="#" class="w-16 p-4 border text-gray-700 rounded-2xl mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                </a>
                <a href="#" class="w-16 p-4 border text-gray-700 rounded-2xl mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                </a>
                <a href="#" class="w-16 p-4 border text-gray-700 rounded-2xl mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                </a>
                <a href="#" class="w-16 p-4 border text-gray-700 rounded-2xl mb-24">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </a>
                <a href="#" class="w-16 p-4 border text-gray-700 rounded-2xl">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </a>
            </nav>
        </section>
        <section class="flex flex-col pt-3 w-auto px-2 bg-gray-50 h-auto overflow-y-scroll">
            <label class="px-3">
                <input @input=${this.handleSearch}
                    class="rounded-lg p-4 bg-gray-100 transition duration-200 focus:outline-none focus:ring-2 w-full"
                    placeholder="Search..." />
            </label>

            <ul class="mt-6">
                <li class="py-5 border-b px-3 transition hover:bg-indigo-100">
                    <a href="#" class="flex justify-between items-center">
                        <h3 class="text-lg font-semibold">Kyle Broflovski</h3>
                        <p class="text-md text-gray-400">23m ago</p>
                    </a>
                    <div class="text-md italic text-gray-400">Reopening of Casa Bonita</div>
                </li>
                <li class="py-5 border-b px-3 transition hover:bg-indigo-100">
                    <a href="#" class="flex justify-between items-center">
                        <h3 class="text-lg font-semibold">Kyle Broflovski</h3>
                        <p class="text-md text-gray-400">23m ago</p>
                    </a>
                    <div class="text-md italic text-gray-400">Reopening of Casa Bonita</div>
                </li>
                <li class="py-5 border-b px-3 transition hover:bg-indigo-100">
                    <a href="#" class="flex justify-between items-center">
                        <h3 class="text-lg font-semibold">Kyle Broflovski</h3>
                        <p class="text-md text-gray-400">23m ago</p>
                    </a>
                    <div class="text-md italic text-gray-400">Reopening of Casa Bonita</div>
                </li>
                <li class="py-5 border-b px-3 transition hover:bg-indigo-100">
                    <a href="#" class="flex justify-between items-center">
                        <h3 class="text-lg font-semibold">Kyle Broflovski</h3>
                        <p class="text-md text-gray-400">23m ago</p>
                    </a>
                    <div class="text-md italic text-gray-400">Reopening of Casa Bonita</div>
                </li>
                <li class="py-5 border-b px-3 bg-indigo-600 text-white">
                    <a href="#" class="flex justify-between items-center">
                        <h3 class="text-lg font-semibold">Kyle Broflovski</h3>
                        <p class="text-md">23m ago</p>
                    </a>
                    <div class="text-md">Reopening of Casa Bonita</div>
                </li>
                <li class="py-5 border-b px-3 transition hover:bg-indigo-100">
                    <a href="#" class="flex justify-between items-center">
                        <h3 class="text-lg font-semibold">Kyle Broflovski</h3>
                        <p class="text-md text-gray-400">23m ago</p>
                    </a>
                    <div class="text-md italic text-gray-400">Reopening of Casa Bonita</div>
                </li>
                <li class="py-5 border-b px-3 transition hover:bg-indigo-100">
                    <a href="#" class="flex justify-between items-center">
                        <h3 class="text-lg font-semibold">Kyle Broflovski</h3>
                        <p class="text-md text-gray-400">23m ago</p>
                    </a>
                    <div class="text-md italic text-gray-400">Reopening of Casa Bonita</div>
                </li>
            </ul>
        </section>
        <section class="flex-1 px-4 flex flex-col bg-white rounded-r-3xl">
            <div class="flex justify-between items-center h-48 border-b-2 mb-8">
                <div class="flex space-x-4 items-center">
                    <div class="h-12 w-12 rounded-full overflow-hidden">
                        <img src="https://bit.ly/2KfKgdy" loading="lazy" class="h-full w-full object-cover" />
                    </div>
                    <div class="flex flex-col">
                        <h3 id="from-name" class="font-semibold text-lg">Kyle Broflovski</h3>
                        <p id="from" class="text-light text-gray-400">kyleb93@gmail.com</p>
                    </div>
                </div>
                <div>
                    <ul class="flex text-gray-400 space-x-4">
                        <li class="w-6 h-6">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
                            </svg>
                        </li>
                        <li class="w-6 h-6">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </li>

                        <li class="w-6 h-6">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                            </svg>
                        </li>
                        <li class="w-6 h-6">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                        </li>
                        <li class="w-6 h-6">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                            </svg>
                        </li>
                    </ul>
                </div>
            </div>
            <section>
                <h1 id="subject" class="font-bold text-2xl">Casa Bonita is Reopening!</h1>
                <article id="body" class="mt-8 text-gray-500 leading-7 tracking-wider">
                    <p>Hi Stan,</p>
                    <p>After being closed for more than three years, Casa Bonita is getting set to reopen.</p>
                    <p>The iconic Lakewood restaurant has been undergoing more than $12 million in extensive renovations
                        since "South Park" creators Trey Parker and Matt Stone bought it for $3.1 million in September
                        2021.</p>
                    <footer class="mt-12">
                        <p>You In Dude?</p>
                        <p>Kyle</p>
                    </footer>
                </article>
                <ul class="flex space-x-4 mt-12">
                    <li class="p-1 cursor-pointer">
                        ${this.loading && this.type ==="small" ? html`<button disabled type="button"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
                            <svg aria-hidden="true" role="status" class="inline w-4 h-4 mr-3 text-white animate-spin"
                                viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                    fill="#E5E7EB" />
                                <path
                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                    fill="currentColor" />
                            </svg>
                            replying...
                        </button>` : html`<button @click=${this.handleGenerateResponse} type="button" id="small"
                            class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Small
                        </button>`}
                    </li>
                    <li class="p-1 cursor-pointer">
                        ${this.loading && this.type === "medium" ? html`<button disabled type="button"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
                            <svg aria-hidden="true" role="status" class="inline w-4 h-4 mr-3 text-white animate-spin"
                                viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                    fill="#E5E7EB" />
                                <path
                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                    fill="currentColor" />
                            </svg>
                            replying...
                        </button>`:html`<button @click=${this.handleGenerateResponse} id="medium" type="button"
                            class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Medium
                        </button>`}
                    </li>
                    <li class="p-1 cursor-pointer">
                        ${this.loading && this.type ==="crispy" ? html`<button disabled type="button"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
                            <svg aria-hidden="true" role="status" class="inline w-4 h-4 mr-3 text-white animate-spin"
                                viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                    fill="#E5E7EB" />
                                <path
                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                    fill="currentColor" />
                            </svg>
                            replying...
                        </button>`: html`<button @click=${this.handleGenerateResponse} id="crispy" type="button"
                            class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Extra
                            Crispy</button>`}
                    </li>

                </ul>
            </section>
            <section class="mt-6 border rounded-xl bg-gray-50 mb-3">
                <pre id="reply" style="white-space: pre-wrap; min-height:150px;"
                    class="w-full bg-gray-50 p-2 rounded-xl h-auto" contenteditable="true"></pre>
                <div class="flex items-center justify-between p-2" style="border-top:1px solid #ccc;">
                    <button @click=${this.handleAddAttachment} class="h-6 w-6 text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                        </svg>
                    </button>
                    <button @click=${this.handleSendEmail}
                        class="bg-purple-600 text-white px-6 py-2 rounded-xl">Reply</button>
                </div>
            </section>
        </section>
    </main>
</div>
<!-- End main area -->
            
    `;
  }
  handleSearch(e){
    console.log('finding messages that match', e.target.value)
  }
  async handleAddAttachment(e){
    console.log('handle add attachment clicked', e)
  }
  async handleGenerateResponse(e){
    this.setState({loading:true})
    let nameEl = this.querySelector("#from-name");
    let fromEl = this.querySelector('#from')
    let subjectEl = this.querySelector('#subject')
    let bodyEl = this.querySelector("#body");
    let replyEl = this.querySelector("#reply");
    console.log(fromEl,subjectEl,bodyEl,replyEl)
    let from = `Name: ${nameEl.textContent} Email:${fromEl.textContent}`;
    
    let subject = subjectEl.textContent;
    let body = bodyEl.textContent;
    let reply = replyEl.value || null;
    let type = e.target.closest('button').id;
    this.type = type;
    console.log(from,subject,body,reply,type)
    let message = await this.callOpenAI(from,subject,body,reply,type);
    replyEl.innerText = message;
    this.setState({loading:false});
  }
  async handleSendEmail(e){
    console.log('send email clicked', e)
  }
  async callOpenAI(from,subject,body,reply,type) {

    let response = await fetch("/api/ai/text", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({from,subject,body,reply,type})
    }).catch(err => (console.error(err)));
    let data = await response.json();
    console.log('generated message',data);
    let message = data.choices[0].message.content;
    return message;

  }



}

customElements.define("main-view", MainView);
