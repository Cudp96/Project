import Layout from "@/components/Layout";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Component() {
  const { data: session } = useSession();

  return (
    <Layout>
      <div className="text-blue-900 flex justify-between bg-cyan-400 py-2 px-4 ">
        <h2>
          Hello, <b>{session?.user?.name}</b>
        </h2>
        <div className="flex rounded-lg gap-1">
          <span className="px-2">{session?.user?.email}</span>
          <img src={session?.user?.image} className="w-8 h-8 rounded-3xl" />
        </div>
      </div>
    </Layout>
  );
}
