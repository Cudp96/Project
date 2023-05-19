import Nav from "./Sidebar";
import { signIn, useSession } from "next-auth/react";

const Layout = ({ children }) => {
  const { data: session } = useSession();

  const signInHandler = (e) => {
    e.preventDefault();
    signIn("google");
  };
  if (!session) {
    return (
      <div className="flex justify-center items-center min-h h-screen ">
        <span>Hello</span>
        <button
          onClick={(e) => signInHandler(e)}
          className="px-3 py-3 rounded-3xl bg-orange-400 mt-1 w-50 border  hover:bg-orange-500 font-semibold border-black-300"
        >
          Sign In With Google
        </button>
      </div>
    );
  }
  return (
    <>
      <div className="min-h h-screen ">
        <div className="flex">
          <Nav />
          <div className="flex-grow">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
