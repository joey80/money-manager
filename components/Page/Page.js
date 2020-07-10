import React, { Component } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import Head from 'next/head';
// import Header from './Header';
// import Footer from './Footer';
//import Meta from './Meta'

const theme = {
  colorSuccess: '#5cb85c',
  colorDanger: '#e56662',
  colorWarning: '#ffff33',
  colorInfo: '#f9f9f9',
  colorBrand: '#00e19b',
  colorBlue1: '#5380d7',
  colorBlue2: '#10a3ff',
  colorBlue3: '#bae4ff',
  colorWhite: '#ffffff',
  colorWhite2: 'f7f7f7',
  colorGreen1: '#15ae82',
  colorGreen2: '#27d9a5',
  colorGreen3: '#00e19b',
  colorGreen4: '#00e595',
  colorGreenLightOpacity: 'rgba(0, 229, 149, 0.1)',
  colorGrey1: '#616161',
  colorGrey2: '#e0e0e0',
  colorGrey3: '#404040',
  colorGrey4: '#f8f8f8',
  colorGrey5: '#707070',
  colorGrey6: '#3b3b3b',
  colorGrey7: '#fafafa',
  colorRed: '#e56662',
  defaultFontSize: '1.6rem',
  defaultTextShadow: '0 0 2rem rgba(0, 0, 0, 0.9)',
  defaultBoxShadow: '0 2rem 4rem 0 rgba(59, 59, 59, 0.1)',
  defaultBoxShadowStrong: '0 2rem 4rem 0 rgba(59, 59, 59, 0.5)',
};

// const GlobalStyle = createGlobalStyle`

//   html {
//     box-sizing: border-box;
//     font-size: 10px;
//   }

//   *, *:before, *:after {
//     box-sizing: inherit;
//   }

//   body {
//     font-family: 'Montserrat', sans-serif;
//     font-size: 1.5rem;
//     line-height: 1.15;
//     overflow-x: hidden;
//     padding: 0;
//     margin: 0;
//   }

//   a {
//     text-decoration: none;
//   }
// `;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        {/* <GlobalStyle /> */}
        <Head>
          <link
            href='https://fonts.googleapis.com/css2?family=Love+Ya+Like+A+Sister&display=swap'
            rel='stylesheet'
            key='google-font-love'
          />
        </Head>
        {/* <Meta /> */}
        {this.props.children}
      </ThemeProvider>
    );
  }
}

export default Page;
