export default function Home() {
  return (
    <main>
      <header>
        <h1>شغلي</h1>
        <p>وظيفتك أو خدمتك… بمكان واحد</p>
      </header>

      <section>
        <h2>شو عم تدور اليوم؟</h2>

        <div className="cards">
          <a href="/jobs">💼 أبحث عن وظيفة</a>
          <a href="/services">🛠️ أبحث عن خدمة</a>
          <a href="/cv">📄 أنشئ سيرتك الذاتية</a>
        </div>
      </section>
    </main>
  );
}
