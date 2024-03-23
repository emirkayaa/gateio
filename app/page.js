"use client";
import Header from "@/app/components/header";
import Top from "@/app/components/top";
import Table from "@/app/components/table";
import Etkinlik from "@/app/components/etkinlik";
import Card from "@/app/components/card";
import Layout from "./components/layout";
import Yasam from "./components/yasam";
import Alim from "./components/alim";
import Basin from "./components/basin";
import Footer from "./components/footer";
export default function Home() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <div>
          <Top />
        </div>
        <div>
          <Table />
        </div>
        <div>
          <Etkinlik />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Layout />
        </div>
        <div>
          <Yasam/>
        </div>
        <div>
          <Alim/>
        </div>
        <div>
          <Basin/>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
