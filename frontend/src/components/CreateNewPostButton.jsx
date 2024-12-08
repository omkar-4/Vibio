import { useState } from "react";
import CreateNewPostOverlay from "./CreateNewPostOverlay";
import { IoMdCreate } from "react-icons/io";

function CreateNewPostButton() {
  const [showForm, setShowForm] = useState(false);

  return (
    <section className="fixed bottom-20 right-5">
      <button className="w-14 h-14 bg-[#f2f2f2] bg-opacity-80 rounded-full text-black-text font-bold text-2xl flex items-center justify-center" onClick={() => setShowForm(!showForm)}>
      <IoMdCreate />
      </button>
      {showForm && <CreateNewPostOverlay setShowForm={setShowForm} />}
    </section>
  );
}

export default CreateNewPostButton;
