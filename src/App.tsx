import { Login } from "@navikt/ds-icons";
import { Button, Modal } from "@navikt/ds-react";
import { useState } from "react";
import LoginForm from "./LoginForm";

function App() {
  const [openLogin, setOpenLogin] = useState(false);

  return (
    <div className="bg-gray-50 w-screen h-screen grid place-content-center">
      <Button onClick={() => setOpenLogin(true)} variant="secondary">
        <Login aria-hidden /> Logg inn
      </Button>
      <Modal
        className="w-full max-w-xl"
        open={openLogin}
        onClose={() => null}
        shouldCloseOnOverlayClick={false}
        closeButton={false}
      >
        <Modal.Content className="p-6 w-full">
          <LoginForm onClose={() => setOpenLogin(false)} />
        </Modal.Content>
      </Modal>
    </div>
  );
}

export default App;
