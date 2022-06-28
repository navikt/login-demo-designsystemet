import { Login } from "@navikt/ds-icons";
import { Button, Modal } from "@navikt/ds-react";
import { useState } from "react";
import LoginForm from "./LoginForm";

function App() {
  /* Håndterer åpen-state for Modal */
  const [openLogin, setOpenLogin] = useState(false);

  return (
    <div className="bg-gray-50 w-screen h-screen grid place-content-center">
      {/* Knapp med login-ikon */}
      <Button onClick={() => setOpenLogin(true)} variant="secondary">
        <Login aria-hidden /> Logg inn
      </Button>

      {/* Modal uten lukkeknapp og mulighet til å lukkes  */}
      <Modal
        className="w-full max-w-xl"
        open={openLogin}
        onClose={() => setOpenLogin(false)}
        shouldCloseOnOverlayClick={false}
        closeButton={false}
      >
        <Modal.Content className="p-6 w-full">
          {/* Importert skjema-komposisjon */}
          <LoginForm onClose={() => setOpenLogin(false)} />
        </Modal.Content>
      </Modal>
    </div>
  );
}

export default App;
