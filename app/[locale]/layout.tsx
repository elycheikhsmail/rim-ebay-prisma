import type { Metadata } from "next"; 
import Locale from 'intl-locale-textinfo-polyfill'
import "./globals.css";
import ConditionalNav from "./layout/ConditionalNav";
import { Providers } from "./layout/providers";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "RIM IJAR",
  description: "trouver des maisons,appartement, voiture, engine a louer",
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
    params:{
      locale:string;
      segment: string;
    }
}>) {
  console.log("params.locale :")
 console.log(params.locale)
  let dir = 'ltr'; // Default direction
  try {
    if (params.locale) {
      const locale = new Locale(params.locale);
      dir = locale.textInfo.direction;
    }
  } catch (error) {
    console.error('Invalid locale provided:', params.locale, error);
  }

  const hasSession = cookies().has("jwt");

  return (
    <html lang={params.locale || 'en'} dir={dir}>
      <body
        className={`bg-gradient-to-br  from-gray-50 to-gray-100 min-h-screen`}
      >
        <Providers locale={params.locale}>
        <ConditionalNav lang={params.locale} isAuthenticated={hasSession} />
          {children}
        </Providers>
      </body>
    </html>
  );
}
