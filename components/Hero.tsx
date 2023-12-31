import React from "react";
import TypeIt from "typeit-react";
import { motion } from "framer-motion";
import { LineArt } from "./svgs/LineArt";
import { LineArtSide } from "./svgs/LineArtSide";
import { DotArt } from "./svgs/DotArt";
import { ManthraLogo } from "./svgs/Logo";

export class Hero extends React.Component<any, any> {
    constructor({...props}){
        super(props);
        this.state = {
            binaryBg: "1010"
        }
        this.generateBinary = this.generateBinary.bind(this);
        this.updateBinary = this.updateBinary.bind(this);
        this.render = this.render.bind(this)
    }

    componentDidMount(): void {
        this.generateBinary();
        setInterval(this.updateBinary, 1);
    }
    render(): React.ReactNode {
        return ( 
        <section className="min-h-[920px] h-screen w-full relative">
            <div className="head-binary-interpreter overflow-hidden">
                <p className="whitespace-nowrap -ml-6">
                    {this.state.binaryBg}    
                </p>
            </div>
            <div className="focus-gradient h-full w-full absolute top-0 left-0">
                <div className=" h-2/3 w-full mt-6 flex items-center relative overflow-hidden">
                    <motion.div  initial={{ height: 'auto' }} animate={{ height: '100%'}} transition={{duration: 1, ease: "circOut"}} className="bg-manthra-yellow w-full flex flex-col justify-center items-center">
                        <div className="text-black h-full text-center flex flex-col items-center justify-between">
                            <motion.div initial={{ height: 0, clipPath: 'inset(100% 0 0 0)', margin: 0 }} animate={{ height: 192, clipPath: 'inset(0 0 0 0)', margin: 32 }} className="h-48">
                                <ManthraLogo color="#000000" className="rotate-logo" />
                            </motion.div>
                            {/* <h1 className="text-8xl my-3 glitch-text font-julius" data-text="cHAKRA"><span>chAkra</span></h1> */}
                            <motion.p initial={{ height: 0, clipPath: 'inset(0 0 100% 0)', paddingBlock: 0 }} animate={{ height: 100, clipPath: 'inset(0 0 0 0)', paddingBlock: '1rem' }} transition={{duration: 0.8, ease: "easeOut"}} className="text-4xl max-w-3xl font-julius"><TypeIt options={{cursorChar: '█', startDelay: 1000}}>The ultimate hackathon</TypeIt></motion.p>
                            <motion.a href="#" initial={{ opacity: 0, height: 0, padding: '0 16px 0 16px', marginBottom: 0, borderWidth: 0 }} animate={{ opacity: 1, height: 72, padding: '16px 16px 16px 16px', marginBottom: 40, borderWidth: 4 }} whileHover={{ textShadow: '0 0 10px #FFAC30' }} transition={{duration: 0.8, ease: "easeIn"}} className=" overflow-hidden text-2xl border-black hover:bg-black hover:text-[#FFAC30] transition-all">&gt; sudo Register</motion.a>
                        </div>
                    <motion.span initial = {{strokeDasharray: 1000, strokeDashoffset: 1000}} animate={{strokeDashoffset: 0}} transition={{duration: 1, delay: 1, ease: "easeInOut"}}>
                        <LineArt className="absolute -bottom-1 right-4" />
                        <LineArtSide className="absolute -left-1 bottom-4" />
                    </motion.span>
                    <motion.span initial={{opacity: 0}} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1, ease: "easeInOut"}}>
                        <DotArt className="absolute top-10 -left-20" />
                        <DotArt className="absolute top-44 -right-20" />
                    </motion.span>
                    </motion.div>
                </div>
                <div className="h-[calc(33.3%_-_24px)] w-full flex flex-col items-center justify-center text-center">
                    <h1 className="text-3xl text-[#E5212C] text-glow-red">$ <TypeIt options={{ cursorChar: '█'}}>introduced_by</TypeIt></h1>
                    <motion.p className=" glitch-text text-4xl bg-[#E5212C] text-black p-4 m-8 text-shadow" initial={{ clipPath: 'inset(0 100% 0 0)' }} animate={{ clipPath: 'inset(0 0 0 0)' }} transition={{duration: 1, ease: "circOut"}} data-text="ieee NsbM student BRAncH"><span>ieee nsbm student branch</span></motion.p>
                </div>
            </div>
        </section>
        )
    }
    generateBinary() {
        let str = "";
        for (let i = 0; i < 3500; i++) {
            if(i%9==0){
                str+=" "
            } else if(Math.round(Math.random())==1){
                str += '1';
            } else {
                str += `0`
            }
        }
        this.setState({binaryBg: str})
    }
        
    updateBinary() {
        let str = this.state.binaryBg;
        let n = str.length;
        let r = Math.floor(Math.random() * n + 1);
        let char = ' ';
        if(str.substring(r, r+1)!==' '){
            char = (Math.round(Math.random())).toString()
        }
        this.setState({binaryBg: str.substring(0, r) + char + str.substring(r + 1)})
    }
}