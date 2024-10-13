export default function Testom() {
  return (
    <section className=" px-6   lg:px-8 sm:max-w-xl ">
      <figure>
        <figcaption className="mb-4">
          <img
            className="mx-auto h-20 w-20 rounded-full"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </figcaption>
        <blockquote className="text-center text-xl sm:text-xl sm:leading-9">
          <p>
            “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            expedita voluptas culpa sapiente alias molestiae. Numquam corrupti
            in laborum sed rerum et corporis.”
          </p>
          <div className="mt-4 flex items-center justify-center space-x-3 text-base">
            <div className="font-semibold ">Judith Black</div>
            <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true">
              <circle cx={1} cy={1} r={1} />
            </svg>
            <div className="text-gray-600">CEO of Workcation</div>
          </div>
        </blockquote>
      </figure>
    </section>
  );
}
