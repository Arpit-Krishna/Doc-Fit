import React, { useState } from 'react'
import './style/HRecord.css'

export default function HRecord() {
  let [user, setUser] =useState(null);
  if (0){
    setUser(null);
  }
  return (
    <div className="fixed bottom-0 right-0 m-8">
      <div className="flex items-center justify-center h-20 w-20 bg-[#955468] rounded-[50%]">
        <a href = {user === null ? '/login':'/create'} className="button" alt="Add to Khata"> + </a>
      </div>
    </div>
  )
}
