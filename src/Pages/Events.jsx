import EventCard from "../Components/EventCard";

function Events() {
  return (
    <div className="pt-20">
      <h1 className="text-5xl font-bold text-center">Event page</h1>
      <p className="text-center my-5">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam expedita
        illum commodi eos qui voluptatibus cupiditate excepturi tenetur magnam,
        dicta quos non voluptatem et repellendus modi saepe aliquam sunt nulla
        obcaecati a, hic similique accusamus! Atque maxime adipisci facilis
        totam hic magni ullam fuga! Blanditiis recusandae vero ea, doloribus
        sunt ad totam quam aperiam nulla quos dolor nemo sit iste ipsum
        perferendis aliquid dicta. Hic eum voluptates deserunt consectetur,
        beatae excepturi asperiores qui aspernatur velit cupiditate natus unde
        nemo dolorem recusandae dolor commodi illum? Aut eos est deleniti
        quidem, quis error consequuntur, magni vitae aliquid mollitia fugit,
        laborum quia earum!
      </p>
      <div className="grid grid-cols-3 gap-6 px-12">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  );
}

export default Events;
