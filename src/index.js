import React from "react";
import { render } from "react-dom";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import ImageText from "./image-text/image-text";
import slides from "./slides";
import BookReview from "./book-review/book-review";
import Calendar from "./calendar/calendar";
import Contacts from "./contacts/contacts";
import MeetingRoomSchedule from "./meeting-room-schedule/meeting-room-schedule";
import Poster from "./poster/poster";
import Quote from "./quote/quote";
import RSS from "./rss/rss";
import Slideshow from "./slideshow/slideshow";
import Sparkle from "./sparkle/sparkle";
import IFrame from "./iframe/iframe";
import Table from "./table/table";
import GlobalStyles from "./GlobalStyles";

const renderSlide = (slide) => {
  switch (slide.type) {
    case "book-review":
      return (
        <BookReview
          content={slide.content}
          slide={slide}
          run
          slideDone={() => {}}
        />
      );
    case "calendar":
      return (
        <Calendar
          content={slide.content}
          slide={slide}
          run
          slideDone={() => {}}
        />
      );
    case "contacts":
      return (
        <Contacts
          content={slide.content}
          slide={slide}
          run
          slideDone={() => {}}
        />
      );
    case "image-text":
      return (
        <ImageText
          content={slide.content}
          slide={slide}
          run
          slideDone={() => {}}
        />
      );
    case "iframe":
      return (
        <IFrame
          content={slide.content}
          slide={slide}
          run
          slideDone={() => {}}
        />
      );
    case "meeting-room-schedule":
      return (
        <MeetingRoomSchedule
          content={slide.content}
          slide={slide}
          run
          slideDone={() => {}}
        />
      );
    case "poster":
      return (
        <Poster
          content={slide.content}
          slide={slide}
          run
          slideDone={() => {}}
        />
      );
    case "quote":
      return (
        <Quote content={slide.content} slide={slide} run slideDone={() => {}} />
      );
    case "rss":
      return (
        <RSS content={slide.content} slide={slide} run slideDone={() => {}} />
      );
    case "slideshow":
      return (
        <Slideshow
          content={slide.content}
          slide={slide}
          run
          slideDone={() => {}}
        />
      );
    case "sparkle":
      return (
        <Sparkle
          content={slide.content}
          slide={slide}
          run
          slideDone={() => {}}
        />
      );
    case "table":
      return (
        <Table content={slide.content} slide={slide} run slideDone={() => {}} />
      );
    default:
      return <div>Slide type not found!</div>;
  }
};

const Slide = () => {
  const { slideId } = useParams();

  const selectedSlide = slides.find((slide) => slide.id === slideId);

  return <div>{selectedSlide && <div>{renderSlide(selectedSlide)}</div>}</div>;
};

const Overview = () => {
  return (
    <>
      <h1>Examples</h1>

      <ul>
        {slides.map((slide) => (
          <li key={slide.id} id={slide.id}>
            <Link to={`/${slide.id}`}>{slide.id}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:slideId" element={<Slide />} />
        <Route index element={<Overview />} />
      </Routes>

      <GlobalStyles />
    </BrowserRouter>
  );
};

render(<App />, document.getElementById("root"));
