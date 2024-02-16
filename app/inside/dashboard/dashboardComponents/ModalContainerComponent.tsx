import AddListing from "../add/AddComponents/AddListingComponent";

function ModalContainer({ onClick }: { onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="fixed w-full top-0 left-0 bg-black/20 flex justify-center items-center"
    >
      <AddListing />
    </div>
  );
}

export default ModalContainer;
