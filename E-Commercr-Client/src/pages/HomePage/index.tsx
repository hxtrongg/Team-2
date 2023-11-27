import {Helmet} from "react-helmet";

const HomePage = () => {
  return (
   <div>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Home Page</title>
    </Helmet>
    <h1 className="py-5 text-5xl font-bold">Home Page</h1>
   </div>
  );
};

export default HomePage;
