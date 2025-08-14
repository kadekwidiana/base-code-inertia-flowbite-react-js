import React from "react";
import { Link } from "@inertiajs/react";

export default function ListDataPagination({ data, params = {} }) {
    if (!data || !data.links) return null;

    return (
        <div className="m-2 flex flex-col items-center justify-between gap-4 md:flex-row md:gap-2">
            <div className="text-sm text-gray-700">
                Showing {data.from} to {data.to} of {data.total} entries
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2">
                {data.links.map((link, index) => (
                    <Link
                        key={index}
                        href={link.url || "#"}
                        className={`rounded p-2 text-sm ${
                            link.active
                                ? "bg-primary text-white"
                                : "bg-gray-200 text-primary hover:bg-primary/20"
                        }`}
                        preserveScroll
                        preserveState
                        data={params}
                    >
                        <div
                            dangerouslySetInnerHTML={{
                                __html: link.label,
                            }}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
}
