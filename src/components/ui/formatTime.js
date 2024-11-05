import { formatDistance } from "date-fns";
import { vi } from 'date-fns/locale';
import { useEffect, useState } from "react";

export default function FormatTime({
    time = "2024-07-01 18:12:40.171469"
}){
    const [thisTime,setThisTime] = useState()

    useEffect(()=>{
        setThisTime(formatDistance(time, new Date(), {
            addSuffix: true,
            locale: vi
        }))
    },[])

    return thisTime
}