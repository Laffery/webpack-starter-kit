import { AWSComponent } from "@/components/AWS";
import { HeaderComponent } from "@/components/layouts/components/header";
import { SideBarComponent } from "@/components/layouts/components/side-bar";
import logo from "@/logo.svg";
import { CmpAComponent } from "./components/cmpA";

export function HomeComponent() {
  return (
    <div>
      <header>
        <h1>Hello world!</h1>
        <h2>
          Welcome to use <strong>Webpack Starter Kit!</strong>
        </h2>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <img className="logo" src={logo} alt="logo" />

        <HeaderComponent></HeaderComponent>
      </header>

      <aside>
        <SideBarComponent></SideBarComponent>
      </aside>

      <main>
        <CmpAComponent></CmpAComponent>
        
        <AWSComponent></AWSComponent>
      </main>
    </div>
  );
}
