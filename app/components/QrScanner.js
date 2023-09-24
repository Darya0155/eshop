"use client";
// To use Html5QrcodeScanner (more info below)
import { Html5QrcodeScanner } from "html5-qrcode";
import { Html5Qrcode } from "html5-qrcode";
import { useEffect } from "react";

export default function QrScanner({ setData }) {
  let html5QrcodeScanner = null;
  function onScanSuccess(decodedText, decodedResult) {
    console.log(`Code matched = ${decodedText}`, decodedResult);
    setData(decodedResult)
  }

  function onScanFailure(error) {
    // console.warn(`Code scan error = ${error}`);
  }
 
  useEffect(() => {
    if (html5QrcodeScanner == null) {
        html5QrcodeScanner = new Html5QrcodeScanner(
          "reader",
          { fps: 50, qrbox: { width: 300, height: 300 } },
          false
        );
        html5QrcodeScanner.render(onScanSuccess, onScanFailure);
    }
  }, []);

  return (
    <div style={{ maxWidth: 500 }}>
      <div id="reader"></div>
    </div>
  );
}
