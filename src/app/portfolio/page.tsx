import {Suspense} from "react";
import Portfolio from "./portfolio";

export default function Page() {
  return <div>
    <Suspense fallback={<>Loading...</>}>
      <Portfolio />
    </Suspense>
  </div>
}