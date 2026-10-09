const bodyTypes = [
  { name: 'سواری', count: '۱۸۰' },
  { name: 'SUV', count: '۹۲' },
  { name: 'پیکاپ', count: '۴۱' },
  { name: 'کراس‌اوور', count: '۵۸' },
  { name: 'آفرود', count: '۲۶' },
  { name: 'هیبرید', count: '۱۴' },
];

const cars = [
  {
    id: 1,
    title: 'پژو ۲۰۷i پانوراما اتوماتیک TU5P',
    price: '۹۸۵,۰۰۰,۰۰۰',
    year: '۱۴۰۲',
    mileage: '۲۴,۰۰۰ کیلومتر',
    transmission: 'اتوماتیک',
    fuel: 'بنزین',
    location: 'تهران',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80',
    badge: 'تخصصی',
    status: 'در انبار',
  },
  {
    id: 2,
    title: 'مزدا ۳ اسپورت مدل ۱۴۰۱',
    price: '۷۴۰,۰۰۰,۰۰۰',
    year: '۱۴۰۱',
    mileage: '۳۶,۰۰۰ کیلومتر',
    transmission: 'دستی',
    fuel: 'بنزین',
    location: 'شیراز',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80',
    badge: 'پیشنهاد ویژه',
    status: 'خرید آسان',
  },
  {
    id: 3,
    title: 'ریو مدل ۱۴۰۳',
    price: '۶۲۵,۰۰۰,۰۰۰',
    year: '۱۴۰۳',
    mileage: '۱۸,۰۰۰ کیلومتر',
    transmission: 'اتوماتیک',
    fuel: 'بنزین',
    location: 'اصفهان',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
    badge: 'تازه وارد',
    status: 'گارانتی',
  },
  {
    id: 4,
    title: 'کیا سراتو GT مدل ۱۴۰۰',
    price: '۱,۳۸۰,۰۰۰,۰۰۰',
    year: '۱۴۰۰',
    mileage: '۴۲,۰۰۰ کیلومتر',
    transmission: 'اتوماتیک',
    fuel: 'بنزین',
    location: 'تبریز',
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=80',
    badge: 'ویژه',
    status: 'تایید شده',
  },
];

const pricing = [
  {
    title: 'برنزی',
    description: 'برای آگهی‌های ساده و شروع سریع',
    price: '۱,۲۵۰,۰۰۰',
    popular: false,
    features: ['ثبت آگهی تا ۳۰ روز', 'نمایش در لیست اصلی', 'پشتیبانی پیامکی'],
    button: 'انتخاب برنزی',
  },
  {
    title: 'نقره‌ای',
    description: 'مناسب برای فروش سریع‌تر با دید بیشتر',
    price: '۲,۹۹۰,۰۰۰',
    popular: true,
    features: ['ثبت آگهی نامحدود', 'اولویت نمایش بیشتر', 'تضمین تماس مشتری', 'پشتیبانی حرفه‌ای'],
    button: 'انتخاب نقره‌ای',
  },
  {
    title: 'طلایی',
    description: 'پکیج کامل برای فروش حرفه‌ای خودرو',
    price: '۵,۹۹۰,۰۰۰',
    popular: false,
    features: ['مدیر آگهی اختصاصی', 'برندینگ حرفه‌ای', 'بازاریابی هدفمند', 'پشتیبانی ۲۴ ساعته'],
    button: 'انتخاب طلایی',
  },
];

const advantages = [
  { title: 'دقت قیمت‌گذاری', text: 'قیمت‌ها با تحلیل بازار و شرایط خودرو به‌روز می‌شوند.' },
  { title: 'معاملات امن', text: 'فرآیند ثبت آگهی و بررسی خودرو با پشتیبانی حرفه‌ای انجام می‌شود.' },
  { title: 'تأیید هویت فروشنده', text: 'برای افزایش اعتماد و کاهش ریسک معامله، هویت ارسال می‌شود.' },
  { title: 'دسترسی سریع', text: 'جستجو، فیلتر و تماس با فروشنده در کمترین زمان ممکن.' },
];

export default function App() {
  return (
    <div className="page-shell">
      <header className="site-header">
        <div className="container header-inner">
          <a href="#" className="brand" aria-label="بازار خودرو">
            <span className="brand-mark">B</span>
            <div>
              <strong>بازار خودرو</strong>
              <small>Auto Max</small>
            </div>
          </a>

          <nav className="main-nav" aria-label="منوی اصلی">
            <a href="#home">خانه</a>
            <a href="#inventory">خرید خودرو</a>
            <a href="#pricing">پکیج‌ها</a>
            <a href="#about">درباره ما</a>
            <a href="#contact">تماس</a>
          </nav>

          <div className="header-actions">
            <button className="btn btn-outline">ثبت آگهی</button>
            <button className="btn btn-primary">مشاوره رایگان</button>
          </div>
        </div>
      </header>

      <main id="home">
        <section className="hero">
          <div className="container hero-inner">
            <div className="hero-copy">
              <span className="eyebrow">خرید و فروش هوشمند خودرو</span>
              <h1>
                بازار خودرو <span>Auto Max</span>
              </h1>
              <p>
                خرید، فروش و ثبت آگهی تخصصی خودرو با پکیج‌های معتبر، قیمت‌گذاری دقیق و
                تجربه‌ای امن از اولین تماس تا تحویل نهایی.
              </p>

              <form className="search-box" aria-label="جستجوی خودرو">
                <div className="search-grid">
                  <label>
                    <span>برند</span>
                    <select defaultValue="all">
                      <option value="all">همه برندها</option>
                      <option value="peugeot">پژو</option>
                      <option value="mazda">مزدا</option>
                      <option value="kia">کیا</option>
                    </select>
                  </label>
                  <label>
                    <span>نوع خودرو</span>
                    <select defaultValue="all">
                      <option value="all">همه</option>
                      <option value="suv">SUV</option>
                      <option value="sedan">سواری</option>
                      <option value="pickup">پیکاپ</option>
                    </select>
                  </label>
                  <label>
                    <span>قیمت</span>
                    <select defaultValue="all">
                      <option value="all">هر قیمتی</option>
                      <option value="low">تا ۷۰۰ میلیون</option>
                      <option value="mid">۷۰۰ میلیون تا ۱.۵ میلیارد</option>
                      <option value="high">بیشتر از ۱.۵ میلیارد</option>
                    </select>
                  </label>
                  <button type="submit" className="btn btn-primary search-btn">
                    جستجو
                  </button>
                </div>
              </form>
            </div>

            <div className="hero-stats" aria-label="آمار و ارقام">
              <div className="stat-card">
                <strong>۱۲k+</strong>
                <span>خودرو ثبت‌شده</span>
              </div>
              <div className="stat-card">
                <strong>۴.۹</strong>
                <span>امتیاز رضایت مشتری</span>
              </div>
              <div className="stat-card">
                <strong>۲۴/۷</strong>
                <span>پشتیبانی تخصصی</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section container" aria-labelledby="body-types-title">
          <div className="section-head">
            <h2 id="body-types-title">دسته‌بندی خودروها</h2>
          </div>

          <div className="type-grid">
            {bodyTypes.map((type) => (
              <article key={type.name} className="type-card">
                <div className="type-icon" aria-hidden="true">🚗</div>
                <h3>{type.name}</h3>
                <span>{type.count} خودرو</span>
              </article>
            ))}
          </div>
        </section>

        <section id="inventory" className="section container" aria-labelledby="inventory-title">
          <div className="section-head">
            <h2 id="inventory-title">خودروهای پیشنهادی</h2>
            <a href="#" className="text-link">مشاهده همه</a>
          </div>

          <div className="cars-grid">
            {cars.map((car) => (
              <article key={car.id} className="car-card">
                <div className="car-image-wrap">
                  <img src={car.image} alt={car.title} loading="lazy" width="800" height="520" />
                  <span className="car-badge">{car.badge}</span>
                  <span className="car-status">{car.status}</span>
                </div>

                <div className="car-content">
                  <h3>{car.title}</h3>
                  <div className="meta-row">
                    <span>{car.year}</span>
                    <span>{car.mileage}</span>
                  </div>
                  <div className="meta-row">
                    <span>{car.transmission}</span>
                    <span>{car.fuel}</span>
                    <span>{car.location}</span>
                  </div>
                  <div className="price-row">
                    <div>
                      <small>قیمت</small>
                      <strong>{car.price}</strong>
                    </div>
                    <button className="btn btn-primary small">جزئیات</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="pricing-cta container" aria-labelledby="pricing-title">
          <div className="cta-box">
            <div>
              <span className="eyebrow">پکیج‌های فروش خودرو</span>
              <h2 id="pricing-title">از آگهی ساده تا فروش حرفه‌ای</h2>
            </div>
            <button className="btn btn-primary">مشاوره رایگان</button>
          </div>
        </section>

        <section id="pricing" className="section container" aria-labelledby="plans-title">
          <div className="section-head">
            <h2 id="plans-title">پکیج‌های ثبت آگهی</h2>
          </div>

          <div className="pricing-grid">
            {pricing.map((plan) => (
              <article key={plan.title} className={`pricing-card ${plan.popular ? 'featured' : ''}`}>
                {plan.popular && <span className="popular-tag">پرفروش</span>}
                <h3>{plan.title}</h3>
                <p>{plan.description}</p>
                <div className="price-box">
                  <span>تومان</span>
                  <strong>{plan.price}</strong>
                </div>
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <button className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline'}`}>
                  {plan.button}
                </button>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="section container" aria-labelledby="about-title">
          <div className="section-head">
            <h2 id="about-title">چرا بازار خودرو؟</h2>
          </div>

          <div className="feature-grid">
            {advantages.map((item) => (
              <article key={item.title} className="feature-card">
                <div className="feature-icon" aria-hidden="true">✓</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer id="contact" className="site-footer">
        <div className="container footer-grid">
          <div>
            <h3>بازار خودرو</h3>
            <p>پلتفرم تخصصی خرید و فروش خودرو با تجربه‌ای امن، سریع و شفاف برای مشتریان و فروشندگان.</p>
          </div>
          <div>
            <h4>دسترسی سریع</h4>
            <ul>
              <li>خرید خودرو</li>
              <li>ثبت آگهی</li>
              <li>پکیج‌ها</li>
            </ul>
          </div>
          <div>
            <h4>پشتیبانی</h4>
            <ul>
              <li>۰۲۱-۹۱۰۰۸۸۰۰</li>
              <li>support@automax.ir</li>
              <li>تهران، خیابان آزادی</li>
            </ul>
          </div>
          <div>
            <h4>ساعت کاری</h4>
            <ul>
              <li>شنبه تا پنج‌شنبه</li>
              <li>۸:۳۰ تا ۲۱:۰۰</li>
            </ul>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© ۱۴۰۳ بازار خودرو Auto Max</span>
        </div>
      </footer>
    </div>
  );
}
