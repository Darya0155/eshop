'use client'
import { useState } from 'react'
import QrReader from 'react-qr-reader'

export default function QrScanner({setData}) {
 const handleScan = data => {
    if (data) {
        setData(data);
    }
  }
  const handleError = err => {
    console.error(err)
  }
  return (
    <div>
        <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        // style={{ width: '25%' }}
        />
    </div>
  )
}
