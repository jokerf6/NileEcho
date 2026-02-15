import Link from 'next/link';

const places = ['Karnak', 'Abu Simbel', 'Giza'];

export default function PlacesPage() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-10">
      <h1 className="mb-6 text-3xl font-bold">Places</h1>
      <div className="grid gap-4 md:grid-cols-3">
        {places.map((place) => (
          <article className="nile-card p-5" key={place}>
            <h2 className="mb-4 text-xl font-semibold">{place}</h2>
            <Link className="btn-secondary inline-block" href="/demo">
              Explore in Demo
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
