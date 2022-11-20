import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HorrorResults from "../components/HorrorResults";
import Nav from "../components/Nav";
import Results from "../components/Results";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Header />
      <Nav />
      <HorrorResults />
      <Footer />
    </div>
  );
}
