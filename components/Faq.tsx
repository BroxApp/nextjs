
// export default function Faq (){
//     return (
//         <div id="faq" className="w-full h-screen">
//            <h2 className="text-4lg text-gray-200">Frequently Asked Questions (FAQ)</h2>
//            <div>
//                 <h3>General & Pricing</h3>
//                 <div>
//                     <p></p>
//                     <span></span>
//                 </div>
//                 <div>
//                     <p></p>
//                     <span></span>
//                 </div>
//                 <div>
//                     <p></p>
//                     <span></span>
//                 </div>
//            </div>
//            <div>
//                 <h3>Technical & Functionality</h3>
//            </div>
//            <div>
//                 <h3>Support & Ownership</h3>
//            </div>
            

//         </div>
//     )
// }

export default function Faq() {
  return (
    <div id="faq" className="w-full min-h-screen bg-slate-950 py-12 px-4">
      {/* تیتر اصلی */}
      <h2 className="text-3xl font-bold text-gray-200 text-center mb-10">
        Frequently Asked Questions (FAQ)
      </h2>

      <div className="max-w-3xl mx-auto space-y-8">
        {/* بخش اول: General & Pricing */}
        <div>
          <h3 className="text-xl font-semibold text-orange-400 mb-4">
            General & Pricing
          </h3>

          <div className="space-y-4">
            {/* ساختار یک سوال و جواب */}
            <div className="rounded-xl border border-slate-800 bg-slate-900 overflow-hidden">
              <button 
                type="button" 
                className="w-full flex justify-between items-center p-4 text-left font-medium text-slate-200 hover:text-orange-400 transition"
              >
                <span>How much does a custom website cost?</span>
                <span className="text-sm text-slate-400">▼</span>
              </button>

              <div className="border-t border-slate-800/50">
                <p className="p-4 text-sm leading-relaxed text-slate-400">
                  The cost depends on the scope, required functionality, and complexity of your project. After our initial discovery call, I will provide a detailed proposal with a transparent quote tailored to your budget and needs.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* بخش دوم: Technical & Functionality */}
        <div>
          <h3 className="text-xl font-semibold text-orange-400 mb-4">
            Technical & Functionality
          </h3>
        </div>

        {/* بخش سوم: Support & Ownership */}
        <div>
          <h3 className="text-xl font-semibold text-orange-400 mb-4">
            Support & Ownership
          </h3>
        </div>
      </div>
    </div>
  );
}