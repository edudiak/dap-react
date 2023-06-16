import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

import CloseIcon from '@assets/images/icons/close.svg';

export default function VideoPopup({ isOpen, onClose }) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-60" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full w-full items-center justify-center p-3 text-center md:p-5 lg:p-[4%]">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full transform rounded-lg bg-[#250A60] p-2 text-left align-middle shadow-xl transition-all md:rounded-2xl md:p-5 lg:p-10">
                <div>
                  <div
                    style={{ padding: '56.25% 0 0 0', position: 'relative' }}
                  >
                    <iframe
                      src="https://player.vimeo.com/video/476337765?h=eebc925a44&color=855fbf&title=0&byline=0"
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                      }}
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullscreen
                      title="DAP Video"
                    />
                  </div>
                  <script src="https://player.vimeo.com/api/player.js" defer />
                </div>

                <button
                  type="button"
                  className="absolute -right-3 -top-3 flex h-7 w-7 items-center justify-center rounded-full bg-white text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 md:-right-5 md:-top-5 md:h-10 md:w-10 lg:-right-[3rem] lg:-top-[3rem] lg:h-[8rem] lg:w-[8rem]"
                  onClick={onClose}
                >
                  <span className="svg_icon w-3 md:w-5 lg:w-[4rem]">
                    <CloseIcon />
                  </span>
                </button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
