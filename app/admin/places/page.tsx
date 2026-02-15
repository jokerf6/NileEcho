import Link from 'next/link';

const places = [
  { id: 'karnak', name: 'الكرنك', short: 'مجمع معابد ضخم في الأقصر' },
  { id: 'abu-simbel', name: 'أبو سمبل', short: 'معبد منحوت في الجبل' }
];

export default function PlacesAdminPage() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-8">
      <div className="mb-5 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Admin Lite — Places</h1>
        <Link className="btn-primary" href="/admin/places/new">
          Add Place
        </Link>
      </div>
      <div className="space-y-3">
        {places.map((place) => (
          <article className="nile-card flex items-center justify-between p-4" key={place.id}>
            <div>
              <h2 className="font-semibold">{place.name}</h2>
              <p className="text-sm text-white/70">{place.short}</p>
            </div>
            <Link className="btn-secondary" href={`/admin/places/${place.id}`}>
              Edit
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
