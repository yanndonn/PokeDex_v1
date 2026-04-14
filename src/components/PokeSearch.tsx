import { buildSearchEngine } from '@coveo/headless';
import {
  AtomicSearchInterface,
  AtomicSearchBox,
  AtomicResultList,
  AtomicResultLink,
  AtomicResultText,
  AtomicQuerySummary,
  AtomicPager,
} from '@coveo/atomic-react';

const engine = buildSearchEngine({
  configuration: {
    organizationId: import.meta.env.VITE_COVEO_ORG_ID,
    accessToken: import.meta.env.VITE_COVEO_ACCESS_TOKEN,
    search: {
      searchHub: 'default',
    },
  },
});

function resultTemplate() {
  return (
    <div className="group relative bg-pokePanel border border-pokeBorder rounded-xl p-4 hover:border-pokeYellow transition-all duration-200 hover:shadow-glow">
      {/* Type badge strip */}
      <div className="absolute top-0 left-0 w-1 h-full bg-pokeRed rounded-l-xl" />

      <div className="pl-3">
        <AtomicResultLink className="text-pokeYellow font-body font-bold text-base hover:text-pokeYellow-dark transition-colors" />
        <AtomicResultText
          field="excerpt"
          className="mt-1 text-sm text-gray-400 font-body leading-relaxed"
        />
      </div>

      {/* Corner pokéball icon */}
      <div className="absolute top-3 right-3 opacity-10 group-hover:opacity-30 transition-opacity">
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
          <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm0 2a8 8 0 0 1 7.74 6H14a2 2 0 0 0-4 0H4.26A8 8 0 0 1 12 4zm0 16a8 8 0 0 1-7.74-6H10a2 2 0 0 0 4 0h7.74A8 8 0 0 1 12 20zm0-8a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
      </div>
    </div>
  );
}

export default function PokeSearch() {
  return (
    <AtomicSearchInterface engine={engine}>
      <div className="min-h-screen bg-pokeDark">

        {/* ── Top bar (Pokédex body) ── */}
        <header className="bg-pokeRed shadow-lg">
          <div className="max-w-4xl mx-auto px-6 py-4 flex items-center gap-4">
            {/* LED indicators */}
            <div className="flex items-center gap-2">
              <span className="led led-red" />
              <span className="led led-yellow" />
              <span className="led led-green" />
            </div>

            {/* Title */}
            <div className="flex-1 text-center">
              <h1
                className="text-pokeYellow text-lg tracking-widest drop-shadow-lg"
                style={{ fontFamily: '"Press Start 2P", cursive', fontSize: '1rem' }}
              >
                POKÉDEX
              </h1>
            </div>

            {/* Spinning pokéball */}
            <div className="pokeball shrink-0" />
          </div>

          {/* Red/white divider stripe */}
          <div className="h-2 bg-white" />
          <div className="h-1 bg-gray-300" />
        </header>

        {/* ── Main screen panel ── */}
        <main className="max-w-4xl mx-auto px-6 py-8 space-y-6">

          {/* Screen bezel */}
          <div className="relative bg-pokePanel rounded-2xl border-4 border-pokeBorder p-6 scanlines shadow-poke">
            {/* Screen corner screws */}
            {['top-2 left-2', 'top-2 right-2', 'bottom-2 left-2', 'bottom-2 right-2'].map((pos) => (
              <div key={pos} className={`absolute ${pos} w-3 h-3 rounded-full bg-pokeBorder border border-gray-600`} />
            ))}

            <p
              className="text-pokeYellow text-xs mb-4 tracking-widest"
              style={{ fontFamily: '"Press Start 2P", cursive', fontSize: '0.55rem' }}
            >
              ► SEARCH DATABASE
            </p>

            <AtomicSearchBox />
          </div>

          {/* Summary */}
          <div className="px-1">
            <AtomicQuerySummary />
          </div>

          {/* Results */}
          <AtomicResultList display="list" imageSize="none" template={resultTemplate} />

          {/* Pager */}
          <div className="flex justify-center pt-2 pb-8">
            <AtomicPager />
          </div>
        </main>

        {/* ── Footer ── */}
        <footer className="text-center py-4 text-gray-600 text-xs font-body">
          Powered by Coveo · PokéDex v1
        </footer>
      </div>
    </AtomicSearchInterface>
  );
}
