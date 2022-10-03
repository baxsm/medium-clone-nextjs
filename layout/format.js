import Header from "../components/Header"
import Head from "next/head"

export default function format({ children }) {
    return (
        <>
            <Head>
                <title>Medium</title>
            </Head>
            <Header></Header>
            <main className="mx-auto">{children}</main>
        </>
    )
}