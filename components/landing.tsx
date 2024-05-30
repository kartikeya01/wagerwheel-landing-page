'use client'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { Tagline } from "./tagline";
import { AboutProject } from "./aboutProject";
import { Technologies } from "./Technologies";
import { Footer } from "./footer";
import {Team} from "./team"


export const Landing = () => {
    // Data AOS Animations
    useEffect(() => {
        AOS.init({
          disable: "phone",
          duration: 800,
          easing: "ease-out-cubic",
        });
      }, []);
    
    return (
        <div>
          <div className="pt-32 pb-16 md:pt-52 md:pb-32 relative max-w-5xl min-h-screen px-4 mx-auto sm:px-6 space-y-80">
            <Tagline />
      
            <AboutProject />

            <Technologies />

            {/* <Team /> */}
            </div>
        
            <div>
          </div>
          
        </div>
    );
}