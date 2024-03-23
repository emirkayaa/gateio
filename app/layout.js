import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gate.io",
  description: "Gate.io Clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAYFBMVEUAAAAfT98iVOgiVOYiVOUjVOYjU+MiVOUlVeQiVeYjVOYfT+cjUuUiU+UjU+UjUuIW5aEW5qAjUuUX5qEW5aEjVOUiVOUgU+ghU+UjU+YiVOYjU+QiUuQhU+QiU+YiUud6nSxBAAAAIHRSTlMAEG+v3/9AvzBf7yCgz4BQ359Q/7/fcE+An3+QYJDPYENPskUAAADSSURBVHgBjZJFAoRADASDZJCwhjv/f+VqgmSxunaNdmDCsh0XEbYwHr7ZFCwHcU/wXdwVghB3BV/yDYFc3BciFC7XG92ZBwhG4jCGNwmTguBxnhGsCjTl60LOQgBKUCdksCXwH+SbAp9gjgQ6LejvEaEAxY1/D7iIcqMADxwxFbywko+Sdwr1eLQlVdFiRJCxVFl6BKtF3XKKVYc4f32DQlbdjGm7EIXrb4GLG0iDFG7kpMda52qwFT3BDKtBxdWCJRThRNgR/END1IfvsK9aC0ZeJK0S2xxdE2UAAAAASUVORK5CYII=" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
