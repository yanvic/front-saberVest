import AppRoutes from "./Routes";
import {QueryClientProvider} from "@tanstack/react-query";
import {queryClient} from "./queryClient";

function App() {
    return (
       <div>
           <QueryClientProvider client={queryClient}>
           <AppRoutes />
           </QueryClientProvider>
       </div>
    );
}

export default App;