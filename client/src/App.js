import { useEffect, useState } from "react";

const App = () => {
  const [loading, setLoading] = useState(true)
  const [textFromApi, setTextFromApi] = useState('')

  useEffect(() => {
    fetch('http://localhost:8080/')
      .then   (res => console.log(res))
      .catch  (err => console.log(err))
      .finally(()  => setLoading(false))
  }, [])

  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <h1 className="text-2xl font-bold">
        Hello world!
      </h1>
    </div>
  );
}

export default App;
