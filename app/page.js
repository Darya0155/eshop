'use client'
import React ,{ useState } from "react";
import QrScanner from "./components/QrScanner";


export default function Home() {


  const [qrResult,setQRResult]=useState("");



  return (
    <main className="max-w-md m-auto sm:mt-56 md:mt-2 rounded-xl">
       <QrScanner setData={setQRResult}></QrScanner>
       
       {qrResult}
    </main>
  )
}
