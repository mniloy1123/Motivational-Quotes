export default function QuoteForm() {
  return (
    <div className="col-span-full">
      <label
        htmlFor="about"
        className="block text-lg my-4 font-medium leading-6 text-white-900"
      >
        New Quote
      </label>
      <div className="mt-2">
        <textarea
          id="about"
          name="about"
          rows="3"
          className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        ></textarea>
      </div>
      <button
        type="submit" // Change to submit if it's meant to submit a form.
        className="rounded-md bg-white mt-4 px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-none active:bg-gray-100">
        Submit
      </button>

      <p className="mt-3 text-m leading-6 text-rose-400">
        Give us something motivational.
      </p>
    </div>
  );
}
