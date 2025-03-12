function NavButton({ content, isActive }) {
  return (
    <button
      type="button"
      className={`py-2 px-4 font-medium rounded-full hover:bg-rose-600 hover:bg-opacity-10 ${
        isActive && "text-orange-600"
      }`}
    >
      {content}
    </button>
  )
}

export default NavButton
