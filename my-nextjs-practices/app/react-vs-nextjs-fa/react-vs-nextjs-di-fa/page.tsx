import Link from "next/link"
export default function reactNextDiFa(){
    return(
        <div className="flex flex-col flex-1 items-center justify-center bg-red-100 font-sans">
            <h2>React Vs Nextjs Definition Farsi</h2>

            <div dir="rtl" className="overflow-x-auto w-full max-w-4xl ">
            <table className="w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-green-200">
                  <th className="border border-gray-300 p-2 w-10">#</th>
                  <th className="border border-gray-300 p-2">توضیح شفاف</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2 text-center">۱</td>
                  <td className="border border-gray-300 p-2">React یک کتابخانه جاوااسکریپت برای ساخت رابط کاربری است. Next.js یک فریم‌ورک کامل‌تر است که روی React ساخته شده و امکانات اضافه مثل مسیر‌دهی، رندر سمت سرور و بهینه‌سازی‌ها را فراهم می‌کند.</td>
                </tr>
                <tr className="bg-green-50 dark:bg-zinc-900">
                  <td className="border border-gray-300 p-2 text-center">۲</td>
                  <td className="border border-gray-300 p-2">در React صفحات فقط داخل مرورگر کاربر ساخته می‌شوند و ممکن است کمی کند باشند. در Next.js صفحات می‌توانند روی سرور آماده شوند و سریع‌تر نمایش داده شوند.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 text-center">۳</td>
                  <td className="border border-gray-300 p-2">برای داشتن چند صفحه در React باید کتابخانه‌هایی مثل React Router نصب کنی. در Next.js کافی است پوشه بسازی تا صفحه جدید به‌طور خودکار ایجاد شود.</td>
                </tr>
                <tr className="bg-green-50 dark:bg-zinc-900">
                  <td className="border border-gray-300 p-2 text-center">۴</td>
                  <td className="border border-gray-300 p-2">شروع پروژه با React نیاز به تنظیمات دستی دارد. Next.js از ابتدا تنظیمات و ابزارهای لازم را آماده کرده است.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 text-center">۵</td>
                  <td className="border border-gray-300 p-2">سایت‌های ساخته‌شده با React معمولی برای موتورهای جستجو سخت‌تر قابل شناسایی هستند. Next.js با رندر سمت سرور باعث می‌شود سایت راحت‌تر توسط گوگل پیدا شود.</td>
                </tr>
                <tr className="bg-green-50 dark:bg-zinc-900">
                  <td className="border border-gray-300 p-2 text-center">۶</td>
                  <td className="border border-gray-300 p-2">در React اگر بک‌اند لازم داشته باشی باید جداگانه بسازی. در Next.js می‌توانی API و بک‌اند را داخل همان پروژه ایجاد کنی.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 text-center">۷</td>
                  <td className="border border-gray-300 p-2">تقسیم کد (Code Splitting) برای سرعت بیشتر در React نیاز به تنظیم دستی دارد. Next.js این کار را خودکار انجام می‌دهد.</td>
                </tr>
                <tr className="bg-green-50 dark:bg-zinc-900">
                  <td className="border border-gray-300 p-2 text-center">۸</td>
                  <td className="border border-gray-300 p-2">Next.js تصاویر را بهینه‌سازی و کوچک می‌کند تا سرعت سایت حفظ شود. در React باید ابزارهای جداگانه برای این کار استفاده کنی.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 text-center">۹</td>
                  <td className="border border-gray-300 p-2">React یک روش اصلی برای گرفتن داده دارد. Next.js چند روش مختلف مثل تولید استاتیک، رندر سمت سرور و گرفتن داده در مرورگر ارائه می‌دهد.</td>
                </tr>
                <tr className="bg-green-50 dark:bg-zinc-900">
                  <td className="border border-gray-300 p-2 text-center">۱۰</td>
                  <td className="border border-gray-300 p-2">Next.js از کامپوننت‌های سروری پشتیبانی می‌کند که بخشی از صفحه روی سرور ساخته شود و سرعت بیشتر شود. React این قابلیت را ندارد.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 text-center">۱۱</td>
                  <td className="border border-gray-300 p-2">در React آزادی کامل برای چیدمان فایل‌ها داری. در Next.js ساختار پوشه‌ها مشخص است و بهتر است همان را رعایت کنی.</td>
                </tr>
                <tr className="bg-green-50 dark:bg-zinc-900">
                  <td className="border border-gray-300 p-2 text-center">۱۲</td>
                  <td className="border border-gray-300 p-2">انتشار سایت React نیاز به تنظیم سرور دارد. Next.js به‌راحتی روی Vercel منتشر می‌شود.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 text-center">۱۳</td>
                  <td className="border border-gray-300 p-2">یادگیری React ساده‌تر است و برای مبتدی‌ها مناسب است. Next.js امکانات بیشتری دارد و یادگیری آن کمی پیچیده‌تر است.</td>
                </tr>
                <tr className="bg-green-50 dark:bg-zinc-900">
                  <td className="border border-gray-300 p-2 text-center">۱۴</td>
                  <td className="border border-gray-300 p-2">برای پروژه‌های کوچک مثل داشبورد، React کافی است. برای وبلاگ، فروشگاه یا سایت‌هایی که نیاز به SEO دارند، Next.js بهتر است.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 text-center">۱۵</td>
                  <td className="border border-gray-300 p-2">در React باید ابزار بسته‌بندی (Bundling) را خودت انتخاب و تنظیم کنی. در Next.js این کار از قبل انجام شده است.</td>
                </tr>
                <tr className="bg-green-50 dark:bg-zinc-900">
                  <td className="border border-gray-300 p-2 text-center">۱۶</td>
                  <td className="border border-gray-300 p-2">TypeScript در React نیاز به تنظیم دستی دارد. در Next.js پشتیبانی از TypeScript از ابتدا آماده است.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 text-center">۱۷</td>
                  <td className="border border-gray-300 p-2">Next.js دارای Middleware است که قبل از نمایش صفحه اجرا می‌شود (مثلاً برای بررسی ورود کاربر). React چنین قابلیتی ندارد.</td>
                </tr>
              </tbody>
            </table>
            </div>
        </div>
    )
}
