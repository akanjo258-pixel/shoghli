export default function Home() {
  return (
    <main dir="rtl">
      <header className="hero">
        <div className="logo">شغلي</div>
        <h1>فرصتك تبدأ من هون</h1>
        <p>
          منصة للوظائف والخدمات تساعدك تلاقي شغل أو تعرض مهارتك بسهولة.
        </p>

        <div className="buttons">
          <a href="/jobs">💼 أبحث عن وظيفة</a>
          <a href="/services">🛠️ أبحث عن خدمة</a>
        </div>
      </header>

      <section className="section">
        <h2>شو بدك تعمل اليوم؟</h2>

        <div className="cards">
          <a href="/jobs" className="card">
            <span>💼</span>
            <strong>أبحث عن وظيفة</strong>
            <small>تصفح الوظائف المتاحة</small>
          </a>

          <a href="/services" className="card">
            <span>🛠️</span>
            <strong>أبحث عن خدمة</strong>
            <small>اعثر على أشخاص يقدمون خدمات</small>
          </a>

          <a href="/cv" className="card">
            <span>📄</span>
            <strong>أنشئ CV</strong>
            <small>جهز سيرتك الذاتية بسهولة</small>
          </a>

          <a href="/post-job" className="card">
            <span>📢</span>
            <strong>أعلن عن وظيفة</strong>
            <small>وظّف شخصاً مناسباً</small>
          </a>
        </div>
      </section>

      <section className="how">
        <h2>كيف بيشتغل شغلي؟</h2>

        <div className="steps">
          <div>
            <b>1</b>
            <p>ابحث عن فرصة</p>
          </div>

          <div>
            <b>2</b>
            <p>تواصل مع صاحب العمل</p>
          </div>

          <div>
            <b>3</b>
            <p>ابدأ شغلك</p>
          </div>
        </div>
      </section>

      <footer>
        <strong>شغلي</strong>
        <p>وظائف • خدمات • فرص</p>
      </footer>
    </main>
  );
}
