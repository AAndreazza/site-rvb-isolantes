import React from 'react'

const PaginaContato = () => {
    return (
        <div>
            <div class="relative isolate">
                <div class="mx-auto grid max-w-6xl grid-cols-1 lg:grid-cols-2">
                    <div class="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
                        <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                            <h2 class="ml-1 text-5xl font-bold text-[#2f4c86]">ENTRE EM CONTATO</h2>
                            <h2 class="-mt-11 sm:-mt-12 text-5xl font-bold text-gray-300">ENTRE EM CONTATO</h2>
                            <p class="mt-6 text-lg leading-8 text-gray-300">Proin volutpat consequat porttitor cras nullam gravida at. Orci molestie a eu arcu. Sed ut tincidunt integer elementum id sem. Arcu sed malesuada et magna.</p>
                            <dl class="mt-10 space-y-4 text-base leading-7 text-gray-300">
                                <div class="flex gap-x-4">
                                    <dt class="flex-none">
                                        <span class="sr-only">Address</span>
                                        <svg class="h-7 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                                        </svg>
                                    </dt>
                                    <dd>545 Mavis Island<br />Chicago, IL 99191</dd>
                                </div>
                                <div class="flex gap-x-4">
                                    <dt class="flex-none">
                                        <span class="sr-only">Telephone</span>
                                        <svg class="h-7 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                        </svg>
                                    </dt>
                                    <dd><a class="hover:text-white" href="tel:+1 (555) 234-5678">+1 (555) 234-5678</a></dd>
                                </div>
                                <div class="flex gap-x-4">
                                    <dt class="flex-none">
                                        <span class="sr-only">Email</span>
                                        <svg class="h-7 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                        </svg>
                                    </dt>
                                    <dd><a class="hover:text-white" href="mailto:hello@example.com">hello@example.com</a></dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                    <form action="#" method="POST" class="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
                        <div class="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                            <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                <div>
                                    <label for="first-name" class="block text-sm font-semibold leading-6 text-white">First name</label>
                                    <div class="mt-2.5">
                                        <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>
                                <div>
                                    <label for="last-name" class="block text-sm font-semibold leading-6 text-white">Last name</label>
                                    <div class="mt-2.5">
                                        <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>
                                <div class="sm:col-span-2">
                                    <label for="email" class="block text-sm font-semibold leading-6 text-white">Email</label>
                                    <div class="mt-2.5">
                                        <input type="email" name="email" id="email" autocomplete="email" class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>
                                <div class="sm:col-span-2">
                                    <label for="phone-number" class="block text-sm font-semibold leading-6 text-white">Phone number</label>
                                    <div class="mt-2.5">
                                        <input type="tel" name="phone-number" id="phone-number" autocomplete="tel" class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>
                                <div class="sm:col-span-2">
                                    <label for="message" class="block text-sm font-semibold leading-6 text-white">Message</label>
                                    <div class="mt-2.5">
                                        <textarea name="message" id="message" rows="4" class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-8 flex justify-end">
                                <button type="submit" class="rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Send message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default PaginaContato;