'use client'
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinars() {

    const featuredWebinars = [
        {
            title: 'Understanding Music Theory',
            description:
                'Dive deep into the fundamentals of music theory and enhance your musical skills.',
            slug: 'understanding-music-theory',
            isFeatured: true,
        },
        {
            title: 'The Art of Songwriting',
            description:
                'Learn the craft of songwriting from experienced musicians and songwriters.',
            slug: 'the-art-of-songwriting',
            isFeatured: true,
        },
        {
            title: 'Mastering Your Instrument',
            description:
                'Advanced techniques to master your musical instrument of choice.',
            slug: 'mastering-your-instrument',
            isFeatured: true,
        },
        {
            title: 'Music Production Essentials',
            description:
                'Get started with music production with this comprehensive overview.',
            slug: 'music-production-essentials',
            isFeatured: true,
        },
        {
            title: 'Live Performance Techniques',
            description:
                'Enhance your live performance skills with expert tips and strategies.',
            slug: 'live-performance-techniques',
            isFeatured: true,
        },
        {
            title: 'Digital Music Marketing',
            description:
                'Learn how to promote your music effectively in the digital age.',
            slug: 'digital-music-marketing',
            isFeatured: true,
        },
    ];

    return (
        <div className="p-12 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center">
                    <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Musical Journey</p>
                </div>

                <div className="mt-10">
                    <HoverEffect
                        items={featuredWebinars.map(webinar => (
                            {
                                title: webinar.title,
                                description: webinar.description,
                                link: `/webinars/${webinar.slug}`
                            }
                        ))}
                    />
                </div>

                <div className="mt-10 text-center">
                    <Link href={"/courses"} className="bg-zinc-950 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full px-3 py-2 text-xs font-semibold leading-6  text-white inline-block">
                        <span className="absolute inset-0 overflow-hidden rounded-full">
                            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                        </span>
                        <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4  ring-white/10 ">
                            <span>
                                View all Webinars
                            </span>
                            <svg
                                fill="none"
                                height="16"
                                viewBox="0 0 24 24"
                                width="16"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.75 8.75L14.25 12L10.75 15.25"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                />
                            </svg>
                        </div>
                        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default UpcomingWebinars