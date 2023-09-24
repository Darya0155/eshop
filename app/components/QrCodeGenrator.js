import React from 'react'
import QRCode from "react-qr-code";

export default function QrCodeGenrator({value}) {
  return (
    <div >
    <QRCode
    size={256}
    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
    value={value}
    viewBox={`0 0 256 256`}
    />
</div>
  )
}
