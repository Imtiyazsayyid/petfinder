import Navbar from "./components/ClientNavbar";
import ExpandableText from "./components/ExpandableText";

export default function Home() {
  const featuredPets = [
    {
      id: 1,
      petName: "Jack",
      petDescription:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velfugiat hic similique velit voluptatem consequuntur eligendirepellat dolor illum enim, dicta rerum suscipit accusamusdignissimos saepe non. Quam, harum animi.",
      petImage:
        "https://images.pexels.com/photos/3299905/pexels-photo-3299905.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 2,
      petName: "Rob",
      petDescription:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velfugiat hic similique velit voluptatem consequuntur eligendirepellat dolor illum enim, dicta rerum suscipit accusamusdignissimos saepe non. Quam, harum animi.",
      petImage:
        "https://images.pexels.com/photos/825949/pexels-photo-825949.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 3,
      petName: "Cookie",
      petDescription:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velfugiat hic similique velit voluptatem consequuntur eligendirepellat dolor illum enim, dicta rerum suscipit accusamusdignissimos saepe non. Quam, harum animi.",
      petImage:
        "https://images.pexels.com/photos/3198001/pexels-photo-3198001.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  return (
    <main className="text-2xl font-bold">
      {/* Welcome Section */}
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-2xl">
            <h1 className="mb-5 text-5xl font-bold font-title ">PetFinder</h1>
            <p className="mb-5">
              A platform to find lovable pets waiting for a forever home.
            </p>
            <button className="btn btn-primary">Start Here</button>
          </div>
        </div>
      </div>
      {/* Card Section */}
      <div className="min-h-screen p-5 py-20 md:p-5 flex flex-col justify-center">
        <h1 className="text-5xl text-center font-title mb-12 font-bold">
          Featured Pets
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:px-10">
          {featuredPets.map((pet) => (
            <div className="card w-full shadow-md h-fit transition-all bg-slate-100">
              <figure className="h-80">
                <img
                  src={pet.petImage}
                  alt="car!"
                  className="h-full w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title font-title text-base-100">
                  {pet.petName}
                </h2>
                <ExpandableText className="text-sm font-normal text-slate-500 mb-5">
                  {pet.petDescription}
                </ExpandableText>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Adopt Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* About us*/}
      <div className="min-h-screen bg-slate-200 grid grid-cols-1 md:grid-cols-2 gap-3 py-32 md:p-32">
        <div className="carousel carousel-center w-full px-20 mb-10 h-96 md:h-full space-x-4 md:bg-slate-300 md:shadow-lg md:rounded-box md:p-3">
          <div className="carousel-item w-full" data-active="false">
            <img
              src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800"
              className="rounded-box object-cover"
            />
          </div>
          <div className="carousel-item w-full" data-active="true">
            <img
              src="https://images.pexels.com/photos/10159624/pexels-photo-10159624.jpeg?auto=compress&cs=tinysrgb&w=800"
              className="rounded-box object-cover"
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <h1 className="font-title font-bold text-base-100 w-2/3 text-5xl md:text-7xl text-center md:text-left">
            With <span className="text-primary">200+</span> Successful Adoptions
            in good homes.
          </h1>
        </div>
      </div>

      {/* Steps  */}
      <div
        className="hero"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.pexels.com/photos/4560119/pexels-photo-4560119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
        }}
      >
        <div className="grid grid-cols-1 min-h-screen pt-32 mb-20 px-10 w-full gap-20">
          <div className="h-full flex justify-center">
            <ul className="steps steps-horizontal h-fit md:w-2/3 text-xs">
              <li className="step step-primary">Register</li>
              <li className="step step-primary">Find Your Companion</li>
              <li className="step step-primary">Confirm</li>
              <li className="step step-primary">Take home your new pal.</li>
            </ul>
          </div>
          <h1 className="font-title font-bold text-5xl text-center">
            It Is That Easy.
          </h1>
          <div className="h-fit flex justify-center items-center p-10">
            <button className="btn btn-primary w-80">Lets Start Step 1</button>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-base-100 py-20 px-5 md:p-32">
        <h1 className="text-2xl md:text-7xl font-bold font-title text-center mb-20">
          Why Choose Us?
        </h1>
        <div className="flex gap-10 flex-col">
          <div className="flex justify-between">
            <div className="w-1/2 p-5 shadow-lg bg-neutral rounded-lg">
              <p className="font-normal text-sm">
                At PetFinder, we're more than just a platform for finding your
                perfect pet companion. We're your partners in making a
                difference in the lives of both animals and humans.
              </p>
            </div>
            <div>
              <button className="btn btn-primary">Find Out More</button>
            </div>
          </div>
          <div className="mx-auto w-1/2 p-5 shadow-lg bg-neutral rounded-lg">
            <p className="font-normal text-sm">
              Our team is driven by a shared passion for animals. We prioritize
              the well-being of our furry friends, ensuring they receive the
              love and care they deserve before finding their forever homes.
            </p>
          </div>
          <div className="ml-auto w-1/2 shadow-lg bg-neutral rounded-lg p-5">
            <p className="font-normal text-sm">
              Join a thriving community of pet lovers and adopters who share
              your enthusiasm. Our network provides resources, advice, and a
              support system to help you every step of the way.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
