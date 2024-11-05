import { Stack, LinearProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function LinearProgressBox(props){

    const [value,setValue] = useState(0)

    const max = props?.currentValue || 100

    useEffect(() => {
        const timer = setInterval(() => {
            setValue((prev) => (prev >= max ? max : prev + 10));
        }, 200);
        return () => {
          clearInterval(timer);
        };
    }, []);

    return(
        <Stack width={"100%"} spacing={1.5}>
            <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                <Typography fontWeight={700} color={"primary.main"}>
                    {props?.name || "Năng lực số 1"}
                </Typography>
                <Typography fontWeight={700}>
                    {value} %
                </Typography>
            </Stack>
            <LinearProgress variant="determinate" value={value} />
        </Stack>
    )
}