import { useRef, useState } from 'react'

export default function Modal() {
  const [showModal, setShowModal] = useState(true);
  const modalContentRef = useRef();

  return (
    <>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50"
            onClick={(e) => {
              const clickCoords = {x: e.clientX, y: e.clientY}
              const { top, left, right, bottom } = modalContentRef.current.getBoundingClientRect()
              if (
                !((clickCoords.y > top && clickCoords.y < bottom)
                &&
                (clickCoords.x > left && clickCoords.x < right))
              ) setShowModal(false)
            }}
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl" ref={modalContentRef}>
              <div className="border-0 shadow-lg flex flex-col w-full bg-white p-4">
                {/* content */}
              </div>
            </div>
          </div>
          <div
            className="opacity-50 fixed inset-0 z-40 bg-black"
          />
        </>
      ) : null}
    </>
  );
}