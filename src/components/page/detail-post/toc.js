import { List, ListItem, ListItemText, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function TOC(){
    
    const [toc,setToc] = useState()

    useEffect(()=>{
        const headings = Array.from(document.querySelectorAll(".content h2, .content h3, .content h4"))
        .map((elem) => ({
            id: elem.id,
            text: elem.innerText,
            level: Number(elem.nodeName.charAt(1))
        }))
        setToc(headings)
    },[])

    if(!toc) return 

    return(
        <Stack bgcolor={"#F2F2F2"} p={3} borderRadius={3} className="toc">
            <Typography variant="h2" component={"h2"} mb={3}>
                DANH MỤC NỘI DUNG
            </Typography>
            <List
                sx={{ width: '100%' }}
                aria-label="toc"
                className="toc"
            >
                {toc && toc?.map((item,key) =>
                    <ListItem disablePadding key={key} className={`heading${item.level}`}>
                        <a href={`#${item.id}`}>
                            <ListItemText primary={item.text} />
                        </a>
                    </ListItem>
                )}

            </List>
        </Stack>
    )
}