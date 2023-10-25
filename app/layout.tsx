import Header from "../components/Header";
import Footer from "../components/Footer";

// CSS Styles
import "@/styles/clear.css";
import "@/styles/comman.css";
import "@/styles/sm-clean.css";
import "@/styles/globals.css";
import "@/styles/our-styles.css";

// Types
import type { Metadata } from "next";

/*
  about
  blog (the quote is broken
  gallery
  contact 
*/

// --------------

// Metadata of the website (used to inprove SEO of the website)
export const metadata: Metadata = {
  title: "산돌 웹폰트 적용 테스트",
  description: "디자인베이스",
  keywords: ["산돌 웹폰트"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      <script type="module" src="https://8fl3k30sy0.execute-api.ap-northeast-2.amazonaws.com/v1/api/fontstream/djs/?sid=gAAAAABlN93IUG-0jXV7GLbV_8E5Epo5yMyP-mCbxET23naK_0lIQSZDWLOX6ShDIC8NnGmdKCoR8IoGpdFgkzkolweUuPrM15jBnIJioPqnSKvWqxae71JVGohFyYO8b_8aJSEM1F1b8fTLh2rMl62T0SZUGQUtbAe13qFyE8DtNdDuM9HgH8O0_ENHGlBqKDQdAg-hF6AjY3qodq-hVcAKE_WHqt4cge1I0i5-d0cLE_blzuclh5EsWVXe6aVfQSb9AVt5jR24" charset="utf-8"></script>
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
