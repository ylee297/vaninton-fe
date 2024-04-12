import { PaperProvider } from "react-native-paper";
import Home from "./Page/Home";

export default function Page() {
  return (
    <PaperProvider>
      <Home />
    </PaperProvider>
  );
}