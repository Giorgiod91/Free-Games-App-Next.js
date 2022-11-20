import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";
import New from "../components/New";
import Results from "../components/Results";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Header />
      <Nav />
      <New />
      <Footer />
    </div>
  );
}
