import React from 'react'
import { Home } from './containers/Home'
import { Categorie } from './containers/Categorie'
import { Layout } from './components/Layout'
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  return (
    <>
      <Layout>
        <GlobalStyle />
        <main>
          <Home />
        </main>
      </Layout>
    </>
  )
}
