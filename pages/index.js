import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import QrScanner from './components/QrScanner'
import { useState } from 'react';

export default function Home() {

  const [qrResult,setQRResult]=useState("");
  return (
    <div>
        <QrScanner setData={setQRResult}></QrScanner>
       
       {qrResult}
    </div>
  )
}
