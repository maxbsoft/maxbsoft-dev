"use client";


import Router from "next/router";
import NProgress from "nprogress";
import { useRef, useState } from "react";
import { AppProvider } from "../context/appContext";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ParallaxProvider } from "react-scroll-parallax";
import "normalize.css";
import "nprogress/nprogress.css";
import "swiper/css";
import "swiper/css/navigation";
import "@/styles/globals.scss";

NProgress.configure({ showSpinner: true });
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function Providers({ children }: React.PropsWithChildren) {
  const [queryClient, setQueryClient] = useState(new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <ParallaxProvider>
          <Hydrate state={undefined/* pageProps.dehydratedState */}>
            {children}
          </Hydrate>
        </ParallaxProvider>
      </AppProvider>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
}

export default Providers;
