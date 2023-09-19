"use client"
import './globals.css'
import {NextUIProvider} from "@nextui-org/react";


export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body suppressHydrationWarning>
        
        <NextUIProvider>
     {children}
    </NextUIProvider>
        </body>

    </html>
  )
}
