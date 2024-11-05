import { Stack } from "@mui/material";
import CategoryWidget from "./categories";
import TagWidget from "./tags";

export default function Widget({categories,tags}){
    return(
        <Stack gap={2}>
            <CategoryWidget datas={categories}/>
            <TagWidget datas={tags}/>
        </Stack>
    )
}