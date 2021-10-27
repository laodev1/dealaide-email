import { html } from 'lit-element';
import { StateView } from "../state-view";
export class HeaderSection extends StateView {
    render(){
        return html`<!-- This example requires Tailwind CSS v2.0+ -->
<div class="bg-white">
  <!-- Header -->
  <div class="relative pb-32 bg-gray-800">
    <div class="absolute inset-0">
      <img class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100" alt="">
      <div class="absolute inset-0 bg-gray-800 mix-blend-multiply" aria-hidden="true"></div>
    </div>
    <div class="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
      <h1 class="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">ES Module Syntax Node/Express Starter</h1>
      <p class="mt-6 max-w-3xl text-xl text-gray-300">This project is a barebones starter for a nodejs/express app using module syntax (stable in Node v.15) on both the frontend and backend of the application without the need to 
      transpile. This app still uses Rollup to bundle modules however for the tree-shaking and minification benefits that such a build process can provide.</p>
    </div>
  </div>

  <!-- Overlapping cards -->
  <section class="-mt-32 max-w-7xl mx-auto relative z-1 pb-32 px-4 sm:px-6 lg:px-8" aria-labelledby="contact-heading">
    <h2 class="sr-only" id="contact-heading">Contact us</h2>
    <div class="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
      <div class="flex flex-col bg-white rounded-2xl shadow-xl">
        <div class="flex-1 relative pt-16 px-6 pb-8 md:px-8">
          <div class="absolute top-0 p-5 inline-block bg-indigo-600 rounded-xl shadow-lg transform -translate-y-1/2">
            <!-- Heroicon name: outline/phone -->
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          </svg>
          </div>
          <h3 class="text-xl font-medium text-gray-900">Architecture</h3>
          <p class="mt-4 text-base text-gray-500">Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.</p>
        </div>
        <div class="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
          <a href="/architecture" class="text-base font-medium text-indigo-700 hover:text-indigo-600">Learn More<span aria-hidden="true"> &rarr;</span></a>
        </div>
      </div>

      <div class="flex flex-col bg-white rounded-2xl shadow-xl">
        <div class="flex-1 relative pt-16 px-6 pb-8 md:px-8">
          <div class="absolute top-0 p-5 inline-block bg-indigo-600 rounded-xl shadow-lg transform -translate-y-1/2">
            <!-- Heroicon name: code -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <h3 class="text-xl font-medium text-gray-900">Languages & Tools</h3>
          <p class="mt-4 text-base text-gray-500">Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.</p>
        </div>
        <div class="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
          <a href="/built-with" class="text-base font-medium text-indigo-700 hover:text-indigo-600">Learn More<span aria-hidden="true"> &rarr;</span></a>
        </div>
      </div>

      <div class="flex flex-col bg-white rounded-2xl shadow-xl">
        <div class="flex-1 relative pt-16 px-6 pb-8 md:px-8">
          <div class="absolute top-0 p-5 inline-block bg-indigo-600 rounded-xl shadow-lg transform -translate-y-1/2">
            <!-- Heroicon name: outline/newspaper -->
            <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
          </div>
          <h3 class="text-xl font-medium text-gray-900">Documentation</h3>
          <p class="mt-4 text-base text-gray-500">Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.</p>
        </div>
        <div class="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
          <a href="/documentation" class="text-base font-medium text-indigo-700 hover:text-indigo-600">Learn More<span aria-hidden="true"> &rarr;</span></a>
        </div>
      </div>
    </div>
  </section>
</div>`

    }
}
customElements.define('header-section', HeaderSection);