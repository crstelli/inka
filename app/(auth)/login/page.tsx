import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function page() {
  return (
    <form>
      <Card>
        <CardContent className="gap-6 flex flex-col">
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input id="email" />
          </Field>
          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <Input id="email" />
          </Field>
          <Field>
            <Button type="submit">Login</Button>
          </Field>
        </CardContent>
      </Card>
    </form>
  );
}
