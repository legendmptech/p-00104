"use client";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { BsPlus } from "react-icons/bs";
import React, { Fragment, useState } from "react";

const Modal = ({
  children,
  modalBtnLabel,
  modalTitle,
}: {
  modalBtnLabel: string;
  modalTitle: string;
  children: React.ReactNode;
}) => {
  let [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto md:ml-6 sm:pr-0">
        <button
          type="submit"
          onClick={openModal}
          className="mt-4 w-full rounded-lg bg-primary p-3 font-medium text-white hover:bg-primary-dark focus:outline-none"
        >
          {modalBtnLabel}
        </button>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative"
          style={{ zIndex: 1000 }}
          onClose={closeModal}
        >
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="mx-auto max-w-screen-md">
                    <div className="flex flex-shrink-0 items-center justify-center mb-4">
                      <div className="text-2xl sm:text-4xl font-semibold text-black">
                        {modalTitle}
                      </div>
                    </div>
                    {children}
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;
