import React, {useState, useEffect} from 'react'

export const Timer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    setTimeout(() => setTime(time + 1), 1000);
  }, [time])

  return (
    <h2 style={{ marginTop: '-10px'}}>⏰{time}</h2>
  )
}
