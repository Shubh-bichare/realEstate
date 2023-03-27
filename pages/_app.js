
import { ChakraProvider, theme } from '@chakra-ui/react'
import Router from 'next/router'
import Head from 'next/head'
import NProgress from 'nprogress'

  import Layout from '@/Component/Layout'


export default function App({ Component, pageProps }) {
  return (
       <>
         <Head>
         
         </Head>
         <ChakraProvider theme={theme} >
              <Layout>
                  <Component  {...pageProps} />
              </Layout>
         </ChakraProvider>
       </>
  )
}
