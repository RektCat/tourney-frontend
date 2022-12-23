import { FormEvent, HTMLProps, PropsWithChildren } from "react";

function FormWrapper({ id, children, onSubmit = () => {} }: PropsWithChildren<HTMLProps<HTMLFormElement>>) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(e);
  };

  return (
    <form id={id} onSubmit={handleSubmit}>
      <div className="border-2 border-accent p-1">
        <div className="rounded-t-2xl border border-accent bg-secondary pt-4 md:pt-6">{children}</div>
      </div>
      <button id={id + "submit"} className="hidden appearance-none">
        invisible submit
      </button>
    </form>
  );
}

export default FormWrapper;
