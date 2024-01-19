import { cookies } from "next/headers";

// If you call cookies(), it's rendered at every request time.
export const validateAuth = async () => {
  try {
    /*
      In devbox of codesandbox, it does not work well with embedded browser.
      But if you pop up this app as new browser tab, it works fine.
    */
    const sessionid = cookies().get("sessionid");
    if (!sessionid) {
      return null;
    }
    const parsed = JSON.parse(sessionid.value);
    const { expire } = parsed;
    if (expire < Date.now()) {
      return { status: "EXPIRED" } as const;
    }
    return { status: "AUTHENTICATED" } as const;
  } catch (e) {
    return null;
  }
};
