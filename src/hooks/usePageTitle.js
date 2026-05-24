import { useEffect } from "react";

export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | PWSO` : "PWSO – Poor Women Support Organization";
  }, [title]);
}
