'use client'
import React ,{ useState } from "react";
import QrScanner from "./components/QrScanner";
import QrCodeGenrator from "./components/QrCodeGenrator";


export default function Home() {


  const [qrResult,setQRResult]=useState("");



  return (
    <main className="max-w-md m-auto sm:mt-56 md:mt-2 rounded-xl">
       <QrScanner setData={setQRResult}></QrScanner>
       ############
       {qrResult.decodedText}

       <QrCodeGenrator value={JSON.stringify({name:"Deepak Arya"})}/>
    </main>
  )
}
