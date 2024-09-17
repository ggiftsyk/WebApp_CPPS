import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { XIcon, MenuIcon } from '@heroicons/react/outline';

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Button to open menu */}
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 text-gray-700 dark:text-white md:hidden"
      >
        <MenuIcon className="w-6 h-6" />
      </button>

      {/* Mobile menu */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 dark:text-white"
            >
              <XIcon className="w-6 h-6" />
            </button>
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-gray-900 dark:text-white">Home</a>
              <a href="#" className="text-gray-900 dark:text-white">About</a>
              <a href="#" className="text-gray-900 dark:text-white">Services</a>
              <a href="#" className="text-gray-900 dark:text-white">Contact</a>
            </nav>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}

export default HamburgerMenu;
