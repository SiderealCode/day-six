interface PokemonCardProps {
  name: string;
}

// <PokemonCard name="pikachu" />

export function PokemonCard({ name }: PokemonCardProps) {
  return (
    <a
      href={name}
      className="py-4 px-5 mx-1 my-1 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      key={name + "Card"}
    >
      <h2 className={`text-2xl font-semibold`}>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </h2>
    </a>
  );
}
