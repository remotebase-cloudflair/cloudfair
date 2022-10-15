import { Outlet } from "react-router-dom"
import Logo from "../components/Logo"

function NoAuthLayout() {
  return (
    <div className="h-[100vh] w-full flex flex-row ">
        <div className="basis-1/2 bg-primary flex justify-center items-center p-8 md:p-16 lg:p-36">
            <Logo />
        </div>
        <Outlet  />
    </div>
  )
}

export default NoAuthLayout