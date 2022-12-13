function FormWrapper({ id, children }) {
  return (
    <form id={id}>
      <div className="border-2 border-accent p-1">
        <div className="rounded-2xl border border-accent bg-secondary py-6 px-2">
          {children}
        </div>
      </div>
    </form>
  );
}

export default FormWrapper;
