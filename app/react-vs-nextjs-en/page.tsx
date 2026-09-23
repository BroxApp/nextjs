import Link from "next/link";
import MyCard from "@/components/MyCard";

export default function ractNextTableEn() {
  return (
    <>
    <div className="flex flex-col flex-1 items-center justify-center bg-blue-100 font-sans dark:bg-black">
      <h2>React Va Nextjs (English)</h2>
      <Link href="/react-vs-nextjs-en/react-vs-nextjs-di-en">Go to definition</Link>
      <div className="overflow-x-auto w-full max-w-4xl">
        <table className="w-full border-collapse border border-gray-300 text-sm">
          <thead>
            <tr className="bg-blue-200">
              <th className="border border-gray-300 p-2 w-10">#</th>
              <th className="border border-gray-300 p-2">Feature</th>
              <th className="border border-gray-300 p-2">React</th>
              <th className="border border-gray-300 p-2">Next.js</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2 text-center">1</td>
              <td className="border border-gray-300 p-2">Type</td>
              <td className="border border-gray-300 p-2">A library for building UI</td>
              <td className="border border-gray-300 p-2">A full framework built on top of React</td>
            </tr>
            <tr className="bg-blue-50 dark:bg-zinc-900">
              <td className="border border-gray-300 p-2 text-center">2</td>
              <td className="border border-gray-300 p-2">Rendering</td>
              <td className="border border-gray-300 p-2">Client-Side Rendering (CSR) by default only</td>
              <td className="border border-gray-300 p-2">Supports CSR, SSR, SSG, and ISR</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-center">3</td>
              <td className="border border-gray-300 p-2">Routing</td>
              <td className="border border-gray-300 p-2">Needs a separate library like React Router</td>
              <td className="border border-gray-300 p-2">Built-in file-based routing</td>
            </tr>
            <tr className="bg-blue-50 dark:bg-zinc-900">
              <td className="border border-gray-300 p-2 text-center">4</td>
              <td className="border border-gray-300 p-2">Project Setup</td>
              <td className="border border-gray-300 p-2">Requires manual Webpack/Vite and build tool configuration</td>
              <td className="border border-gray-300 p-2">Pre-configured and optimized build setup</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-center">5</td>
              <td className="border border-gray-300 p-2">SEO</td>
              <td className="border border-gray-300 p-2">Weaker (content is rendered on the client)</td>
              <td className="border border-gray-300 p-2">Stronger (thanks to SSR/SSG, search engines see content easily)</td>
            </tr>
            <tr className="bg-blue-50 dark:bg-zinc-900">
              <td className="border border-gray-300 p-2 text-center">6</td>
              <td className="border border-gray-300 p-2">API Routes</td>
              <td className="border border-gray-300 p-2">None, needs a separate backend</td>
              <td className="border border-gray-300 p-2">Can write API routes directly inside the project</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-center">7</td>
              <td className="border border-gray-300 p-2">Code Splitting</td>
              <td className="border border-gray-300 p-2">Must be done manually with React.lazy</td>
              <td className="border border-gray-300 p-2">Automatic, based on pages and components</td>
            </tr>
            <tr className="bg-blue-50 dark:bg-zinc-900">
              <td className="border border-gray-300 p-2 text-center">8</td>
              <td className="border border-gray-300 p-2">Image Optimization</td>
              <td className="border border-gray-300 p-2">None, needs a third-party tool</td>
              <td className="border border-gray-300 p-2">Built-in next/image component with automatic optimization</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-center">9</td>
              <td className="border border-gray-300 p-2">Data Fetching</td>
              <td className="border border-gray-300 p-2">With useEffect, fetch, or libraries like React Query</td>
              <td className="border border-gray-300 p-2">Dedicated methods like getServerSideProps, getStaticProps, or fetch with smart caching in Server Components</td>
            </tr>
            <tr className="bg-blue-50 dark:bg-zinc-900">
              <td className="border border-gray-300 p-2 text-center">10</td>
              <td className="border border-gray-300 p-2">Server Components</td>
              <td className="border border-gray-300 p-2">Not available (Client Components only)</td>
              <td className="border border-gray-300 p-2">Full support for React Server Components in App Router</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-center">11</td>
              <td className="border border-gray-300 p-2">Project Structure</td>
              <td className="border border-gray-300 p-2">Free, you decide</td>
              <td className="border border-gray-300 p-2">Suggested and semi-mandatory structure (app or pages folder)</td>
            </tr>
            <tr className="bg-blue-50 dark:bg-zinc-900">
              <td className="border border-gray-300 p-2 text-center">12</td>
              <td className="border border-gray-300 p-2">Deployment</td>
              <td className="border border-gray-300 p-2">Requires setting up a server or static host</td>
              <td className="border border-gray-300 p-2">Optimized for Vercel, but deployable on any server</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-center">13</td>
              <td className="border border-gray-300 p-2">Learning Curve</td>
              <td className="border border-gray-300 p-2">Easier to get started</td>
              <td className="border border-gray-300 p-2">Steeper (especially App Router and Server Components)</td>
            </tr>
            <tr className="bg-blue-50 dark:bg-zinc-900">
              <td className="border border-gray-300 p-2 text-center">14</td>
              <td className="border border-gray-300 p-2">Best Use Case</td>
              <td className="border border-gray-300 p-2">SPAs, dashboards, internal tools</td>
              <td className="border border-gray-300 p-2">SEO-critical sites, stores, blogs, landing pages, full-stack projects</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-center">15</td>
              <td className="border border-gray-300 p-2">Bundling</td>
              <td className="border border-gray-300 p-2">You choose (Vite, Webpack, etc.)</td>
              <td className="border border-gray-300 p-2">Built-in and pre-configured (based on Webpack/Turbopack)</td>
            </tr>
            <tr className="bg-blue-50 dark:bg-zinc-900">
              <td className="border border-gray-300 p-2 text-center">16</td>
              <td className="border border-gray-300 p-2">TypeScript</td>
              <td className="border border-gray-300 p-2">Requires manual setup</td>
              <td className="border border-gray-300 p-2">Built-in support with automatic configuration</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-center">17</td>
              <td className="border border-gray-300 p-2">Middleware</td>
              <td className="border border-gray-300 p-2">None</td>
              <td className="border border-gray-300 p-2">Available (for auth, redirects, etc. before reaching the page)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <MyCard name="Ali" email="examlple@gmail.com" phone={123456789}/>
    </>
  );
}