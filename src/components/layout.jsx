import Header from "./header";

const Layout = ({ header = <Header />, main = <main /> }) => {
  return (
    <>
      {header}
      <div className="px-8 mx-auto max-w-[1400px]">
      {main}
      </div>
    </>
  );
};
export default Layout;
