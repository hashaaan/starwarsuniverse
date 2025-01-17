import { Button } from "@/components/ui/button";
import { Envelop } from "./assets/icons/envelop";
import { Facebook } from "./assets/icons/facebook";
import { Instagram } from "./assets/icons/instagram";
import { Magnify } from "./assets/icons/magnify";
import { Phone } from "./assets/icons/phone";
import { Twitter } from "./assets/icons/twitter";
import { User } from "./assets/icons/user";
import { Youtube } from "./assets/icons/youtube";
import { Calendar } from "./assets/icons/calendar";
import Image from "next/image";
import { Telegram } from "./assets/logos/telegram";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "./assets/icons/arrow-right";
import { MapPinIcon } from "lucide-react";
import { Send } from "./assets/icons/send";
import Link from "next/link";
import { AirPlane } from "./assets/svg/airplane";

const TestTwo = () => {
  return (
    <>
      <header className="flex flex-col">
        <div className="flex flex-row items-center">
          <div className="pl-[10rem] h-[48px] flex-1 flex flex-row bg-primary gap-4">
            <div className="flex flex-row items-center gap-2">
              <Phone className="h-5 w-5" />
              <span className="text-sm">+1 1234567890</span>
            </div>

            <div className="flex flex-row items-center gap-2">
              <Envelop className="h-5 w-5" />
              <span className="text-sm">example@gmail.com</span>
            </div>
          </div>

          <div className="flex-1 flex flex-row items-center justify-end pr-[10rem] h-[48px] bg-black relative">
            <div className="flex flex-row items-center gap-2 border-r pr-2.5 cursor-pointer">
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-white p-2">
                <User className="h-full w-full" />
              </div>
              <span className="text-base font-light">Login / Register</span>
            </div>
            <div className="pl-2 flex flex-row gap-3 items-center">
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-white p-1 cursor-pointer">
                <Facebook className="h-full w-full" />
              </div>
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-white p-1 cursor-pointer">
                <Twitter className="h-full w-full" />
              </div>
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-white p-1 cursor-pointer">
                <Youtube className="h-full w-full" />
              </div>
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-white p-1.5 cursor-pointer">
                <Instagram className="h-full w-full translate-x-[1px]" />
              </div>
            </div>

            <div className="absolute bottom-0 -left-14 h-full w-32 z-20 overflow-hidden">
              <div className="bg-black h-full w-32 z-20 -rotate-45"></div>
            </div>
          </div>
        </div>

        <div className="px-[10rem] py-6 flex flex-row justify-between">
          <Link
            href="#"
            className="text-primary font-space font-medium text-4xl"
          >
            Travel<span className="text-black">sy</span>
          </Link>

          <div className="flex flex-row items-center gap-4">
            <ul className="flex flex-row gap-8 text-lg text-gray-3 font-semibold">
              <li className="text-primary flex flex-col items-center relative">
                <span>Home</span>
                <span className="absolute -bottom-2 bg-primary h-2.5 w-2.5 rounded-full"></span>
              </li>
              <li className="flex flex-col items-center relative hover:text-primary cursor-pointer">
                <span>About Us</span>
                <span className="hidden absolute -bottom-2 bg-primary h-2.5 w-2.5 rounded-full"></span>
              </li>
              <li className="flex flex-col items-center relative hover:text-primary cursor-pointer">
                <span>Host A Venue</span>
                <span className="hidden absolute -bottom-2 bg-primary h-2.5 w-2.5 rounded-full"></span>
              </li>
              <li className="flex flex-col items-center relative hover:text-primary cursor-pointer">
                <span>Hotels</span>
                <span className="hidden absolute -bottom-2 bg-primary h-2.5 w-2.5 rounded-full"></span>
              </li>
              <li className="flex flex-col items-center relative hover:text-primary cursor-pointer">
                <span>Blog</span>
                <span className="hidden absolute -bottom-2 bg-primary h-2.5 w-2.5 rounded-full"></span>
              </li>
            </ul>

            <div className="flex items-center justify-center h-12 w-12 p-2 border-[1.5px] border-primary rounded-full hover:border-secondary cursor-pointer">
              <Magnify className="h-full w-full" />
            </div>

            <Button className="bg-primary rounded-full h-12 px-8 gap-2 hover:bg-secondary hover:text-white font-bold">
              Contact Us
              <Phone className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <section
        className="bg-white bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: "url('./assets/image/hero-bg-1.png')" }}
        id="reservation"
      >
        <div className="flex flex-row items-center px-[10rem] gap-6 min-h-[620px]">
          <div className="flex-1">
            <h5 className="text-h5 font-sofia text-secondary">
              Relax & Enjoy the Vacation
            </h5>

            <h1 className="text-h1 font-space text-secondary font-semibold leading-tight tracking-tighter text-wrap">
              Choose <span className="text-primary">Travelsy</span> To Book Your
              Hotel
            </h1>

            <p className="text-gray-3 text-wrap text-base mb-8">
              Lorem ipsum dolor sit amet consectetur. Hac consequat hac arcu
              sed. Lectus ante ut in mattis ornare commodo nisi. Tortor
              tincidunt fames quam fusce convallis eget pulvinar.
            </p>

            <Button className="h-12 rounded-full bg-primary gap-2 hover:bg-secondary hover:text-white font-bold">
              Make Reservation
              <Calendar className="h-4 w-5" />
            </Button>
          </div>

          <div className="flex-1 flex flex-row gap-6 relative">
            <div className="flex flex-col gap-6">
              <div className="rounded-xl w-[220px] h-[260px] overflow-hidden">
                <Image
                  src="/assets/image/gallery-1.png"
                  alt="gallery 1"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="rounded-xl w-[220px] h-[190px] overflow-hidden">
                <Image
                  src="/assets/image/gallery-2.png"
                  alt="gallery 1"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="translate-y-20 rounded-xl w-[220px] h-[340px] overflow-hidden">
              <Image
                src="/assets/image/gallery-3.png"
                alt="gallery 1"
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute top-[195px] left-[160px]">
              <Telegram className="h-36 w-36 hover:rotate-12 transition-all cursor-pointer" />
            </div>
          </div>
        </div>
      </section>

      <section
        className="bg-white bg-cover bg-no-repeat bg-center px-[10rem] relative"
        id="search"
      >
        <div className="absolute -left-40 top-56">
          <div className="h-[10rem] w-[30rem] bg-gradient-to-r from-primary/100 to-primary/0 rotate-45"></div>
        </div>

        <div className="absolute right-0 top-[16rem]">
          <AirPlane className="w-[26rem] h-[26rem]" />
        </div>

        <div className="flex flex-row bg-white shadow-2xl rounded-full gap-6 px-6 py-6 mb-20">
          <Input
            className="h-12 flex-1 rounded-full text-black placeholder:text-black placeholder:font-bold border-primary/20 bg-white"
            placeholder="Type of Venue*"
          />
          <Input
            className="h-12 flex-1 rounded-full text-black placeholder:text-black placeholder:font-bold border-primary/20 bg-white"
            placeholder="Pick a Date*"
          />
          <Input
            className="h-12 flex-1 rounded-full text-black placeholder:text-black placeholder:font-bold border-primary/20 bg-white"
            placeholder="Zip Code*"
          />

          <Button className="rounded-full bg-primary h-12 gap-2 px-6 hover:bg-secondary hover:text-white font-bold">
            Search <ArrowRight className="w-6 h-6" />
          </Button>
        </div>

        <div className="flex flex-row gap-6 pb-12">
          <div className="flex-1 flex flex-row gap-6 items-center z-20">
            <div className="w-[300px] h-[460px] rounded-full overflow-hidden border-8 border-white shadow-lg">
              <Image
                src="/assets/image/gallery-4.png"
                alt="gallery 4"
                width={200}
                height={200}
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="flex flex-col gap-1 z-20">
              <div className="w-[180px] h-auto">
                <Image
                  src="/assets/image/gallery-6.png"
                  alt="gallery 4"
                  width={200}
                  height={200}
                  className="w-full h-full object-contain object-center"
                />
              </div>

              <div className="w-[150px] h-[230px] rounded-full overflow-hidden border-8 border-white shadow-lg">
                <Image
                  src="/assets/image/gallery-5.jpg"
                  alt="gallery 4"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
          <div className="flex-1">
            <h5 className="text-h5 font-sofia text-primary">Get About Us</h5>

            <h2 className="text-h2 font-space text-secondary font-semibold tracking-tighter leading-tight mb-4">
              More About Travelsy
            </h2>

            <p className="text-gray-3 mb-2">
              Amet cursus sit amet dictum. At erat pellentesque adipiscing
              commodo. Sit amet volutpat consequat mauris nunc congue nisi vitae
              suscipit. In arcu cursus euismod quis viverra nibh cras pulvinar.
              Vulputate eu sceler felis imperdiet proin fermentum. Arcu vitae
              elementum curabitur vitae nunc sed velit.
            </p>

            <p className="text-gray-3 mb-4">
              Rutrum quisque non tellus orci ac. Varius vel pharetra vel turpis
              nunc eget lorem dolor sed. Interdum posuere lorem ipsum dolor sit.
              Egestas maecenas pharetra convallis posuere morbi.
            </p>

            <ul className="text-black mb-8 flex flex-col gap-2">
              <li className="flex flex-row items-center text-wrap">
                <Send className="h-5 w-5 mr-1.5" />
                Donec adipiscing tristique risus nec feugiat in
              </li>
              <li className="flex flex-row items-center text-wrap">
                <Send className="h-5 w-5 mr-1.5" />
                Donec adipiscing tristique risus nec feugiat in
              </li>
              <li className="flex flex-row items-center text-wrap">
                <Send className="h-5 w-5 mr-1.5" />
                Donec adipiscing tristique risus nec feugiat in
              </li>
            </ul>

            <Button className="rounded-full bg-primary h-12 gap-2 px-6 hover:bg-secondary hover:text-white font-bold">
              Read More <ArrowRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </section>

      <section
        className="px-[10rem] bg-gradient-to-b from-primary/10 to-primary/0 pt-14 pb-32"
        id="top-destinations"
      >
        <div className="pb-10">
          <h6 className="text-h5 text-primary font-sofia text-center">
            Top Destinations
          </h6>

          <h2 className="text-center text-h2 font-space text-secondary font-semibold tracking-tighter leading-tight">
            Popular Hotels For Booking
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-8">
          <div className="h-full bg-white rounded-xl shadow-xl p-2.5">
            <div className="w-full h-auto overflow-hidden rounded-xl">
              <Image
                src="/assets/image/hotel-1.jpg"
                alt="hotel 1"
                width={200}
                height={200}
                className="w-full h-full object-contain object-center"
              />
            </div>

            <h4 className="text-h4 text-secondary font-space font-medium mt-2">
              Some Amazing Title Here
            </h4>

            <p className="text-gray-3 text-base mt-2 line-clamp-4">
              Lorem ipsum dolor sit amet, alina adipisci elite. Egestas
              elementum enim netus amet turpis lectus.
            </p>

            <div className="flex flex-row gap-4 mt-4">
              <div className="flex flex-row gap-2 items-center">
                <MapPinIcon className="text-primary h-4 w-4" stroke="#4691f2" />
                <span className="text-secondary font-semibold text-base">
                  Museums
                </span>
              </div>

              <div className="flex flex-row gap-2 items-center">
                <User className="text-primary h-4 w-4" />
                <span className="text-secondary font-semibold text-base">
                  12 Person Capacity
                </span>
              </div>
            </div>

            <div className="flex flex-row items-center justify-between mt-4 mb-2">
              <div className="text-secondary text-3xl font-semibold">
                $150/<span className="text-base font-semibold">Per Night</span>
              </div>

              <Button className="h-12 w-12 rounded-full bg-primary px-1 hover:bg-secondary">
                <ArrowRight className="h-8 w-8" />
              </Button>
            </div>
          </div>

          <div className="h-full bg-white rounded-xl shadow-xl p-2.5">
            <div className="w-full h-auto overflow-hidden rounded-xl">
              <Image
                src="/assets/image/hotel-2.jpg"
                alt="hotel 2"
                width={200}
                height={200}
                className="w-full h-full object-contain object-center"
              />
            </div>

            <h4 className="text-h4 text-secondary font-space font-medium mt-2">
              Some Amazing Title Here
            </h4>

            <p className="text-gray-3 text-base mt-2 line-clamp-4">
              Lorem ipsum dolor sit amet, alina adipisci elite. Egestas
              elementum enim netus amet turpis lectus.
            </p>

            <div className="flex flex-row gap-4 mt-4">
              <div className="flex flex-row gap-2 items-center">
                <MapPinIcon className="text-primary h-4 w-4" stroke="#4691f2" />
                <span className="text-secondary font-semibold text-base">
                  Museums
                </span>
              </div>

              <div className="flex flex-row gap-2 items-center">
                <User className="text-primary h-4 w-4" />
                <span className="text-secondary font-semibold text-base">
                  12 Person Capacity
                </span>
              </div>
            </div>

            <div className="flex flex-row items-center justify-between mt-4 mb-2">
              <div className="text-secondary text-3xl font-semibold">
                $250/<span className="text-base font-semibold">Per Night</span>
              </div>

              <Button className="h-12 w-12 rounded-full bg-primary px-1 hover:bg-secondary">
                <ArrowRight className="h-8 w-8" />
              </Button>
            </div>
          </div>

          <div className="h-full bg-white rounded-xl shadow-xl p-2.5">
            <div className="w-full h-auto overflow-hidden rounded-xl">
              <Image
                src="/assets/image/hotel-3.jpg"
                alt="hotel 3"
                width={200}
                height={200}
                className="w-full h-full object-contain object-center"
              />
            </div>

            <h4 className="text-h4 text-secondary font-space font-medium mt-2">
              Some Amazing Title Here
            </h4>

            <p className="text-gray-3 text-base mt-2 line-clamp-4">
              Lorem ipsum dolor sit amet, alina adipisci elite. Egestas
              elementum enim netus amet turpis lectus.
            </p>

            <div className="flex flex-row gap-4 mt-4">
              <div className="flex flex-row gap-2 items-center">
                <MapPinIcon className="text-primary h-4 w-4" stroke="#4691f2" />
                <span className="text-secondary font-semibold text-base">
                  Museums
                </span>
              </div>

              <div className="flex flex-row gap-2 items-center">
                <User className="text-primary h-4 w-4" />
                <span className="text-secondary font-semibold text-base">
                  12 Person Capacity
                </span>
              </div>
            </div>

            <div className="flex flex-row items-center justify-between mt-4 mb-2">
              <div className="text-secondary text-3xl font-semibold">
                $280/<span className="text-base font-semibold">Per Night</span>
              </div>

              <Button className="h-12 w-12 rounded-full bg-primary px-1 hover:bg-secondary">
                <ArrowRight className="h-8 w-8" />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <Button
            variant="default"
            className="bg-white shadow-xl rounded-l-full h-12 px-6"
          >
            <ArrowRight className="w-5 h-5 rotate-180" stroke="#4691f2" />
          </Button>

          <Button
            variant="default"
            className="bg-white shadow-xl rounded-r-full h-12 px-6"
          >
            <ArrowRight className="w-5 h-5" stroke="#4691f2" />
          </Button>
        </div>
      </section>

      <section
        className="px-[10rem] bg-gradient-to-b from-primary/10 to-primary/0 pt-14 pb-56"
        id="blogs"
      >
        <div className="pb-10">
          <h6 className="text-h5 text-primary font-sofia text-center">
            Latest News
          </h6>

          <h2 className="text-center text-h2 font-space text-secondary font-semibold tracking-tighter leading-tight">
            Read Latest Blogs
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-8">
          <div className="h-auto bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="w-full h-[14rem] rounded-t-xl">
              <Image
                src="/assets/image/blog-1.jpg"
                alt="blog 1"
                width={200}
                height={200}
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="flex flex-col justify-between p-4 h-[14rem]">
              <h4 className="text-h4 text-secondary font-space font-medium">
                Journeys Are Best Measured In New Friends
              </h4>

              <Link href="#" className="text-primary font-bold">
                Read More
              </Link>
            </div>
          </div>

          <div className="h-auto bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="w-full h-[14rem] rounded-t-xl">
              <Image
                src="/assets/image/blog-2.jpg"
                alt="blog 1"
                width={200}
                height={200}
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="flex flex-col justify-between p-4 h-[14rem]">
              <h4 className="text-h4 text-secondary font-space font-medium">
                A Lot Of Traveling Turns You Into A Storyteller
              </h4>

              <Link href="#" className="text-primary font-bold">
                Read More
              </Link>
            </div>
          </div>

          <div className="h-auto bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="w-full h-[14rem] rounded-t-xl">
              <Image
                src="/assets/image/blog-3.jpg"
                alt="blog 1"
                width={200}
                height={200}
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="flex flex-col justify-between p-4 h-[14rem]">
              <h4 className="text-h4 text-secondary font-space font-medium">
                Travel Makes One Modest And Opened To Ideas
              </h4>

              <Link href="#" className="text-primary font-bold">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="flex flex-col bg-gradient-to-b from-primary/10 to-primary/0 h-auto px-[10rem] pb-16 relative">
          <div className="flex flex-row items-center justify-between h-auto w-full bg-primary rounded-3xl -mt-[5rem] p-8">
            <h3 className="text-h3 max-w-[20rem] font-space leading-tight">
              Subscribe for Latest Newsletter
            </h3>

            <div className="flex flex-row gap-5">
              <Input
                className="h-12 bg-white rounded-full text-primary border-white placeholder:text-primary px-6 min-w-[24rem]"
                placeholder="Your Email Address"
              />

              <Button className="h-12 rounded-full bg-white text-primary font-bold px-8 hover:text-secondary">
                Subscribe
              </Button>
            </div>
          </div>

          <div className="flex flex-row pt-16 justify-between">
            <div className="w-1/4">
              <Link
                href="#"
                className="text-primary font-space font-medium text-5xl capitalize"
              >
                Travel<span className="text-black">sy</span>
              </Link>

              <p className="text-gray-3 mt-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>

              <div className="flex flex-row gap-3 items-center mt-6">
                <div
                  className="flex items-center justify-center h-8 w-8 rounded-full bg-primary p-1 cursor-pointer hover:bg-secondary"
                  title="Facebook"
                >
                  <Facebook className="h-full w-full" color="#ffffff" />
                </div>
                <div
                  className="flex items-center justify-center h-8 w-8 rounded-full bg-primary p-1 cursor-pointer hover:bg-secondary"
                  title="Twitter"
                >
                  <Twitter className="h-full w-full" color="#ffffff" />
                </div>
                <div
                  className="flex items-center justify-center h-8 w-8 rounded-full bg-primary p-1 cursor-pointer hover:bg-secondary"
                  title="Youtube"
                >
                  <Youtube className="h-full w-full" color="#ffffff" />
                </div>
                <div
                  className="flex items-center justify-center h-8 w-8 rounded-full bg-primary p-1.5 cursor-pointer hover:bg-secondary"
                  title="Instagram"
                >
                  <Instagram
                    className="h-full w-full translate-x-[1px]"
                    color="#ffffff"
                  />
                </div>
              </div>
            </div>

            <div>
              <h5 className="text-secondary text-h5 font-medium font-space">
                Quick Links
              </h5>

              <ul className="flex flex-col gap-3 text-gray-3 mt-4">
                <li>Home</li>
                <li>About Us</li>
                <li>Host A Venue</li>
                <li>Blog</li>
                <li>Hotel</li>
                <li>Contact Us</li>
              </ul>
            </div>

            <div>
              <h5 className="text-secondary text-h5 font-medium font-space">
                Get In Touch
              </h5>

              <div className="flex flex-col gap-3 text-gray-3 mt-4">
                <div className="flex flex-row items-center gap-2">
                  <div
                    className="flex items-center justify-center h-7 w-7 rounded-full bg-primary p-2 cursor-pointer hover:bg-secondary"
                    title="Youtube"
                  >
                    <Phone className="h-full w-full" color="#ffffff" />
                  </div>
                  <span className="">+1 1234567890</span>
                </div>

                <div className="flex flex-row items-center gap-2">
                  <div
                    className="flex items-center justify-center h-7 w-7 rounded-full bg-primary p-2 cursor-pointer hover:bg-secondary"
                    title="Youtube"
                  >
                    <Envelop className="h-full w-full" color="#ffffff" />
                  </div>
                  <span className="">example@gmail.com</span>
                </div>

                <div className="flex flex-row gap-2">
                  <div
                    className="flex items-center justify-center h-7 w-7 rounded-full bg-primary p-2 cursor-pointer hover:bg-secondary"
                    title="Youtube"
                  >
                    <MapPinIcon className="h-5 w-5" color="#ffffff" />
                  </div>

                  <span className="text-wrap max-w-[15rem]">
                    1014 N Main St, Miami, Oklahoma, 74354, United States
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h5 className="text-secondary text-h5 font-medium font-space">
                Follow Us On @instagram
              </h5>

              <div className="grid grid-cols-3 gap-2.5 mt-4">
                <div className="size-[6rem] bg-primary/50 rounded overflow-hidden">
                  <Image
                    src="/assets/image/instagram-1.jpg"
                    alt="intagram 1"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="size-[6rem] bg-primary/50 rounded overflow-hidden">
                  <Image
                    src="/assets/image/instagram-2.jpg"
                    alt="intagram 2"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="size-[6rem] bg-primary/50 rounded overflow-hidden">
                  <Image
                    src="/assets/image/instagram-3.jpg"
                    alt="intagram 1"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="size-[6rem] bg-primary/50 rounded overflow-hidden">
                  <Image
                    src="/assets/image/instagram-4.jpg"
                    alt="intagram 2"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="size-[6rem] bg-primary/50 rounded overflow-hidden">
                  <Image
                    src="/assets/image/instagram-5.jpg"
                    alt="intagram 2"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="size-[6rem] bg-primary/50 rounded overflow-hidden">
                  <Image
                    src="/assets/image/instagram-6.jpg"
                    alt="intagram 2"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-primary text-center py-3">
          © 2023 All rights reserved
        </div>
      </footer>
    </>
  );
};

export default TestTwo;
