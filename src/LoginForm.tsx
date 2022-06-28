import { BodyShort, Button, Heading, TextField } from "@navikt/ds-react";

const LoginForm = ({ onClose }: { onClose: () => void }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    /* Håndter Login her! */
  };

  return (
    <div className="grid gap-8">
      {/* Tittel og beskrivelse */}
      <div>
        <Heading size="xlarge" level="1" spacing>
          Logg inn
        </Heading>
        <BodyShort>
          Boscka! I have come for the bounty on this Wookiee. Oh, no! Chewbacca!
          At last we have the mighty Chewbacca.
        </BodyShort>
      </div>
      <form onSubmit={(e) => handleSubmit(e)}>
        {/* Input-felter */}
        <div className="grid gap-6">
          <TextField label="E-post" htmlSize={35} />
          <TextField label="Passord" type="password" htmlSize={16} />
        </div>
        {/* Innsendings-knapper */}
        <div className="flex justify-items-start gap-6 mt-8">
          <Button type="submit" onClick={() => onClose()}>
            Logg inn
          </Button>
          <Button onClick={() => onClose()} variant="secondary">
            Avbryt
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
