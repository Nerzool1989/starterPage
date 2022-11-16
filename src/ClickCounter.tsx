import { useState, useEffect } from 'react'
//отрубить декларацию импортов или указать тип файла и добавить в декларацию
//@ts-ignore
import { useHttp } from './hooks/httpHook'

export const ClickCounter = () => {
  const [count, setCount] = useState(0)

  const { loading, request, error } = useHttp()

  const registerHandler = async () => {
    try {
      const data = await request('/api/auth/register', 'POST', { count })
      console.log(data)
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    registerHandler()
  }, [])
  return (
    <div>
      <button
        onClick={() => {
          setCount((c) => c + 1)
          registerHandler()
        }}
      >
        Count {count}
      </button>
    </div>
  )
}
