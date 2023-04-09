import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { utils } from "ethers";
import {
  useAccount,
  useContractRead,
  useContract,
  useNetwork,
  useSigner,
  useProvider,
  Address,
} from "wagmi";
import { ADDRESS, ABI } from "../constants/constants";

export default function Home() {

  const {address} = useAccount()
  const provider = useProvider();
  const { data: signer } = useSigner();

  const contract = useContract({
    address: ADDRESS,
    abi: ABI,
    signerOrProvider: signer || provider,
  });

  const _title:string = "well then let's check"
  const _description:string = "description dekh li jaye"
  const _ethAmountNeeded:number = 2


  async function createCampaign(){
    await contract?.createCampaign(_title, _description, _ethAmountNeeded)
  }

  // async function getCampaign(){
  //   console.log(await contract?.getCampaign(1))
  // }
  async function getCampaign(){
    console.log(await contract?.campaignGetter(1))
  }

  async function getOnesCampaigns(){
    console.log(await contract?.getOnesCampaigns("0x90F79bf6EB2c4f870365E785982E1f101E93b906"))
  }

  async function fundCampaign(){
    await contract?.fundCampaign(1, {value:utils.parseEther('0.01')})
  }

  async function withdrawAll(){
    await contract?.withdrawAll()
  }

  async function getBalance(){
    console.log(await contract?.getBalance())
  }

  async function getCounter(){
    console.log(await contract?.counter())
  }

  return (
    <>
      <Head>
        <title>Testing Page</title>
        <meta name="description" content="Fundraisers on the blockchain" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className="fixed right-0">
          <ConnectButton />
        </div>
        <div className="text-red-500">Hello there test</div>
        <div className="flex  gap-2">

          <div className="border-2 border-red-500">

            
            <button onClick={createCampaign} className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Create Campaign
            </button>
          </div>

          <div>
            <button onClick={getCampaign} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Get Campaign
            </button>
          </div>

          <div>
            <button onClick={getOnesCampaigns} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Your Campaigns
            </button>
          </div>

          <div>
            <button onClick={fundCampaign} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Fund Campaign
            </button>
          </div>

          <div>
            <button onClick={withdrawAll} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Withdraw
            </button>
          </div>

          <div>
            <button onClick={()=>getBalance()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Get Balance
            </button>
          </div>

          <div>
            <button onClick={()=>getCounter()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Get Counter
            </button>
          </div>

        </div>
      </div>
    </>
  );
}
