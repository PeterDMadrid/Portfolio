import { useEffect, useRef } from "react";

export function useParallax(speed = 0.5){
    const ref = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        function handleScroll(){
            if(ref.current){
                const scrolled = window.pageYOffset;
                ref.current.style.transform = `translateY(${scrolled * speed}px)`
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [speed]);

    return ref;
}