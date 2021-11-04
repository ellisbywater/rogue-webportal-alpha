export default function SettingsForm() {
  return (
    <>
      <div class="mt-10 lg:flex justify-between border-b border-gray-200 pb-16">
        <div class="w-80">
          <div class="flex items-center">
            <h1 class="text-xl font-medium pr-2 leading-5 text-gray-200">
              Personal Information
            </h1>
          </div>
          <p class="mt-4 text-sm leading-5 text-gray-200">
            Information about the section could go here and a brief description
            of how this might be used.
          </p>
        </div>
        <div>
          <div class="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
            <div class="md:w-64">
              <label class="text-sm leading-none text-gray-200" id="firstName">
                First name
              </label>
              <input
                type="name"
                tabindex="0"
                class="w-full p-3 mt-3 bg-gray-800 border rounded border-gray-200 focus:outline-none focus:border-gray-200 text-sm font-medium leading-none text-gray-200"
                aria-labelledby="firstName"
                placeholder="John"
              />
            </div>
            <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
              <label class="text-sm leading-none text-gray-200" id="lastName">
                Last name
              </label>
              <input
                type="name"
                tabindex="0"
                class="w-full p-3 mt-3 bg-gray-800 border rounded border-gray-200 focus:outline focus:border-green-700 text-sm font-medium leading-none text-gray-200"
                aria-labelledby="lastName"
                placeholder="Doe"
              />
            </div>
          </div>
          <div class="md:flex items-center lg:ml-24 mt-8">
            <div class="md:w-64">
              <label
                class="text-sm leading-none text-gray-200"
                id="emailAddress">
                Email address
              </label>
              <input
                type="email"
                tabindex="0"
                class="w-full p-3 mt-3 bg-gray-800 border rounded border-gray-200 focus:outline-none focus:border-green-700 text-sm font-medium leading-none text-gray-200"
                aria-labelledby="emailAddress"
                placeholder="youremail@example.com"
              />
            </div>
            <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
              <label class="text-sm leading-none text-gray-200" id="phone">
                Phone number
              </label>
              <input
                type="name"
                tabindex="0"
                class="w-full p-3 mt-3 bg-gray-800 border rounded border-gray-200 focus:outline-none focus:border-green-700 text-sm font-medium leading-none text-gray-200"
                aria-labelledby="phone"
                placeholder="123-1234567"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="mt-16 lg:flex justify-between border-b border-gray-200 pb-16 mb-4">
        <div class="w-80">
          <div class="flex items-center">
            <h1 class="text-xl font-medium pr-2 leading-5 text-gray-200">
              Security
            </h1>
          </div>
          <p class="mt-4 text-sm leading-5 text-gray-200">
            Information about the section could go here and a brief description
            of how this might be used.
          </p>
        </div>
        <div>
          <div class="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
            <div class="md:w-64">
              <label class="text-sm leading-none text-gray-200" id="password">
                Password
              </label>
              <input
                type="name"
                tabindex="0"
                class="w-full p-3 mt-3 bg-gray-800 border rounded border-gray-200 focus:outline-none focus:border-gray-200 text-sm font-medium leading-none text-gray-200"
                aria-labelledby="password"
                placeholder="Enter your password"
              />
            </div>
            <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
              <label
                class="text-sm leading-none text-gray-200"
                id="securityCode">
                Security Code
              </label>
              <input
                type="name"
                tabindex="0"
                class="w-full p-3 mt-3 bg-gray-800 border rounded border-gray-200 focus:outline-none focus:border-gray-200 text-sm font-medium leading-none text-gray-200"
                aria-labelledby="securityCode"
                placeholder="Enter your security code"
              />
            </div>
          </div>
          <div class="md:flex items-center lg:ml-24 mt-8">
            <div class="md:w-64">
              <label
                class="text-sm leading-none text-gray-200"
                id="recoverEmail">
                Recovery Email address
              </label>
              <input
                type="name"
                tabindex="0"
                class="w-full p-3 mt-3 bg-gray-800 border rounded border-gray-200 focus:outline-none focus:border-gray-200 text-sm font-medium leading-none text-gray-200"
                aria-labelledby="recoveryEmail"
                placeholder="Your recovery email"
              />
            </div>
            <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
              <label class="text-sm leading-none text-gray-200" id="altPhone">
                Alternate phone number
              </label>
              <input
                type="name"
                tabindex="0"
                class="w-full p-3 mt-3 bg-gray-800 border rounded border-gray-200 focus:outline-none focus:border-gray-200 text-sm font-medium leading-none text-gray-200"
                aria-labelledby="altPhone"
                placeholder="Your alternate phone number"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
