import { useState } from 'react'

export function useForm<T extends Record<string, any>>(initial: T) {
  const [values, setValues] = useState<T>(initial)
  function handleChange<K extends keyof T>(key: K, value: T[K]) {
    setValues((v) => ({ ...v, [key]: value }))
  }
  return { values, setValues, handleChange }
}
