import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import {
  polygonZkEvmTestnet,
  hardhat
} from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { Inter, Cardo, IM_Fell_English } from "next/font/google";
import { useState } from "react";



const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });


const { chains, provider } = configureChains(
  [polygonZkEvmTestnet, hardhat],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "zk Fundraiser",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});


export default function App({ Component, pageProps }: AppProps) {

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        modalSize="compact"
        chains={chains}
        theme={darkTheme({
          accentColor: "#9e8d75",
          accentColorForeground: "white",
          borderRadius: "small",
          fontStack: "system",
          overlayBlur: "small",
        })}
      >
          <main>

            <Component {...pageProps} />

            </main>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}