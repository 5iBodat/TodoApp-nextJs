import React from "react";
import Head from "next/head";
import Header from "../header";

interface LayoutProps {
    children: React.ReactNode
    pageTitle?: string
}

const Layout = (props: LayoutProps) => {
    const { children, pageTitle } = props
    return (
        <>
            <Head>
                <title>NextJs | {pageTitle}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Header />
            <div className="flex item-center justify-center">
                <div className="container flex item-center justify-center">
                    {children}
                </div>
            </div>
        </>
    );
}

export default Layout;