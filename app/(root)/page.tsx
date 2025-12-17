import { signOut } from "@/auth";
import { ROUTES } from "@/constants/routes";

export default async function Home() {
  return (
    <>
      <h1 className="font-inter h1-bold">Welcome to the world of Next js. inter 🚀</h1>
      <form
        className="px-10 py-[100p]"
        action={async () => {
          "use server";
          await signOut({ redirectTo: ROUTES.SIGN_IN });
        }}
      >
        <button type="submit">Logout</button>
      </form>
    </>
  );
}
