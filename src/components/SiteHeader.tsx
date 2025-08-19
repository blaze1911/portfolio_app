"use client";

import { useState } from "react";
import Link from "next/link";

export function SiteHeader() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-black/5 dark:border-white/10">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                <Link href="/" className="font-semibold tracking-tight">GIS/AI Portfolio</Link>

                <nav className="hidden md:flex items-center gap-5 text-sm">
                    <Link className="hover:opacity-80" href="/projects">Projects</Link>
                    <Link className="hover:opacity-80" href="/research">Research</Link>
                    <Link className="hover:opacity-80" href="/blog">Blog</Link>
                    <Link className="hover:opacity-80" href="/data-models">Data·Models</Link>
                    <Link className="hover:opacity-80" href="/demos">Demos</Link>
                    <Link className="hover:opacity-80" href="/about">About</Link>
                    <Link className="hover:opacity-80" href="/contact">Contact</Link>
                </nav>

                <button
                    type="button"
                    aria-label="메뉴 열기"
                    aria-controls="mobile-menu"
                    aria-expanded={open}
                    onClick={() => setOpen((v) => !v)}
                    className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-black/10 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/5"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        {open ? (
                            <path d="M18 6L6 18M6 6l12 12" />
                        ) : (
                            <path d="M3 6h18M3 12h18M3 18h18" />
                        )}
                    </svg>
                </button>
            </div>

            {open && (
                <div id="mobile-menu" className="md:hidden border-t border-black/5 dark:border-white/10">
                    <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-3 grid gap-2 text-sm">
                        <Link className="py-2 hover:opacity-80" href="/projects" onClick={() => setOpen(false)}>Projects</Link>
                        <Link className="py-2 hover:opacity-80" href="/research" onClick={() => setOpen(false)}>Research</Link>
                        <Link className="py-2 hover:opacity-80" href="/blog" onClick={() => setOpen(false)}>Blog</Link>
                        <Link className="py-2 hover:opacity-80" href="/data-models" onClick={() => setOpen(false)}>Data·Models</Link>
                        <Link className="py-2 hover:opacity-80" href="/demos" onClick={() => setOpen(false)}>Demos</Link>
                        <Link className="py-2 hover:opacity-80" href="/about" onClick={() => setOpen(false)}>About</Link>
                        <Link className="py-2 hover:opacity-80" href="/contact" onClick={() => setOpen(false)}>Contact</Link>
                    </nav>
                </div>
            )}
        </header>
    );
}


