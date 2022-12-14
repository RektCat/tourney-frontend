function FormWrapper({ id, children }) {
  return (
    <form id={id}>
      <div className="border-2 border-accent p-1">
        <div className="rounded-2xl border border-accent bg-secondary py-4 px-1 md:py-6 md:px-2">
          {children}
        </div>
      </div>
      <button id={id + "submit"} className="hidden appearance-none">
        invisible submit
      </button>
    </form>
  );
}

export default FormWrapper;
