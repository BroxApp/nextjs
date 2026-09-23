
import MyCard from "@/components/MyCard"

export default function reactNextDiEn(){
  const users = [
    {name: "Ahmad", email: "example1@gmail.com", phone: 213456789},
    {name: "Mahmmod", email: "example2@gmail.com", phone: 321456789},
    {name: "Reza", email: "example3@gmail.com", phone: 432156789}
  ]
    return(
      <>
        <div>
            <h2>React Vs Nextjs Definition English</h2>
            <div className="overflow-x-auto w-full max-w-4xl">
              <table className="w-full border-collapse border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-green-200">
                    <th className="border border-gray-300 p-2 w-10">#</th>
                    <th className="border border-gray-300 p-2">Clear Explanation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-2 text-center">1</td>
                    <td className="border border-gray-300 p-2">React is a JavaScript library for building user interfaces. Next.js is a framework built on top of React that adds extra features like routing, server-side rendering, and performance optimizations.</td>
                  </tr>
                  <tr className="bg-green-50 dark:bg-zinc-900">
                    <td className="border border-gray-300 p-2 text-center">2</td>
                    <td className="border border-gray-300 p-2">React renders pages entirely in the browser, which can be slower. Next.js can render pages on the server first, so users see content faster.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 text-center">3</td>
                    <td className="border border-gray-300 p-2">In React, you need extra libraries (like React Router) to create multiple pages. In Next.js, pages are automatically created based on the folder structure.</td>
                  </tr>
                  <tr className="bg-green-50 dark:bg-zinc-900">
                    <td className="border border-gray-300 p-2 text-center">4</td>
                    <td className="border border-gray-300 p-2">React projects require manual setup for tools and configurations. Next.js comes with built-in settings and defaults, so you can start coding immediately.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 text-center">5</td>
                    <td className="border border-gray-300 p-2">React apps are harder for search engines to index because they rely on client-side rendering. Next.js supports server-side rendering, making sites more SEO-friendly.</td>
                  </tr>
                  <tr className="bg-green-50 dark:bg-zinc-900">
                    <td className="border border-gray-300 p-2 text-center">6</td>
                    <td className="border border-gray-300 p-2">With React, you need a separate backend server. Next.js allows you to create backend APIs directly inside the same project.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 text-center">7</td>
                    <td className="border border-gray-300 p-2">React requires manual setup for code splitting to improve performance. Next.js automatically splits code into smaller chunks for faster loading.</td>
                  </tr>
                  <tr className="bg-green-50 dark:bg-zinc-900">
                    <td className="border border-gray-300 p-2 text-center">8</td>
                    <td className="border border-gray-300 p-2">Next.js has built-in image optimization, resizing, and lazy loading. In React, you need third-party tools to handle image performance.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 text-center">9</td>
                    <td className="border border-gray-300 p-2">React provides one main way to fetch data (using hooks). Next.js offers multiple approaches like static generation, server-side rendering, and client-side fetching.</td>
                  </tr>
                  <tr className="bg-green-50 dark:bg-zinc-900">
                    <td className="border border-gray-300 p-2 text-center">10</td>
                    <td className="border border-gray-300 p-2">Next.js supports server components, where parts of the page are rendered on the server for better speed. React alone does not have this feature.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 text-center">11</td>
                    <td className="border border-gray-300 p-2">React gives you freedom to organize files however you want. Next.js enforces a structured folder layout to keep projects consistent.</td>
                  </tr>
                  <tr className="bg-green-50 dark:bg-zinc-900">
                    <td className="border border-gray-300 p-2 text-center">12</td>
                    <td className="border border-gray-300 p-2">React apps require manual deployment setup. Next.js integrates easily with Vercel, making deployment fast and simple.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 text-center">13</td>
                    <td className="border border-gray-300 p-2">React is simpler to learn and great for beginners. Next.js has more features, so it requires a deeper understanding of web development.</td>
                  </tr>
                  <tr className="bg-green-50 dark:bg-zinc-900">
                    <td className="border border-gray-300 p-2 text-center">14</td>
                    <td className="border border-gray-300 p-2">React is suitable for small projects like dashboards. Next.js is better for blogs, e-commerce, or any site that needs strong SEO and scalability.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 text-center">15</td>
                    <td className="border border-gray-300 p-2">React requires you to choose and configure bundling tools. Next.js comes with built-in bundling and optimization out of the box.</td>
                  </tr>
                  <tr className="bg-green-50 dark:bg-zinc-900">
                    <td className="border border-gray-300 p-2 text-center">16</td>
                    <td className="border border-gray-300 p-2">React supports TypeScript but needs manual setup. Next.js has TypeScript support pre-configured, making it easier to use.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 text-center">17</td>
                    <td className="border border-gray-300 p-2">Next.js includes middleware to run code before a page loads (like authentication checks). React does not have built-in middleware support.</td>
                  </tr>
                </tbody>
              </table>
            </div>
        </div>

      <div className="flex justify-center gap-8">
        {
        users.map((user)=>(
          <MyCard key={user.email} name={user.name} email={user.email} phone={user.phone} />
        ))
      }
      </div>
        

      </>
    )
}
