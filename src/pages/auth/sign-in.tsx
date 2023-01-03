import { signIn } from "next-auth/react";
import { HiCash } from "react-icons/hi";
import { IconType } from "react-icons/lib";
import { env } from "../../env/client.mjs";

const SignIn = () => {
  const providers: { provider: string; text: string; icon: IconType }[] = [
    { provider: "google", text: "Sign in with Google", icon: HiCash },
    { provider: "discord", text: "Sign in with Discord", icon: HiCash },
  ];

  return (
    <div className="relative flex h-full w-full justify-center">
      <div className="absolute top-16 flex h-fit w-4/5 max-w-lg flex-col items-center justify-evenly gap-4 rounded-md bg-gray-300/50 py-8 px-4 backdrop-blur-sm dark:bg-gray-700/50">
        <h2 className="text-center text-2xl font-thin uppercase tracking-[3px]">
          Choose a provider
        </h2>
        <div className="divide-y-2"></div>
        {providers.map((provider) => (
          <button
            aria-label={provider.text}
            key={provider.text}
            onClick={() => {
              signIn(provider.provider, {
                callbackUrl: env.NEXT_PUBLIC_BASE_URL,
              });
            }}
            className="flex w-1/2 min-w-[10rem] flex-nowrap items-center justify-center rounded-md bg-gray-500 p-4 text-gray-50 transition-colors hover:bg-gray-400 hover:text-white dark:bg-slate-800 dark:text-gray-300 hover:dark:bg-slate-700 hover:dark:text-gray-200"
          >
            <span className="hidden px-2 text-2xl sm:flex">
              {<provider.icon />}
            </span>
            <span className="whitespace-nowrap px-4">{provider.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SignIn;
