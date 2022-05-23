import Head from "next/head"
import { Navbar } from "../ui";

import { PropsWithChildren } from "react"

interface Props {
    title?: string;
}

export const Layout: React.FC<PropsWithChildren<Props>> = ({ title, children }) => {
    return (
        <>
            <Head>
                <title>{title || "Pokemon App"}</title>
                <meta name="author" content="Victor Alvarez" />
                <meta name="description" content={`Info del Pokemon ${title}`} />
                <meta name="keywords" content={`${title}, pokemon`} />
            </Head>

           <Navbar />

            <main style={{
                padding: "0px 20px"
            }}>
                {children}
            </main>
        </>
    )
}
