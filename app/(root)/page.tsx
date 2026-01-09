import { signOut } from "@/auth";
import { ROUTES } from "@/constants/routes";

export default async function Home() {
  return (
    <div className="">
      <form
        className="px-10 py-[100p]"
        action={async () => {
          "use server";
          await signOut({ redirectTo: ROUTES.SIGN_IN });
        }}
      >
        <button type="submit">Logout</button>
      </form>
    </div>
  );
}
