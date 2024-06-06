import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { Home } from '../Home/Home';

export const Layout = () => {
  return (
    <>
      <Header />
      <Home />
      {/* <Outlet /> */}
      <Footer />
    </>
  );
};
