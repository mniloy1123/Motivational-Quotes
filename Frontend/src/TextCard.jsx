// eslint-disable-next-line react/prop-types
export default function TextCard({ text }) {
  return (
    <a className="block max-w-sm mt-4 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {text}
      </p>
    </a>

  );
}
