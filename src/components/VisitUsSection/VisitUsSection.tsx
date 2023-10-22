/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import ArticleTitle from "../Headers/ArticleTitle";
import BusinessHours from "./BusinessHours";
import Container from "../Layouts/Container";
import SectionTitle from "../Headers/SectionTitle";
import Section from "../Layouts/Section";
import { hours } from "../../../DUMMY_DATA";
import { PhoneIcon } from "@heroicons/react/24/solid";

function VisitUsSection() {
  return (
    <Section id={"visit-us"}>
      <SectionTitle title="Visit Us" slogan="Simplicity & Excellence" />
      <Container>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <article className="flex h-full flex-col justify-between gap-4">
            <ArticleTitle title="Business Hours" />
            <div className="flex flex-col gap-4">
              <BusinessHours
                days={{
                  start: hours.weekdays.days.start,
                  end: hours.weekends.days.end,
                }}
                afternoonTime={{
                  start: hours.weekdays.afternoon.start,
                  end: hours.weekdays.afternoon.end,
                }}
                eveningTime={{
                  start: hours.weekdays.evening.start,
                  end: hours.weekdays.evening.end,
                }}
              />
              <BusinessHours
                days={{
                  start: hours.weekends.days.start,
                  end: hours.weekends.days.end,
                }}
                afternoonTime={{
                  start: hours.weekends.afternoon.start,
                  end: hours.weekends.afternoon.end,
                }}
                eveningTime={{
                  start: hours.weekends.evening.start,
                  end: hours.weekends.evening.end,
                }}
              />
            </div>
            <p>
              {
                "The opening and closing hours are subject to change according to public holidays and special circumstances."
              }
            </p>
          </article>
          <article className="flex flex-col gap-4">
            <ArticleTitle title="Reservations" />
            <div className="flex h-full flex-col gap-4">
              <p>
                {
                  "You may reserve specific tables if you're familiar with our layout or leave it to our recommendation. We do not accept bookings for private events."
                }
              </p>
              <div className="flex flex-col gap-4 rounded-2xl bg-darker p-4 shadow shadow-black">
                <p>Call us to make a reservation.</p>
                <a
                  className="group group flex items-center gap-4"
                  href="tel:+880-1000-654-321"
                >
                  <PhoneIcon className="w-4 transition duration-300 group-hover:text-brand group-hover:transition" />
                  <span className="transition duration-300 group-hover:text-brand group-hover:transition">
                    +880-1000-654-321
                  </span>
                </a>
              </div>
            </div>
          </article>
          <article className="flex flex-col gap-4">
            <ArticleTitle title="Online Delivery" />
            <div className="flex h-full flex-col gap-4">
              <p>
                {
                  "To maintain our quality of food and service, we do not offer third-party delivery services. We deliver food through our own service."
                }
              </p>
              <div className="flex flex-col gap-4 rounded-2xl bg-darker p-4 shadow shadow-black">
                <p>Call us to place your order.</p>
                <a
                  className="group group flex items-center gap-4"
                  href="tel:+880-1000-654-321"
                >
                  <PhoneIcon className="w-4 transition duration-300 group-hover:text-brand group-hover:transition" />
                  <span className="transition duration-300 group-hover:text-brand group-hover:transition">
                    +880-1000-654-321
                  </span>
                </a>
              </div>
            </div>
          </article>
          <article className="flex flex-col gap-4">
            <ArticleTitle title="Location" />
            <div className="flex h-full flex-col justify-between gap-4">
              <address>
                <p>11-9/J, Gulshan Avenue, Dhaka-1212, Bangladesh</p>
              </address>
              <Link
                href="https://goo.gl/maps/PYjCA6tYbQKhw2t37"
                passHref={true}
              >
                <img
                  className="rounded-2xl opacity-90 transition duration-300 hover:opacity-100 hover:transition"
                  src="/assets/images/map.png"
                  alt="A map of Ukiyo's location"
                />
              </Link>
            </div>
          </article>
        </div>
      </Container>
    </Section>
  );
}

export default VisitUsSection;
