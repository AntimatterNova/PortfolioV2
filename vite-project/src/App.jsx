import { useState } from "react";
import { Outlet } from 'react-router-dom';
import Navbar from './pages/Navbar';

function App() {
	const [currentTab, setCurrentTab] = useState("about");

	// This function checks to see which tab is selected and then generates the appropriate tab.
	const renderTab = () => {
		switch (currentTab) {
			case "":
				return <About />;
			case "portfolio":
				return <Portfolio />;
			case "contact":
				return <Contact />;
			default:
				return null;
		}
	};

  return (
    <>
      <Navbar />
      <main className="">
        <Outlet />
      </main>
    </>
  );
}

export default App;
