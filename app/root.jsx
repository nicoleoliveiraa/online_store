import {
  Links,
  Meta,
  Outlet,
  Scripts,
} from "@remix-run/react";
import stylesUrl from "./styles/tailwind.css";
import Header from "./components/Header";
import { StoreProvider } from "./context/StoreContext";

export function links() {
  return [{ rel: "stylesheet", href: stylesUrl }];
}

export default function App() {
  return (
    <html>
      <head>
        <link
          rel="icon"
          href="data:image/x-icon;base64,AA"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.7.0/fonts/remixicon.css"
          rel="stylesheet"
        />
        <Meta />
        <Links />
      </head>
      <body>
        <StoreProvider>
        <Header />
        <main className="pt-16">
          <Outlet />
        </main>
        </StoreProvider>

        <Scripts />
      </body>
    </html>
  );
}
