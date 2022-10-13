import { useEffect, useState } from "react";

const App = () => {
  const [loading, setLoading] = useState(true)
  const [textFromApi, setTextFromApi] = useState('')

  useEffect(() => {
    fetch('http://localhost:8080/')
      .then   (res => setTextFromApi(res))
      .catch  (err => setTextFromApi(err.message))
      .finally(()  => setLoading(false))
  }, [])

  return (
    <div className="w-full h-[100vh] flex justify-center items-center bg-slate-300">
      {
        loading ?
        <span className="flex h-8 w-8 relative justify-center items-center">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-50"></span>
          <span className="relative inline-flex rounded-full h-6 w-6 bg-black opacity-75"></span>
        </span>
        :
        <h1 className="text-center font-semibold">
          {textFromApi}
        </h1>
      }
      <div className="w-full fixed bg-slate-500 bottom-0 left-0 text-center text-white text-xs p-2">
        Made by Cloudfair
      </div>
    </div>
  );
}

export default App;
