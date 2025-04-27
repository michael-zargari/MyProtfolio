import Link from 'next/link'
import NavBar from "./components/NavBar";
 
export default function Home() {
  return (      
      <main >
        <NavBar/>
        <Link href='/projects'>go to projects page</Link>
      </main>
  );
}
