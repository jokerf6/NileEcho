export function PlaceForm({ title }: { title: string }) {
  const fields = [
    { label: 'الاسم (عربي)', name: 'name_ar' },
    { label: 'Name (English)', name: 'name_en' },
    { label: 'وصف قصير', name: 'short_description' },
    { label: 'Before Image URL', name: 'before_image' },
    { label: 'After Image URL', name: 'after_image' }
  ];

  return (
    <main className="mx-auto max-w-3xl px-5 py-8">
      <h1 className="mb-5 text-2xl font-bold">{title}</h1>
      <form className="nile-card space-y-4 p-5">
        {fields.map((field) => (
          <label className="block text-sm" key={field.name}>
            <span className="mb-2 block text-white/80">{field.label}</span>
            <input className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2" name={field.name} />
          </label>
        ))}
        <label className="block text-sm">
          <span className="mb-2 block text-white/80">Context Prompt</span>
          <textarea className="min-h-28 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2" name="context_prompt" />
        </label>
        <button className="btn-primary" type="submit">
          Save
        </button>
      </form>
    </main>
  );
}
