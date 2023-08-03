export default function MessageSubmitBtn({ sendMessage }) {
  return (
    <button
      type="submit"
      className="py-3 px-5 text-sm font-normal text-center text-white rounded-lg bg-[#0c75ca] sm:w-fit hover:bg-[#2f4eff] focus:ring-4 focus:outline-none focus:ring-primary-300 shadow-[4px_4px_8px_rgba(0,0,0,0.6)] dark:bg-[#2f4eff] dark:hover:bg-[#0c75ca]"
    >
      {sendMessage}
    </button>
  );
}
