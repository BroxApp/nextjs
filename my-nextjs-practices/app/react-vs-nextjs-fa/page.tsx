import Link from "next/link";
export default function ractNextTableFa() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-red-100 font-sans dark:bg-black">
      <h2>React Va Nextjs (Farsi)</h2>
      <Link href="/react-vs-nextjs-fa/react-vs-nextjs-di-fa">Go to Definition</Link>
      <div dir="rtl" className="overflow-x-auto w-full max-w-4xl">
        <table className="w-full border-collapse border border-gray-300 text-sm">
          <thead>
            <tr className="bg-blue-200">
              <th className="border border-gray-300 p-2 w-10">#</th>
              <th className="border border-gray-300 p-2">ویژگی</th>
              <th className="border border-gray-300 p-2">React</th>
              <th className="border border-gray-300 p-2">Next.js</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2 text-center">۱</td>
              <td className="border border-gray-300 p-2">نوع</td>
              <td className="border border-gray-300 p-2">کتابخانه (Library) برای ساخت UI</td>
              <td className="border border-gray-300 p-2">فریم‌ورک (Framework) کامل، ساخته‌شده روی React</td>
            </tr>
            <tr className="bg-blue-50 dark:bg-zinc-900">
              <td className="border border-gray-300 p-2 text-center">۲</td>
              <td className="border border-gray-300 p-2">رندرینگ</td>
              <td className="border border-gray-300 p-2">فقط CSR (Client-Side Rendering) به‌صورت پیش‌فرض</td>
              <td className="border border-gray-300 p-2">پشتیبانی از CSR، SSR، SSG، و ISR</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-center">۳</td>
              <td className="border border-gray-300 p-2">روتینگ</td>
              <td className="border border-gray-300 p-2">نیاز به کتابخانه جداگانه مثل React Router</td>
              <td className="border border-gray-300 p-2">روتینگ فایل‌محور (File-based Routing) داخلی</td>
            </tr>
            <tr className="bg-blue-50 dark:bg-zinc-900">
              <td className="border border-gray-300 p-2 text-center">۴</td>
              <td className="border border-gray-300 p-2">راه‌اندازی پروژه</td>
              <td className="border border-gray-300 p-2">نیاز به تنظیم دستی Webpack/Vite و ابزارهای build</td>
              <td className="border border-gray-300 p-2">تنظیمات build از پیش آماده و بهینه‌شده</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-center">۵</td>
              <td className="border border-gray-300 p-2">SEO</td>
              <td className="border border-gray-300 p-2">ضعیف‌تر (چون محتوا سمت کلاینت رندر می‌شه)</td>
              <td className="border border-gray-300 p-2">قوی‌تر (به‌خاطر SSR/SSG)</td>
            </tr>
            <tr className="bg-blue-50 dark:bg-zinc-900">
              <td className="border border-gray-300 p-2 text-center">۶</td>
              <td className="border border-gray-300 p-2">API Routes</td>
              <td className="border border-gray-300 p-2">نداره، نیاز به بک‌اند جدا</td>
              <td className="border border-gray-300 p-2">امکان نوشتن API مستقیم داخل پروژه</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-center">۷</td>
              <td className="border border-gray-300 p-2">Code Splitting</td>
              <td className="border border-gray-300 p-2">باید دستی با React.lazy انجام بشه</td>
              <td className="border border-gray-300 p-2">خودکار بر اساس صفحات و کامپوننت‌ها</td>
            </tr>
            <tr className="bg-blue-50 dark:bg-zinc-900">
              <td className="border border-gray-300 p-2 text-center">۸</td>
              <td className="border border-gray-300 p-2">Image Optimization</td>
              <td className="border border-gray-300 p-2">نداره، نیاز به ابزار جانبی</td>
              <td className="border border-gray-300 p-2">کامپوننت next/image با بهینه‌سازی خودکار</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-center">۹</td>
              <td className="border border-gray-300 p-2">Data Fetching</td>
              <td className="border border-gray-300 p-2">با useEffect، fetch یا React Query</td>
              <td className="border border-gray-300 p-2">getServerSideProps، getStaticProps یا fetch با کش هوشمند</td>
            </tr>
            <tr className="bg-blue-50 dark:bg-zinc-900">
              <td className="border border-gray-300 p-2 text-center">۱۰</td>
              <td className="border border-gray-300 p-2">Server Components</td>
              <td className="border border-gray-300 p-2">نداره (فقط Client Components)</td>
              <td className="border border-gray-300 p-2">پشتیبانی کامل در App Router</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-center">۱۱</td>
              <td className="border border-gray-300 p-2">ساختار پروژه</td>
              <td className="border border-gray-300 p-2">آزاد، خودت تصمیم می‌گیری</td>
              <td className="border border-gray-300 p-2">ساختار پیشنهادی و نیمه‌اجباری</td>
            </tr>
            <tr className="bg-blue-50 dark:bg-zinc-900">
              <td className="border border-gray-300 p-2 text-center">۱۲</td>
              <td className="border border-gray-300 p-2">Deployment</td>
              <td className="border border-gray-300 p-2">نیاز به تنظیم سرور یا هاست استاتیک</td>
              <td className="border border-gray-300 p-2">بهینه برای Vercel، ولی روی هر سروری هم قابل دیپلویه</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-center">۱۳</td>
              <td className="border border-gray-300 p-2">یادگیری</td>
              <td className="border border-gray-300 p-2">ساده‌تر برای شروع</td>
              <td className="border border-gray-300 p-2">منحنی یادگیری بیشتر</td>
            </tr>
            <tr className="bg-blue-50 dark:bg-zinc-900">
              <td className="border border-gray-300 p-2 text-center">۱۴</td>
              <td className="border border-gray-300 p-2">کاربرد مناسب</td>
              <td className="border border-gray-300 p-2">اپلیکیشن‌های SPA، داشبورد، ابزارهای داخلی</td>
              <td className="border border-gray-300 p-2">سایت‌های نیازمند SEO، فروشگاه، بلاگ، پروژه‌های full-stack</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-center">۱۵</td>
              <td className="border border-gray-300 p-2">بسته‌بندی (Bundling)</td>
              <td className="border border-gray-300 p-2">خودت انتخاب می‌کنی (Vite، Webpack و...)</td>
              <td className="border border-gray-300 p-2">داخلی و از پیش پیکربندی‌شده</td>
            </tr>
            <tr className="bg-blue-50 dark:bg-zinc-900">
              <td className="border border-gray-300 p-2 text-center">۱۶</td>
              <td className="border border-gray-300 p-2">TypeScript</td>
              <td className="border border-gray-300 p-2">نیاز به تنظیم دستی</td>
              <td className="border border-gray-300 p-2">پشتیبانی built-in با تنظیم خودکار</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-center">۱۷</td>
              <td className="border border-gray-300 p-2">Middleware</td>
              <td className="border border-gray-300 p-2">نداره</td>
              <td className="border border-gray-300 p-2">داره (برای auth، redirect و غیره)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}