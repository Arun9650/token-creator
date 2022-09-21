import React, {  useState } from 'react'
import Layout from '../components/Layout'
import { Switch } from "@material-tailwind/react";
import {Button} from '@material-tailwind/react'
import { Contract } from 'ethers';
import {ERC20Address} from '../constants/ERC20Address';
import {ERC20abi} from '../constants/ERC29abi'
import { useSigner } from 'wagmi';
import { useRouter } from 'next/router';
function Token() {

    const { data: signer} = useSigner()

    const router = useRouter()


    const [state, setState] = useState({
        name: '',
        Symbol: "",
        tokenType: "ERC20",
        initialSupply: "0",
        isBurnable: false,
        isMintable: false,
    });

   console.log(state)

    const handleOnChange = (evt) => {
        const value =
            evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        })

    }

    const createToken = async () => {

        try {
         const instance =  new Contract(ERC20Address,ERC20abi,signer);
         console.log(instance);
           await  instance.create(state.name, state.Symbol, state.isBurnable, state.isMintable, state.initialSupply);

         router.push('/TokenData')
         


 
        } catch (error) {
             console.log(error)
        }
     }

     

    
     


    return (
        <div
            className='
    h-screen w-screen
 bg-[url("https://uploads.toptal.io/blog/image/127334/toptal-blog-image-1539181697913-90cdece406de0c3caf6a57f3444bf553.png")]
bg-opacity-90'>
            <Layout />
            <div className=' flex  mx-auto md:mx-0 items-center justify-center w-2/3'>
                <div className='md:w-7/12 '>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="name" className='text-white font-bold text-xl   underline underline-offset-4'>Name of Token* :</label>
                        <input type="text" id="name" name='name' value={state.name} onChange={handleOnChange} className=' bg-transparent focus:outline-none  text-white px-8 py-1 contrast-more:border-slate-400 border border-2  rounded-md' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="name" className='text-white font-bold text-xl   underline underline-offset-4'>Symbol of Token* :</label>
                        <input type="text" name='Symbol' id="name" onChange={handleOnChange} value={state.Symbol} className=' bg-transparent focus:outline-none  text-white px-8 py-1 contrast-more:border-slate-400 border border-2  rounded-md' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="name" className='text-white font-bold text-xl   underline underline-offset-4'>Type of Token* :</label>
                        <input type="text" name='tokenType' value={"ERC20"} onChange={handleOnChange} id="name" className=' bg-transparent focus:outline-none  text-white px-8 py-1 contrast-more:border-slate-400 border border-2  rounded-md' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="name" className='text-white font-bold text-xl   underline underline-offset-4'>Initial Token Supply*</label>
                        <input type="number" value={state.initialSupply} name="initialSupply" onChange={handleOnChange} id="name" className=' bg-transparent focus:outline-none  text-white px-8 py-1 contrast-more:border-slate-400 border border-2  rounded-md' />
                    </div>
                    <div className='flex text-xl  flex-col mt-5 gap-4'>
                        <Switch id="Burnable" className='text-white' name='isBurnable' checked={state.isBurnable} onChange={handleOnChange} label='Burnable' />
                        <Switch id="Mintable" name='isMintable' checked={state.isMintable} onChange={handleOnChange}  label="Mintable" />
                    </div>

                   <div className='mt-5  float-right'>
                   <Button type='submit' onClick={() => createToken()}>
                        Create
                    </Button>
                   </div>
                </div>


            </div>
        </div>
    )
}

export default Token