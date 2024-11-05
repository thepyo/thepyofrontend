import MetaPost from "@/components/meta/post"
import ThePyoChip from "@/components/ui/chip"
import { imageCdn } from "@/components/ui/imaWithCdn"
import { globalConfig } from "@/theme/config"
import { Divider, Stack, Typography } from "@mui/material"
import Link from "next/link"

function ResultPost({
    title,
    description,
    link = "#",
    createdAt,
    label="Tin tức"
}){
    return(
        <Stack gap={2}>
            <Stack>
                <ThePyoChip label={label} />
            </Stack>
            <Link href={link}>
                <Typography variant="h2" component={"h2"}>
                    {title}
                </Typography>
            </Link>
            <Typography>{description}</Typography>
            <MetaPost
                time={createdAt}
                title={title}
                description={description}
                url={link}
            />
        </Stack>
    )
}

export default function SearchResult({datas}){
    return(
        <Stack spacing={2} divider={<Divider />}>

            {datas?.doctors?.length > 0 && datas?.doctors?.map(item =>
                <ResultPost 
                    key={item?.id} 
                    title={item?.title} 
                    description={item?.description}
                    link={`/bac-sy/${item?.slug}`}
                    createdAt={item?.createdAt}
                    label="Bác sỹ"
                />
            )}

            {datas?.services?.length > 0 && datas?.services?.map(item =>
                <ResultPost 
                    key={item?.id} 
                    title={item?.title} 
                    description={item?.description}
                    link={`/dich-vu-tham-my/${item?.slu}`}
                    createdAt={item?.createdAt}
                    label="Dịch vụ"
                />
            )}

            {datas?.posts?.length > 0 && datas?.posts?.map(item =>
                <ResultPost 
                    key={item?.id} 
                    title={item?.title} 
                    description={item?.description}
                    link={`/${item?.slug}`}
                    createdAt={item?.createdAt}
                    label="Tin tức"
                />
            )}

            
        </Stack>
    )
}