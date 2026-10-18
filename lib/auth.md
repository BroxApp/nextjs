flowchart TD
subgraph UI ["لایه رابط کاربری (Frontend / app)"]
RegPage["app/register-page/page.tsx\n(فرم ثبت‌نام)"]
LogPage["app/login/page.tsx\n(فرم لاگین)"]
HomePage["app/page.tsx\n(نمایش شرطی HeroSection)"]
ProfPage["app/profile/page.tsx\n(نمایش اطلاعات + دکمه خروج)"]
Nav["components/HeroNav.tsx\n(کنترل لینک‌های نوبار بر اساس لاگین)"]
end

    subgraph API ["لایه سرویس‌ها و مسیرها (API Routes)"]
        ApiReg["app/api/register/route.ts\n(اعتبارسنجی Zod + ساخت کاربر)"]
        ApiLog["app/api/login/route.ts\n(بررسی رمز + صدور سشن)"]
        ApiOut["app/api/logout/route.ts\n(پاک کردن کوکی)"]
    end

    subgraph Lib ["هسته و منطق سیستم (lib/)"]
        Users["lib/users.ts\n(خواندن و نوشتن داده‌ها)"]
        Pass["lib/password.ts\n(هش و تطبیق رمز با scrypt)"]
        Sess["lib/session.ts\n(مدیریت کوکی سشن و getCurrentUser)"]
    end

    subgraph Storage ["محل ذخیره داده‌ها"]
        DB[("data/users.json\n(بانک اطلاعاتی کاربران)")]
        Cookie[("Cookie مرورگر: session\n(ذخیره شناسه کاربر)")]
    end

    %% روابط ثبت نام
    RegPage -->|1. ارسال اطلاعات فرم| ApiReg
    ApiReg -->|2. هش کردن پسورد| Pass
    ApiReg -->|3. ذخیره کاربر| Users
    Users -->|4. ثبت در فایل| DB

    %% روابط لاگین
    LogPage -->|1. ارسال نام کاربری و رمز| ApiLog
    ApiLog -->|2. یافتن کاربر| Users
    ApiLog -->|3. اعتبارسنجی رمز| Pass
    ApiLog -->|4. تنظیم کوکی| Sess
    Sess -->|5. ست شدن روی مرورگر| Cookie

    %% روابط خروج
    ProfPage -->|درخواست خروج| ApiOut
    ApiOut -->|حذف کوکی| Sess
    Sess -.->|پاک شدن| Cookie

    %% بررسی دسترسی و احراز هویت
    HomePage -->|بررسی لاگین بودن| Sess
    ProfPage -->|بررسی دسترسی و اطلاعات کاربر| Sess
    Nav -->|بررسی وضعیت کاربر برای منو| Sess
    Sess -->|بررسی آی‌دی کاربر| Users
