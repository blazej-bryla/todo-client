import Footer from "./default/footer";
import Header from "./default/header";

const DefaultLayout = ({ children }) => {
  return(
      <>
      <Header />
      <main >
      {children}
      </main>
      <Footer />
      </>
  );
};
export default DefaultLayout;
