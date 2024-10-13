"use client";
import { Permanent_Marker } from "next/font/google";

import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  PopoverBackdrop,
  Transition,
} from "@headlessui/react";
import {
  ComputerDesktopIcon,
  PresentationChartBarIcon,
  Bars3Icon,
  AcademicCapIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import SignButton from "./SignButton";

const products = [
  {
    name: "Hire a freelancer",
    description: "Get a better understanding of your traffic",
    href: "/",
    icon: ComputerDesktopIcon,
  },
  {
    name: "Train a freelancer",
    description: "Speak directly to your customers",
    href: "/",
    icon: AcademicCapIcon,
  },
  {
    name: "Need consultation?",
    description: "Your customers’ data will be safe and secure",
    href: "/",
    icon: PresentationChartBarIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "/", icon: PlayCircleIcon },
  { name: "Contact Me", href: "/ContactUs", icon: PhoneIcon },
];

function classNames(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className=" py-3  fixed w-full z-50  bg-skin-inverted border-b-2  text-skin-inverted">
      <nav
        className="mx-auto  flex align-middle max-w-7xl items-center justify-between px-8"
        aria-label="Global"
      >
        <div className="flex justify-center text-3xl text-skin-primary">
          <a className="flex flex-col  justify-center items-center " href="/">
            {/* <img
              src="../images/logo.png"
              alt="LK&CO"
              width={100}
              height={100}
            /> */}
            <p className=" text-skin-primary font-extrabold ml-2">LK&CO</p>
            <div className="relative flex  items-center">
              <div className="flex-grow border-t-1  w-10 border-skin-secondary border-2"></div>
              <span className="flex-shrink mx-2 text-sm text-skin-secondary">
                Since 2015
              </span>
              <div className="flex-grow border-t-1 w-10 border-skin-secondary  border-2"></div>
            </div>
          </a>
        </div>
        <div className="flex  lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-skin-primary"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-10 w-10" aria-hidden="true" />
          </button>
        </div>
        <PopoverGroup className=" hidden marker:backdrop:justify-center items-center lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex font-extrabold items-center gap-x-1 text-xl leading-6 text-skin-secondary">
              Services
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-skin-primary"
                aria-hidden="true"
              />
            </PopoverButton>

            <Transition
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <PopoverPanel className="absolute -left-8 top-full bg-skin-secondary z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative  flex items-center gap-x-6 rounded-lg p-4 text-xl leading-6 hover:bg-skin-inverted"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg group-hover:bg-skin-inverted">
                        <item.icon
                          className="h-6 w-6  text-skin-primary group-hover:text-skin-secondary"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-extrabold text-skin-primary group-hover:text-skin-secondary"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-sm group-hover:text-skin-secondary">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-extrabold leading-6 text-gray-900 hover:bg-skin-primary"
                    >
                      <item.icon
                        className="h-5 w-5 flex-none text-skin-secondary "
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </PopoverPanel>
            </Transition>
            <PopoverBackdrop className="fixed inset-0 " aria-hidden="true" />
          </Popover>

          <a
            href="/About"
            className="text-xl font-extrabold leading-6 text-skin-secondary"
          >
            About
          </a>
          <a
            href="/Blog"
            className="text-xl font-extrabold leading-6 text-skin-secondary"
          >
            Blog
          </a>
          <a
            href="/Portofolio"
            className="text-xl font-extrabold leading-6 text-skin-secondary"
          >
            Portofolio
          </a>
        </PopoverGroup>
        <div className="hidden lg:flex   lg:justify-end">
          <a
            href="/ContactUs"
            className="text-xl font-semibold leading-6 text-skin-secondary"
          >
            Let&apos;s Collaborate{" "}
            <span className=" text-skin-primary" aria-hidden="true">
              &rarr;
            </span>
          </a>
        </div>
        <div className="hidden lg:flex border-skin-primary border-2 rounded-3xl lg:justify-end  ">
          <SignButton />
        </div>
      </nav>
      <Dialog
        className="lg:hidden "
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10 bg-skin-primary opacity-25" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <div className="flex justify-center text-3xl text-skin-primary">
              <a
                className="flex flex-col  justify-center items-center "
                href="/"
              >
                {/* <img
              src="../images/logo.png"
              alt="LK&CO"
              width={100}
              height={100}
            /> */}
                <p className=" text-skin-primary font-extrabold ml-2">LK&CO</p>
                <div className="relative flex  items-center">
                  <div className="flex-grow border-t-1  w-10 border-skin-secondary border-2"></div>
                  <span className="flex-shrink mx-2 text-sm text-skin-secondary">
                    Since 2015
                  </span>
                  <div className="flex-grow border-t-1 w-10 border-skin-secondary  border-2"></div>
                </div>
              </a>
            </div>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Services
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </DisclosureButton>
                        ))}
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>

                <a
                  href="/About"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About
                </a>
                <a
                  href="/Blog"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Blog
                </a>
                <a
                  href="/Portofolio"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Portofolio
                </a>
              </div>
              <div className="py-6">
                <SignButton />
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </div>
  );
}
