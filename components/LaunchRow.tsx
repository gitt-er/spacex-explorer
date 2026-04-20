import { memo } from "react";
import Link from "next/link";
import FavoriteButton from "@/components/FavoriteButton";
import { Launch } from "@/lib/types";

type Props = {
  index: number;
  style: React.CSSProperties;
  data: Launch[];
};

function LaunchRow({ index, style, data }: Props) {
  const doc = data[index];
  if (!doc) return null;

  const date = new Date(doc.date_utc).toLocaleDateString();

  const status =
    doc.success === true
      ? { text: "Success", className: "bg-green-500/20 text-green-400" }
      : doc.success === false
      ? { text: "Failed", className: "bg-red-500/20 text-red-400" }
      : { text: "Upcoming", className: "bg-yellow-500/20 text-yellow-400" };

  return (
    <div style={style} className="px-2">
      <Link href={`/launches/${doc.id}`}>
        <div className="block p-5 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition">
          
          <div className="flex justify-between items-start gap-4">
            
            <div>
              <h2 className="text-lg font-semibold">{doc.name}</h2>
              <p className="text-sm text-gray-400">{date}</p>
            </div>

            <div className="flex flex-col items-end gap-2">
              <span className={`text-xs px-3 py-1 rounded-full ${status.className}`}>
                {status.text}
              </span>

              <FavoriteButton id={doc.id} />
            </div>

          </div>

        </div>
      </Link>
    </div>
  );
}

export default memo(LaunchRow);