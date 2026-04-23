import FavoriteButton from "@/components/FavoriteButton";
import RocketDescription from "@/components/RocketDescription";
import {
  fetchLaunchById,
  fetchRocket,
  fetchLaunchpad,
} from "@/lib/api";

export default async function LaunchDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const launch = await fetchLaunchById(id);

  const [rocket, launchpad] = await Promise.all([
    fetchRocket(launch.rocket),
    fetchLaunchpad(launch.launchpad),
  ]);

  const status =
    launch.success === true
      ? "Success"
      : launch.success === false
      ? "Failed"
      : "Upcoming";

  const statusColor =
    launch.success === true
      ? "text-green-400 bg-green-500/10"
      : launch.success === false
      ? "text-red-400 bg-red-500/10"
      : "text-yellow-400 bg-yellow-500/10";

  const images: string[] = launch.links?.flickr?.original || [];

  return (
    <div className="min-h-screen bg-background px-6 py-10 text-foreground">
      <div className="max-w-5xl mx-auto space-y-10">

        {/* HEADER */}
        <div className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tight">
            {launch.name}
          </h1>
          <FavoriteButton id={id} />

          <div className="ui-muted flex items-center gap-4 text-sm">
            <span>
              {new Date(launch.date_utc).toLocaleString()}
            </span>

            <span className={`px-3 py-1 rounded-full text-xs ${statusColor}`}>
              {status}
            </span>
          </div>
        </div>

        {/* DETAILS */}
        <div className="ui-card p-6">
          <h2 className="text-lg font-semibold mb-2">Mission Details</h2>
          <p className="leading-relaxed">
            {launch.details || "No mission details available."}
          </p>
        </div>

        {/* LINKS */}
        <div className="flex flex-wrap gap-3">
          {launch.links.webcast && (
            <a
              href={launch.links.webcast}
              target="_blank"
              className="ui-primary-btn rounded-xl px-4 py-2 transition"
            >
              Watch Webcast
            </a>
          )}

          {launch.links.article && (
            <a
              href={launch.links.article}
              target="_blank"
              className="ui-secondary-btn rounded-xl px-4 py-2 transition"
            >
              Read Article
            </a>
          )}
        </div>

        {images.length > 0 && (
          <div className="space-y-3">
            <h2 className="text-lg font-semibold">Gallery</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {images.map((img, idx) => (
                <div
                  key={idx}
                  className="relative aspect-square overflow-hidden rounded-xl border"
                  style={{ borderColor: "var(--border)" }}
                >
                  <img
                    src={img}
                    alt={`launch image ${idx}`}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-4">

          <div className="ui-card p-6">
            <h3 className="ui-muted mb-1 text-sm">Rocket</h3>
            <h2 className="text-xl font-semibold">{rocket.name}</h2>
            <RocketDescription description={rocket.description} />
          </div>

          <div className="ui-card p-6">
            <h3 className="ui-muted mb-1 text-sm">Launchpad</h3>
            <h2 className="text-xl font-semibold">{launchpad.name}</h2>
            <p className="ui-muted mt-2 text-sm">
              {launchpad.locality}, {launchpad.region}
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}