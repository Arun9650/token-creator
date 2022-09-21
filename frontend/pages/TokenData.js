import { Contract } from 'ethers';
import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { ERC20Address } from '../constants/ERC20Address';
import { ERC20abi } from '../constants/ERC29abi'
import { Button } from '@material-tailwind/react';
import { useSigner } from 'wagmi';
import Link from 'next/link'


function TokenData() {

    const [tokenData, setTokenData] = useState();

    const { data: signer } = useSigner()


    const getAllTokens = async () => {

        try {

            const instance = new Contract(ERC20Address, ERC20abi, signer)
            const token = await instance.getAllTokens();
            setTokenData(token);

        } catch (error) {
            console.log(error)
        }
    }

    

    // useEffect(()=> {
    //    getAllTokens()
    // },[])
    return (
        <div
            className='
    h-screen w-screen
 bg-[url("https://uploads.toptal.io/blog/image/127334/toptal-blog-image-1539181697913-90cdece406de0c3caf6a57f3444bf553.png")]
bg-opacity-90'

        >


            <Layout />

            {console.log(tokenData)}


            {tokenData ? (
            
            


            <div className="z-10 flex flex-wrap m-10">
                {tokenData.map((token) => (

                    // eslint-disable-next-line react/jsx-key
                    <Link href={`https://rinkeby.etherscan.io/token/${token.tokenAddress}`} >
                        <a target="_blank">
                    <div
                    key={token.tokenAddress}
                        className='text-lg shadow-2xl text-center w-fit m-5 bg-transparent text-white  border-2 z-20 rounded p-5'
                    >
                        
                        {token.name}
                        <br />
                        {token.symbol}
                        <br />
                        {token.tokenAddress
                        }
             
                    </div>
                    </a>
                    </Link>
                ))}
            </div>
            
            
            
            
            )
                : (
                    <div className='z-20 '>

                        <div
                            className='text-3xl text-white z-10'>
                            nothing
                        </div>

                        <Button onClick={() => getAllTokens()}>
                            Show Token Data
                        </Button>

                    </div>
                )
            }







        </div>


    )
}

export default TokenData