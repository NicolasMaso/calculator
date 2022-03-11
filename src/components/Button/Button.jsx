import React from 'react'
import './Button.css'

export default function Button({type, content, onClick}) {
  return (
        <button onClick={() => onClick(content)} type={type ? type : "default"} className={content === "0" ? "zero" : "default"}>{content}</button>
  )
}
