import Header from "./components/layout/Header";

function App() {
  return (
    <>
      <div className="mx-auto md:max-w-4xl px-4">
        <Header />
        <main>
          <section className="py-8">
            {/* Home/Hero section */}
          </section>

          <section className="py-8">
            {/* About section */}
          </section>

          <section className="py-8">
            {/* Services section */}
          </section>

          <section className="py-8">
            {/* Contact section */}
          </section>
        </main>
      </div>
    </>
  );
}

export default App;