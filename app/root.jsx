import { Links, Meta, Outlet, Scripts } from "@remix-run/react";
import stylesheet from "./styles/tailwind.css";
import Header from "./components/Header";
import { StoreProvider } from "./context/StoreContext";


export const links = () => [{ rel: "stylesheet", href: stylesheet }];

export default function App() {
  return (
    <html>
      <head>
        <title>The Online Store</title>
        <link rel="icon" href="/store-2-line.svg" />
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.7.0/fonts/remixicon.css"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
