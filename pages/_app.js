import Page from '../components/Page/Page';
import 'antd/dist/antd.css';
import './index.scss';

export default function App({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}
