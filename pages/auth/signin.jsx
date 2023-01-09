import { getProviders, signIn } from "next-auth/react";
import Header from "../../components/Header";

function signInPage({ providers }) {
  return (
    <>
      <Header />
      <div
        className="flex flex-col items-center justify-center py-2 min-h-screen
      px-14 text-center"
      >
        <img className="w-80" src="https://links.papareact.com/ocw" alt="" />
        <p className="font-xs italic">
          This is{" "}
          <span className="underline">
            <span className="text-bold text-xl">NOT</span> a real app.
          </span>{" "}
          It is only for educational purpose!
        </p>
        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="p-3 bg-blue-500 rounded-lg text-white"
                onClick={() => signIn(provider.id, { callbackUrl: "/" })}
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}

export default signInPage;
