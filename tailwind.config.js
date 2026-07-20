/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Next.js App Router를 사용하신다면 아래 경로가 반드시 있어야 합니다.
    "./app/**/*.{js,ts,jsx,tsx,mdx}", 
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // 만약 src 폴더 기반 구조라면 아래 경로도 확인해 보세요.
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}