import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";

const setting = () => {
  const { data: session } = useSession();
  return (
    <Layout>
      {/* <div classNameName=" card min-h h-screen flex justify-center items-center flex-col ">
        <div classNameName=''>
          <img src={session?.user.image} alt="user Profile" classNameName='rounded-2xl' />
        </div>
        <div classNameName="mt-2 ">
          <span classNameName='text-3xl font-semibold'>{session?.user.name}</span>
        </div>
        <div classNameName="font-mono font-light">
          <span>{session?.user.email}</span>
        </div>
      </div> */}

      <div className=" m-auto min-h h-screen flex justify-center items-center dark:bg-gray-500 dark:border-gray-700">
        <div className=" bg-gray-700 p-5 rounded">
          <div className="flex flex-col items-center pb-10 mt-5">
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src={session?.user.image}
              alt="Bonnie image"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {session?.user?.name}
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {session?.user?.email}
            </span>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default setting;
