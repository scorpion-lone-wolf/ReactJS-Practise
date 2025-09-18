import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const AppLayout = () => {
  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <Header className="fixed top-0 left-0 right-0 bg-gray-800 text-white z-10" />

      <main className="overflow-y-auto pt-16 pb-16 px-4 py-14">
        <Outlet />
      </main>

      <Footer className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white text-center py-4 z-10" />
    </div>
  );
};

export default AppLayout;
