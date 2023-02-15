import Image from "next/image";
import React from "react";

export default function () {
  return (
    <>
      {/* TOP NAV */}
      <div className="w-full p-2 bg-primary1">
        <div className="container flex justify-center mx-auto md:justify-between">
          <a
            href="https://api.whatsapp.com/send?phone=6285749463854"
            className="hidden text-white md:flex"
            target={"_blank"}
          >
            <Image
              src="/call.svg"
              alt="call"
              className="mr-2"
              width={24}
              height={24}
            />
            0857 4946 3854
          </a>
          <p className="text-white">Dapatkan Promo Beli 1 Gratis 1</p>
          <a
            href="https://goo.gl/maps/62itrSdV8PbmAUX66"
            className="hidden text-white md:flex"
            target={"_blank"}
          >
            <Image
              src="/location.svg"
              alt="location"
              className="mr-2"
              width={24}
              height={24}
            />
            Jakarta Selatan, Indonesia
          </a>
        </div>
      </div>
      {/* END TOP NAV */}
      {/*NAVBAR*/}
      <nav className="font-bold bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 w-full border-b border-gray-200 dark:border-gray-600">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              className="h-6 mr-3 sm:h-9"
              alt="Flowbite Logo"
              width={168}
              height={32}
            />
          </a>
          <div className="flex md:order-2">
            <a
              type="button"
              href="/login"
              className="text-primary1 border border-primary1 hover:bg-green-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-1 dark:bg-green-700 dark:hover:bg-primary1 dark:focus:ring-green-900"
            >
              Login
            </a>
            <a
              type="button"
              className="text-white bg-primary1 hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-green-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-green-700 dark:hover:bg-primary1 dark:focus:ring-green-900"
              href="/register"
            >
              Register
            </a>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 font-bold text-white rounded bg-primary1 md:bg-transparent md:text-primary1 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary1 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                >
                  Kategori
                  <svg
                    className="w-5 h-5 ml-1"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {/* Dropdown menu */}
                <div
                  id="dropdownNavbar"
                  className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-400"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        T-Shirt
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Sepatu
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Jeans
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 font-light text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary1 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Promo
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* END NAVBAR */}
      {/* BRAND HERO */}
      <div className="w-full p-2 bg-primary2 h-1/2">
        <div className="container grid items-center grid-cols-1 mx-auto md:grid-cols-2">
          <div className="flex md:order-2 md:justify-center">
            <Image
              src="/hero.png"
              alt="Brand Hero"
              className="h-64 mb-4 md:-mb-2 md:h-96"
              width={544}
              height={543}
            />
          </div>
          <div className="ml-5">
            <p className="text-xl font-light">Diskon 30% Hari ini</p>
            <p className="text-3xl font-black md:text-6xl text-primary1">
              Promo 2023 <br />
              Jacket Collection
            </p>
            <a
              type="button"
              className="py-2.5 px-5 mr-2 mb-4 mt-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary1 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              href="/register"
            >
              Beli Sekarang
            </a>
          </div>
        </div>
      </div>
      {/* END BRAND HERO */}
      {/* KATEGORI  */}
      <div className="container grid grid-cols-1 gap-5 mx-auto mt-6 md:grid-cols-3">
        <div className="relative flex justify-between p-5 mx-5 rounded-md bg-primary2 md:mx-0">
          <div>
            <p className="text-xl font-light text-white">Diskon 10 %</p>
            <p className="text-3xl font-black text-white">T-Shirt</p>
            <a
              type="button"
              className="px-4 py-2 mt-3 mr-2 text-sm font-medium bg-white border border-gray-200 rounded-lg text-primary2 focus:outline-none hover:bg-gray-100 hover:text-primary2 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              href="/register"
            >
              Beli Sekarang
            </a>
          </div>
          <div className="absolute bottom-0 right-0">
            <Image
              src="/kategori1.png"
              alt="T-Shirt"
              className="h-36"
              width={145}
              height={151}
            />
          </div>
        </div>
        <div className="relative flex justify-between p-5 mx-5 rounded-md bg-primary3 md:mx-0">
          <div>
            <p className="text-xl font-light text-white">Diskon 10 %</p>
            <p className="text-3xl font-black text-white">Sepatu</p>
            <a
              type="button"
              className="px-4 py-2 mt-3 mr-2 text-sm font-medium text-white bg-black border border-black rounded-lg focus:outline-none hover:bg-gray-200 hover:text-black hover:border-gray-200 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              href="/register"
            >
              Beli Sekarang
            </a>
          </div>
          <div className="absolute bottom-0 right-0">
            <Image
              src="/kategori2.png"
              alt="Sepatu"
              className="h-36"
              width={158}
              height={137}
            />
          </div>
        </div>
        <div className="relative flex justify-between p-5 mx-5 rounded-md bg-primary1 md:mx-0">
          <div>
            <p className="text-xl font-light text-white">Diskon 10 %</p>
            <p className="text-3xl font-black text-white">Jeans</p>
            <a
              type="button"
              className="px-4 py-2 mt-3 mr-2 text-sm font-medium bg-white border border-gray-200 rounded-lg text-primary1 focus:outline-none hover:bg-gray-100 hover:text-primary1 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              href="/register"
            >
              Beli Sekarang
            </a>
          </div>
          <div className="absolute bottom-0 right-0">
            <Image
              src="/kategori3.png"
              alt="Jeans"
              className="transition duration-300 h-36 hover:scale-80"
              width={148}
              height={130}
            />
          </div>
        </div>
      </div>
      {/* END KATEGORI  */}
      {/* TOP PRODUCT */}
      <div className="container mx-auto mt-8">
        <h1 className="mx-5 text-2xl font-bold md:mx-0">Top Product</h1>
        <div className="grid grid-cols-1 gap-5 mt-4 md:grid-cols-3">
          <div className="p-4 mx-5 border border-borderColor rounded-2xl md:mx-0">
            <div className="flex justify-center p-4 bg-bgColor rounded-2xl">
              {/* GAMBAR PRODUCT */}
              <Image
                src="/product1.png"
                alt="Product-1"
                className="h-48 transition duration-300 hover:scale-150"
                width={270.22}
                height={193.83}
              />
            </div>
            {/* TITLE */}
            <div className="mt-3">
              <p className="text-base font-light text-gray-500">Jeans</p>
              <p className="text-3xl font-light">JEANS WANITA 39</p>
            </div>
            {/* HARGA REVIEW PRODUCT */}
            <div className="mt-3mb-5">
              <p className="text-xl font-black">Rp.450.000</p>
              <div className="flex mt-1">
                <Image src="/star.svg" alt="Star" width={24} height={24} />
                <Image src="/star.svg" alt="Star" width={24} height={24} />
                <Image src="/star.svg" alt="Star" width={24} height={24} />
                <Image src="/star.svg" alt="Star" width={24} height={24} />
                <Image src="/star-hide.svg" alt="Star" width={24} height={24} />
              </div>
            </div>
          </div>
          <div className="p-4 mx-5 border border-borderColor rounded-2xl md:mx-0">
            <div className="flex justify-center p-4 bg-bgColor rounded-2xl">
              {/* GAMBAR PRODUCT */}
              <Image
                src="/product2.png"
                alt="Product-2"
                className="h-48 transition duration-300 hover:scale-150"
                width={197}
                height={275}
              />
            </div>
            {/* TITLE */}
            <div className="mt-3">
              <p className="text-base font-light text-gray-500">T-Shirt</p>
              <p className="text-3xl font-light">T-SHIRT BLACK</p>
            </div>
            {/* HARGA REVIEW PRODUCT */}
            <div className="mt-3mb-5">
              <p className="text-xl font-black">Rp.120.000</p>
              <div className="flex mt-1">
                <Image src="/star.svg" alt="Star" width={24} height={24} />
                <Image src="/star.svg" alt="Star" width={24} height={24} />
                <Image src="/star.svg" alt="Star" width={24} height={24} />
                <Image src="/star-half.svg" alt="Star" width={24} height={24} />
                <Image src="/star-hide.svg" alt="Star" width={24} height={24} />
              </div>
            </div>
          </div>
          <div className="p-4 mx-5 border border-borderColor rounded-2xl md:mx-0">
            <div className="flex justify-center p-4 bg-bgColor rounded-2xl">
              {/* GAMBAR PRODUCT */}
              <Image
                src="/product3.png"
                alt="Product-3"
                className="h-48 transition duration-300 hover:scale-150"
                width={275}
                height={228}
              />
            </div>
            {/* TITLE */}
            <div className="mt-3">
              <p className="text-base font-light text-gray-500">Sepatu</p>
              <p className="text-3xl font-light">SEPATU HITAM NIKE</p>
            </div>
            {/* HARGA REVIEW PRODUCT */}
            <div className="mt-3mb-5">
              <p className="text-xl font-black">Rp.300.000</p>
              <div className="flex mt-1">
                <Image src="/star.svg" alt="Star" width={24} height={24} />
                <Image src="/star.svg" alt="Star" width={24} height={24} />
                <Image src="/star.svg" alt="Star" width={24} height={24} />
                <Image src="/star.svg" alt="Star" width={24} height={24} />
                <Image src="/star-hide.svg" alt="Star" width={24} height={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END TOP PRODUCT  */}
      {/* SUBSCRIBE */}
      <div className="w-full p-12 mt-10 bg-primary3">
        <div className="container flex flex-col items-center mx-auto">
          <p className="text-2xl font-bold">Let's Keep In Touch</p>
          <p className="font-light text-center">
            Segera isi untuk dapatkan diskon 15% untuk Pemesanan Pertama
          </p>
          <div className="flex">
            <div className="flex mt-4 rounded-md shadow-sm">
              <span className="inline-flex items-center px-3 text-sm text-white bg-black border border-r-0 border-gray-300 rounded-l-md">
                Subscribe
              </span>
              <input
                type="text"
                name="company-website"
                id="company-website"
                className="flex-1 block w-full border-gray-300 rounded-none rounded-r-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Enter your email...."
              />
            </div>
          </div>
        </div>
      </div>
      {/* SUBSCRIBE FROM  */}
      {/* FAQ */}
      <div className="container p-12 mx-auto mt-10">
        <p className="mx-5 mb-4 text-2xl font-bold text-center md:mx-0">
          Frequently Asked Questions (FAQ)
        </p>
        <div className="grid grid-cols-1 gap-5 mb-4 md:grid-cols-2">
          <div id="accordion-collapse" data-accordion="collapse">
            <h2 id="accordion-collapse-heading-1">
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                data-accordion-target="#accordion-collapse-body-1"
                aria-expanded="false"
                aria-controls="accordion-collapse-body-1"
              >
                <span>Bagaimana caranya memesan?</span>
                <svg
                  data-accordion-icon=""
                  className="w-6 h-6 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-1"
              className="hidden"
              aria-labelledby="accordion-collapse-heading-1"
            >
              <div className="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700">
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor si amet.
                </p>
              </div>
            </div>
          </div>
          <div id="accordion-collapse" data-accordion="collapse">
            <h2 id="accordion-collapse-heading-2">
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                data-accordion-target="#accordion-collapse-body-2"
                aria-expanded="false"
                aria-controls="accordion-collapse-body-2"
              >
                <span>Berapa ongkirnya?</span>
                <svg
                  data-accordion-icon=""
                  className="w-6 h-6 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-2"
              className="hidden"
              aria-labelledby="accordion-collapse-heading-2"
            >
              <div className="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700">
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor si amet.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div id="accordion-collapse" data-accordion="collapse">
            <h2 id="accordion-collapse-heading-3">
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                data-accordion-target="#accordion-collapse-body-3"
                aria-expanded="false"
                aria-controls="accordion-collapse-body-3"
              >
                <span>Bagaimana Caranya Pengembalian Barang?</span>
                <svg
                  data-accordion-icon=""
                  className="w-6 h-6 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-3"
              className="hidden"
              aria-labelledby="accordion-collapse-heading-3"
            >
              <div className="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700">
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor si amet.
                </p>
              </div>
            </div>
          </div>
          <div id="accordion-collapse" data-accordion="collapse">
            <h2 id="accordion-collapse-heading-4">
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                data-accordion-target="#accordion-collapse-body-4"
                aria-expanded="false"
                aria-controls="accordion-collapse-body-4"
              >
                <span>Bagamana Cara Menggunakan Diskon ?</span>
                <svg
                  data-accordion-icon=""
                  className="w-6 h-6 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-4"
              className="hidden"
              aria-labelledby="accordion-collapse-heading-4"
            >
              <div className="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700">
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor si amet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END FAQ */}
      {/* FOOTER */}
      <div className="flex flex-col items-center w-full p-12 mt-8 bg-primary1">
        <a href="/">
          <Image src="/logo-white.svg" alt="Logo" width={248} height={49} />
        </a>
        <p className="mt-3 font-light text-center text-white">
          Jalan Sumpah Pemuda NO.18 <br />
          Krapyak Semarang (Gedung A lantai 2)
        </p>
        <div className="flex mt-5 space-x-2">
          <a href="https://www.instagram.com/rzkjanuar/" target={"_blank"}>
            <Image src="/ig.svg" alt="instagram" width={24} height={24} />
          </a>
          <a href="https://www.facebook.com/rzkjanuar/" target={"_blank"}>
            <Image src="/fb.svg" alt="facebook" width={24} height={24} />
          </a>
          <a href="https://www.tiktok.com/rzkjanuar/" target={"_blank"}>
            <Image src="/tiktok.svg" alt="tiktok" width={24} height={24} />
          </a>
        </div>
      </div>
      {/* FOOTER */}
      {/* COPYRIGHT */}
      <div className="w-full p-2 bg-bg1">
        <p className="font-light text-center text-white">
          © Wahidev Academy 2023. Hak Cipta Dilindungi
        </p>
      </div>
      {/* COPYRIGHT */}
    </>
  );
}
