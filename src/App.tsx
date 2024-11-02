import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";

function App() {
  return (
    <>
      <div>
        <header>
          <div className="mx-auto md:max-w-4xl px-4">
            {" "}
            <Header />
          </div>
        </header>

        <main className="mx-auto md:max-w-4xl px-4 mt-20">
          <section className="py-8">
            <Hero />
          </section>

          <section className="py-8">{/* About section */}</section>

          <section className="py-8">{/* Services section */}</section>

          <section className="py-8">{/* Contact section */}</section>
        </main>

        <footer>
        <div className="mx-auto md:max-w-4xl px-4">
            footer
        
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
