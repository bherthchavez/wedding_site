
// eslint-disable-next-line react/prop-types
function Modal({ isOpen, onClose, onOk, children }) {
  const showHideClassName = isOpen ? "block" : "hidden";

  return (
    <div className={`fixed z-50 inset-0 overflow-y-auto ${showHideClassName}`}>
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center  ">
     
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 backdrop-blur-sm bg-black/60"></div>
        </div>
     
        <div
          className="inline-block bg-[#9f7648] rounded-lg text-center overflow-hidden shadow-xl transform transition-all sm:my-8 align-middle  w-10/12 sm:max-w-xl"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          
          {children}

          <div className="bg-white px-4 py-7  sm:px-10 flex justify-between gap-6">
            {/* <button
              type="button"
              className="flex h-9 w-full justify-center px-3 sm:px-4 py-1 text-slate-700 border border-slate-300 dark:border-slate-600  hover:bg-gray-200 dark:hover:bg-gray-900 dark:active:bg-slate-800 rounded-md duration-150"
              onClick={onClose}
            >
              Cancel
            </button> */}
            <button
              type="button"
              className="h-9 w-full flex justify-center items-center rounded-md border border-transparent shadow-sm px-3 sm:px-4 py-1 bg-[#9f7648] text-base text-white hover:bg-[#866239]"
              onClick={onOk}
            >
              Unang tanong
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
