export default function FiltersRow({
    upcoming,
    setUpcoming,
    success,
    setSuccess,
  }: {
    upcoming: boolean | null;
    setUpcoming: (v: boolean | null) => void;
    success: boolean | null;
    setSuccess: (v: boolean | null) => void;
  }) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Mission State */}
        <div className="space-y-2">
          <p className="text-xs text-zinc-400">Mission state</p>
  
          <div className="flex rounded-lg overflow-hidden border border-zinc-800 w-fit">
            {[
              { label: "All", value: null },
              { label: "Upcoming", value: true },
              { label: "Past", value: false },
            ].map((opt) => (
              <button
                key={String(opt.label)}
                onClick={() => {
                  setUpcoming(opt.value);
                  if (opt.value === true) setSuccess(null);
                }}
                className={`px-3 py-1 text-sm transition ${
                  upcoming === opt.value
                    ? "bg-white text-black"
                    : "hover:bg-zinc-800"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
  
        {/* Outcome */}
        {upcoming !== true && (
          <div className="space-y-2">
            <p className="text-xs text-zinc-400">Outcome</p>
  
            <div className="flex rounded-lg overflow-hidden border border-zinc-800 w-fit">
              {[
                { label: "All", value: null },
                { label: "Success", value: true },
                { label: "Failed", value: false },
              ].map((opt) => (
                <button
                  key={String(opt.label)}
                  onClick={() => setSuccess(opt.value)}
                  className={`px-3 py-1 text-sm transition ${
                    success === opt.value
                      ? "bg-white text-black"
                      : "hover:bg-zinc-800"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }