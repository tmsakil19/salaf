import Link from "next/link";

export default function CatchAllPage() {
    return (
        <div className="flex min-h-[80vh] flex-col items-center justify-center px-4 text-center">
            <div className="relative mb-8">
                <h1 className="select-none text-[150px] font-bold leading-none text-sb-border md:text-[200px]">
                    404
                </h1>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-sb-active-bg">
                        <svg
                            className="h-12 w-12 text-sb-active"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1.5}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                            />
                        </svg>
                    </div>
                </div>
            </div>

            <h2 className="mb-3 text-2xl font-semibold tracking-[-0.5px] text-sb-text-strong md:text-3xl">
                Page Not Found
            </h2>
            <p className="mb-8 max-w-md text-sm leading-6 text-sb-text-sub md:text-base">
                The page you are looking for might have been removed, had its name
                changed, or is temporarily unavailable.
            </p>

            <Link
                href="/clients/CLT-001"
                className="inline-flex items-center gap-2 rounded-lg bg-sb-active px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-sb-active/90"
            >
                <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                </svg>
                Back to Dashboard
            </Link>
        </div>
    );
}
