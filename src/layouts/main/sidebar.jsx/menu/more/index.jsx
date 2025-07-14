import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';

export default function More() {
  return (
    <Popover className="relative">
      <PopoverButton className="py-[3px] block group outline-none">
        <div className="p-3 rounded-full transition-color inline-flex items-center gap-5 group-hover:bg-[#effef41a]">
          <div className="w-[26.25px] h-[26.25px] relative">
            <svg viewBox="0 0 24 24" fill="#e7e9ea">
              <path d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z" />
            </svg>
          </div>
          <div className="pr-4 text-xl">Daha Fazla</div>
        </div>
      </PopoverButton>
      <PopoverPanel className="w-[320px] absolute bottom-0 left-0 rounded-sm bg-black shadow-[0_0_10px_2px_rgba(156,163,175,0.6)] overflow-hidden">
        <button className="px-4 h-14  w-full transition-color inline-flex items-center gap-5 hover:bg-[#effef41a]">
          <div className="w-[26.25px] h-[26.25px] relative">
            <svg viewBox="0 0 24 24" fill="#e7e9ea">
              <path d="M3 4.5C3 3.12 4.12 2 5.5 2h13C19.88 2 21 3.12 21 4.5v15c0 1.38-1.12 2.5-2.5 2.5h-13C4.12 22 3 20.88 3 19.5v-15zM5.5 4c-.28 0-.5.22-.5.5v15c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5v-15c0-.28-.22-.5-.5-.5h-13zM16 10H8V8h8v2zm-8 2h8v2H8v-2z" />
            </svg>
          </div>
          <div className="pr-4 text-xl">Listeler</div>
        </button>
        <button className="px-4 h-14  w-full transition-color inline-flex items-center gap-5 hover:bg-[#effef41a]">
          <div className="w-[26.25px] h-[26.25px] relative">
            <svg viewBox="0 0 24 24" fill="#e7e9ea">
              <path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z" />
            </svg>
          </div>
          <div className="pr-4 text-xl">Yer İşaretleri</div>
        </button>
        <button className="px-4 h-14  w-full transition-color inline-flex items-center gap-5 hover:bg-[#effef41a]">
          <div className="w-[26.25px] h-[26.25px] relative">
            <svg viewBox="0 0 24 24" fill="#e7e9ea">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </div>
          <div className="pr-4 text-xl">Premium</div>
        </button>
      </PopoverPanel>
    </Popover>
  );
}
