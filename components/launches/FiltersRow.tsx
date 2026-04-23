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
          <p className="ui-muted text-xs">Mission state</p>
  
          <div className="flex w-fit overflow-hidden rounded-lg border" style={{ borderColor: "var(--border)" }}>
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
                    ? "ui-primary-btn"
                    : "bg-transparent text-foreground hover:bg-[var(--surface-hover)]"
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
            <p className="ui-muted text-xs">Outcome</p>
  
            <div className="flex w-fit overflow-hidden rounded-lg border" style={{ borderColor: "var(--border)" }}>
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
                      ? "ui-primary-btn"
                      : "bg-transparent text-foreground hover:bg-[var(--surface-hover)]"
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