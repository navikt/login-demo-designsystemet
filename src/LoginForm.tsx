import { BodyShort, Button, Heading, TextField } from "@navikt/ds-react";

const LoginForm = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="grid gap-8">
      <div>
        <Heading size="xlarge" level="1" spacing>
          Logg inn
        </Heading>
        <BodyShort>
          Boscka! I have come for the bounty on this Wookiee. Oh, no! Chewbacca!
          At last we have the mighty Chewbacca.
        </BodyShort>
      </div>
      <div className="grid gap-6">
        <TextField label="E-post" htmlSize={35} />
        <TextField label="Passord" type="password" htmlSize={35} />
      </div>
      <div className="flex justify-items-start gap-6">
        <Button onClick={() => onClose()}>Logg inn</Button>
        <Button onClick={() => onClose()} variant="secondary">
          Avbryt
        </Button>
      </div>
    </div>
  );
};

export default LoginForm;
