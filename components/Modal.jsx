import { useRecoilState } from "recoil";
import { modalState } from "../atoms/ModalAtom";

function Modal() {
  const [open, setOpen] = useRecoilState(modalState);
  return (
    <div>
      <h1>Modal</h1>
      {open && <h2>Open!!!!!</h2>}
    </div>
  );
}

export default Modal;
