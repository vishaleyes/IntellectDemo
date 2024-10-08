import AppCarousle from "@/components/AppCaraousle";
import Banner from "@/components/Banner";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Industries from "@/components/Industries";
import LogoCarousle from "@/components/LogoCaraousle";
import Propositions from "@/components/Propositions";
import Resources from "@/components/Resources";
import Tools from "@/components/Tools";

const fetchPageContent = async () => {
  const response = await fetch('https://apistaging.intellect.com/wp-json/wp/v2/pages?slug=main')
  const data = await response.json()
  return data[0];
}

export default async function Home() {
  const response = await fetchPageContent()

  return (
    <div className="">
      <Header />
      <Hero data={response}/>
      <Features data={response}/>
      <LogoCarousle data={response}/>
      <Tools data={response}/>
      <Banner data={response}/>
      <Propositions data={response}/>
      <Industries data={response}/>
      <AppCarousle data={response}/>
      <Resources data={response}/>
      <Footer />
    </div>
  );
}
