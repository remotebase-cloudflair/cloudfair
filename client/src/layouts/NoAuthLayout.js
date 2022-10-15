import { Outlet } from "react-router-dom"
import Logo from "../components/Logo"
import Modal from "../components/Modal"

function NoAuthLayout() {
  return (
    <div className="h-[100vh] w-full flex flex-col md:flex-row">
      <div className="md:basis-1/2 bg-primary flex justify-center items-center p-4 md:p-16 lg:p-36">
        <Logo className='w-64 md:w-auto' />
      </div>
      <div className="basis-1/2 flex flex-col justify-center items-center py-16">
        <Outlet />
      </div>
      <Modal />
    </div>
  )
}

export default NoAuthLayout