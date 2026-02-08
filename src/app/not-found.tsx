import Link from "next/link";

export default function NotFoundPage() {
  return (
    <section className="not-found reveal">
      <p className="eyebrow">404</p>
      <h1>Pagina niet gevonden</h1>
      <p>De pagina die je zoekt bestaat niet of werd verplaatst.</p>
      <Link href="/" className="button button--primary">
        Ga naar home
      </Link>
    </section>
  );
}
