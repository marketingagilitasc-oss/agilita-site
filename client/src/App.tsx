/**
 * App — Raiz da aplicação Agilita Regularização
 * Design: Warm Corporate / Boutique Imobiliária Brasileira
 * Providers: ThemeProvider (light) + EditProvider
 */

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { EditProvider } from "./contexts/EditContext";
import Home from "./pages/Home";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <EditProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </EditProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
