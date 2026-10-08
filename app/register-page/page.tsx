"use client"
import { useState } from "react";

export default function RegisterPage(){
    const [notification, setNotification] = useState("");

    function handleSubmit(event: React.SubmitEvent<HTMLFormElement>){
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        
        const username = formData.get("username")?.toString().trim() || "";
        const email = formData.get("email");
        const password = formData.get("password");
        if (username === ""){
            setNotification("username can not be empty");
            setTimeout(()=>setNotification (""), 3000);
            return;
        }
        if (username.length < 3 ){
            setNotification("username can not be less than 3 carechter");
            setTimeout(()=>setNotification(""), 3000);
            return;
        }
        if (email === ""){
            setNotification("email can not be empty");
            setTimeout(()=>setNotification(""), 3000);
            return;
        }
        if (password === ""){
            setNotification("password can not be empty");
            setTimeout(()=>setNotification(""), 3000);
        }

        console.log(formData.get("username"));
        console.log(formData.get("email"));
    }
    

    return(
        <>
        {
            <div className={`fixed left-5 bottom-5 rounded-lg bg-red-500 px-5 py-3 text-white shadow-lg
            transition transform duration-500 
            ${notification ? "translate-x-0" : "-translate-x-20"}`}>
                {notification}
            </div>
        }

        <form onSubmit={handleSubmit} 
        className="mx-auto w-full max-w-md space-y-5 rounded-2xl border border-slate-700 bg-slate-950 p-6 shadow-2xl sm:p-8 mt-2">

            <div>
                <label htmlFor="username" className="mb-1.5 block text-sm text-slate-300">
                    Choice a user name:
                </label>
                <input id="username" type="text" name="username" placeholder="User name"
                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-white outline-none
                 placeholder:text-slate-500 focus:border-orange-500"/>
            </div>
            <div>
                <label htmlFor="fname" className="mb-1.5 block text-sm text-slate-300">
                    First name:
                </label>
                <input id="fname" type="text" name="fname" placeholder="First name"
                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-white outline-none
                 placeholder:text-slate-500 focus:border-orange-500"/>
            </div>
            <div>
                <label htmlFor="lname" className="mb-1.5 block text-sm text-slate-300">
                    Last name:
                </label>
                <input id="lname" type="text" name="lname" placeholder="Last name"
                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-white outline-none
                 placeholder:text-slate-500 focus:border-orange-500"/>
            </div>
            <div>
                <label htmlFor="email" className="mb-1.5 block text-sm text-slate-300">
                    Enter your valid email:
                </label>
                <input id="email" type="email" name="email" placeholder="Email"
                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-white outline-none
                 placeholder:text-slate-500 focus:border-orange-500"/>
            </div>
            <div>
                <label htmlFor="address" className="mb-1.5 block text-sm text-slate-300">
                    Enter your current address:
                </label>
                <input id="address" type="text" name="address" placeholder="Home address"
                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-white outline-none
                 placeholder:text-slate-500 focus:border-orange-500"/>
            </div>
            <div>
                <label htmlFor="password" className="mb-1.5 block text-sm text-slate-300">
                    Enter a powerfull password:
                </label>
                <input id="password" type="password" name="password" placeholder="Password"
                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-white outline-none
                 placeholder:text-slate-500 focus:border-orange-500"/>
            </div>
            <div>
                <button type="submit"
                className="w-full rounded-lg bg-orange-500 py-2.5 font-semibold text-slate-950 transition hover:bg-orange-400 active:scale-[0.95]">
                    Register
                </button>
            </div>

        </form>
        </>
    )
}

// در نکست جی اس یک قابلیت مهم این است که می‌توانیم فرم را مستقیم به یک Server Action متصل کنیم.
// export default function RegisterPage () {
//     async function register(formData: FormData){
//         "use server";

//         console.log(formData.get("username"));
//         console.log(formData.get("email"));
//     }
//     return(
//         <form action={register}>
//             <input type="text" name="username" placeholder="User Name" className="border-2 border-amber-300" />
//             <input type="email" name="email" placeholder="Email" className="border-2 border-amber-300"/>
//             <button type="submit">Register</button>
//         </form>
//     )
// }

