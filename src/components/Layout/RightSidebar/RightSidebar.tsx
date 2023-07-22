import Link from 'next/link'
import { BiDotsHorizontal } from 'react-icons/bi'
import { PiMagnifyingGlass } from 'react-icons/pi'
import FollowLink from './FollowLink'

function ContentContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col rounded-xl bg-neutral-900">
            {children}
        </div>
    )
}

function ContentContainerHeader({ children }: { children: React.ReactNode }) {
    return (
        <h3 className="px-4 pt-2 pb-4 text-xl font-bold text-neutral-100">
            {children}
        </h3>
    )
}

function TopicLink({ name }: { name: string }) {
    return (
        <Link
            prefetch={false}
            href="/"
            className="relative w-full px-4 py-4 transition-colors duration-75 hover:bg-neutral-800"
        >
            <div className="flex flex-col w-full">
                <p className="text-[0.8rem] leading-3 text-neutral-500">
                    {' '}
                    Trending in United States
                </p>
                <h4 className="py-1 font-semibold">{name}</h4>
                <p className="text-[0.8rem] leading-3 text-neutral-500">
                    1.2K Tweets
                </p>
                <button
                    type="button"
                    title="More"
                    className="absolute p-[0.1rem] transition-colors duration-75 group rounded-full top-2 right-2 hover:bg-primary/20"
                >
                    <BiDotsHorizontal
                        size={24}
                        className="transition-colors duration-75 text-neutral-500 group-hover:text-primary"
                    />
                </button>
            </div>
        </Link>
    )
}

function ShowMoreButton() {
    return (
        <button
            type="button"
            className="flex items-center w-full p-4 text-sm text-primary hover:bg-primary/10"
        >
            Show more
        </button>
    )
}

function FooterLink({ children }: { children: React.ReactNode }) {
    return (
        <Link href="/" prefetch={false} className="flex">
            <span className="text-xs text-neutral-500 hover:underline">
                {children}
            </span>
        </Link>
    )
}

export default function RightSidebar() {
    return (
        <aside className="h-screen ">
            <div className="sticky top-0 z-10 pt-2 pb-1 bg-black">
                <div className="relative">
                    <label
                        className="absolute
                        top-1/2
                        left-4
                        transform
                        -translate-y-1/2
                        text-neutral-500
                        cursor-pointer
                        z-[1]
                        
                        "
                        htmlFor="search_chirp"
                    >
                        <PiMagnifyingGlass size={20} />
                    </label>
                    <input
                        id="search_chirp"
                        type="text"
                        placeholder="Search Chirp"
                        className="w-full px-12 py-2 text-base transition-colors duration-75 border rounded-full peer hover:bg-neutral-900 active:bg-neutral-950 focus:bg-neutral-950 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-primary bg-neutral-800 border-dimmed-color"
                    />
                    <div className="absolute left-0 hidden w-full p-2 border rounded-md top-[108%] peer-focus:block peer-active:block bg-neutral-950 border-dimmed-color drop-shadow-lg shadow-neutral-200 text-neutral-500 ">
                        <p>
                            Search for people, topics and activities on Chirp.
                        </p>
                    </div>
                </div>
            </div>
            {/* <div className="flex flex-col gap-4 pt-4"> */}

            {/* FIXME: fix the scroll behaviour */}
            <div className="sticky mt-4 space-y-4 top-16">
                <ContentContainer>
                    <ContentContainerHeader>
                        Trends for you
                    </ContentContainerHeader>
                    <TopicLink name="Trending Topic" />
                    <TopicLink name="Trending Topic" />
                    <TopicLink name="Trending Topic" />
                    <TopicLink name="Trending Topic" />
                    <ShowMoreButton />
                </ContentContainer>
                <ContentContainer>
                    <ContentContainerHeader>
                        Who to follow
                    </ContentContainerHeader>
                    <FollowLink name="Chiwi Team" />
                    <FollowLink name="Chiwi Team" />
                    <FollowLink name="Chiwi Team" />
                    <ShowMoreButton />
                </ContentContainer>
                <footer className="flex flex-wrap items-center px-4 gap-y-1 gap-x-4">
                    <FooterLink>Terms of Service</FooterLink>
                    <FooterLink>Privacy Policy</FooterLink>
                    <FooterLink>Cookie Policy</FooterLink>
                    <FooterLink>Ads info</FooterLink>
                    <FooterLink>Accessibility</FooterLink>
                    <FooterLink>
                        More
                        <BiDotsHorizontal size={16} className="inline-block " />
                    </FooterLink>
                    <FooterLink>© 2021 Chirp, Inc.</FooterLink>
                </footer>
            </div>
        </aside>
    )
}
